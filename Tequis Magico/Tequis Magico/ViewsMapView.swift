//
//  MapView.swift
//  Tequis Magico
//
//  Created by Bernardo Ramírez on 02/09/2026.
//

import SwiftUI
import MapKit
import SwiftData

struct MapView: View {
    @Environment(\.modelContext) private var modelContext
    @Environment(LocationService.self) private var locationService
    @Query private var places: [Place]

    @State private var cameraPosition: MapCameraPosition = .region(
        MKCoordinateRegion(
            center: CLLocationCoordinate2D(latitude: 20.5213, longitude: -99.8936), // Centro de Tequisquiapan
            span: MKCoordinateSpan(latitudeDelta: 0.05, longitudeDelta: 0.05)
        )
    )

    @State private var selectedPlace: Place?
    @State private var selectedCategory: PlaceCategory?
    @State private var showFarAwayAlert = false
    
    var filteredPlaces: [Place] {
        if let category = selectedCategory {
            return places.filter { $0.category == category && $0.isActive }
        }
        return places.filter { $0.isActive }
    }
    
    var body: some View {
        ZStack(alignment: .top) {
            // MARK: - Mapa
            Map(position: $cameraPosition) {
                UserAnnotation()
                ForEach(filteredPlaces, id: \.id) { place in
                    Annotation(place.name, coordinate: place.coordinate) {
                        PlaceAnnotationView(place: place)
                            .onTapGesture {
                                selectedPlace = place
                            }
                    }
                }
            }
            .mapStyle(.standard(elevation: .realistic))
            .ignoresSafeArea()

            // MARK: - Botón de "mi ubicación"
            VStack {
                Spacer()
                HStack {
                    Spacer()
                    Button {
                        locationService.requestLocation()
                    } label: {
                        Image(systemName: "location.fill")
                            .font(.title3)
                            .foregroundStyle(.white)
                            .frame(width: 48, height: 48)
                            .background(.orange, in: Circle())
                            .shadow(color: .black.opacity(0.2), radius: 4, y: 2)
                    }
                    .padding(.trailing)
                    .padding(.bottom, 24)
                }
            }

            // MARK: - Filtros de Categoría
            ScrollView(.horizontal, showsIndicators: false) {
                HStack(spacing: 12) {
                    // Botón "Todos"
                    CategoryFilterButton(
                        title: "Todos",
                        icon: "map.fill",
                        color: .blue,
                        isSelected: selectedCategory == nil
                    ) {
                        selectedCategory = nil
                    }
                    
                    // Categorías
                    ForEach(PlaceCategory.allCases, id: \.self) { category in
                        CategoryFilterButton(
                            title: category.rawValue,
                            icon: category.icon,
                            color: category.color,
                            isSelected: selectedCategory == category
                        ) {
                            selectedCategory = category
                        }
                    }
                }
                .padding(.horizontal)
            }
            .padding(.top, 60)
        }
        .sheet(item: $selectedPlace) { place in
            PlaceDetailSheet(place: place)
                .presentationDetents([.medium, .large])
                .presentationDragIndicator(.visible)
        }
        .onChange(of: locationService.userLocation) { _, newLocation in
            guard let newLocation else { return }
            if locationService.isNearTequisquiapan {
                withAnimation {
                    cameraPosition = .region(
                        MKCoordinateRegion(
                            center: newLocation.coordinate,
                            span: MKCoordinateSpan(latitudeDelta: 0.02, longitudeDelta: 0.02)
                        )
                    )
                }
            } else {
                showFarAwayAlert = true
            }
        }
        .alert("Pareces estar lejos de Tequisquiapan", isPresented: $showFarAwayAlert) {
            Button("Entendido", role: .cancel) {}
        } message: {
            Text("\"Cerca de mí\" te sirve cuando ya estés por aquí — actívalo de nuevo cuando llegues.")
        }
    }
}

// MARK: - Anotación Personalizada
struct PlaceAnnotationView: View {
    let place: Place
    
