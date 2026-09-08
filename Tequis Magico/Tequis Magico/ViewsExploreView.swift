//
//  ExploreView.swift
//  Tequis Magico
//
//  Created by Bernardo Ramírez on 02/09/2026.
//

import SwiftUI
import SwiftData

/// Últimas búsquedas del usuario, guardadas en UserDefaults (más reciente primero, sin duplicados).
enum SearchHistory {
    private static let key = "explore.searchHistory"
    private static let limit = 5

    static func load() -> [String] {
        UserDefaults.standard.stringArray(forKey: key) ?? []
    }

    static func add(_ term: String, to history: [String]) -> [String] {
        var updated = history.filter { $0.lowercased() != term.lowercased() }
        updated.insert(term, at: 0)
        updated = Array(updated.prefix(limit))
        UserDefaults.standard.set(updated, forKey: key)
        return updated
    }
}

struct ExploreView: View {
    @Environment(\.modelContext) private var modelContext
    @Query private var places: [Place]

    @State private var searchText = ""
    @State private var selectedCategory: PlaceCategory?
    @State private var searchHistory: [String] = SearchHistory.load()

    var filteredPlaces: [Place] {
        var result = places.filter { $0.isActive }

        if let category = selectedCategory {
            result = result.filter { $0.category == category }
        }

        if !searchText.isEmpty {
            result = result.filter {
                $0.name.localizedCaseInsensitiveContains(searchText) ||
                $0.shortDescription.localizedCaseInsensitiveContains(searchText) ||
                $0.address.localizedCaseInsensitiveContains(searchText) ||
                $0.tags.contains { $0.localizedCaseInsensitiveContains(searchText) }
            }
        }

        return result
    }

    /// Nombres/tags que empiezan con lo escrito, para autocompletar mientras se teclea.
    var searchSuggestions: [String] {
        guard !searchText.isEmpty else { return [] }
        var suggestions = Set<String>()
        for place in places {
            if place.name.localizedCaseInsensitiveContains(searchText) {
                suggestions.insert(place.name)
            }
            for tag in place.tags where tag.localizedCaseInsensitiveContains(searchText) {
                suggestions.insert(tag)
            }
        }
        return Array(suggestions).sorted().prefix(6).map { $0 }
    }

    private func commitSearch(_ text: String) {
        searchText = text
        guard !text.isEmpty else { return }
        searchHistory = SearchHistory.add(text, to: searchHistory)
    }
    
    var body: some View {
        NavigationStack {
            ScrollView {
                VStack(spacing: 20) {
                    // MARK: - Categorías
                    ScrollView(.horizontal, showsIndicators: false) {
                        HStack(spacing: 12) {
                            ForEach(PlaceCategory.allCases, id: \.self) { category in
                                CategoryCard(category: category)
                                    .onTapGesture {
                                        selectedCategory = category
                                    }
                            }
                        }
                        .padding(.horizontal)
                    }

                    // MARK: - Rutas Temáticas
                    ThematicRoutesSection()

                    // MARK: - Lista de Lugares
                    if filteredPlaces.isEmpty {
                        ContentUnavailableView(
                            "No hay lugares",
                            systemImage: "map",
                            description: Text("No se encontraron lugares con los filtros seleccionados")
                        )
                        .padding(.top, 100)
                    } else {
                        LazyVStack(spacing: 16) {
                            ForEach(filteredPlaces, id: \.id) { place in
                                NavigationLink {
                                    PlaceDetailView(place: place)
                                } label: {
                                    PlaceCard(place: place)
                                }
                                .buttonStyle(.plain)
                                .transition(.opacity)
                            }
                        }
                        .padding(.horizontal)
                    }
                }
                .animation(.easeInOut(duration: 0.2), value: filteredPlaces.map(\.id))
                .padding(.vertical)
            }
            .refreshable {
                await SyncService.syncPlaces(existing: places, into: modelContext)
            }
            .navigationTitle("Explorar")
            .searchable(text: $searchText, prompt: "Buscar lugares...")
            .searchSuggestions {
                if searchText.isEmpty {
                    ForEach(searchHistory, id: \.self) { term in
                        Label(term, systemImage: "clock")
                            .searchCompletion(term)
                    }
                } else {
                    ForEach(searchSuggestions, id: \.self) { suggestion in
                        Text(suggestion)
                            .searchCompletion(suggestion)
                    }
                }
            }
            .onSubmit(of: .search) {
                commitSearch(searchText)
            }
            .toolbar {
                if selectedCategory != nil {
                    ToolbarItem(placement: .topBarTrailing) {
                        Button("Limpiar filtros") {
                            selectedCategory = nil
                        }
                    }
                }
            }
        }
    }
}

// MARK: - Category Card
struct CategoryCard: View {
    let category: PlaceCategory
    
    var body: some View {
        VStack(spacing: 8) {
            ZStack {
                Circle()
                    .fill(category.color.gradient)
                    .frame(width: 70, height: 70)
                
                Image(systemName: category.icon)
                    .font(.system(size: 28))
                    .foregroundStyle(.white)
            }
            
            Text(category.rawValue)
                .font(.caption)
                .fontWeight(.medium)
                .multilineTextAlignment(.center)
                .frame(width: 80)
        }
    }
}

// MARK: - Place Card
struct PlaceCard: View {
    let place: Place
    
    var body: some View {
        HStack(spacing: 12) {
            // Imagen
            Group {
                if let thumbnailURL = place.thumbnailURL {
                    AsyncImage(url: URL(string: thumbnailURL)) { image in
                        image
                            .resizable()
                            .aspectRatio(contentMode: .fill)
                    } placeholder: {
                        Rectangle()
                            .fill(place.category.color.opacity(0.3))
                            .overlay {
                                ProgressView()
                            }
                    }
                } else {
                    Rectangle()
                        .fill(place.category.color.gradient)
                        .overlay {
                            Image(systemName: place.category.icon)
                                .font(.system(size: 30))
                                .foregroundStyle(.white.opacity(0.5))
                        }
                }
            }
            .frame(width: 80, height: 80)
            .clipShape(RoundedRectangle(cornerRadius: 12))
            
            // Info
            VStack(alignment: .leading, spacing: 6) {
                Text(place.name)
                    .font(.headline)
                    .foregroundStyle(.primary)
                    .lineLimit(1)
                
                Text(place.shortDescription)
                    .font(.subheadline)
                    .foregroundStyle(.secondary)
                    .lineLimit(2)
                
                HStack(spacing: 12) {
                    // Rating
                    if place.rating > 0 {
                        HStack(spacing: 3) {
                            Image(systemName: "star.fill")
                                .font(.caption2)
                                .foregroundStyle(.yellow)
                            Text(String(format: "%.1f", place.rating))
                                .font(.caption)
                                .foregroundStyle(.secondary)
                        }
                    }
                    
                    // Precio
                    Text(place.priceRange.rawValue)
                        .font(.caption)
                        .foregroundStyle(.secondary)
                    
                    Spacer()
                    
                    // Badge premium
                    if place.isPremiumBusiness {
                        Image(systemName: "star.circle.fill")
                            .font(.caption)
                            .foregroundStyle(.yellow)
                    }
                }
            }
            
            Spacer()
            
            Image(systemName: "chevron.right")
                .font(.caption)
                .foregroundStyle(.secondary)
        }
        .padding(12)
        .background(Color(.systemBackground))
        .clipShape(RoundedRectangle(cornerRadius: 16))
        .shadow(color: .black.opacity(0.05), radius: 8, x: 0, y: 2)
    }
}

#Preview {
    ExploreView()
        .modelContainer(for: [Place.self], inMemory: true)
}
