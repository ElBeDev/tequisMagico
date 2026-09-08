//
//  Event.swift
//  Tequis Magico
//
//  Created by Bernardo Ramírez on 02/09/2026.
//

import Foundation
import SwiftData

/// Modelo para eventos en Tequisquiapan
@Model
final class Event {
    var id: UUID
    var title: String
    var shortDescription: String
    var fullDescription: String
    
    // MARK: - Fechas
    var startDate: Date
    var endDate: Date
    var isRecurring: Bool
    var recurrenceRule: String? // iCal format
    
    // MARK: - Ubicación
    var locationName: String?
    var latitude: Double?
    var longitude: Double?
    var address: String?
    
    // MARK: - Categoría
    var category: String // Festival, Feria, Concierto, etc.
    var tags: [String]
    
    // MARK: - Medios
    var imageURLs: [String]
    var thumbnailURL: String?
    
    // MARK: - Tickets/Acceso
    var isFree: Bool
    var ticketPrice: String? // "Desde $50" o rango
    var ticketURL: String?
    var requiresReservation: Bool
    
    // MARK: - Metadata
    var createdAt: Date
    var updatedAt: Date
    var isActive: Bool
    var isFeatured: Bool
    var viewsCount: Int
    
    // MARK: - Organizer
    var organizerName: String?
    var organizerContact: String?
    
    init(
        id: UUID = UUID(),
        title: String,
        shortDescription: String,
        fullDescription: String,
        startDate: Date,
        endDate: Date,
        isRecurring: Bool = false,
        recurrenceRule: String? = nil,
        locationName: String? = nil,
        latitude: Double? = nil,
        longitude: Double? = nil,
        address: String? = nil,
        category: String,
        tags: [String] = [],
        imageURLs: [String] = [],
        thumbnailURL: String? = nil,
        isFree: Bool = false,
        ticketPrice: String? = nil,
        ticketURL: String? = nil,
        requiresReservation: Bool = false,
        createdAt: Date = Date(),
        updatedAt: Date = Date(),
        isActive: Bool = true,
        isFeatured: Bool = false,
        viewsCount: Int = 0,
        organizerName: String? = nil,
        organizerContact: String? = nil
    ) {
        self.id = id
        self.title = title
        self.shortDescription = shortDescription
        self.fullDescription = fullDescription
        self.startDate = startDate
        self.endDate = endDate
        self.isRecurring = isRecurring
        self.recurrenceRule = recurrenceRule
        self.locationName = locationName
        self.latitude = latitude
        self.longitude = longitude
        self.address = address
        self.category = category
        self.tags = tags
        self.imageURLs = imageURLs
        self.thumbnailURL = thumbnailURL
        self.isFree = isFree
        self.ticketPrice = ticketPrice
        self.ticketURL = ticketURL
        self.requiresReservation = requiresReservation
        self.createdAt = createdAt
        self.updatedAt = updatedAt
        self.isActive = isActive
        self.isFeatured = isFeatured
        self.viewsCount = viewsCount
        self.organizerName = organizerName
        self.organizerContact = organizerContact
    }
    
    // MARK: - Computed Properties
    var isUpcoming: Bool {
        startDate > Date()
    }
    
    var isHappening: Bool {
        let now = Date()
        return now >= startDate && now <= endDate
    }
    
    var isPast: Bool {
        endDate < Date()
    }
    
    var durationInDays: Int {
        Calendar.current.dateComponents([.day], from: startDate, to: endDate).day ?? 0
    }
}

// MARK: - Sample Data
extension Event {
    static var sample: Event {
        Event(
            title: "Feria Nacional del Queso y Vino",
            shortDescription: "La feria más importante de la región",
            fullDescription: "Disfruta de la mejor selección de quesos artesanales y vinos de la región. Incluye talleres, degustaciones y música en vivo.",
            startDate: Date().addingTimeInterval(86400 * 30), // En 30 días
            endDate: Date().addingTimeInterval(86400 * 45), // 15 días de duración
            locationName: "Plaza Miguel Hidalgo",
            latitude: 20.5213,
            longitude: -99.8936,
            address: "Centro, Tequisquiapan",
            category: "Feria",
            tags: ["Vino", "Queso", "Gastronomía", "Familiar"],
            isFree: true,
            isFeatured: true,
            organizerName: "Gobierno Municipal de Tequisquiapan"
        )
    }
    
    static var samples: [Event] {
        [
            Event(
                title: "Feria Nacional del Queso y Vino",
                shortDescription: "La feria más importante",
                fullDescription: "Disfruta de quesos y vinos de la región.",
                startDate: Date().addingTimeInterval(86400 * 30),
                endDate: Date().addingTimeInterval(86400 * 45),
                category: "Feria",
                isFree: true,
                isFeatured: true
            ),
            Event(
                title: "Concierto en la Plaza",
                shortDescription: "Música en vivo",
                fullDescription: "Concierto de música tradicional mexicana.",
                startDate: Date().addingTimeInterval(86400 * 7),
                endDate: Date().addingTimeInterval(86400 * 7 + 3600 * 3),
                category: "Concierto",
                isFree: true
            ),
            Event(
                title: "Taller de Cestería",
                shortDescription: "Aprende cestería tradicional",
                fullDescription: "Taller práctico de cestería con artesanos locales.",
                startDate: Date().addingTimeInterval(86400 * 14),
                endDate: Date().addingTimeInterval(86400 * 14 + 3600 * 4),
                category: "Taller",
                isFree: false,
                ticketPrice: "$250",
                requiresReservation: true
            )
        ]
    }
}
