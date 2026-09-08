//
//  SyncService.swift
//  Tequis Magico
//
//  Created by Bernardo Ramírez on 02/09/2026.
//

import Foundation
import SwiftData

/// Sincroniza `Place`/`Event` contra el backend (upsert por id, poda lo que ya no viene activo).
/// No toca nada si el fetch falla, para no perder el cache local sin conexión.
enum SyncService {
    @discardableResult
    static func syncPlaces(existing places: [Place], into context: ModelContext) async -> Bool {
        do {
            let remotePlaces = try await PlaceAPIService.fetchPlaces()
            let existingByID = Dictionary(uniqueKeysWithValues: places.map { ($0.id, $0) })
            for dto in remotePlaces {
                if let existing = existingByID[dto.id] {
                    existing.apply(dto)
                } else {
                    context.insert(Place(dto: dto))
                }
            }
            if !remotePlaces.isEmpty {
                let remoteIDs = Set(remotePlaces.map(\.id))
                for place in places where !remoteIDs.contains(place.id) {
                    context.delete(place)
                }
            }
            try? context.save()
            return true
        } catch {
            return false
        }
    }

    @discardableResult
    static func syncEvents(existing events: [Event], into context: ModelContext) async -> Bool {
        do {
            let remoteEvents = try await EventAPIService.fetchEvents()
            let existingByID = Dictionary(uniqueKeysWithValues: events.map { ($0.id, $0) })
            for dto in remoteEvents {
                if let existing = existingByID[dto.id] {
                    existing.apply(dto)
                } else {
                    context.insert(Event(dto: dto))
                }
            }
            if !remoteEvents.isEmpty {
                let remoteIDs = Set(remoteEvents.map(\.id))
                for event in events where !remoteIDs.contains(event.id) {
                    context.delete(event)
                }
            }
            try? context.save()
            return true
        } catch {
            return false
        }
    }
}
