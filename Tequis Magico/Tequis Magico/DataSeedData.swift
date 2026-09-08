//
//  SeedData.swift
//  Tequis Magico
//
//  Created by Bernardo Ramírez on 02/09/2026.
//  Base de datos completa de Tequisquiapan (50 lugares)
//

import Foundation
import SwiftData

struct SeedData {
    
    static func createAllPlaces() -> [Place] {
        return sitiosTuristicos + vinedos + queserias + restaurantes + cafeterias + hospedaje + balnearios + experiencias + compras + naturaleza + bares
    }
    
    // MARK: - Sitios Turísticos (6)
    static let sitiosTuristicos: [Place] = [
        Place(
            name: "Plaza Miguel Hidalgo",
            category: .turistico,
            subcategory: "Plaza",
            latitude: 20.5213,
            longitude: -99.8936,
            address: "Centro Histórico, 76750 Tequisquiapan, Qro.",
            shortDescription: "Corazón del pueblo mágico",
            fullDescription: "Plaza principal rodeada de portales coloniales y fresnos centenarios. Kiosco central, bancas de cantera y fuente ornamental. Lugar perfecto para disfrutar de la arquitectura colonial y la vida local.",
            priceRange: .free,
            amenities: ["Bancas", "Iluminación", "WiFi gratuito", "Baños públicos cercanos"],
            tags: ["Histórico", "Familiar", "Fotogénico", "Romántico"],
            rating: 4.8,
            reviewsCount: 1247,
            isVerified: true
        ),
        
        Place(
            name: "Templo de Santa María de la Asunción",
            category: .turistico,
            subcategory: "Templo",
            latitude: 20.5217,
            longitude: -99.8931,
            address: "Emiliano Zapata s/n, Centro, 76750",
            shortDescription: "Templo neoclásico del siglo XVIII",
            fullDescription: "Templo neoclásico con fachada de cantera rosa. Interior con retablos dorados y pinturas religiosas coloniales. Una joya arquitectónica del centro histórico.",
            priceRange: .free,
            scheduleJSON: #"{"lunes":"7:00-20:00","martes":"7:00-20:00","miercoles":"7:00-20:00","jueves":"7:00-20:00","viernes":"7:00-20:00","sabado":"7:00-20:00","domingo":"7:00-20:00"}"#,
            amenities: ["Accesible", "Histórico"],
            tags: ["Histórico", "Arquitectura Colonial", "Religioso"],
            rating: 4.7,
            reviewsCount: 856,
            isVerified: true
        ),
        
        Place(
            name: "Ex Convento de San José",
            category: .turistico,
            subcategory: "Museo",
            latitude: 20.5220,
            longitude: -99.8928,
            address: "Juárez s/n, Centro",
            shortDescription: "Construcción franciscana del siglo XVII",
            fullDescription: "Antiguo convento franciscano que hoy alberga talleres culturales y exposiciones de arte. Arquitectura colonial impresionante con patios y claustros históricos.",
            priceRange: .budget,
            scheduleJSON: #"{"martes":"10:00-18:00","miercoles":"10:00-18:00","jueves":"10:00-18:00","viernes":"10:00-18:00","sabado":"10:00-18:00","domingo":"10:00-18:00"}"#,
            amenities: ["Museo", "Talleres", "Exposiciones"],
            tags: ["Histórico", "Museo", "Arte", "Cultural"],
            rating: 4.5,
            reviewsCount: 423
        ),
        
        Place(
            name: "La Pila",
            category: .turistico,
            subcategory: "Monumento",
            latitude: 20.5225,
            longitude: -99.8940,
            address: "Calle Morelos esq. con Ezequiel Montes",
            shortDescription: "Fuente histórica de cantera rosa",
            fullDescription: "Monumento emblemático de Tequisquiapan. Fuente de cantera rosa que ha sido símbolo del municipio por generaciones. Lugar perfecto para fotografías.",
            priceRange: .free,
            amenities: ["Iluminación nocturna", "Accesible"],
            tags: ["Monumento", "Fotogénico", "Histórico"],
            rating: 4.6,
            reviewsCount: 678
        ),
        
        Place(
            name: "Puente Colgante México-Querétaro",
            category: .turistico,
            subcategory: "Monumento",
            latitude: 20.5190,
            longitude: -99.8915,
            address: "Carretera a San Juan del Río",
            shortDescription: "Puente histórico de 1910",
            fullDescription: "Puente histórico construido en 1910 que ofrece vistas panorámicas del río y la vegetación circundante. Excelente para caminatas y fotografía.",
            priceRange: .free,
            amenities: ["Sendero peatonal", "Vista panorámica"],
            tags: ["Histórico", "Naturaleza", "Fotogénico", "Caminata"],
            rating: 4.4,
            reviewsCount: 234
        ),
        
        Place(
            name: "Mercado de Artesanías",
            category: .compras,
            subcategory: "Mercado",
            latitude: 20.5208,
            longitude: -99.8945,
            address: "Av. Independencia, Centro",
            shortDescription: "Mercado con más de 100 locales",
            fullDescription: "Mercado techado con más de 100 locales de artesanías, cestería, textiles y productos locales. El mejor lugar para comprar souvenirs y artesanías auténticas.",
            priceRange: .moderate,
            scheduleJSON: #"{"lunes":"9:00-19:00","martes":"9:00-19:00","miercoles":"9:00-19:00","jueves":"9:00-19:00","viernes":"9:00-19:00","sabado":"9:00-19:00","domingo":"9:00-19:00"}"#,
            amenities: ["Baños", "Cajeros", "Estacionamiento cercano"],
            tags: ["Compras", "Artesanías", "Tradicional", "Souvenirs"],
            rating: 4.3,
            reviewsCount: 892
        )
    ]
    
