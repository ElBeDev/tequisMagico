//
//  SeedDataPart2.swift
//  Tequis Magico
//
//  Restaurantes, Cafeterías, Hospedaje y más (continuación)
//

import Foundation

extension SeedData {
    
    // MARK: - Restaurantes (12)
    static let restaurantes: [Place] = [
        Place(
            name: "La Estancia Tequisquiapan",
            category: .gastronomia,
            subcategory: "Restaurante",
            latitude: 20.5195,
            longitude: -99.8950,
            address: "Morelos 8, Centro",
            shortDescription: "Cocina mexicana contemporánea",
            fullDescription: "Restaurante de alta cocina mexicana contemporánea. Terraza con vista privilegiada a la plaza principal, carta extensa de vinos nacionales e internacionales.",
            priceRange: .expensive,
            phoneNumber: "414-273-0432",
            scheduleJSON: #"{"lunes":"13:00-22:00","martes":"13:00-22:00","miercoles":"13:00-22:00","jueves":"13:00-22:00","viernes":"13:00-23:00","sabado":"13:00-23:00","domingo":"13:00-23:00"}"#,
            amenities: ["Terraza", "WiFi", "Pet Friendly (terraza)", "Estacionamiento cercano", "Reservaciones"],
            tags: ["Gourmet", "Terraza", "Romántico", "Vinos", "Vista plaza"],
            rating: 4.6,
            reviewsCount: 1023,
            businessTier: .premium,
            isFeatured: true,
            isVerified: true
        ),
        
        Place(
            name: "Los Faroles",
            category: .gastronomia,
            subcategory: "Restaurante",
            latitude: 20.5220,
            longitude: -99.8940,
            address: "Portal Guerrero 5, Centro",
            shortDescription: "Cocina tradicional queretana",
            fullDescription: "Restaurante ubicado en los históricos portales. Especialidad en cocina tradicional queretana: enchiladas queretanas, cecina, nopalitos, gorditas. Ambiente familiar y auténtico.",
            priceRange: .moderate,
            phoneNumber: "414-273-0063",
            scheduleJSON: #"{"lunes":"8:00-22:00","martes":"8:00-22:00","miercoles":"8:00-22:00","jueves":"8:00-22:00","viernes":"8:00-22:00","sabado":"8:00-22:00","domingo":"8:00-22:00"}"#,
            amenities: ["WiFi", "Familiar", "Portales"],
            tags: ["Tradicional", "Queretana", "Familiar", "Enchiladas", "Cecina"],
            rating: 4.4,
            reviewsCount: 876,
            businessTier: .basic
        ),
        
        Place(
            name: "K'puchinos Restaurant",
            category: .gastronomia,
            subcategory: "Restaurante",
            latitude: 20.5212,
            longitude: -99.8933,
            address: "Andador 5 de Mayo 11, Centro",
            shortDescription: "Fusión mexicana-internacional",
            fullDescription: "Restaurante de fusión con jardín interior. Menú variado que incluye pastas, pizzas, pescados y platillos mexicanos. Música en vivo fines de semana.",
            priceRange: .moderate,
            phoneNumber: "414-273-1901",
            scheduleJSON: #"{"lunes":"8:00-22:00","martes":"8:00-22:00","miercoles":"8:00-22:00","jueves":"8:00-22:00","viernes":"8:00-23:00","sabado":"8:00-23:00","domingo":"8:00-23:00"}"#,
            amenities: ["Jardín", "WiFi", "Música en vivo", "Bar"],
            tags: ["Fusión", "Jardín", "Música", "Pizzas", "Pastas"],
            rating: 4.5,
            reviewsCount: 654,
            businessTier: .basic
        ),
        
        Place(
            name: "Doña Juanita",
            category: .gastronomia,
            subcategory: "Restaurante",
            latitude: 20.5225,
            longitude: -99.8938,
            address: "Emiliano Zapata 6, Centro",
            shortDescription: "Cocina casera queretana",
            fullDescription: "Comedor tradicional con sazón casero. Ambiente familiar, comida abundante y precios accesibles. Especialidad en gorditas, barbacoa y tamales.",
            priceRange: .budget,
            phoneNumber: "414-273-0245",
            scheduleJSON: #"{"lunes":"8:00-19:00","martes":"8:00-19:00","miercoles":"8:00-19:00","jueves":"8:00-19:00","viernes":"8:00-19:00","sabado":"8:00-19:00","domingo":"8:00-19:00"}"#,
            amenities: ["Económico", "Familiar", "Comida corrida"],
            tags: ["Casera", "Económica", "Gorditas", "Barbacoa", "Tamales"],
            rating: 4.7,
            reviewsCount: 432
        ),
        
        Place(
            name: "El Vergel",
            category: .gastronomia,
            subcategory: "Restaurante",
            latitude: 20.5189,
            longitude: -99.8922,
            address: "Juárez 24, Centro",
            shortDescription: "Jardín-restaurant con fuente",
            fullDescription: "Hermoso jardín interior con fuente. Cocina mexicana tradicional, famoso por sus desayunos típicos: chilaquiles, molletes, café de olla.",
            priceRange: .moderate,
            scheduleJSON: #"{"lunes":"8:00-21:00","martes":"8:00-21:00","miercoles":"8:00-21:00","jueves":"8:00-21:00","viernes":"8:00-21:00","sabado":"8:00-21:00","domingo":"8:00-21:00"}"#,
            amenities: ["Jardín", "Fuente", "Desayunos", "WiFi"],
            tags: ["Jardín", "Desayunos", "Chilaquiles", "Tradicional"],
            rating: 4.6,
            reviewsCount: 567
        ),
        
        Place(
            name: "La Fabbrica Italiana",
            category: .gastronomia,
            subcategory: "Restaurante",
            latitude: 20.5203,
            longitude: -99.8947,
            address: "Morelos 12, Centro",
            shortDescription: "Auténtica cocina italiana",
            fullDescription: "Restaurante italiano con chef napolitano. Pastas frescas hechas en casa, pizzas al horno de leña con ingredientes importados. Ambiente acogedor.",
            priceRange: .moderate,
            phoneNumber: "414-273-2156",
            scheduleJSON: #"{"martes":"13:00-22:00","miercoles":"13:00-22:00","jueves":"13:00-22:00","viernes":"13:00-22:00","sabado":"13:00-22:00","domingo":"13:00-22:00"}"#,
            amenities: ["Horno de leña", "Pastas frescas", "Vinos italianos"],
            tags: ["Italiana", "Pizzas", "Pastas", "Auténtica"],
            rating: 4.8,
            reviewsCount: 389,
            businessTier: .basic
        ),
        
        Place(
            name: "Sushi Roll Tequisquiapan",
            category: .gastronomia,
            subcategory: "Restaurante",
            latitude: 20.5230,
            longitude: -99.8955,
            address: "Ezequiel Montes 20",
            shortDescription: "Sushi y comida japonesa",
            fullDescription: "Cadena de sushi con ingredientes frescos. Rollos especiales, tepanyaki, ramen. Servicio a domicilio disponible.",
            priceRange: .moderate,
            scheduleJSON: #"{"lunes":"13:00-22:00","martes":"13:00-22:00","miercoles":"13:00-22:00","jueves":"13:00-22:00","viernes":"13:00-22:00","sabado":"13:00-22:00","domingo":"13:00-22:00"}"#,
            amenities: ["Delivery", "Para llevar", "WiFi"],
            tags: ["Sushi", "Japonesa", "Rollos", "Tepanyaki"],
            rating: 4.3,
            reviewsCount: 512
        )
    ]
    
