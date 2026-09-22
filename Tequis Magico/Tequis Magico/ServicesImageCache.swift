//
//  ImageCache.swift
//  Tequis Magico
//
//  Created by Bernardo Ramírez on 02/09/2026.
//

import UIKit

/// Cache en memoria de fotos ya descargadas — evita re-descargar la misma imagen al
/// reaparecer una vista (scroll de vuelta, tab switch, etc.) y sirve de base para el
/// reintento automático de `RetryableAsyncImage` y para conseguir una `UIImage` real
/// que compartir por iMessage (`ShareLink`/`SharePreview` necesitan la imagen ya en memoria).
actor ImageCache {
    static let shared = ImageCache()

    private var cache: [String: UIImage] = [:]
    private var inFlight: [String: Task<UIImage?, Never>] = [:]

    func cachedImage(for urlString: String) -> UIImage? {
        cache[urlString]
    }

    func load(_ urlString: String) async -> UIImage? {
        if let cached = cache[urlString] { return cached }
        if let existing = inFlight[urlString] { return await existing.value }

        let task = Task<UIImage?, Never> {
            guard let url = URL(string: urlString),
                  let (data, response) = try? await URLSession.shared.data(from: url),
                  let http = response as? HTTPURLResponse, (200..<300).contains(http.statusCode),
                  let image = UIImage(data: data) else {
                return nil
            }
            return image
        }
        inFlight[urlString] = task
        let image = await task.value
        inFlight[urlString] = nil
        if let image {
            cache[urlString] = image
        }
        return image
    }
}
