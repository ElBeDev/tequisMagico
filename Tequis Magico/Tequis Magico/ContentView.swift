//
//  ContentView.swift
//  Tequis Magico
//
//  Created by Bernardo Ramírez on 02/09/2026.
//

import SwiftUI
import SwiftData

struct ContentView: View {
    @Environment(\.modelContext) private var modelContext
    @Query private var places: [Place]
    @Query private var events: [Event]

    @State private var selectedTab = 0
    @State private var isFirstSync = true
    @State private var offlineBannerMessage: String?
    @State private var deepLinkedPlace: Place?

    var body: some View {
        ZStack(alignment: .top) {
            TabView(selection: $selectedTab) {
                // MARK: - Tab 1: Inicio (Mapa)
                MapView()
                    .tabItem {
                        Label("Inicio", systemImage: "map.fill")
                    }
                    .tag(0)

                // MARK: - Tab 2: Explorar
                ExploreView()
                    .tabItem {
                        Label("Explorar", systemImage: "square.grid.2x2.fill")
                    }
                    .tag(1)

                // MARK: - Tab 3: Eventos
                EventsView()
                    .tabItem {
                        Label("Eventos", systemImage: "calendar")
                    }
                    .tag(2)

                // MARK: - Tab 4: Favoritos
                FavoritesView()
                    .tabItem {
                        Label("Favoritos", systemImage: "heart.fill")
                    }
                    .tag(3)

                // MARK: - Tab 5: Perfil
                ProfileView()
                    .tabItem {
                        Label("Perfil", systemImage: "person.fill")
                    }
                    .tag(4)
            }
            .tint(.orange) // Color temático de Tequisquiapan

            if showLoadingOverlay {
                Color(.systemBackground)
                VStack(spacing: 12) {
                    ProgressView()
                    Text("Cargando Tequisquiapan...")
                        .font(.subheadline)
                        .foregroundStyle(.secondary)
                }
                .transition(.opacity)
            }

            if let message = offlineBannerMessage {
                OfflineBanner(message: message) {
                    withAnimation { offlineBannerMessage = nil }
                }
                .padding(.top, 8)
                .transition(.move(edge: .top).combined(with: .opacity))
                .zIndex(1)
            }
        }
        .animation(.easeInOut, value: showLoadingOverlay)
        .task {
            let placesOK = await SyncService.syncPlaces(existing: places, into: modelContext)
            if !placesOK && places.isEmpty {
                for place in SeedData.createAllPlaces() {
                    modelContext.insert(place)
                }
                try? modelContext.save()
            }

            let eventsOK = await SyncService.syncEvents(existing: events, into: modelContext)
            if !eventsOK && events.isEmpty {
                for event in SeedData.createAllEvents() {
                    modelContext.insert(event)
                }
                try? modelContext.save()
            }

            if isFirstSync && (!placesOK || !eventsOK) {
                withAnimation { offlineBannerMessage = "Sin conexión con el panel — mostrando datos guardados" }
            }
            isFirstSync = false
        }
        .onOpenURL { url in
            handleDeepLink(url)
        }
        .sheet(item: $deepLinkedPlace) { place in
            PlaceDetailSheet(place: place)
                .presentationDetents([.medium, .large])
                .presentationDragIndicator(.visible)
        }
    }

    private var showLoadingOverlay: Bool {
        isFirstSync && places.isEmpty && events.isEmpty
    }

    // MARK: - Deep Links (tequismagico://place/<uuid>)
    private func handleDeepLink(_ url: URL) {
        guard url.scheme == "tequismagico", url.host == "place" else { return }
        let idString = url.pathComponents.last(where: { $0 != "/" }) ?? ""
        guard let id = UUID(uuidString: idString) else { return }
        deepLinkedPlace = places.first { $0.id == id }
    }
}

// MARK: - Banner de "sin conexión"
private struct OfflineBanner: View {
    let message: String
    let onDismiss: () -> Void

    var body: some View {
        HStack(spacing: 8) {
            Image(systemName: "wifi.slash")
            Text(message)
                .font(.footnote)
                .fontWeight(.medium)
            Spacer()
            Button(action: onDismiss) {
                Image(systemName: "xmark")
                    .font(.caption)
            }
        }
        .padding(.horizontal, 14)
        .padding(.vertical, 10)
        .background(.orange, in: Capsule())
        .foregroundStyle(.white)
        .padding(.horizontal)
        .shadow(color: .black.opacity(0.15), radius: 6, y: 2)
        .onAppear {
            DispatchQueue.main.asyncAfter(deadline: .now() + 4) {
                withAnimation { onDismiss() }
            }
        }
    }
}

#Preview {
    ContentView()
        .modelContainer(for: [Place.self, Event.self], inMemory: true)
}
