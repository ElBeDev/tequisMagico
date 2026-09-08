//
//  ProfileView.swift
//  Tequis Magico
//
//  Created by Bernardo Ramírez on 02/09/2026.
//

import SwiftUI
import SwiftData

struct ProfileView: View {
    @Query private var places: [Place]
    @State private var isPremium = false
    @State private var showingSettings = false

    private var favoritesCount: Int {
        places.filter(\.isFavorite).count
    }
    
    var body: some View {
        NavigationStack {
            List {
                // MARK: - User Info
                Section {
                    HStack(spacing: 16) {
                        Circle()
                            .fill(.orange.gradient)
                            .frame(width: 70, height: 70)
                            .overlay {
                                Image(systemName: "person.fill")
                                    .font(.system(size: 30))
                                    .foregroundStyle(.white)
                            }
                        
                        VStack(alignment: .leading, spacing: 4) {
                            Text("Usuario")
                                .font(.title2)
                                .fontWeight(.bold)
                            
                            Text(isPremium ? "Miembro Premium" : "Cuenta Gratuita")
                                .font(.subheadline)
                                .foregroundStyle(.secondary)
                        }
                        
                        Spacer()
                    }
                    .padding(.vertical, 8)
                }
                
                // MARK: - Premium Section
                if !isPremium {
                    Section {
                        VStack(alignment: .leading, spacing: 12) {
                            HStack {
                                Image(systemName: "crown.fill")
                                    .foregroundStyle(.yellow)
                                Text("Obtén Premium")
                                    .font(.headline)
                            }
                            
                            Text("Desbloquea rutas personalizadas, modo offline, cupones exclusivos y más")
                                .font(.subheadline)
                                .foregroundStyle(.secondary)
                            
                            Button {
                                // TODO: Mostrar paywall de StoreKit
                            } label: {
                                Text("Ver planes")
                                    .font(.headline)
                                    .frame(maxWidth: .infinity)
                                    .padding()
                                    .background(.orange)
                                    .foregroundStyle(.white)
                                    .clipShape(RoundedRectangle(cornerRadius: 10))
                            }
                        }
                        .padding(.vertical, 8)
                    }
                }
                
                // MARK: - Stats
                Section("Estadísticas") {
                    HStack {
                        Label("Lugares visitados", systemImage: "mappin.circle")
                        Spacer()
                        Text("0")
                            .foregroundStyle(.secondary)
                    }
                    
                    HStack {
                        Label("Favoritos", systemImage: "heart")
                        Spacer()
                        Text("\(favoritesCount)")
                            .foregroundStyle(.secondary)
                    }
                    
                    HStack {
                        Label("Reseñas escritas", systemImage: "star")
                        Spacer()
                        Text("0")
                            .foregroundStyle(.secondary)
                    }
                }
                
                // MARK: - Actions
                Section("Configuración") {
                    NavigationLink {
                        Text("Notificaciones")
                            .navigationTitle("Notificaciones")
                    } label: {
                        Label("Notificaciones", systemImage: "bell")
                    }
                    
                    NavigationLink {
                        Text("Idioma")
                            .navigationTitle("Idioma")
                    } label: {
                        Label("Idioma", systemImage: "globe")
                    }
                    
                    Button {
                        // TODO: Limpiar caché
                    } label: {
                        Label("Limpiar caché", systemImage: "trash")
                    }
                }
                
                // MARK: - Info
                Section("Acerca de") {
                    NavigationLink {
                        LegalTermsView()
                    } label: {
                        Label("Términos y Condiciones", systemImage: "doc.text")
                    }

                    NavigationLink {
                        LegalPrivacyView()
                    } label: {
                        Label("Política de Privacidad", systemImage: "hand.raised")
                    }

                    NavigationLink {
                        ContactView()
                    } label: {
                        Label("Contacto", systemImage: "envelope")
                    }

                    NavigationLink {
                        PhotoCreditsView()
                    } label: {
                        Label("Créditos de fotos", systemImage: "camera")
                    }

                    HStack {
                        Label("Versión", systemImage: "info.circle")
                        Spacer()
                        Text("1.0.0")
                            .foregroundStyle(.secondary)
                    }
                }
                
                // MARK: - Debug Section (Solo en desarrollo)
                #if DEBUG
                Section("Desarrollo") {
                    Button {
                        isPremium.toggle()
                    } label: {
                        Label("Toggle Premium (Debug)", systemImage: "hammer")
                    }
                }
                #endif
            }
            .navigationTitle("Perfil")
        }
    }
}

