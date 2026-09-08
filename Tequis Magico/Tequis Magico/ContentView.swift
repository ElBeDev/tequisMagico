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
    
    var body: some View {
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
        .task {
            await syncPlacesFromBackend()
            if events.isEmpty {
                seedEvents()
            }
        }
    }

    // MARK: - Sincronización con el Panel (Vercel/Neon)
    private func syncPlacesFromBackend() async {
        do {
            let remotePlaces = try await PlaceAPIService.fetchPlaces()
            let existingByID = Dictionary(uniqueKeysWithValues: places.map { ($0.id, $0) })
            for dto in remotePlaces {
                if let existing = existingByID[dto.id] {
                    existing.apply(dto)
                } else {
                    modelContext.insert(Place(dto: dto))
                }
            }
            try? modelContext.save()
        } catch {
            // Sin conexión al panel: si no hay nada guardado localmente, usamos el seed offline.
            if places.isEmpty {
                for place in SeedData.createAllPlaces() {
                    modelContext.insert(place)
                }
                try? modelContext.save()
            }
        }
    }

    private func seedEvents() {
        for event in SeedData.createAllEvents() {
            modelContext.insert(event)
        }
        try? modelContext.save()
    }
}

#Preview {
    ContentView()
        .modelContainer(for: [Place.self, Event.self], inMemory: true)
}
