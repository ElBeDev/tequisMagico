//
//  LocationService.swift
//  Tequis Magico
//
//  Created by Bernardo Ramírez on 02/09/2026.
//

import CoreLocation
import Observation

/// Ubicación del usuario, pedida solo cuando la toca (nunca al arrancar la app).
/// La app es de un solo destino, así que "cerca de mí" solo tiene sentido si el usuario
/// de verdad está en Tequisquiapan — si está lejos, avisamos en vez de mostrar algo vacío.
@Observable
final class LocationService: NSObject, CLLocationManagerDelegate {
    private let manager = CLLocationManager()
    private static let tequisquiapanCenter = CLLocation(latitude: 20.5213, longitude: -99.8936)
    private static let nearbyRadiusMeters: CLLocationDistance = 25_000 // cubre el pueblo y los viñedos de alrededor

    private(set) var authorizationStatus: CLAuthorizationStatus
    private(set) var userLocation: CLLocation?
    /// Se pone en true justo después de un requestLocation() que resultó lejos de Tequisquiapan,
    /// para que la vista muestre el aviso una sola vez por intento.
    var didRequestButIsFar = false

    var isNearTequisquiapan: Bool {
        guard let userLocation else { return false }
        return userLocation.distance(from: Self.tequisquiapanCenter) <= Self.nearbyRadiusMeters
    }

    override init() {
        authorizationStatus = manager.authorizationStatus
        super.init()
        manager.delegate = self
    }

    func requestLocation() {
        didRequestButIsFar = false
        switch manager.authorizationStatus {
        case .notDetermined:
            manager.requestWhenInUseAuthorization()
        case .authorizedWhenInUse, .authorizedAlways:
            manager.requestLocation()
        default:
            break
        }
    }

    func distanceInKilometers(from coordinate: CLLocationCoordinate2D) -> Double? {
        guard let userLocation else { return nil }
        let target = CLLocation(latitude: coordinate.latitude, longitude: coordinate.longitude)
        return userLocation.distance(from: target) / 1000
    }

    func locationManagerDidChangeAuthorization(_ manager: CLLocationManager) {
        authorizationStatus = manager.authorizationStatus
        if authorizationStatus == .authorizedWhenInUse || authorizationStatus == .authorizedAlways {
            manager.requestLocation()
        }
    }

    func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
        guard let location = locations.last else { return }
        userLocation = location
        didRequestButIsFar = !isNearTequisquiapan
    }

    func locationManager(_ manager: CLLocationManager, didFailWithError error: Error) {
        // Sin acceso a ubicación (denegado, sin señal, etc.) — no rompemos nada, la app sigue
        // funcionando con la región fija de Tequisquiapan.
    }
}
