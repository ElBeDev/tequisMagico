//
//  Place.swift
//  Tequis Magico
//
//  Created by Bernardo Ramírez on 02/09/2026.
//

import Foundation
import SwiftData
import CoreLocation

/// Modelo principal para lugares en Tequisquiapan
@Model
final class Place {
    // MARK: - Identificación
    var id: UUID
    var name: String
    var category: PlaceCategory
    var subcategory: String
    
    // MARK: - Ubicación
    var latitude: Double
    var longitude: Double
    var address: String
    
    // MARK: - Información Básica
    var shortDescription: String
    var fullDescription: String
    var priceRange: PriceRange
    
    // MARK: - Medios
    var imageURLs: [String] // URLs de imágenes en CloudKit/Firebase
    var videoURLs: [String]
    var thumbnailURL: String?
    
    // MARK: - Contacto
    var phoneNumber: String?
    var email: String?
    var website: String?
    var whatsappNumber: String?
    
    // MARK: - Horarios (JSON String)
    var scheduleJSON: String? // {"lunes": "9:00-18:00", "martes": "9:00-18:00", ...}
    
    // MARK: - Características
    var amenities: [String] // ["Wi-Fi", "Estacionamiento", "Pet Friendly", etc.]
    var tags: [String] // ["Romántico", "Familiar", "Al aire libre", etc.]
    
    // MARK: - Rating y Reviews
    var rating: Double
    var reviewsCount: Int
    
    // MARK: - Business Info
    var businessTier: BusinessTier
    var businessOwnerID: String? // ID del dueño del negocio
    var isActive: Bool
    var isFeatured: Bool
    var isVerified: Bool
    
    // MARK: - Metadata
    var createdAt: Date
    var updatedAt: Date
    var viewsCount: Int
    var favoritesCount: Int
    
    // MARK: - Initializer
    init(
        id: UUID = UUID(),
        name: String,
        category: PlaceCategory,
        subcategory: String,
        latitude: Double,
        longitude: Double,
        address: String,
        shortDescription: String,
        fullDescription: String,
        priceRange: PriceRange = .moderate,
        imageURLs: [String] = [],
        videoURLs: [String] = [],
        thumbnailURL: String? = nil,
        phoneNumber: String? = nil,
        email: String? = nil,
        website: String? = nil,
        whatsappNumber: String? = nil,
        scheduleJSON: String? = nil,
        amenities: [String] = [],
        tags: [String] = [],
        rating: Double = 0.0,
        reviewsCount: Int = 0,
        businessTier: BusinessTier = .none,
        businessOwnerID: String? = nil,
        isActive: Bool = true,
        isFeatured: Bool = false,
        isVerified: Bool = false,
        createdAt: Date = Date(),
        updatedAt: Date = Date(),
        viewsCount: Int = 0,
        favoritesCount: Int = 0
    ) {
        self.id = id
        self.name = name
        self.category = category
        self.subcategory = subcategory
        self.latitude = latitude
        self.longitude = longitude
        self.address = address
        self.shortDescription = shortDescription
        self.fullDescription = fullDescription
        self.priceRange = priceRange
        self.imageURLs = imageURLs
        self.videoURLs = videoURLs
        self.thumbnailURL = thumbnailURL
        self.phoneNumber = phoneNumber
        self.email = email
        self.website = website
        self.whatsappNumber = whatsappNumber
        self.scheduleJSON = scheduleJSON
        self.amenities = amenities
        self.tags = tags
        self.rating = rating
        self.reviewsCount = reviewsCount
        self.businessTier = businessTier
        self.businessOwnerID = businessOwnerID
        self.isActive = isActive
        self.isFeatured = isFeatured
        self.isVerified = isVerified
        self.createdAt = createdAt
        self.updatedAt = updatedAt
        self.viewsCount = viewsCount
        self.favoritesCount = favoritesCount
    }
    
    // MARK: - Computed Properties
    var coordinate: CLLocationCoordinate2D {
        CLLocationCoordinate2D(latitude: latitude, longitude: longitude)
    }
    
    var hasPhotos: Bool {
        !imageURLs.isEmpty
    }
    
    var hasVideos: Bool {
        !videoURLs.isEmpty
    }
    
    var isPremiumBusiness: Bool {
        businessTier == .premium
    }
}