    // MARK: - Cafeterías (3)
    static let cafeterias: [Place] = [
        Place(
            name: "Café del Centro",
            category: .gastronomia,
            subcategory: "Cafetería",
            latitude: 20.5215,
            longitude: -99.8935,
            address: "Portal Guerrero 3, Centro",
            shortDescription: "Café de especialidad en portales",
            fullDescription: "Cafetería tradicional ubicada en los portales de la plaza. Café de especialidad de Veracruz, panadería artesanal, postres caseros. Perfecto para desayunar o merendar.",
            priceRange: .budget,
            scheduleJSON: #"{"lunes":"7:00-21:00","martes":"7:00-21:00","miercoles":"7:00-21:00","jueves":"7:00-21:00","viernes":"7:00-21:00","sabado":"7:00-21:00","domingo":"7:00-21:00"}"#,
            amenities: ["WiFi", "Terraza", "Panadería"],
            tags: ["Café", "Desayunos", "Postres", "Portales"],
            rating: 4.5,
            reviewsCount: 678
        ),
        
        Place(
            name: "La Nevería del Pueblo",
            category: .gastronomia,
            subcategory: "Nevería",
            latitude: 20.5218,
            longitude: -99.8932,
            address: "Andador Independencia, Centro",
            shortDescription: "Nieves artesanales",
            fullDescription: "Nieves y paletas artesanales con sabores tradicionales y exóticos: garambullo, tuna, guanábana, nuez, mezcal. Todos los ingredientes naturales.",
            priceRange: .budget,
            scheduleJSON: #"{"lunes":"10:00-22:00","martes":"10:00-22:00","miercoles":"10:00-22:00","jueves":"10:00-22:00","viernes":"10:00-22:00","sabado":"10:00-22:00","domingo":"10:00-22:00"}"#,
            amenities: ["Para llevar", "Terraza"],
            tags: ["Nieves", "Paletas", "Artesanal", "Postres"],
            rating: 4.8,
            reviewsCount: 823
        ),
        
        Place(
            name: "Chocolatería Don Rafa",
            category: .gastronomia,
            subcategory: "Cafetería",
            latitude: 20.5210,
            longitude: -99.8943,
            address: "Juárez 8, Centro",
            shortDescription: "Chocolates artesanales",
            fullDescription: "Chocolatería artesanal mexicana. Bombones, trufas, chocolate caliente especiado. Cacao 100% mexicano de Tabasco y Chiapas.",
            priceRange: .budget,
            scheduleJSON: #"{"lunes":"10:00-20:00","martes":"10:00-20:00","miercoles":"10:00-20:00","jueves":"10:00-20:00","viernes":"10:00-20:00","sabado":"10:00-20:00","domingo":"10:00-20:00"}"#,
            amenities: ["Tienda", "Regalos", "Envíos"],
            tags: ["Chocolate", "Artesanal", "Bombones", "Mexicano"],
            rating: 4.7,
            reviewsCount: 345
        )
    ]
    
