//
//  PlaceCategory.swift
//  Tequis Magico
//
//  Created by Bernardo Ramírez on 02/09/2026.
//

import Foundation
import SwiftUI

/// Categorías principales de lugares en Tequisquiapan
enum PlaceCategory: String, Codable, CaseIterable {
    case turistico = "Sitios Turísticos"
    case experiencias = "Experiencias"
    case gastronomia = "Gastronomía"
    case hospedaje = "Hospedaje"
    case eventos = "Eventos"
    case compras = "Compras"
    case rutas = "Rutas"
    
    /// Ícono del sistema para cada categoría
    var icon: String {
        switch self {
        case .turistico: return "building.columns"
        case .experiencias: return "sparkles"
        case .gastronomia: return "fork.knife"
        case .hospedaje: return "bed.double"
        case .eventos: return "calendar"
        case .compras: return "bag"
        case .rutas: return "map"
        }
    }
    
    /// Color asociado a cada categoría
    var color: Color {
        switch self {
        case .turistico: return .blue
        case .experiencias: return .purple
        case .gastronomia: return .orange
        case .hospedaje: return .green
        case .eventos: return .red
        case .compras: return .pink
        case .rutas: return .teal
        }
    }
    
    /// Subcategorías para cada categoría principal
    var subcategories: [String] {
        switch self {
        case .turistico:
            return ["Plaza", "Templo", "Museo", "Monumento", "Parque"]
        case .experiencias:
            return ["Viñedo", "Quesería", "Spa", "Globo Aerostático", "Taller"]
        case .gastronomia:
            return ["Restaurante", "Cafetería", "Antojitos", "Bar", "Mercado"]
        case .hospedaje:
            return ["Hotel", "Posada", "Boutique", "Glamping"]
        case .eventos:
            return ["Festival", "Feria", "Concierto", "Exposición", "Cultural"]
        case .compras:
            return ["Artesanías", "Productos Locales", "Vinos", "Quesos"]
        case .rutas:
            return ["Walking Tour", "Bicicleta", "Ruta del Vino", "Histórica"]
        }
    }
}

extension PlaceCategory {
    /// El API guarda el código corto (p.ej. "turistico"), no el rawValue de despliegue.
    init?(dbValue: String) {
        switch dbValue {
        case "turistico": self = .turistico
        case "experiencias": self = .experiencias
        case "gastronomia": self = .gastronomia
        case "hospedaje": self = .hospedaje
        case "eventos": self = .eventos
        case "compras": self = .compras
        case "rutas": self = .rutas
        default: return nil
        }
    }
}