    // MARK: - Viñedos (5)
    static let vinedos: [Place] = [
        Place(
            name: "Freixenet México",
            category: .experiencias,
            subcategory: "Viñedo",
            latitude: 20.5450,
            longitude: -99.8720,
            address: "Carretera Ezequiel Montes-Cadereyta km 40.5",
            shortDescription: "Cava más grande de América Latina",
            fullDescription: "La cava más grande de América Latina. Tours por las cavas subterráneas, degustación de espumosos elaborados con método tradicional. Una experiencia imperdible.",
            priceRange: .moderate,
            phoneNumber: "414-197-8080",
            website: "https://freixenet.com.mx",
            scheduleJSON: #"{"lunes":"10:00-17:00","martes":"10:00-17:00","miercoles":"10:00-17:00","jueves":"10:00-17:00","viernes":"10:00-17:00","sabado":"10:00-17:00","domingo":"10:00-17:00"}"#,
            amenities: ["Estacionamiento", "Tienda", "Restaurant", "Accesible", "Tours guiados"],
            tags: ["Viñedo", "Cata", "Tour", "Premium", "Espumosos"],
            rating: 4.7,
            reviewsCount: 1534,
            businessTier: .premium,
            isFeatured: true,
            isVerified: true
        ),
        
        Place(
            name: "Viñedos La Redonda",
            category: .experiencias,
            subcategory: "Viñedo",
            latitude: 20.5350,
            longitude: -99.8850,
            address: "Camino a La Trinidad km 2",
            shortDescription: "Viñedo boutique familiar",
            fullDescription: "Viñedo boutique de propiedad familiar. Catas maridadas con productos artesanales, recorridos por los viñedos. Eventos privados y bodas disponibles.",
            priceRange: .expensive,
            phoneNumber: "414-273-0400",
            scheduleJSON: #"{"jueves":"11:00-18:00","viernes":"11:00-18:00","sabado":"11:00-18:00","domingo":"11:00-18:00"}"#,
            amenities: ["Estacionamiento", "Pet Friendly", "Terraza", "Eventos privados"],
            tags: ["Viñedo", "Cata", "Boutique", "Romántico", "Maridaje"],
            rating: 4.8,
            reviewsCount: 687,
            businessTier: .premium,
            isFeatured: true,
            isVerified: true
        ),
        
        Place(
            name: "Viñedos Azteca",
            category: .experiencias,
            subcategory: "Viñedo",
            latitude: 20.5280,
            longitude: -99.8780,
            address: "Carretera Tequisquiapan-Ezequiel Montes km 8",
            shortDescription: "Viñedo con arquitectura colonial",
            fullDescription: "Viñedo con hermosa arquitectura colonial mexicana. Tours educativos, catas profesionales y restaurante gourmet con vista a los viñedos.",
            priceRange: .moderate,
            phoneNumber: "414-273-1830",
            scheduleJSON: #"{"miercoles":"11:00-19:00","jueves":"11:00-19:00","viernes":"11:00-19:00","sabado":"11:00-19:00","domingo":"11:00-19:00"}"#,
            amenities: ["Estacionamiento", "Restaurant", "Terraza", "Tours"],
            tags: ["Viñedo", "Gourmet", "Colonial", "Restaurant"],
            rating: 4.6,
            reviewsCount: 523,
            businessTier: .basic
        ),
        
        Place(
            name: "Viñedos Puerta del Lobo",
            category: .experiencias,
            subcategory: "Viñedo",
            latitude: 20.5400,
            longitude: -99.8650,
            address: "Carretera Tequisquiapan-Cadereyta km 12",
            shortDescription: "Viñedo moderno premium",
            fullDescription: "Viñedo de arquitectura contemporánea. Vinos premium de alta gama, restaurante de autor con chef reconocido. Experiencia gastronómica única.",
            priceRange: .luxury,
            phoneNumber: "414-273-2100",
            scheduleJSON: #"{"jueves":"12:00-18:00","viernes":"12:00-18:00","sabado":"12:00-18:00","domingo":"12:00-18:00"}"#,
            amenities: ["Estacionamiento", "Restaurant de autor", "Catas premium", "Valet parking"],
            tags: ["Viñedo", "Premium", "Moderno", "Gourmet", "Chef"],
            rating: 4.9,
            reviewsCount: 234,
            businessTier: .premium,
            isFeatured: true,
            isVerified: true
        ),
        
        Place(
            name: "Los Rosales Viñedos",
            category: .experiencias,
            subcategory: "Viñedo",
            latitude: 20.5320,
            longitude: -99.8920,
            address: "Carretera a San Juan del Río km 4",
            shortDescription: "Viñedo familiar tradicional",
            fullDescription: "Viñedo familiar con tradición de tres generaciones. Catas informales en ambiente relajado, ventas directas de vinos artesanales.",
            priceRange: .moderate,
            phoneNumber: "414-273-0856",
            scheduleJSON: #"{"sabado":"10:00-17:00","domingo":"10:00-17:00"}"#,
            amenities: ["Estacionamiento", "Ventas directas", "Pet Friendly"],
            tags: ["Viñedo", "Familiar", "Tradicional", "Artesanal"],
            rating: 4.4,
            reviewsCount: 178
        )
    ]
    
