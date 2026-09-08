# Tequisquiapan Mágico - App iOS

## 🎉 Estado Actual: MVP Base Funcional

### ✅ Lo que ya está listo:

1. **Modelos de Datos (Swift Data)**
   - ✅ `Place` - Lugares con toda la info necesaria
   - ✅ `Event` - Eventos con fechas y categorías
   - ✅ `PlaceCategory` - Categorías con íconos y colores
   - ✅ `PriceRange` - Rangos de precios
   - ✅ `BusinessTier` - Niveles de suscripción para negocios

2. **Vistas Principales**
   - ✅ `MapView` - Mapa interactivo con anotaciones personalizadas
   - ✅ `ExploreView` - Exploración por categorías con búsqueda
   - ✅ `PlaceDetailView` - Detalle completo de lugares
   - ✅ `EventsView` - Lista de eventos (próximos, en curso, pasados)
   - ✅ `FavoritesView` - Favoritos del usuario
   - ✅ `ProfileView` - Perfil y configuración

3. **Navegación**
   - ✅ TabView principal con 5 tabs
   - ✅ Navegación entre vistas
   - ✅ Sheets y modales

4. **Features Implementados**
   - ✅ Mapa con clusters y filtros por categoría
   - ✅ Búsqueda de lugares
   - ✅ Integración con Apple Maps (direcciones)
   - ✅ Llamadas telefónicas desde la app
   - ✅ Enlaces a WhatsApp
   - ✅ Sincronización de `Place` contra el backend real (ver abajo), con fallback a datos locales sin conexión

---

## 🚀 Cómo Ejecutar la App

### Requisitos:
- Xcode 16.0+
- iOS 18.0+
- Mac con macOS Sonoma o superior

### Pasos:
1. Abre el proyecto en Xcode
2. Selecciona un simulador (iPhone 16 recomendado)
3. Presiona Cmd + R para ejecutar
4. La app se abrirá mostrando el mapa de Tequisquiapan con lugares de ejemplo

---

## 📂 Estructura del Proyecto

```
Tequis Magico/
├── Models/
│   ├── Place.swift              # Modelo principal de lugares
│   ├── Event.swift              # Modelo de eventos
│   ├── PlaceCategory.swift      # Enum de categorías
│   ├── PriceRange.swift         # Enum de precios
│   └── BusinessTier.swift       # Enum de suscripciones
├── Views/
│   ├── MapView.swift            # Mapa principal
│   ├── ExploreView.swift        # Exploración
│   ├── PlaceDetailView.swift   # Detalle de lugar
│   ├── EventsView.swift         # Lista de eventos
│   ├── FavoritesView.swift     # Favoritos
│   └── ProfileView.swift        # Perfil
├── ContentView.swift            # TabView principal
└── Tequis_MagicoApp.swift     # Entry point
```

---

## 🔥 Próximos Pasos (Prioridad)

### Fase 1: Completar MVP (1-2 semanas)

#### Alta Prioridad:
1. **Sistema de Favoritos Real**
   - [ ] UserDefaults o SwiftData para guardar favoritos
   - [ ] Botón toggle en PlaceDetailView
   - [ ] Sincronizar con FavoritesView

2. **Imágenes Reales**
   - [ ] Configurar Vercel Blob (ya está la dependencia en `web-admin`) para subir fotos reales
   - [ ] Actualizar `image_urls`/`thumbnail_url` en Neon
   - [ ] Mostrarlas en `PlaceDetailView`/`MapView` (hoy `imageURLs` casi siempre llega vacío)

3. **Datos Reales**
   - [x] 50 lugares reales de Tequisquiapan cargados en Neon (ver `database/databaseseed_part*.sql`)
   - [ ] Completar campos faltantes (horarios `schedule_json`, más teléfonos/websites)

4. **Backend Básico**
   - [x] API REST en `web-admin/app/api/places` (Next.js + Neon), consumida por la app
   - [x] Sincronización de `Place` al abrir la app (`ContentView.syncPlacesFromBackend`), con upsert por `id`
   - [ ] API de **Eventos** (`web-admin/app/api/events`) — hoy `Event` sigue siendo 100% local
   - [ ] Manejo de lugares eliminados (el API ya hace soft-delete con `is_active`, pero la app nunca borra su copia local de uno que dejó de estar activo)

#### Media Prioridad:
5. **Mejoras UX**
   - [ ] Animaciones de transición
   - [ ] Pull to refresh
   - [ ] Loading states
   - [ ] Error handling

6. **Search Mejorado**
   - [ ] Búsqueda por tags
   - [ ] Autocompletado
   - [ ] Historial de búsquedas

