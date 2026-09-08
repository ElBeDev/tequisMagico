//
//  EventSeedData.swift
//  Tequis Magico
//
//  Eventos anuales de Tequisquiapan
//

import Foundation

extension SeedData {
    
    static func createAllEvents() -> [Event] {
        return eventosAnuales
    }
    
    // MARK: - Eventos Anuales
    static let eventosAnuales: [Event] = [
        Event(
            title: "Feria Nacional del Queso y Vino",
            shortDescription: "El evento más importante del año",
            fullDescription: "La Feria Nacional del Queso y Vino es el evento gastronómico más importante de Querétaro. Durante 10-15 días, la plaza principal y calles aledañas se llenan de stands de viñedos, queserías, restaurantes y productores artesanales. Incluye degustaciones, talleres de maridaje, conciertos nocturnos, exposiciones gastronómicas y eventos culturales. No te lo pierdas.",
            startDate: Calendar.current.date(from: DateComponents(year: 2026, month: 5, day: 22))!,
            endDate: Calendar.current.date(from: DateComponents(year: 2026, month: 6, day: 7))!,
            isRecurring: true,
            locationName: "Plaza Miguel Hidalgo y Centro Histórico",
            latitude: 20.5213,
            longitude: -99.8936,
            address: "Centro Histórico, Tequisquiapan",
            category: "Feria",
            tags: ["Vino", "Queso", "Gastronomía", "Familiar", "Música", "Cultural"],
            isFree: true,
            isFeatured: true,
            organizerName: "Gobierno Municipal de Tequisquiapan",
            organizerContact: "414-273-0100"
        ),
        
        Event(
            title: "Festival del Globo",
            shortDescription: "Encuentro de globos aerostáticos",
            fullDescription: "Festival anual de globos aerostáticos con participación nacional e internacional. Los globos despegan al amanecer creando un espectáculo visual impresionante. Por la noche, hay shows de glow con los globos iluminados. Incluye actividades familiares, zona de food trucks y música en vivo.",
            startDate: Calendar.current.date(from: DateComponents(year: 2027, month: 3, day: 12))!,
            endDate: Calendar.current.date(from: DateComponents(year: 2027, month: 3, day: 14))!,
            isRecurring: true,
            locationName: "Campo de Despegue Principal",
            latitude: 20.5300,
            longitude: -99.8850,
            address: "Campo abierto cerca del centro",
            category: "Festival",
            tags: ["Globos", "Aventura", "Familia", "Fotografía", "Amanecer"],
            isFree: true,
            isFeatured: true,
            organizerName: "Asociación de Globos Aerostáticos de Querétaro"
        ),
        
        Event(
            title: "Semana Santa",
            shortDescription: "Procesiones y viacrucis viviente",
            fullDescription: "Celebración religiosa tradicional con procesiones diarias, viacrucis viviente representado por la comunidad, misas solemnes y eventos culturales. Las calles del centro se adornan con alfombras de aserrín teñido. Ambiente de recogimiento y tradición.",
            startDate: Calendar.current.date(from: DateComponents(year: 2027, month: 4, day: 11))!,
            endDate: Calendar.current.date(from: DateComponents(year: 2027, month: 4, day: 18))!,
            isRecurring: true,
            locationName: "Templos y calles del Centro Histórico",
            latitude: 20.5217,
            longitude: -99.8931,
            address: "Centro Histórico",
            category: "Religioso",
            tags: ["Religioso", "Tradicional", "Cultural", "Familiar", "Histórico"],
            isFree: true,
            organizerName: "Parroquia de Santa María de la Asunción"
        ),
        
        Event(
            title: "Fiestas Patrias",
            shortDescription: "Celebración del grito de independencia",
            fullDescription: "Celebración nacional con desfile cívico matutino, eventos culturales durante el día y el tradicional grito de independencia a las 11 PM. Incluye música de mariachi, antojitos mexicanos, fuegos artificiales y decoración tricolor en toda la plaza. Ambiente muy festivo y patriótico.",
            startDate: Calendar.current.date(from: DateComponents(year: 2026, month: 9, day: 15))!,
            endDate: Calendar.current.date(from: DateComponents(year: 2026, month: 9, day: 16))!,
            isRecurring: true,
            locationName: "Plaza Miguel Hidalgo",
            latitude: 20.5213,
            longitude: -99.8936,
            address: "Plaza Miguel Hidalgo, Centro",
            category: "Cívico",
            tags: ["Patrio", "Música", "Fuegos artificiales", "Familiar", "Tradicional"],
            isFree: true,
            isFeatured: true,
            organizerName: "Gobierno Municipal de Tequisquiapan"
        ),
        
        Event(
            title: "Festival de la Cestería",
            shortDescription: "Celebración del arte de la cestería",
            fullDescription: "Festival dedicado a la artesanía tradicional de Tequisquiapan. Talleres gratuitos de cestería, demostraciones de artesanos maestros, concurso de piezas, venta de artesanías y conferencias sobre preservación de técnicas ancestrales. Reconocimiento a artesanos destacados.",
            startDate: Calendar.current.date(from: DateComponents(year: 2026, month: 11, day: 8))!,
            endDate: Calendar.current.date(from: DateComponents(year: 2026, month: 11, day: 10))!,
            isRecurring: true,
            locationName: "Casa de la Cultura y Plaza Principal",
            latitude: 20.5216,
            longitude: -99.8927,
            address: "Centro Histórico",
            category: "Cultural",
            tags: ["Artesanía", "Cestería", "Cultural", "Talleres", "Tradicional"],
            isFree: true,
            organizerName: "Casa de la Cultura de Tequisquiapan"
        ),
        
        Event(
            title: "Año Nuevo en la Plaza",
            shortDescription: "Celebración de año nuevo",
            fullDescription: "Celebración de fin de año en la plaza principal. Música en vivo, baile, antojitos y bebidas. A las 12 de la noche, brindis colectivo y fuegos artificiales. Ambiente familiar y festivo para recibir el año nuevo.",
            startDate: Calendar.current.date(from: DateComponents(year: 2026, month: 12, day: 31, hour: 20))!,
            endDate: Calendar.current.date(from: DateComponents(year: 2027, month: 1, day: 1, hour: 2))!,
            isRecurring: true,
            locationName: "Plaza Miguel Hidalgo",
            latitude: 20.5213,
            longitude: -99.8936,
            address: "Plaza Miguel Hidalgo",
            category: "Celebración",
            tags: ["Año Nuevo", "Fiesta", "Música", "Fuegos artificiales", "Brindis"],
            isFree: true,
            isFeatured: true,
            organizerName: "Gobierno Municipal"
        ),
        
        Event(
            title: "Festival del Vino Joven",
            shortDescription: "Degustación de vinos nuevos",
            fullDescription: "Festival especializado en vinos jóvenes de la cosecha reciente. Los viñedos de la región presentan sus nuevas etiquetas. Incluye catas guiadas por sommeliers, maridajes con quesos locales, conferencias sobre vinicultura y música de jazz en vivo.",
            startDate: Calendar.current.date(from: DateComponents(year: 2027, month: 2, day: 20))!,
            endDate: Calendar.current.date(from: DateComponents(year: 2027, month: 2, day: 21))!,
            isRecurring: true,
            locationName: "Viñedos participantes y Plaza Principal",
            latitude: 20.5213,
            longitude: -99.8936,
            address: "Varios lugares",
            category: "Gastronomía",
            tags: ["Vino", "Cata", "Sommeliers", "Maridaje", "Música"],
            isFree: false,
            ticketPrice: "Desde $350",
            ticketURL: "https://festivaldelvino.com",
            requiresReservation: true,
            organizerName: "Asociación de Vinicultores de Querétaro"
        ),
        
        Event(
            title: "Día de Muertos",
            shortDescription: "Celebración tradicional mexicana",
            fullDescription: "Celebración del Día de Muertos con tradición mexicana. Concurso de altares en la plaza, ofrendas comunitarias, catrinas vivientes, maquillaje tradicional gratuito, pan de muerto, calaveritas de azúcar. Incluye procesión nocturna al cementerio y eventos culturales.",
            startDate: Calendar.current.date(from: DateComponents(year: 2026, month: 11, day: 1))!,
            endDate: Calendar.current.date(from: DateComponents(year: 2026, month: 11, day: 2))!,
            isRecurring: true,
            locationName: "Plaza Miguel Hidalgo y calles del centro",
            latitude: 20.5213,
            longitude: -99.8936,
            address: "Centro Histórico",
            category: "Tradicional",
            tags: ["Día de Muertos", "Altares", "Catrinas", "Tradicional", "Cultural"],
            isFree: true,
            isFeatured: true,
            organizerName: "Gobierno Municipal y Casa de la Cultura"
        )
    ]
}
