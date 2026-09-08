//
//  EventAPIService.swift
//  Tequis Magico
//
//  Created by Bernardo Ramírez on 02/09/2026.
//

import Foundation

/// Representa una fila de `events` tal como la devuelve el API en Vercel/Neon.
struct EventDTO: Decodable {
    let id: UUID
    let title: String
    let shortDescription: String
    let fullDescription: String
    let startDate: Date
    let endDate: Date
    let isRecurring: Bool
    let recurrenceRule: String?
    let locationName: String?
    let latitude: Double?
    let longitude: Double?
    let address: String?
    let category: String
    let tags: [String]
    let imageURLs: [String]
    let thumbnailURL: String?
    let isFree: Bool
    let ticketPrice: String?
    let ticketURL: String?
    let requiresReservation: Bool
    let isFeatured: Bool
    let viewsCount: Int
    let organizerName: String?
    let organizerContact: String?

    private enum CodingKeys: String, CodingKey {
        case id, title, category, tags, address, latitude, longitude
        case shortDescription = "short_description"
        case fullDescription = "full_description"
        case startDate = "start_date"
        case endDate = "end_date"
        case isRecurring = "is_recurring"
        case recurrenceRule = "recurrence_rule"
        case locationName = "location_name"
        case imageURLs = "image_urls"
        case thumbnailURL = "thumbnail_url"
        case isFree = "is_free"
        case ticketPrice = "ticket_price"
        case ticketURL = "ticket_url"
        case requiresReservation = "requires_reservation"
        case isFeatured = "is_featured"
        case viewsCount = "views_count"
        case organizerName = "organizer_name"
        case organizerContact = "organizer_contact"
    }

    init(from decoder: Decoder) throws {
        let c = try decoder.container(keyedBy: CodingKeys.self)
        id = try c.decode(UUID.self, forKey: .id)
        title = try c.decode(String.self, forKey: .title)
        shortDescription = try c.decode(String.self, forKey: .shortDescription)
        fullDescription = try c.decode(String.self, forKey: .fullDescription)
        startDate = try Self.decodeISO8601Date(c, .startDate)
        endDate = try Self.decodeISO8601Date(c, .endDate)
        isRecurring = try c.decodeIfPresent(Bool.self, forKey: .isRecurring) ?? false
        recurrenceRule = try c.decodeIfPresent(String.self, forKey: .recurrenceRule)
        locationName = try c.decodeIfPresent(String.self, forKey: .locationName)
        latitude = try? Self.decodeFlexibleDouble(c, .latitude)
        longitude = try? Self.decodeFlexibleDouble(c, .longitude)
        address = try c.decodeIfPresent(String.self, forKey: .address)
        category = try c.decode(String.self, forKey: .category)
        tags = try c.decodeIfPresent([String].self, forKey: .tags) ?? []
        imageURLs = try c.decodeIfPresent([String].self, forKey: .imageURLs) ?? []
        thumbnailURL = try c.decodeIfPresent(String.self, forKey: .thumbnailURL)
        isFree = try c.decodeIfPresent(Bool.self, forKey: .isFree) ?? false
        ticketPrice = try c.decodeIfPresent(String.self, forKey: .ticketPrice)
        ticketURL = try c.decodeIfPresent(String.self, forKey: .ticketURL)
        requiresReservation = try c.decodeIfPresent(Bool.self, forKey: .requiresReservation) ?? false
        isFeatured = try c.decodeIfPresent(Bool.self, forKey: .isFeatured) ?? false
        viewsCount = try c.decodeIfPresent(Int.self, forKey: .viewsCount) ?? 0
        organizerName = try c.decodeIfPresent(String.self, forKey: .organizerName)
        organizerContact = try c.decodeIfPresent(String.self, forKey: .organizerContact)
    }

    private static let isoFormatter: ISO8601DateFormatter = {
        let formatter = ISO8601DateFormatter()
        formatter.formatOptions = [.withInternetDateTime, .withFractionalSeconds]
        return formatter
    }()

    private static func decodeISO8601Date(
        _ container: KeyedDecodingContainer<CodingKeys>,
        _ key: CodingKeys
    ) throws -> Date {
        let text = try container.decode(String.self, forKey: key)
        guard let date = isoFormatter.date(from: text) else {
            throw DecodingError.dataCorruptedError(
                forKey: key, in: container, debugDescription: "Fecha ISO8601 inválida: \(text)"
            )
        }
        return date
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

private struct EventsResponse: Decodable {
    let success: Bool
    let events: [EventDTO]
}

enum EventAPIService {
    static func fetchEvents() async throws -> [EventDTO] {
        let url = PlaceAPIService.baseURL.appendingPathComponent("events")
        let (data, response) = try await URLSession.shared.data(from: url)
        guard let http = response as? HTTPURLResponse else { throw PlaceAPIError.badResponse }
        guard (200..<300).contains(http.statusCode) else { throw PlaceAPIError.server(status: http.statusCode) }
        let decoded = try JSONDecoder().decode(EventsResponse.self, from: data)
        return decoded.events
    }
}