7. **Share Functionality**
   - [ ] Share sheet para compartir lugares
   - [ ] Deep links (tequismagico://place/123)
   - [ ] Preview en iMessage

---

## 🛠️ Fase 2: Monetización (1-2 semanas)

### StoreKit 2 Integration:
- [ ] Configurar productos en App Store Connect
- [ ] Implementar paywall para Premium
- [ ] Suscripción mensual y anual
- [ ] Features Premium:
  - [ ] Modo offline con mapas descargables
  - [ ] Rutas personalizadas
  - [ ] Cupones exclusivos
  - [ ] Sin límite de favoritos

### Panel de Negocios (Web):
- [ ] Diseñar y desarrollar portal web
- [ ] Autenticación de negocios
- [ ] CRUD de lugares
- [ ] Upload de imágenes/videos
- [ ] Dashboard de analytics
- [ ] Sistema de suscripción con Stripe/Conekta

---

## 🎨 Fase 3: Polish & Features Premium (2-3 semanas)

### Features Avanzados:
- [ ] **Widgets** (WidgetKit)
  - [ ] Widget de evento próximo
  - [ ] Widget de lugar destacado
  - [ ] Widget de ruta del día

- [ ] **App Intents & Siri**
  - [ ] "Siri, busca restaurantes en Tequisquiapan"
  - [ ] "Siri, ¿qué eventos hay hoy?"
  - [ ] Integración con Spotlight

- [ ] **Visual Intelligence**
  - [ ] Reconocimiento de edificios históricos
  - [ ] AR overlay con información

- [ ] **Rutas Personalizadas**
  - [ ] Algoritmo de rutas optimizadas
  - [ ] Navegación turn-by-turn
  - [ ] Rutas temáticas (vinos, artesanías, etc.)

- [ ] **Notificaciones Push**
  - [ ] Firebase Cloud Messaging
  - [ ] Notificaciones de eventos próximos
  - [ ] Ofertas de negocios premium

---

## 🐛 Bugs Conocidos y TODOs

### Bugs:
- [ ] FlowLayout puede no funcionar bien en dispositivos pequeños
- [ ] AsyncImage no tiene retry logic
- [ ] No hay manejo de errores en las queries

### TODOs en el Código:
```swift
// Busca "TODO:" en el código para encontrar:
- TODO: Implementar sistema real de favoritos
- TODO: Implementar share sheet
- TODO: Mostrar paywall de StoreKit
- TODO: Limpiar caché
- TODO: Toggle favorito
```

---

## 📊 Arquitectura de Datos

### Swift Data (Local):
- Cache offline de `Place` y `Event`
- Favoritos y datos del usuario

### Neon + Vercel (Backend real, no CloudKit):
- Postgres en Neon es la base de datos principal (ver `../database/databaseschema.sql`)
- `web-admin/app/api/places` (Next.js en Vercel) expone `GET/POST /api/places` y `GET/DELETE /api/places/[id]`
- La app sincroniza `Place` desde ahí en cada arranque (`ServicesPlaceAPIService.swift` + `ContentView.swift`); `Event` todavía no tiene API y sigue siendo local
- Los códigos de `category`/`price_range`/`business_tier` que da el API son cortos (`"turistico"`, `"moderate"`, `"premium"`) y no el `rawValue` de despliegue de los enums — por eso existen los `init?(dbValue:)` en `ModelsPlaceCategory.swift`, `ModelsPriceRange.swift` y `ModelsBusinessTier.swift`

### Storage de imágenes (pendiente):
- `@vercel/blob` ya está como dependencia en `web-admin`, pero todavía no se usa

---

## 🎯 Métricas a Trackear

### App Store Connect:
- Descargas
- Conversión a Premium
- Retención (D1, D7, D30)
- Crashes

### Analytics Custom:
- Lugares más visitados
- Búsquedas más comunes
- Eventos más populares
- Conversión de negocios

---

## 📝 Notas Importantes

### Para el Portal Web:
- Vive en `../web-admin` (Next.js), en el mismo repo que esta app pero es un deploy aparte en Vercel
- Comparte el backend real (Neon) con esta app a través de `/api/places`
- Convención de trabajo: los cambios de la app iOS se hacen directo en estos archivos de Xcode; los del panel/Vercel/Neon se manejan como cualquier proyecto Next.js normal en `../web-admin`

### Para Producción:
1. **Configurar CloudKit Schema**
2. **Cuenta de Apple Developer** ($99/año)
3. **Certificados y provisioning profiles**
4. **App Store Connect setup**
5. **Privacy Policy y Terms of Service**
6. **App Review guidelines compliance**

### Legal:
- [ ] Términos y condiciones
- [ ] Política de privacidad (LFPDPPP México)
- [ ] Contrato de suscripción para negocios
- [ ] Registrar marca "Tequisquiapan Mágico"

---

## 🤝 Contribuir

### Branch Strategy:
- `main` - Producción
- `develop` - Desarrollo
- `feature/*` - Features nuevas
- `bugfix/*` - Correcciones

### Commit Convention:
```
feat: Nueva funcionalidad
fix: Corrección de bug
docs: Documentación
style: Formato de código
refactor: Refactorización
test: Tests
chore: Tareas de mantenimiento
```

---

## 📞 Contacto

**Developer**: Bernardo Ramírez
**Proyecto**: Tequisquiapan Mágico
**Versión**: 1.0.0 (MVP)
**Fecha**: 02/09/2026

---

## 🚀 Quick Start Commands

```bash
# Abrir proyecto
open "Tequis Magico.xcodeproj"

# Limpiar build
Cmd + Shift + K

# Ejecutar
Cmd + R

# Ejecutar tests
Cmd + U
```

---

## 📚 Recursos

- [SwiftUI Documentation](https://developer.apple.com/documentation/swiftui)
- [Swift Data Guide](https://developer.apple.com/documentation/swiftdata)
- [MapKit Documentation](https://developer.apple.com/documentation/mapkit)
- [StoreKit 2 Guide](https://developer.apple.com/documentation/storekit)
- [CloudKit Documentation](https://developer.apple.com/documentation/cloudkit)

---

**¡A darle con todo! 🎉🇲🇽**
