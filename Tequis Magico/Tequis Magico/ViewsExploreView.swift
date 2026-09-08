//
//  ExploreView.swift
//  Tequis Magico
//
//  Created by Bernardo Ramírez on 02/09/2026.
//

import SwiftUI
import SwiftData

struct ExploreView: View {
    @Environment(\.modelContext) private var modelContext
    @Query private var places: [Place]
    
    @State private var searchText = ""
    @State private var selectedCategory: PlaceCategory?
    
    var filteredPlaces: [Place] {
        var result = places.filter { $0.isActive }
        
        if let category = selectedCategory {
            result = result.filter { $0.category == category }
        }
        
        if !searchText.isEmpty {
            result = result.filter { 
                $0.name.localizedCaseInsensitiveContains(searchText) ||
                $0.shortDescription.localizedCaseInsensitiveContains(searchText) ||
                $0.address.localizedCaseInsensitiveContains(searchText)
            }
        }
        
        return result
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
                            }
                        }
                        .padding(.horizontal)
                    }
                }
                .padding(.vertical)
            }
            .navigationTitle("Explorar")
            .searchable(text: $searchText, prompt: "Buscar lugares...")
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
