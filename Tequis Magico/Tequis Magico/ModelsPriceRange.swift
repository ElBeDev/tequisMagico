//
//  PriceRange.swift
//  Tequis Magico
//
//  Created by Bernardo Ramírez on 02/09/2026.
//

import Foundation

/// Rango de precios para lugares
enum PriceRange: String, Codable, CaseIterable {
    case free = "Gratis"
    case budget = "$"
    case moderate = "$$"
    case expensive = "$$$"
    case luxury = "$$$$"
    
    var description: String {
        switch self {
        case .free: return "Gratis"
        case .budget: return "Económico"
        case .moderate: return "Moderado"
        case .expensive: return "Caro"
        case .luxury: return "Lujo"
        }
    }
}

extension PriceRange {
    /// El API guarda el código corto (p.ej. "moderate"), no el rawValue de despliegue.
    init?(dbValue: String) {
        switch dbValue {
        case "free": self = .free
        case "budget": self = .budget
        case "moderate": self = .moderate
        case "expensive": self = .expensive
        case "luxury": self = .luxury
        default: return nil
        }
    }
}
