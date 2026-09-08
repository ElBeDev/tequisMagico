//
//  PlaceDetailView.swift
//  Tequis Magico
//
//  Created by Bernardo Ramírez on 02/09/2026.
//

import SwiftUI
import SwiftData
import MapKit

struct PlaceDetailView: View {
    @Bindable var place: Place
    @Environment(\.modelContext) private var modelContext
    @State private var selectedImageIndex = 0
    @State private var showingMapsChoice = false
    
    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 0) {
                // MARK: - Galería de Imágenes
                TabView(selection: $selectedImageIndex) {
                    if place.hasPhotos {
                        ForEach(Array(place.imageURLs.enumerated()), id: \.offset) { index, imageURL in
                            AsyncImage(url: URL(string: imageURL)) { image in
                                image
                                    .resizable()
                                    .aspectRatio(contentMode: .fill)
                            } placeholder: {
                                Rectangle()
                                    .fill(place.category.color.opacity(0.3))
                                    .overlay {
                                        ProgressView()
                                    }
                            }
                            .tag(index)
                        }
                    } else {
                        Rectangle()
                            .fill(place.category.color.gradient)
                            .overlay {
                                Image(systemName: place.category.icon)
                                    .font(.system(size: 80))
                                    .foregroundStyle(.white.opacity(0.5))
                            }
                            .tag(0)
                    }
                }
                .frame(height: 300)
                .tabViewStyle(.page)
                .indexViewStyle(.page(backgroundDisplayMode: .always))
                
                VStack(alignment: .leading, spacing: 20) {
                    // MARK: - Header
                    VStack(alignment: .leading, spacing: 8) {
                        HStack {
                            VStack(alignment: .leading, spacing: 4) {
                                Text(place.name)
                                    .font(.title)
                                    .fontWeight(.bold)
                                
                                Text(place.subcategory)
                                    .font(.subheadline)
                                    .foregroundStyle(.secondary)
                            }
                            
                            Spacer()
                            
                            // Botón favorito
                            Button {
                                place.isFavorite.toggle()
                                try? modelContext.save()
                            } label: {
                                Image(systemName: place.isFavorite ? "heart.fill" : "heart")
                                    .font(.title2)
                                    .foregroundStyle(.red)
                            }
                        }
                        
                        // Rating y Reviews
                        if place.rating > 0 {
                            HStack(spacing: 4) {
                                ForEach(0..<5) { index in
                                    Image(systemName: index < Int(place.rating) ? "star.fill" : "star")
                                        .font(.caption)
                                        .foregroundStyle(.yellow)
                                }
                                
                                Text(String(format: "%.1f", place.rating))
                                    .font(.subheadline)
                                    .fontWeight(.semibold)
                                
                                Text("(\(place.reviewsCount) reseñas)")
                                    .font(.caption)
                                    .foregroundStyle(.secondary)
                            }
                        }
                        
                        // Badges
                        HStack(spacing: 8) {
                            Label(place.category.rawValue, systemImage: place.category.icon)
                                .font(.caption)
                                .padding(.horizontal, 10)
                                .padding(.vertical, 6)
                                .background(place.category.color.opacity(0.2))
                                .foregroundStyle(place.category.color)
                                .clipShape(Capsule())
                            
                            Text(place.priceRange.rawValue)
                                .font(.caption)
                                .padding(.horizontal, 10)
                                .padding(.vertical, 6)
                                .background(Color.gray.opacity(0.2))
                                .foregroundStyle(.secondary)
                                .clipShape(Capsule())
                            
                            if place.isVerified {
                                Label("Verificado", systemImage: "checkmark.seal.fill")
                                    .font(.caption)
                                    .padding(.horizontal, 10)
                                    .padding(.vertical, 6)
                                    .background(Color.blue.opacity(0.2))
                                    .foregroundStyle(.blue)
                                    .clipShape(Capsule())
                            }
                            
                            if place.isPremiumBusiness {
                                Label("Premium", systemImage: "star.fill")
                                    .font(.caption)
                                    .padding(.horizontal, 10)
                                    .padding(.vertical, 6)
                                    .background(Color.yellow.opacity(0.2))
                                    .foregroundStyle(.yellow)
                                    .clipShape(Capsule())
                            }
                        }
                    }
                    
                    Divider()
                    
                    // MARK: - Descripción
                    VStack(alignment: .leading, spacing: 8) {
                        Text("Acerca de")
                            .font(.headline)
                        
                        Text(place.fullDescription)
                            .font(.body)
                            .foregroundStyle(.primary)
                    }
                    
                    Divider()
                    
                    // MARK: - Ubicación
                    VStack(alignment: .leading, spacing: 12) {
                        Text("Ubicación")
                            .font(.headline)
                        
                        Label {
                            Text(place.address)
                                .font(.subheadline)
                        } icon: {
                            Image(systemName: "mappin.circle.fill")
                                .foregroundStyle(place.category.color)
                        }
                        
                        // Mini mapa
                        Map(position: .constant(.region(
                            MKCoordinateRegion(
                                center: place.coordinate,
                                span: MKCoordinateSpan(latitudeDelta: 0.01, longitudeDelta: 0.01)
                            )
                        ))) {
                            Marker(place.name, coordinate: place.coordinate)
                                .tint(place.category.color)
                        }
                        .frame(height: 200)
                        .clipShape(RoundedRectangle(cornerRadius: 12))
                        .allowsHitTesting(false)
                    }
                    
                    // MARK: - Horarios
                    if !scheduleEntries.isEmpty {
                        Divider()

                        VStack(alignment: .leading, spacing: 8) {
                            Text("Horarios")
                                .font(.headline)

                            ForEach(scheduleEntries, id: \.day) { entry in
                                HStack {
                                    Text(entry.day.capitalized)
                                        .font(.subheadline)
                                    Spacer()
                                    Text(entry.hours)
                                        .font(.subheadline)
                                        .foregroundStyle(.secondary)
                                }
                            }
                        }
                    }

                    // MARK: - Amenities
                    if !place.amenities.isEmpty {
                        Divider()
                        
                        VStack(alignment: .leading, spacing: 12) {
                            Text("Servicios y amenidades")
                                .font(.headline)
                            
                            FlowLayout(spacing: 8) {
                                ForEach(place.amenities, id: \.self) { amenity in
                                    HStack(spacing: 6) {
                                        Image(systemName: "checkmark.circle.fill")
                                            .font(.caption2)
                                            .foregroundStyle(.green)
                                        Text(amenity)
                                            .font(.subheadline)
                                    }
                                    .padding(.horizontal, 12)
                                    .padding(.vertical, 8)
                                    .background(Color.gray.opacity(0.1))
                                    .clipShape(Capsule())
                                }
                            }
                        }
                    }
                    
                    // MARK: - Contacto
                    if place.phoneNumber != nil || place.website != nil {
                        Divider()
                        
                        VStack(alignment: .leading, spacing: 12) {
                            Text("Contacto")
                                .font(.headline)
                            
                            if let phone = place.phoneNumber {
                                Button {
                                    callPhone(number: phone)
                                } label: {
                                    HStack {
                                        Image(systemName: "phone.fill")
                                            .foregroundStyle(.green)
                                        Text(phone)
                                            .foregroundStyle(.primary)
                                        Spacer()
                                        Image(systemName: "chevron.right")
                                            .font(.caption)
                                            .foregroundStyle(.secondary)
                                    }
                                }
                            }
                            
                            if let website = place.website {
                                Link(destination: URL(string: website)!) {
                                    HStack {
                                        Image(systemName: "globe")
                                            .foregroundStyle(.blue)
                                        Text("Sitio web")
                                            .foregroundStyle(.primary)
                                        Spacer()
                                        Image(systemName: "arrow.up.right")
                                            .font(.caption)
                                            .foregroundStyle(.secondary)
                                    }
                                }
                            }
                            
                            if let whatsapp = place.whatsappNumber {
                                Button {
                                    openWhatsApp(number: whatsapp)
                                } label: {
                                    HStack {
                                        Image(systemName: "message.fill")
                                            .foregroundStyle(.green)
                                        Text("WhatsApp")
                                            .foregroundStyle(.primary)
                                        Spacer()
                                        Image(systemName: "chevron.right")
                                            .font(.caption)
                                            .foregroundStyle(.secondary)
                                    }
                                }
                            }
                        }
                    }
                    
                    // MARK: - Botones de Acción
                    VStack(spacing: 12) {
                        Button {
                            if MapsOpener.isGoogleMapsInstalled() {
                                showingMapsChoice = true
                            } else {
                                MapsOpener.openAppleMaps(coordinate: place.coordinate, name: place.name)
                            }
                        } label: {
                            Label("Cómo llegar", systemImage: "arrow.triangle.turn.up.right.circle.fill")
                                .font(.headline)
                                .frame(maxWidth: .infinity)
                                .padding()
                                .background(place.category.color)
                                .foregroundStyle(.white)
                                .clipShape(RoundedRectangle(cornerRadius: 12))
                        }
                        .confirmationDialog("Abrir direcciones en...", isPresented: $showingMapsChoice, titleVisibility: .visible) {
                            Button("Apple Maps") {
                                MapsOpener.openAppleMaps(coordinate: place.coordinate, name: place.name)
                            }
                            Button("Google Maps") {
                                MapsOpener.openGoogleMaps(coordinate: place.coordinate, name: place.name)
                            }
                            Button("Cancelar", role: .cancel) {}
                        }

                        ShareLink(
                            item: shareURL,
                            subject: Text(place.name),
                            message: Text(place.shortDescription),
                            preview: SharePreview(place.name)
                        ) {
                            Label("Compartir", systemImage: "square.and.arrow.up")
                                .font(.headline)
                                .frame(maxWidth: .infinity)
                                .padding()
                                .background(Color.gray.opacity(0.2))
                                .foregroundStyle(.primary)
                                .clipShape(RoundedRectangle(cornerRadius: 12))
                        }
                    }
                }
                .padding()
            }
        }
        .navigationBarTitleDisplayMode(.inline)
        .ignoresSafeArea(edges: .top)
    }
    
    // MARK: - Actions
    private func callPhone(number: String) {
        let cleanNumber = number.components(separatedBy: CharacterSet.decimalDigits.inverted).joined()
        if let url = URL(string: "tel://\(cleanNumber)") {
            UIApplication.shared.open(url)
        }
    }
    
    private func openWhatsApp(number: String) {
        let cleanNumber = number.components(separatedBy: CharacterSet.decimalDigits.inverted).joined()
        if let url = URL(string: "https://wa.me/\(cleanNumber)") {
            UIApplication.shared.open(url)
        }
    }
    
    private var shareURL: URL {
        URL(string: "tequismagico://place/\(place.id.uuidString)")!
    }

    /// `place.scheduleJSON` es texto JSON crudo, ej. {"lunes":"9:00-18:00",...} — casi siempre nil hoy
    /// (el panel de admin recién lo puede capturar, la mayoría de los 50 lugares no lo tienen).
    private var scheduleEntries: [(day: String, hours: String)] {
        guard let json = place.scheduleJSON, let data = json.data(using: .utf8),
              let dict = try? JSONDecoder().decode([String: String].self, from: data) else {
            return []
        }
        let order = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"]
        return dict.sorted { lhs, rhs in
            let l = order.firstIndex(of: lhs.key.lowercased()) ?? order.count
            let r = order.firstIndex(of: rhs.key.lowercased()) ?? order.count
            return l < r
        }.map { (day: $0.key, hours: $0.value) }
    }
}

#Preview {
    NavigationStack {
        PlaceDetailView(place: .sample)
    }
}
