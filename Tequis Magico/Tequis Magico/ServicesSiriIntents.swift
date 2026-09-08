//
//  SiriIntents.swift
//  Tequis Magico
//
//  Created by Bernardo Ramírez on 02/09/2026.
//

import AppIntents

/// Categoría como parámetro de Siri — usa los mismos códigos cortos que el API (ver dbValue en ModelsPlaceCategory.swift).
enum PlaceCategoryOption: String, AppEnum {
    case turistico, experiencias, gastronomia, hospedaje, eventos, compras, rutas

    static var typeDisplayRepresentation: TypeDisplayRepresentation = "Categoría"
    static var caseDisplayRepresentations: [PlaceCategoryOption: DisplayRepresentation] = [
        .turistico: "Sitios Turísticos",
        .experiencias: "Experiencias",
        .gastronomia: "Gastronomía",
        .hospedaje: "Hospedaje",
        .eventos: "Eventos",
        .compras: "Compras",
        .rutas: "Rutas",
    ]
}

struct SearchPlacesIntent: AppIntent {
    static var title: LocalizedStringResource = "Buscar lugares en Tequisquiapan Mágico"
    static var description = IntentDescription("Busca los mejor calificados de una categoría en Tequisquiapan.")

    @Parameter(title: "Categoría")
    var category: PlaceCategoryOption?

    static var parameterSummary: some ParameterSummary {
        Summary("Buscar \(\.$category) en Tequisquiapan")
    }

    func perform() async throws -> some IntentResult & ProvidesDialog {
        guard let places = try? await PlaceAPIService.fetchPlaces() else {
            return .result(dialog: "No pude conectarme al panel de Tequisquiapan Mágico. Intenta de nuevo con conexión a internet.")
        }

        let filtered = category.map { cat in places.filter { $0.category == cat.rawValue } } ?? places
        let top = filtered.sorted { $0.rating > $1.rating }.prefix(3).map(\.name)

        if top.isEmpty {
            return .result(dialog: "No encontré lugares de esa categoría en Tequisquiapan.")
        }
        return .result(dialog: "Te recomiendo: \(top.joined(separator: ", ")).")
    }
}

struct TodayEventsIntent: AppIntent {
    static var title: LocalizedStringResource = "Eventos de hoy en Tequisquiapan"
    static var description = IntentDescription("Dice qué eventos hay en curso hoy en Tequisquiapan.")

    func perform() async throws -> some IntentResult & ProvidesDialog {
        guard let events = try? await EventAPIService.fetchEvents() else {
            return .result(dialog: "No pude conectarme al panel de Tequisquiapan Mágico. Intenta de nuevo con conexión a internet.")
        }

        let now = Date()
        let today = events.filter { $0.startDate <= now && $0.endDate >= now }.map(\.title)

        if today.isEmpty {
            return .result(dialog: "No hay eventos en curso hoy en Tequisquiapan.")
        }
        return .result(dialog: "Hoy hay: \(today.joined(separator: ", ")).")
    }
}

struct TequisMagicoShortcuts: AppShortcutsProvider {
    static var appShortcuts: [AppShortcut] {
        AppShortcut(
            intent: SearchPlacesIntent(),
            phrases: [
                "Busca lugares en \(.applicationName)",
                "Busca restaurantes en \(.applicationName)",
                "Qué me recomiendas en \(.applicationName)"
            ],
            shortTitle: "Buscar lugares",
            systemImageName: "magnifyingglass"
        )
        AppShortcut(
            intent: TodayEventsIntent(),
            phrases: [
                "Qué eventos hay hoy en \(.applicationName)",
                "Eventos de hoy en \(.applicationName)"
            ],
            shortTitle: "Eventos de hoy",
            systemImageName: "calendar"
        )
    }
}
