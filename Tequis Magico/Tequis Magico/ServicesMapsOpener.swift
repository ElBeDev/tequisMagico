//
//  MapsOpener.swift
//  Tequis Magico
//
//  Created by Bernardo Ramírez on 02/09/2026.
//

import Foundation
import MapKit
import UIKit

/// Abre direcciones hacia un lugar en Apple Maps o Google Maps (si está instalado).
enum MapsOpener {
    static func isGoogleMapsInstalled() -> Bool {
        guard let url = URL(string: "comgooglemaps://") else { return false }
        return UIApplication.shared.canOpenURL(url)
    }

    static func openAppleMaps(coordinate: CLLocationCoordinate2D, name: String) {
        let mapItem = MKMapItem(placemark: MKPlacemark(coordinate: coordinate))
        mapItem.name = name
        mapItem.openInMaps(launchOptions: [
            MKLaunchOptionsDirectionsModeKey: MKLaunchOptionsDirectionsModeDriving
        ])
    }

    static func openGoogleMaps(coordinate: CLLocationCoordinate2D, name: String) {
        let appURLString = "comgooglemaps://?daddr=\(coordinate.latitude),\(coordinate.longitude)&directionsmode=driving"
        if let appURL = URL(string: appURLString), UIApplication.shared.canOpenURL(appURL) {
            UIApplication.shared.open(appURL)
            return
        }
        // Sin la app instalada, cae al navegador.
        let webURLString = "https://www.google.com/maps/dir/?api=1&destination=\(coordinate.latitude),\(coordinate.longitude)"
        if let webURL = URL(string: webURLString) {
            UIApplication.shared.open(webURL)
        }
    }
}