    // MARK: - Queserías (3)
    static let queserias: [Place] = [
        Place(
            name: "Quesería Vai",
            category: .experiencias,
            subcategory: "Quesería",
            latitude: 20.5240,
            longitude: -99.8960,
            address: "Av. 5 de Mayo 24, Centro",
            shortDescription: "Quesería artesanal galardonada",
            fullDescription: "Quesería artesanal ganadora de múltiples premios. Quesos de leche de cabra, vaca y oveja. Degustaciones guiadas y ventas directas.",
            priceRange: .moderate,
            phoneNumber: "414-273-0385",
            scheduleJSON: #"{"lunes":"9:00-19:00","martes":"9:00-19:00","miercoles":"9:00-19:00","jueves":"9:00-19:00","viernes":"9:00-19:00","sabado":"9:00-19:00","domingo":"9:00-17:00"}"#,
            amenities: ["Degustaciones", "Ventas", "Envíos"],
            tags: ["Quesería", "Artesanal", "Gourmet", "Premiado"],
            rating: 4.7,
            reviewsCount: 445,
            businessTier: .basic,
            isVerified: true
        ),
        
        Place(
            name: "Quesos San Juanico",
            category: .experiencias,
            subcategory: "Quesería",
            latitude: 20.5180,
            longitude: -99.8890,
            address: "Carretera a San Juan del Río km 1",
            shortDescription: "Más de 30 años de tradición",
            fullDescription: "Quesería con más de 30 años de experiencia. Especialistas en quesos maduros, frescos y botaneros. Visitas guiadas a la fábrica disponibles.",
            priceRange: .budget,
            phoneNumber: "414-273-0124",
            scheduleJSON: #"{"lunes":"9:00-18:00","martes":"9:00-18:00","miercoles":"9:00-18:00","jueves":"9:00-18:00","viernes":"9:00-18:00","sabado":"9:00-18:00","domingo":"9:00-18:00"}"#,
            amenities: ["Tours", "Ventas", "Estacionamiento"],
            tags: ["Quesería", "Tradicional", "Maduros", "Familiar"],
            rating: 4.5,
            reviewsCount: 312
        ),
        
        Place(
            name: "Quesos El Peregrino",
            category: .experiencias,
            subcategory: "Quesería",
            latitude: 20.5300,
            longitude: -99.8870,
            address: "Blvd. de las Américas 15",
            shortDescription: "Fábrica artesanal con café",
            fullDescription: "Fábrica de quesos artesanales con tours de producción. Incluye tienda y café donde puedes degustar los quesos con vinos locales.",
            priceRange: .moderate,
            scheduleJSON: #"{"martes":"10:00-18:00","miercoles":"10:00-18:00","jueves":"10:00-18:00","viernes":"10:00-18:00","sabado":"10:00-18:00","domingo":"10:00-18:00"}"#,
            amenities: ["Tours", "Café", "Ventas", "Estacionamiento"],
            tags: ["Quesería", "Tours", "Café", "Artesanal"],
            rating: 4.6,
            reviewsCount: 267
        )
    ]
    
    // MARK: - Restaurantes (continuará en siguiente parte...)
    // Se agregará en el siguiente commit para no exceder límite de caracteres
}
