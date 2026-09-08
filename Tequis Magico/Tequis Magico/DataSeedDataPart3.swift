//
//  SeedDataPart3.swift
//  Tequis Magico
//
//  Balnearios, Experiencias, Compras, Naturaleza y Bares (final)
//

import Foundation

extension SeedData {
    
    // MARK: - Balnearios y Spas (3)
    static let balnearios: [Place] = [
        Place(
            name: "Balneario El Oasis",
            category: .experiencias,
            subcategory: "Balneario",
            latitude: 20.5145,
            longitude: -99.8810,
            address: "Carretera a San Juan del Río km 3",
            shortDescription: "Parque acuático con albercas termales",
            fullDescription: "Parque acuático familiar con albercas de aguas termales, toboganes, chapoteaderos y amplias áreas verdes. Palapas y asadores disponibles para renta.",
            priceRange: .moderate,
            phoneNumber: "414-273-0156",
            scheduleJSON: #"{"lunes":"9:00-18:00","martes":"9:00-18:00","miercoles":"9:00-18:00","jueves":"9:00-18:00","viernes":"9:00-18:00","sabado":"9:00-18:00","domingo":"9:00-18:00"}"#,
            amenities: ["Albercas", "Toboganes", "Palapas", "Restaurant", "Estacionamiento", "Áreas verdes"],
            tags: ["Familiar", "Albercas", "Toboganes", "Aguas termales"],
            rating: 4.4,
            reviewsCount: 892,
            businessTier: .basic
        ),
        
        Place(
            name: "Balneario La Fuente",
            category: .experiencias,
            subcategory: "Balneario",
            latitude: 20.5100,
            longitude: -99.8750,
            address: "Camino a La Fuente s/n",
            shortDescription: "Aguas termales naturales",
            fullDescription: "Balneario con aguas termales naturales. Albercas familiares de diferentes temperaturas, área de camping, zonas para día de campo. Ambiente rústico y relajado.",
            priceRange: .budget,
            scheduleJSON: #"{"lunes":"8:00-19:00","martes":"8:00-19:00","miercoles":"8:00-19:00","jueves":"8:00-19:00","viernes":"8:00-19:00","sabado":"8:00-19:00","domingo":"8:00-19:00"}"#,
            amenities: ["Camping", "Palapas", "Asadores", "Albercas termales"],
            tags: ["Camping", "Natural", "Familiar", "Económico"],
            rating: 4.2,
            reviewsCount: 534
        ),
        
        Place(
            name: "Spa Azteca",
            category: .experiencias,
            subcategory: "Spa",
            latitude: 20.5192,
            longitude: -99.8912,
            address: "Carretera a San Juan km 1.5",
            shortDescription: "Spa completo con temazcal",
            fullDescription: "Spa de servicio completo: masajes terapéuticos, faciales, vinoterapia, temazcal prehispánico. Terapeutas certificados, ambiente de lujo y relajación total.",
            priceRange: .expensive,
            phoneNumber: "414-273-1845",
            scheduleJSON: #"{"lunes":"9:00-20:00","martes":"9:00-20:00","miercoles":"9:00-20:00","jueves":"9:00-20:00","viernes":"9:00-20:00","sabado":"9:00-20:00","domingo":"9:00-20:00"}"#,
            amenities: ["Temazcal", "Masajes", "Faciales", "Vinoterapia", "Vapor", "Jacuzzi"],
            tags: ["Spa", "Relajación", "Temazcal", "Masajes", "Lujo"],
            rating: 4.7,
            reviewsCount: 267,
            businessTier: .premium,
            isVerified: true
        )
    ]
    