    var body: some View {
        ZStack {
            // Fondo con color de categoría
            Circle()
                .fill(place.category.color.gradient)
                .frame(width: 44, height: 44)
                .shadow(color: .black.opacity(0.2), radius: 4, x: 0, y: 2)
            
            // Ícono
            Image(systemName: place.category.icon)
                .font(.system(size: 18, weight: .semibold))
                .foregroundStyle(.white)
            
            // Badge para negocios premium
            if place.isPremiumBusiness {
                Image(systemName: "star.fill")
                    .font(.system(size: 10))
                    .foregroundStyle(.yellow)
                    .offset(x: 15, y: -15)
            }
        }
    }
}

// MARK: - Botón de Filtro de Categoría
struct CategoryFilterButton: View {
    let title: String
    let icon: String
    let color: Color
    let isSelected: Bool
    let action: () -> Void
    
    var body: some View {
        Button(action: action) {
            HStack(spacing: 6) {
                Image(systemName: icon)
                    .font(.system(size: 14, weight: .semibold))
                Text(title)
                    .font(.subheadline)
                    .fontWeight(.medium)
            }
            .padding(.horizontal, 16)
            .padding(.vertical, 10)
            .background(
                Capsule()
                    .fill(isSelected ? color : Color(.systemBackground))
                    .shadow(color: .black.opacity(0.1), radius: 4, x: 0, y: 2)
            )
            .foregroundStyle(isSelected ? .white : .primary)
            .overlay(
                Capsule()
                    .strokeBorder(isSelected ? Color.clear : Color.gray.opacity(0.3), lineWidth: 1)
            )
        }
        .buttonStyle(.plain)
    }
}

// MARK: - Sheet de Detalle
struct PlaceDetailSheet: View {
    let place: Place
    @Environment(\.dismiss) private var dismiss
    @State private var showingMapsChoice = false
    
    var body: some View {
        NavigationStack {
            ScrollView {
                VStack(alignment: .leading, spacing: 16) {
                    // MARK: - Imagen Principal
                    if let thumbnailURL = place.thumbnailURL {
                        AsyncImage(url: URL(string: thumbnailURL)) { image in
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
                        .frame(height: 200)
                        .clipped()
                    } else {
                        // Placeholder
                        Rectangle()
                            .fill(place.category.color.gradient)
                            .frame(height: 200)
                            .overlay {
                                Image(systemName: place.category.icon)
                                    .font(.system(size: 60))
                                    .foregroundStyle(.white.opacity(0.5))
                            }
                    }
                    
                    VStack(alignment: .leading, spacing: 12) {
                        // MARK: - Header
                        HStack {
                            VStack(alignment: .leading, spacing: 4) {
                                Text(place.name)
                                    .font(.title2)
                                    .fontWeight(.bold)
                                
                                Text(place.subcategory)
                                    .font(.subheadline)
                                    .foregroundStyle(.secondary)
                            }
                            
                            Spacer()
                            
                            // Rating
                            if place.rating > 0 {
                                HStack(spacing: 4) {
                                    Image(systemName: "star.fill")
                                        .font(.caption)
                                        .foregroundStyle(.yellow)
                                    Text(String(format: "%.1f", place.rating))
                                        .font(.subheadline)
                                        .fontWeight(.semibold)
                                }
                            }
                        }
                        
                        // MARK: - Badges
                        HStack(spacing: 8) {
                            // Categoría
                            Label(place.category.rawValue, systemImage: place.category.icon)
                                .font(.caption)
                                .padding(.horizontal, 10)
                                .padding(.vertical, 6)
                                .background(place.category.color.opacity(0.2))
                                .foregroundStyle(place.category.color)
                                .clipShape(Capsule())
                            
                            // Precio
                            Text(place.priceRange.rawValue)
                                .font(.caption)
                                .padding(.horizontal, 10)
                                .padding(.vertical, 6)
                                .background(Color.gray.opacity(0.2))
                                .foregroundStyle(.secondary)
                                .clipShape(Capsule())
                            
                            // Verificado
                            if place.isVerified {
                                Image(systemName: "checkmark.seal.fill")
                                    .font(.caption)
                                    .foregroundStyle(.blue)
                            }
                        }
                        
                        Divider()
                        
                        // MARK: - Descripción
                        Text(place.fullDescription)
                            .font(.body)
                            .foregroundStyle(.primary)
                        
                        // MARK: - Dirección
                        Label {
                            Text(place.address)
                                .font(.subheadline)
                        } icon: {
                            Image(systemName: "mappin.circle.fill")
                                .foregroundStyle(place.category.color)
                        }
                        
                        // MARK: - Amenities
                        if !place.amenities.isEmpty {
                            Divider()
                            
                            VStack(alignment: .leading, spacing: 8) {
                                Text("Servicios")
                                    .font(.headline)
                                
                                FlowLayout(spacing: 8) {
                                    ForEach(place.amenities, id: \.self) { amenity in
                                        Text(amenity)
                                            .font(.caption)
                                            .padding(.horizontal, 10)
                                            .padding(.vertical, 6)
                                            .background(Color.gray.opacity(0.15))
                                            .clipShape(Capsule())
                                    }
                                }
                            }
                        }
                        
                        // MARK: - Botones de Acción
                        VStack(spacing: 12) {
                            // Cómo llegar
                            Button {
                                if MapsOpener.isGoogleMapsInstalled() {
                                    showingMapsChoice = true
                                } else {
                                    MapsOpener.openAppleMaps(coordinate: place.coordinate, name: place.name)
                                }
                            } label: {
                                Label("Cómo llegar", systemImage: "arrow.triangle.turn.up.right.circle.fill")
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
                            
                            // Llamar (si tiene teléfono)
                            if let phone = place.phoneNumber, !phone.isEmpty {
                                Button {
                                    callPhone(number: phone)
                                } label: {
                                    Label("Llamar", systemImage: "phone.fill")
                                        .frame(maxWidth: .infinity)
                                        .padding()
                                        .background(Color.green)
                                        .foregroundStyle(.white)
                                        .clipShape(RoundedRectangle(cornerRadius: 12))
                                }
                            }
                        }
                    }
                    .padding()
                }
            }
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .topBarTrailing) {
                    Button {
                        dismiss()
                    } label: {
                        Image(systemName: "xmark.circle.fill")
                            .font(.title3)
                            .foregroundStyle(.secondary)
                    }
                }
            }
        }
    }
    