// MARK: - Sincronización con el API
extension Place {
    convenience init(dto: PlaceDTO) {
        self.init(
            id: dto.id,
            name: dto.name,
            category: PlaceCategory(dbValue: dto.category) ?? .turistico,
            subcategory: dto.subcategory,
            latitude: dto.latitude,
            longitude: dto.longitude,
            address: dto.address,
            shortDescription: dto.shortDescription,
            fullDescription: dto.fullDescription,
            priceRange: PriceRange(dbValue: dto.priceRange) ?? .moderate,
            imageURLs: dto.imageURLs,
            videoURLs: dto.videoURLs,
            thumbnailURL: dto.thumbnailURL,
            phoneNumber: dto.phoneNumber,
            email: dto.email,
            website: dto.website,
            whatsappNumber: dto.whatsappNumber,
            amenities: dto.amenities,
            tags: dto.tags,
            rating: dto.rating,
            reviewsCount: dto.reviewsCount,
            businessTier: BusinessTier(dbValue: dto.businessTier) ?? .none,
            isFeatured: dto.isFeatured,
            isVerified: dto.isVerified,
            viewsCount: dto.viewsCount,
            favoritesCount: dto.favoritesCount
        )
    }

    /// Actualiza este lugar ya guardado con los datos frescos del API (conserva el `id`).
    func apply(_ dto: PlaceDTO) {
        name = dto.name
        category = PlaceCategory(dbValue: dto.category) ?? category
        subcategory = dto.subcategory
        latitude = dto.latitude
        longitude = dto.longitude
        address = dto.address
        shortDescription = dto.shortDescription
        fullDescription = dto.fullDescription
        priceRange = PriceRange(dbValue: dto.priceRange) ?? priceRange
        imageURLs = dto.imageURLs
        videoURLs = dto.videoURLs
        thumbnailURL = dto.thumbnailURL
        phoneNumber = dto.phoneNumber
        email = dto.email
        website = dto.website
        whatsappNumber = dto.whatsappNumber
        amenities = dto.amenities
        tags = dto.tags
        rating = dto.rating
        reviewsCount = dto.reviewsCount
        businessTier = BusinessTier(dbValue: dto.businessTier) ?? businessTier
        isFeatured = dto.isFeatured
        isVerified = dto.isVerified
        viewsCount = dto.viewsCount
        favoritesCount = dto.favoritesCount
        updatedAt = Date()
    }
}

// MARK: - Sample Data
extension Place {
    static var sample: Place {
        Place(
            name: "Plaza Miguel Hidalgo",
            category: .turistico,
            subcategory: "Plaza",
            latitude: 20.5213,
            longitude: -99.8936,
            address: "Centro, 76750 Tequisquiapan, Qro.",
            shortDescription: "Corazón del pueblo mágico",
            fullDescription: "La plaza principal de Tequisquiapan, rodeada de portales y árboles centenarios. Lugar perfecto para disfrutar de la arquitectura colonial y la vida local.",
            priceRange: .free,
            imageURLs: ["plaza_1", "plaza_2", "plaza_3"],
            amenities: ["Bancas", "Fuente", "Iluminación", "Accesible"],
            tags: ["Histórico", "Familiar", "Fotogénico"],
            rating: 4.7,
            reviewsCount: 234,
            isVerified: true
        )
    }
    
    static var samples: [Place] {
        [
            Place(
                name: "Plaza Miguel Hidalgo",
                category: .turistico,
                subcategory: "Plaza",
                latitude: 20.5213,
                longitude: -99.8936,
                address: "Centro, 76750 Tequisquiapan, Qro.",
                shortDescription: "Corazón del pueblo mágico",
                fullDescription: "La plaza principal de Tequisquiapan.",
                priceRange: .free,
                rating: 4.7,
                reviewsCount: 234
            ),
            Place(
                name: "Viñedos La Redonda",
                category: .experiencias,
                subcategory: "Viñedo",
                latitude: 20.5350,
                longitude: -99.8850,
                address: "Camino a La Trinidad",
                shortDescription: "Viñedo boutique con catas",
                fullDescription: "Viñedo familiar con catas de vino y recorridos por los viñedos.",
                priceRange: .moderate,
                rating: 4.5,
                reviewsCount: 89,
                businessTier: .premium
            ),
            Place(
                name: "Restaurante Los Faroles",
                category: .gastronomia,
                subcategory: "Restaurante",
                latitude: 20.5220,
                longitude: -99.8940,
                address: "Portal Guerrero 5",
                shortDescription: "Cocina tradicional queretana",
                fullDescription: "Restaurante con platillos típicos de la región.",
                priceRange: .moderate,
                rating: 4.3,
                reviewsCount: 156,
                businessTier: .basic
            )
        ]
    }
}