    // MARK: - Experiencias (4)
    static let experiencias: [Place] = [
        Place(
            name: "Globos Aerostáticos Tequisquiapan",
            category: .experiencias,
            subcategory: "Globo Aerostático",
            latitude: 20.5250,
            longitude: -99.8800,
            address: "Varios puntos de despegue",
            shortDescription: "Vuelos en globo al amanecer",
            fullDescription: "Experimenta Tequisquiapan desde el cielo. Vuelos en globo aerostático al amanecer con vistas panorámicas del pueblo mágico y los viñedos. Incluye transporte, brindis con espumoso y certificado de vuelo.",
            priceRange: .luxury,
            phoneNumber: "414-120-8900",
            scheduleJSON: #"{"lunes":"6:00-8:00","martes":"6:00-8:00","miercoles":"6:00-8:00","jueves":"6:00-8:00","viernes":"6:00-8:00","sabado":"6:00-8:00","domingo":"6:00-8:00"}"#,
            amenities: ["Transporte incluido", "Brindis", "Certificado", "Fotos"],
            tags: ["Aventura", "Romántico", "Amanecer", "Vista aérea", "Experiencia única"],
            rating: 4.9,
            reviewsCount: 445,
            businessTier: .premium,
            isFeatured: true,
            isVerified: true
        ),
        
        Place(
            name: "Talleres de Cestería",
            category: .experiencias,
            subcategory: "Taller",
            latitude: 20.5216,
            longitude: -99.8927,
            address: "Casa de la Cultura, Morelos s/n, Centro",
            shortDescription: "Aprende cestería tradicional",
            fullDescription: "Talleres de cestería con artesanos locales. Aprende la técnica ancestral de tejido de canastos y crea tu propia pieza. Experiencia cultural auténtica de 2 horas.",
            priceRange: .moderate,
            phoneNumber: "414-273-0134",
            scheduleJSON: #"{"sabado":"11:00-15:00","domingo":"11:00-15:00"}"#,
            amenities: ["Materiales incluidos", "Certificado", "Pieza para llevar"],
            tags: ["Cultural", "Artesanal", "Taller", "Tradicional", "Familiar"],
            rating: 4.8,
            reviewsCount: 189
        ),
        
        Place(
            name: "Cicloturismo Tequisquiapan",
            category: .experiencias,
            subcategory: "Tour",
            latitude: 20.5213,
            longitude: -99.8936,
            address: "Punto de encuentro: Plaza Miguel Hidalgo",
            shortDescription: "Tours en bicicleta por viñedos",
            fullDescription: "Renta de bicicletas y tours guiados. Recorre los viñedos y el campo queretano en bicicleta. Tours de medio día y día completo disponibles. Incluye guía, equipo y refrigerios.",
            priceRange: .moderate,
            phoneNumber: "442-195-7800",
            scheduleJSON: #"{"sabado":"9:00-18:00","domingo":"9:00-18:00"}"#,
            amenities: ["Bicicletas de montaña", "Casco", "Guía", "Refrigerios"],
            tags: ["Ciclismo", "Naturaleza", "Viñedos", "Deportivo", "Eco-turismo"],
            rating: 4.6,
            reviewsCount: 234
        ),
        
        Place(
            name: "Paseos a Caballo Rancho San José",
            category: .experiencias,
            subcategory: "Tour",
            latitude: 20.5050,
            longitude: -99.8950,
            address: "Carretera a Bernal km 5",
            shortDescription: "Cabalgatas por el campo",
            fullDescription: "Paseos a caballo por el campo queretano y cerros con vistas panorámicas. Guías experimentados, caballos mansos. Tours de 1, 2 o 4 horas disponibles.",
            priceRange: .moderate,
            phoneNumber: "414-273-2890",
            scheduleJSON: #"{"sabado":"10:00-17:00","domingo":"10:00-17:00"}"#,
            amenities: ["Guías certificados", "Caballos mansos", "Seguro incluido"],
            tags: ["Cabalgata", "Naturaleza", "Aventura", "Campo", "Familia"],
            rating: 4.5,
            reviewsCount: 312
        )
    ]
    