    private func callPhone(number: String) {
        let cleanNumber = number.components(separatedBy: CharacterSet.decimalDigits.inverted).joined()
        if let url = URL(string: "tel://\(cleanNumber)") {
            UIApplication.shared.open(url)
        }
    }
}

// MARK: - Flow Layout (Para Amenities)
struct FlowLayout: Layout {
    var spacing: CGFloat = 8
    
    func sizeThatFits(proposal: ProposedViewSize, subviews: Subviews, cache: inout ()) -> CGSize {
        let result = FlowResult(
            in: proposal.replacingUnspecifiedDimensions().width,
            subviews: subviews,
            spacing: spacing
        )
        return result.size
    }
    
    func placeSubviews(in bounds: CGRect, proposal: ProposedViewSize, subviews: Subviews, cache: inout ()) {
        let result = FlowResult(
            in: bounds.width,
            subviews: subviews,
            spacing: spacing
        )
        for (index, subview) in subviews.enumerated() {
            subview.place(at: CGPoint(x: bounds.minX + result.frames[index].minX, y: bounds.minY + result.frames[index].minY), proposal: .unspecified)
        }
    }
    
    struct FlowResult {
        var size: CGSize
        var frames: [CGRect]
        
        init(in maxWidth: CGFloat, subviews: Subviews, spacing: CGFloat) {
            var frames: [CGRect] = []
            var currentX: CGFloat = 0
            var currentY: CGFloat = 0
            var lineHeight: CGFloat = 0
            
            for subview in subviews {
                let size = subview.sizeThatFits(.unspecified)
                
                if currentX + size.width > maxWidth && currentX > 0 {
                    currentX = 0
                    currentY += lineHeight + spacing
                    lineHeight = 0
                }
                
                frames.append(CGRect(origin: CGPoint(x: currentX, y: currentY), size: size))
                currentX += size.width + spacing
                lineHeight = max(lineHeight, size.height)
            }
            
            self.frames = frames
            self.size = CGSize(width: maxWidth, height: currentY + lineHeight)
        }
    }
}

#Preview {
    MapView()
        .modelContainer(for: [Place.self, Event.self], inMemory: true)
}
