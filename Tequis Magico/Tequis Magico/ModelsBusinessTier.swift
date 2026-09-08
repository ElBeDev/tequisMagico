//
//  BusinessTier.swift
//  Tequis Magico
//
//  Created by Bernardo Ramírez on 02/09/2026.
//

import Foundation

/// Niveles de suscripción para negocios
enum BusinessTier: String, Codable, CaseIterable {
    case none = "Sin Suscripción"
    case basic = "Básico"
    case premium = "Premium"
    
    var monthlyPrice: Decimal {
        switch self {
        case .none: return 0
        case .basic: return 499
        case .premium: return 999
        }
    }
    
    var maxPhotos: Int {
        switch self {
        case .none: return 3
        case .basic: return 10
        case .premium: return .max
        }
    }
    
    var maxVideos: Int {
        switch self {
        case .none: return 0
        case .basic: return 0
        case .premium: return 3
        }
    }
    
    var canCreatePromotions: Bool {
        self == .premium
    }
    
    var isFeatured: Bool {
        self == .premium
    }
    
    var hasAnalytics: Bool {
        self != .none
    }
}

extension BusinessTier {
    /// El API guarda el código corto (p.ej. "premium"), no el rawValue de despliegue.
    init?(dbValue: String) {
        switch dbValue {
        case "none": self = .none
        case "basic": self = .basic
        case "premium": self = .premium
        default: return nil
        }
    }
}