    // MARK: - Compras (4)
    static let compras: [Place] = [
        Place(
            name: "Tienda de Artesanías Otomíes",
            category: .compras,
            subcategory: "Artesanías",
            latitude: 20.5207,
            longitude: -99.8948,
            address: "Independencia 20, Centro",
            shortDescription: "Artesanías otomíes auténticas",
            fullDescription: "Tienda especializada en artesanías otomíes auténticas: textiles bordados a mano, muñecas tradicionales, bolsas, blusas. Directamente de comunidades indígenas.",
            priceRange: .moderate,
            scheduleJSON: #"{"lunes":"9:00-20:00","martes":"9:00-20:00","miercoles":"9:00-20:00","jueves":"9:00-20:00","viernes":"9:00-20:00","sabado":"9:00-20:00","domingo":"9:00-20:00"}"#,
            amenities: ["Envíos", "Tarjetas", "Certificados de autenticidad"],
            tags: ["Artesanías", "Textiles", "Otomí", "Auténtico", "Bordados"],
            rating: 4.7,
            reviewsCount: 456
        ),
        
        Place(
            name: "Cestería Don Luis",
            category: .compras,
            subcategory: "Artesanías",
            latitude: 20.5198,
            longitude: -99.8943,
            address: "Juárez 18, Centro",
            shortDescription: "Taller-tienda de cestería",
            fullDescription: "Taller familiar de cestería tradicional. Canastos de todos tamaños, muebles de mimbre, decoración para el hogar. Puedes ver a los artesanos trabajando.",
            priceRange: .moderate,
            scheduleJSON: #"{"lunes":"9:00-19:00","martes":"9:00-19:00","miercoles":"9:00-19:00","jueves":"9:00-19:00","viernes":"9:00-19:00","sabado":"9:00-19:00"}"#,
            amenities: ["Taller visible", "Pedidos personalizados", "Envíos"],
            tags: ["Cestería", "Mimbre", "Artesanal", "Tradicional", "Hecho a mano"],
            rating: 4.6,
            reviewsCount: 289
        ),
        
        Place(
            name: "La Casa del Mimbre",
            category: .compras,
            subcategory: "Artesanías",
            latitude: 20.5231,
            longitude: -99.8952,
            address: "Ezequiel Montes 28",
            shortDescription: "Muebles y decoración de mimbre",
            fullDescription: "Tienda especializada en muebles y artículos decorativos de mimbre y ratán. Desde pequeños detalles hasta muebles completos para terraza. Envíos a toda la República.",
            priceRange: .moderate,
            scheduleJSON: #"{"lunes":"10:00-20:00","martes":"10:00-20:00","miercoles":"10:00-20:00","jueves":"10:00-20:00","viernes":"10:00-20:00","sabado":"10:00-20:00","domingo":"10:00-20:00"}"#,
            amenities: ["Envíos nacionales", "Muebles a medida", "Garantía"],
            tags: ["Muebles", "Mimbre", "Decoración", "Ratán"],
            rating: 4.5,
            reviewsCount: 198
        ),
        
        Place(
            name: "Dulces Típicos La Abuelita",
            category: .compras,
            subcategory: "Dulcería",
            latitude: 20.5214,
            longitude: -99.8937,
            address: "Portal Guerrero 7",
            shortDescription: "Dulces tradicionales mexicanos",
            fullDescription: "Dulcería tradicional con amplio surtido: jamoncillos, ates de membrillo, palanquetas, alegrías, cocadas, muéganos. Productos frescos elaborados artesanalmente.",
            priceRange: .budget,
            scheduleJSON: #"{"lunes":"9:00-21:00","martes":"9:00-21:00","miercoles":"9:00-21:00","jueves":"9:00-21:00","viernes":"9:00-21:00","sabado":"9:00-21:00","domingo":"9:00-21:00"}"#,
            amenities: ["Degustaciones", "Paquetes regalo", "Envíos"],
            tags: ["Dulces", "Tradicional", "Artesanal", "Regalo", "Souvenirs"],
            rating: 4.8,
            reviewsCount: 634
        )
    ]
    