// MARK: - Créditos de fotos
/// Atribución requerida por las licencias CC de las fotos de Wikimedia Commons
/// usadas como imagen representativa por categoría (ver database/IMAGE_CREDITS.md).
private struct PhotoCredit: Identifiable {
    let id = UUID()
    let title: String
    let author: String
    let license: String
    let fileURL: URL
}

private let photoCredits: [PhotoCredit] = [
    PhotoCredit(title: "Plaza principal en Tequisquiapan", author: "A01651034 MaferGonzález", license: "CC BY-SA 4.0", fileURL: URL(string: "https://commons.wikimedia.org/wiki/File:Plaza_principal_en_Tequisquiapan.jpg")!),
    PhotoCredit(title: "Iglesia Tequisquiapan", author: "A01197141 Zuriel", license: "CC BY-SA 4.0", fileURL: URL(string: "https://commons.wikimedia.org/wiki/File:Iglesia_Tequisquiapan.jpg")!),
    PhotoCredit(title: "Portales de Tequisquiapan", author: "A01703787 Edith", license: "CC BY-SA 4.0", fileURL: URL(string: "https://commons.wikimedia.org/wiki/File:Portales_de_Tequisquiapan.jpg")!),
    PhotoCredit(title: "Globos Querétaro", author: "Melissaromeroor", license: "CC BY-SA 4.0", fileURL: URL(string: "https://commons.wikimedia.org/wiki/File:Globos_Quer%C3%A9taro.jpg")!),
    PhotoCredit(title: "Cata de quesos y vino", author: "Axel Ricardo Ramos Muñoz", license: "CC BY-SA 4.0", fileURL: URL(string: "https://commons.wikimedia.org/wiki/File:Cata_de_quesos_y_vino.jpg")!),
    PhotoCredit(title: "Tequis Hotel Pool", author: "Carl Campbell", license: "CC BY 2.0", fileURL: URL(string: "https://commons.wikimedia.org/wiki/File:Tequis_Hotel_Pool_(4)_-_Flickr_-_Carl_Campbell.jpg")!),
    PhotoCredit(title: "Gastronomía mexicana", author: "Enrique Damián", license: "CC BY-SA 4.0", fileURL: URL(string: "https://commons.wikimedia.org/wiki/File:Gastronom%C3%ADa_mexicana.jpg")!),
    PhotoCredit(title: "Artesanías en Tequisquiapan", author: "WikiMZC", license: "CC BY-SA 4.0", fileURL: URL(string: "https://commons.wikimedia.org/wiki/File:Artesan%C3%ADas_en_Tequisquiapan.jpg")!),
]

struct PhotoCreditsView: View {
    var body: some View {
        List {
            Section {
                Text("Las fotos de lugares y eventos son representativas por categoría, tomadas de Wikimedia Commons bajo licencias Creative Commons que requieren atribución.")
                    .font(.footnote)
                    .foregroundStyle(.secondary)
            }
            Section("Fotografías") {
                ForEach(photoCredits) { credit in
                    Link(destination: credit.fileURL) {
                        VStack(alignment: .leading, spacing: 2) {
                            Text(credit.title)
                                .foregroundStyle(.primary)
                            Text("\(credit.author) · \(credit.license)")
                                .font(.caption)
                                .foregroundStyle(.secondary)
                        }
                    }
                }
            }
        }
        .navigationTitle("Créditos de fotos")
    }
}

#Preview {
    ProfileView()
}
