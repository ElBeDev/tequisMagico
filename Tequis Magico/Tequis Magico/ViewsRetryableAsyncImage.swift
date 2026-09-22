//
//  RetryableAsyncImage.swift
//  Tequis Magico
//
//  Created by Bernardo Ramírez on 02/09/2026.
//

import SwiftUI

/// Reemplazo de `AsyncImage` con reintento automático (2 intentos extra con backoff) —
/// una foto que falla por un hipo de red ya no se queda pegada en el placeholder para
/// siempre. Usa `ImageCache` por debajo, así que reaparecer en pantalla no re-descarga.
struct RetryableAsyncImage<Content: View, PlaceholderView: View>: View {
    let urlString: String?
    @ViewBuilder var content: (Image) -> Content
    @ViewBuilder var placeholder: () -> PlaceholderView

    @State private var uiImage: UIImage?
    @State private var didFail = false

    private let maxRetries = 2

    var body: some View {
        Group {
            if let uiImage {
                content(Image(uiImage: uiImage))
            } else {
                placeholder()
            }
        }
        .task(id: urlString) {
            uiImage = nil
            didFail = false
            await loadWithRetries()
        }
    }

    private func loadWithRetries() async {
        guard let urlString, !urlString.isEmpty else {
            didFail = true
            return
        }
        for attempt in 0...maxRetries {
            if let image = await ImageCache.shared.load(urlString) {
                uiImage = image
                return
            }
            if attempt < maxRetries {
                try? await Task.sleep(for: .seconds(Double(attempt + 1)))
            }
        }
        didFail = true
    }
}
