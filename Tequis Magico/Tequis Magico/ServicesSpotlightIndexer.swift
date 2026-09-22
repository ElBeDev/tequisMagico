//
//  SpotlightIndexer.swift
//  Tequis Magico
//
//  Created by Bernardo Ramírez on 02/09/2026.
//

import Foundation
import CoreSpotlight
import UIKit

/// Indexa los lugares activos en Spotlight (búsqueda del sistema). Cada `CSSearchableItem`
/// usa `place.id.uuidString` como identificador único, así `CSSearchableItemActionType` en
/// `ContentView` puede resolverlo de vuelta al mismo lugar que abre el deep link.
enum SpotlightIndexer {
    private static let domainIdentifier = "com.tequismagico.places"

    static func reindexAll(_ places: [Place], removedIDs: [String] = []) async {
        guard CSSearchableIndex.isIndexingAvailable() else { return }

        if !removedIDs.isEmpty {
            await deleteItems(withIdentifiers: removedIDs)
        }

        let activePlaces = places.filter(\.isActive)
        var items: [CSSearchableItem] = []
        items.reserveCapacity(activePlaces.count)
        for place in activePlaces {
            items.append(await searchableItem(for: place))
        }

        await indexItems(items)
    }

    private static func searchableItem(for place: Place) async -> CSSearchableItem {
        let attributeSet = CSSearchableItemAttributeSet(contentType: .item)
        attributeSet.title = place.name
        attributeSet.contentDescription = place.shortDescription
        attributeSet.keywords = ([place.category.rawValue, place.subcategory] + place.tags).filter { !$0.isEmpty }
        attributeSet.namedLocation = place.address

        if let thumbnailURL = place.thumbnailURL,
           let image = await ImageCache.shared.load(thumbnailURL) {
            attributeSet.thumbnailData = image.jpegData(compressionQuality: 0.8)
        }

        let item = CSSearchableItem(
            uniqueIdentifier: place.id.uuidString,
            domainIdentifier: domainIdentifier,
            attributeSet: attributeSet
        )
        item.expirationDate = .distantFuture
        return item
    }

    private static func indexItems(_ items: [CSSearchableItem]) async {
        guard !items.isEmpty else { return }
        await withCheckedContinuation { continuation in
            CSSearchableIndex.default().indexSearchableItems(items) { _ in
                continuation.resume()
            }
        }
    }

    private static func deleteItems(withIdentifiers identifiers: [String]) async {
        await withCheckedContinuation { continuation in
            CSSearchableIndex.default().deleteSearchableItems(withIdentifiers: identifiers) { _ in
                continuation.resume()
            }
        }
    }
}