    // MARK: - Hospedaje (5)
    static let hospedaje: [Place] = [
        Place(
            name: "La Casa del Atrio",
            category: .hospedaje,
            subcategory: "Hotel Boutique",
            latitude: 20.5222,
            longitude: -99.8930,
            address: "Guerrero 2, Centro",
            shortDescription: "Hotel boutique 5 estrellas",
            fullDescription: "Hotel boutique de lujo en casona colonial restaurada. 11 suites únicas, spa completo, alberca climatizada, restaurante gourmet. Servicio personalizado de excelencia.",
            priceRange: .luxury,
            phoneNumber: "414-273-0400",
            website: "https://lacasadelatrio.com",
            amenities: ["Spa", "Alberca", "WiFi", "Estacionamiento", "Restaurant", "Pet Friendly", "Concierge"],
            tags: ["Lujo", "Romántico", "Colonial", "Spa", "Boutique"],
            rating: 4.9,
            reviewsCount: 456,
            businessTier: .premium,
            isFeatured: true,
            isVerified: true
        ),
        
        Place(
            name: "Hotel Museo La Casona de Tequisquiapan",
            category: .hospedaje,
            subcategory: "Hotel Boutique",
            latitude: 20.5199,
            longitude: -99.8925,
            address: "Morelos 11, Centro",
            shortDescription: "Hotel-museo con antigüedades",
            fullDescription: "Hotel boutique que funciona como museo vivo. Cada habitación decorada con antigüedades auténticas. Arquitectura colonial, 14 habitaciones únicas.",
            priceRange: .expensive,
            phoneNumber: "414-273-0132",
            amenities: ["WiFi", "Desayuno incluido", "Estacionamiento", "Museo"],
            tags: ["Boutique", "Museo", "Colonial", "Único", "Histórico"],
            rating: 4.7,
            reviewsCount: 298
        ),
        
        Place(
            name: "Hotel Posada Tequisquiapan",
            category: .hospedaje,
            subcategory: "Hotel",
            latitude: 20.5187,
            longitude: -99.8938,
            address: "Moctezuma 8, Centro",
            shortDescription: "Hotel tradicional con jardines",
            fullDescription: "Hotel tradicional familiar con hermosos jardines y alberca. Ubicación céntrica a 3 cuadras de la plaza principal. Excelente relación calidad-precio.",
            priceRange: .moderate,
            phoneNumber: "414-273-0021",
            amenities: ["Alberca", "Jardín", "Estacionamiento", "WiFi", "Desayuno"],
            tags: ["Tradicional", "Familiar", "Jardín", "Alberca"],
            rating: 4.5,
            reviewsCount: 621
        ),
        
        Place(
            name: "Hotel Hidalgo",
            category: .hospedaje,
            subcategory: "Hotel",
            latitude: 20.5205,
            longitude: -99.8941,
            address: "Hidalgo 15, Centro",
            shortDescription: "Hotel económico céntrico",
            fullDescription: "Hotel sencillo y limpio en el corazón del centro histórico. Ideal para viajeros con presupuesto ajustado. Habitaciones básicas con baño privado.",
            priceRange: .budget,
            phoneNumber: "414-273-0063",
            amenities: ["WiFi", "Ubicación céntrica"],
            tags: ["Económico", "Céntrico", "Básico"],
            rating: 4.0,
            reviewsCount: 234
        ),
        
        Place(
            name: "Hotel El Relox",
            category: .hospedaje,
            subcategory: "Hotel",
            latitude: 20.5228,
            longitude: -99.8945,
            address: "5 de Mayo 35, Centro",
            shortDescription: "Hotel económico familiar",
            fullDescription: "Hotel familiar con habitaciones sencillas. Precio accesible, ubicación cercana a la plaza. Atención amable y desayuno incluido.",
            priceRange: .budget,
            phoneNumber: "414-273-0198",
            amenities: ["WiFi", "Desayuno incluido", "Familiar"],
            tags: ["Económico", "Familiar", "Céntrico"],
            rating: 4.2,
            reviewsCount: 178
        )
    ]
}