    // MARK: - Naturaleza (3)
    static let naturaleza: [Place] = [
        Place(
            name: "Parque La Pila",
            category: .turistico,
            subcategory: "Parque",
            latitude: 20.5240,
            longitude: -99.8965,
            address: "Av. Juárez s/n",
            shortDescription: "Parque público familiar",
            fullDescription: "Parque público con áreas verdes, juegos infantiles, canchas deportivas y zona de picnic. Ideal para familias y actividades al aire libre. Limpio y bien mantenido.",
            priceRange: .free,
            scheduleJSON: #"{"lunes":"6:00-22:00","martes":"6:00-22:00","miercoles":"6:00-22:00","jueves":"6:00-22:00","viernes":"6:00-22:00","sabado":"6:00-22:00","domingo":"6:00-22:00"}"#,
            amenities: ["Juegos infantiles", "Bancas", "Iluminación", "Canchas", "Baños"],
            tags: ["Parque", "Familiar", "Juegos", "Deportes", "Picnic"],
            rating: 4.3,
            reviewsCount: 445
        ),
        
        Place(
            name: "Presa Centenario",
            category: .turistico,
            subcategory: "Naturaleza",
            latitude: 20.5550,
            longitude: -99.9120,
            address: "A 7 km del centro",
            shortDescription: "Presa con paisaje natural",
            fullDescription: "Presa rodeada de paisaje natural. Ideal para pesca deportiva, observación de aves y fotografía de naturaleza. Caminos para caminata. Tranquilo y relajante.",
            priceRange: .free,
            amenities: ["Pesca", "Observación de aves", "Senderos", "Miradores"],
            tags: ["Naturaleza", "Pesca", "Aves", "Fotografía", "Tranquilo"],
            rating: 4.4,
            reviewsCount: 289
        ),
        
        Place(
            name: "Grutas Los Herrera",
            category: .turistico,
            subcategory: "Grutas",
            latitude: 20.4980,
            longitude: -99.8650,
            address: "Carretera a Ezequiel Montes km 12",
            shortDescription: "Sistema de grutas naturales",
            fullDescription: "Sistema de grutas con impresionantes formaciones rocosas: estalactitas y estalagmitas. Tours guiados de aproximadamente 45 minutos. Temperatura fresca constante. Experiencia fascinante.",
            priceRange: .budget,
            phoneNumber: "414-273-1567",
            scheduleJSON: #"{"sabado":"10:00-17:00","domingo":"10:00-17:00"}"#,
            amenities: ["Tours guiados", "Iluminación", "Senderos señalizados", "Estacionamiento"],
            tags: ["Grutas", "Naturaleza", "Aventura", "Geología", "Tour"],
            rating: 4.6,
            reviewsCount: 567
        )
    ]
    
    // MARK: - Bares (3)
    static let bares: [Place] = [
        Place(
            name: "La Cueva del Pirata",
            category: .gastronomia,
            subcategory: "Bar",
            latitude: 20.5202,
            longitude: -99.8939,
            address: "Juárez 10, Centro",
            shortDescription: "Bar con música en vivo",
            fullDescription: "Bar animado con terraza. Música en vivo los fines de semana (rock, blues, trova). Amplia selección de cervezas artesanales nacionales y cócteles clásicos. Ambiente relajado.",
            priceRange: .moderate,
            scheduleJSON: #"{"jueves":"18:00-2:00","viernes":"18:00-2:00","sabado":"18:00-2:00"}"#,
            amenities: ["Terraza", "Música en vivo", "Cervezas artesanales", "WiFi"],
            tags: ["Bar", "Música", "Terraza", "Cerveza artesanal", "Noche"],
            rating: 4.5,
            reviewsCount: 423
        ),
        
        Place(
            name: "Bar El Centenario",
            category: .gastronomia,
            subcategory: "Bar",
            latitude: 20.5219,
            longitude: -99.8934,
            address: "Andador 5 de Mayo 8",
            shortDescription: "Bar tradicional mexicano",
            fullDescription: "Bar tradicional con ambiente mexicano auténtico. Amplia selección de mezcales artesanales de Oaxaca, tequilas premium y cócteles. Botanero incluido. Ambiente casual y amigable.",
            priceRange: .budget,
            scheduleJSON: #"{"miercoles":"17:00-1:00","jueves":"17:00-1:00","viernes":"17:00-1:00","sabado":"17:00-1:00"}"#,
            amenities: ["Botanero", "Mezcales", "Terraza pequeña"],
            tags: ["Bar", "Mezcal", "Tequila", "Tradicional", "Botanero"],
            rating: 4.4,
            reviewsCount: 312
        ),
        
        Place(
            name: "La Viña Wine Bar",
            category: .gastronomia,
            subcategory: "Wine Bar",
            latitude: 20.5196,
            longitude: -99.8942,
            address: "Morelos 15, Centro",
            shortDescription: "Wine bar especializado",
            fullDescription: "Wine bar elegante especializado en vinos de la región. Más de 50 etiquetas de viñedos locales disponibles por copa o botella. Tablas de quesos y charcutería. Ambiente sofisticado.",
            priceRange: .expensive,
            scheduleJSON: #"{"jueves":"17:00-23:00","viernes":"17:00-23:00","sabado":"17:00-23:00","domingo":"17:00-23:00"}"#,
            amenities: ["Vinos locales", "Tablas", "Sommelier", "Terraza"],
            tags: ["Wine bar", "Vinos", "Elegante", "Quesos", "Romántico"],
            rating: 4.7,
            reviewsCount: 267,
            businessTier: .basic
        )
    ]
}
