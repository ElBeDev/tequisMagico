//
//  FavoritesView.swift
//  Tequis Magico
//
//  Created by Bernardo Ramírez on 02/09/2026.
//

import SwiftUI
import SwiftData

struct FavoritesView: View {
    @Environment(\.modelContext) private var modelContext
    @Query private var places: [Place]
    
    var favoritePlaces: [Place] {
        places.filter { $0.isFavorite }
    }
    
    var body: some View {
        NavigationStack {
            Group {
                if favoritePlaces.isEmpty {
                    ContentUnavailableView(
                        "No tienes favoritos",
                        systemImage: "heart.slash",
                        description: Text("Agrega lugares a tus favoritos para verlos aquí")
                    )
                } else {
                    ScrollView {
                        LazyVStack(spacing: 16) {
                            ForEach(favoritePlaces, id: \.id) { place in
                                NavigationLink {
                                    PlaceDetailView(place: place)
                                } label: {
                                    PlaceCard(place: place)
                                }
                                .buttonStyle(.plain)
                            }
                        }
                        .padding()
                    }
                }
            }
            .navigationTitle("Favoritos")
        }
    }
}

#Preview {
    FavoritesView()
        .modelContainer(for: [Place.self], inMemory: true)
}
