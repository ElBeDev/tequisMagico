//
//  ProfileView.swift
//  Tequis Magico
//
//  Created by Bernardo Ramírez on 02/09/2026.
//

import SwiftUI

struct ProfileView: View {
    @State private var isPremium = false
    @State private var showingSettings = false
    
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
                        Text("0")
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
                        Text("Términos y Condiciones")
                            .navigationTitle("Términos")
                    } label: {
                        Label("Términos y Condiciones", systemImage: "doc.text")
                    }
                    
                    NavigationLink {
                        Text("Política de Privacidad")
                            .navigationTitle("Privacidad")
                    } label: {
                        Label("Política de Privacidad", systemImage: "hand.raised")
                    }
                    
                    NavigationLink {
                        Text("Contacto")
                            .navigationTitle("Contacto")
                    } label: {
                        Label("Contacto", systemImage: "envelope")
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

#Preview {
    ProfileView()
}
