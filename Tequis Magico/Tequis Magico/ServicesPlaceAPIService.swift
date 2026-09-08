//
//  PlaceAPIService.swift
//  Tequis Magico
//
//  Created by Bernardo Ramírez on 02/09/2026.
//

import Foundation

/// Representa una fila de `places` tal como la devuelve el API en Vercel/Neon.
struct PlaceDTO: Decodable {
    let id: UUID
    let name: String
    let category: String
    let subcategory: String
    let latitude: Double
    let longitude: Double
    let address: String
    let shortDescription: String
    let fullDescription: String
    let priceRange: String
    let imageURLs: [String]
    let videoURLs: [String]
    let thumbnailURL: String?
    let phoneNumber: String?
    let email: String?
    let website: String?
    let whatsappNumber: String?
    let amenities: [String]
    let tags: [String]
    let rating: Double
    let reviewsCount: Int
    let businessTier: String
    let isFeatured: Bool
    let isVerified: Bool
    let viewsCount: Int
    let favoritesCount: Int
    /// JSON crudo tal como lo captura el panel, ej. {"lunes":"9:00-18:00",...}. Casi siempre nil hoy
    /// (0 de 50 lugares lo tienen cargado en Neon) — el panel de admin ya permite capturarlo.
    let scheduleJSON: String?

    private enum CodingKeys: String, CodingKey {
        case id, name, category, subcategory, latitude, longitude, address
        case shortDescription = "short_description"
        case fullDescription = "full_description"
        case priceRange = "price_range"
        case imageURLs = "image_urls"
        case videoURLs = "video_urls"
        case thumbnailURL = "thumbnail_url"
        case phoneNumber = "phone_number"
        case email, website
        case whatsappNumber = "whatsapp_number"
        case amenities, tags, rating
        case reviewsCount = "reviews_count"
        case businessTier = "business_tier"
        case isFeatured = "is_featured"
        case isVerified = "is_verified"
        case viewsCount = "views_count"
        case favoritesCount = "favorites_count"
        case scheduleJSON = "schedule_json"
    }

    init(from decoder: Decoder) throws {
        let c = try decoder.container(keyedBy: CodingKeys.self)
        id = try c.decode(UUID.self, forKey: .id)
        name = try c.decode(String.self, forKey: .name)
        category = try c.decode(String.self, forKey: .category)
        subcategory = try c.decodeIfPresent(String.self, forKey: .subcategory) ?? ""
        // Postgres NUMERIC/DECIMAL llega como string desde Neon, no como número JSON.
        latitude = try Self.decodeFlexibleDouble(c, .latitude)
        longitude = try Self.decodeFlexibleDouble(c, .longitude)
        address = try c.decode(String.self, forKey: .address)
        shortDescription = try c.decode(String.self, forKey: .shortDescription)
        fullDescription = try c.decode(String.self, forKey: .fullDescription)
        priceRange = try c.decode(String.self, forKey: .priceRange)
        imageURLs = try c.decodeIfPresent([String].self, forKey: .imageURLs) ?? []
        videoURLs = try c.decodeIfPresent([String].self, forKey: .videoURLs) ?? []
        thumbnailURL = try c.decodeIfPresent(String.self, forKey: .thumbnailURL)
        phoneNumber = try c.decodeIfPresent(String.self, forKey: .phoneNumber)
        email = try c.decodeIfPresent(String.self, forKey: .email)
        website = try c.decodeIfPresent(String.self, forKey: .website)
        whatsappNumber = try c.decodeIfPresent(String.self, forKey: .whatsappNumber)
        amenities = try c.decodeIfPresent([String].self, forKey: .amenities) ?? []
        tags = try c.decodeIfPresent([String].self, forKey: .tags) ?? []
        rating = (try? Self.decodeFlexibleDouble(c, .rating)) ?? 0
        reviewsCount = try c.decodeIfPresent(Int.self, forKey: .reviewsCount) ?? 0
        businessTier = try c.decodeIfPresent(String.self, forKey: .businessTier) ?? "none"
        isFeatured = try c.decodeIfPresent(Bool.self, forKey: .isFeatured) ?? false
        isVerified = try c.decodeIfPresent(Bool.self, forKey: .isVerified) ?? false
        viewsCount = try c.decodeIfPresent(Int.self, forKey: .viewsCount) ?? 0
        favoritesCount = try c.decodeIfPresent(Int.self, forKey: .favoritesCount) ?? 0
        scheduleJSON = Self.decodeScheduleJSON(c, .scheduleJSON)
    }

    /// Neon/Postgres devuelve la columna JSONB ya como objeto anidado, no como string escapado —
    /// lo volvemos a codificar a texto porque así lo espera `Place.scheduleJSON` (ver ModelsPlace.swift).
    private static func decodeScheduleJSON(
        _ container: KeyedDecodingContainer<CodingKeys>,
        _ key: CodingKeys
    ) -> String? {
        guard let dict = try? container.decodeIfPresent([String: String].self, forKey: key) else {
            return nil
        }
        guard let data = try? JSONEncoder().encode(dict) else { return nil }
        return String(data: data, encoding: .utf8)
    }

    private static func decodeFlexibleDouble(
        _ container: KeyedDecodingContainer<CodingKeys>,
        _ key: CodingKeys
    ) throws -> Double {
        if let value = try? container.decode(Double.self, forKey: key) {
            return value
        }
        let text = try container.decode(String.self, forKey: key)
        guard let value = Double(text) else {
            throw DecodingError.dataCorruptedError(
                forKey: key, in: container, debugDescription: "Se esperaba un número, se recibió \"\(text)\""
            )
        }
        return value
    }
}

private struct PlacesResponse: Decodable {
    let success: Bool
    let places: [PlaceDTO]
}

enum PlaceAPIError: Error {
    case badResponse
    case server(status: Int)
}

enum PlaceAPIService {
    /// Panel de administración en Vercel (ver web-admin/ en la raíz del repo).
    static let baseURL = URL(string: "https://tequis-magico.vercel.app/api")!

    static func fetchPlaces() async throws -> [PlaceDTO] {
        let url = baseURL.appendingPathComponent("places")
        let (data, response) = try await URLSession.shared.data(from: url)
        guard let http = response as? HTTPURLResponse else { throw PlaceAPIError.badResponse }
        guard (200..<300).contains(http.statusCode) else { throw PlaceAPIError.server(status: http.statusCode) }
        let decoded = try JSONDecoder().decode(PlacesResponse.self, from: data)
        return decoded.places
    }
}
