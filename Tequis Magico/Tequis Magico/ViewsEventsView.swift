//
//  EventsView.swift
//  Tequis Magico
//
//  Created by Bernardo Ramírez on 02/09/2026.
//

import SwiftUI
import SwiftData

struct EventsView: View {
    @Environment(\.modelContext) private var modelContext
    @Query(sort: \Event.startDate) private var events: [Event]
    
    @State private var selectedSegment = 0
    
    var upcomingEvents: [Event] {
        events.filter { $0.isUpcoming && $0.isActive }
    }
    
    var happeningNow: [Event] {
        events.filter { $0.isHappening && $0.isActive }
    }
    
    var pastEvents: [Event] {
        events.filter { $0.isPast && $0.isActive }
    }
    
    var body: some View {
        NavigationStack {
            VStack {
                // MARK: - Segmented Control
                Picker("", selection: $selectedSegment) {
                    Text("Próximos").tag(0)
                    Text("En Curso").tag(1)
                    Text("Pasados").tag(2)
                }
                .pickerStyle(.segmented)
                .padding()
                
                // MARK: - Lista de Eventos
                ScrollView {
                    LazyVStack(spacing: 16) {
                        let displayEvents: [Event] = {
                            switch selectedSegment {
                            case 0: return upcomingEvents
                            case 1: return happeningNow
                            default: return pastEvents
                            }
                        }()
                        
                        if displayEvents.isEmpty {
                            ContentUnavailableView(
                                "No hay eventos",
                                systemImage: "calendar",
                                description: Text(selectedSegment == 0 ? "No hay eventos próximos" : selectedSegment == 1 ? "No hay eventos en curso" : "No hay eventos pasados")
                            )
                            .padding(.top, 100)
                        } else {
                            ForEach(displayEvents, id: \.id) { event in
                                EventCard(event: event)
                            }
                        }
                    }
                    .padding()
                }
                .refreshable {
                    await SyncService.syncEvents(existing: events, into: modelContext)
                }
            }
            .navigationTitle("Eventos")
        }
    }
}

// MARK: - Event Card
struct EventCard: View {
    let event: Event
    
    var body: some View {
        VStack(alignment: .leading, spacing: 0) {
            // Imagen
            Group {
                if let thumbnailURL = event.thumbnailURL {
                    AsyncImage(url: URL(string: thumbnailURL)) { image in
                        image
                            .resizable()
                            .aspectRatio(contentMode: .fill)
                    } placeholder: {
                        Rectangle()
                            .fill(.orange.opacity(0.3))
                            .overlay {
                                ProgressView()
                            }
                    }
                } else {
                    Rectangle()
                        .fill(.orange.gradient)
                        .overlay {
                            Image(systemName: "calendar")
                                .font(.system(size: 40))
                                .foregroundStyle(.white.opacity(0.5))
                        }
                }
            }
            .frame(height: 180)
            .clipped()
            
            // Info
            VStack(alignment: .leading, spacing: 12) {
                // Fecha
                HStack {
                    Image(systemName: "calendar")
                        .foregroundStyle(.orange)
                    Text(event.startDate, style: .date)
                        .font(.subheadline)
                        .foregroundStyle(.secondary)
                    
                    Spacer()
                    
                    if event.isFeatured {
                        Image(systemName: "star.fill")
                            .font(.caption)
                            .foregroundStyle(.yellow)
                    }
                }
                
                Text(event.title)
                    .font(.headline)
                    .foregroundStyle(.primary)
                
                Text(event.shortDescription)
                    .font(.subheadline)
                    .foregroundStyle(.secondary)
                    .lineLimit(2)
                
                HStack {
                    // Categoría
                    Text(event.category)
                        .font(.caption)
                        .padding(.horizontal, 8)
                        .padding(.vertical, 4)
                        .background(Color.orange.opacity(0.2))
                        .foregroundStyle(.orange)
                        .clipShape(Capsule())
                    
                    Spacer()
                    
                    // Precio
                    if event.isFree {
                        Text("Gratis")
                            .font(.caption)
                            .fontWeight(.semibold)
                            .foregroundStyle(.green)
                    } else if let price = event.ticketPrice {
                        Text(price)
                            .font(.caption)
                            .fontWeight(.semibold)
                            .foregroundStyle(.secondary)
                    }
                }
            }
            .padding()
        }
        .background(Color(.systemBackground))
        .clipShape(RoundedRectangle(cornerRadius: 16))
        .shadow(color: .black.opacity(0.05), radius: 8, x: 0, y: 2)
    }
}

#Preview {
    EventsView()
        .modelContainer(for: [Event.self], inMemory: true)
}
