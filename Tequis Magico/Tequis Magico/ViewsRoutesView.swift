//
//  RoutesView.swift
//  Tequis Magico
//
//  Created by Bernardo Ramírez on 02/09/2026.
//

import SwiftUI
import SwiftData

/// Ruta temática: agrupa lugares existentes por subcategoría. No es un algoritmo de
/// optimización de ruta ni navegación turn-by-turn propia (eso sigue pendiente) — es
/// una curaduría de "qué visitar junto" que reusa "Cómo llegar" lugar por lugar.
struct ThematicRoute: Identifiable {
    let id = UUID()
    let title: String
    let subtitle: String
    let icon: String
    let color: Color
    let subcategories: Set<String>
}

let curatedRoutes: [ThematicRoute] = [
    ThematicRoute(title: "Ruta del Vino y Queso", subtitle: "Viñedos y queserías", icon: "wineglass", color: .purple, subcategories: ["Viñedo", "Quesería"]),
    ThematicRoute(title: "Ruta Artesanal", subtitle: "Artesanías, mercado y dulces", icon: "bag.fill", color: .pink, subcategories: ["Artesanías", "Mercado", "Dulcería"]),
    ThematicRoute(title: "Ruta Histórica", subtitle: "Plazas, templos y monumentos", icon: "building.columns.fill", color: .blue, subcategories: ["Plaza", "Templo", "Monumento", "Museo"]),
    ThematicRoute(title: "Ruta de Aventura", subtitle: "Globo, balnearios y naturaleza", icon: "figure.hiking", color: .green, subcategories: ["Globo Aerostático", "Balneario", "Spa", "Naturaleza", "Grutas"]),
]

struct ThematicRoutesSection: View {
    @Query private var places: [Place]

    private func places(for route: ThematicRoute) -> [Place] {
        places.filter { $0.isActive && route.subcategories.contains($0.subcategory) }
            .sorted { $0.rating > $1.rating }
    }

    var body: some View {
        let routesWithPlaces = curatedRoutes.filter { !places(for: $0).isEmpty }
        if !routesWithPlaces.isEmpty {
            VStack(alignment: .leading, spacing: 12) {
                Text("Rutas temáticas")
                    .font(.headline)
                    .padding(.horizontal)

                ScrollView(.horizontal, showsIndicators: false) {
                    HStack(spacing: 12) {
                        ForEach(routesWithPlaces) { route in
                            NavigationLink {
                                RouteDetailView(route: route, places: places(for: route))
                            } label: {
                                RouteCard(route: route, count: places(for: route).count)
                            }
                            .buttonStyle(.plain)
                        }
                    }
                    .padding(.horizontal)
                }
            }
        }
    }
}

private struct RouteCard: View {
    let route: ThematicRoute
    let count: Int

    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Image(systemName: route.icon)
                .font(.title2)
                .foregroundStyle(.white)
                .frame(width: 44, height: 44)
                .background(route.color.gradient, in: Circle())

            Text(route.title)
                .font(.subheadline)
                .fontWeight(.semibold)
                .foregroundStyle(.primary)
            Text("\(count) lugares")
                .font(.caption)
                .foregroundStyle(.secondary)
        }
        .padding(12)
        .frame(width: 160, alignment: .leading)
        .background(Color(.systemBackground))
        .clipShape(RoundedRectangle(cornerRadius: 16))
        .shadow(color: .black.opacity(0.05), radius: 8, x: 0, y: 2)
    }
}

struct RouteDetailView: View {
    let route: ThematicRoute
    let places: [Place]

    var body: some View {
        List {
            Section {
                Text(route.subtitle)
                    .font(.subheadline)
                    .foregroundStyle(.secondary)
            }
            Section {
                ForEach(Array(places.enumerated()), id: \.element.id) { index, place in
                    NavigationLink {
                        PlaceDetailView(place: place)
                    } label: {
                        HStack(spacing: 12) {
                            Text("\(index + 1)")
                                .font(.caption)
                                .fontWeight(.bold)
                                .frame(width: 24, height: 24)
                                .background(route.color.opacity(0.2), in: Circle())
                                .foregroundStyle(route.color)
                            VStack(alignment: .leading) {
                                Text(place.name).font(.headline)
                                Text(place.subcategory).font(.caption).foregroundStyle(.secondary)
                            }
                        }
                    }
                }
            } header: {
                Text("Paradas sugeridas (\(places.count))")
            } footer: {
                Text("El orden es solo sugerido por calificación — todavía no hay navegación optimizada entre paradas. Usa \"Cómo llegar\" en cada lugar.")
            }
        }
        .navigationTitle(route.title)
        .navigationBarTitleDisplayMode(.inline)
    }
}
