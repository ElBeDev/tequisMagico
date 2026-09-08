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
   - ✅ Mapa con clusters y filtros por categoría (tap en un pin abre su detalle — el bug que lo cerraba al instante ya se arregló, ver Bugs)
   - ✅ Búsqueda de lugares
   - ✅ "Cómo llegar" con opción de abrir en Apple Maps o Google Maps (si está instalado)
   - ✅ Llamadas telefónicas desde la app
   - ✅ Enlaces a WhatsApp
   - ✅ Sincronización de `Place` y `Event` contra el backend real (ver abajo), con fallback a datos locales sin conexión
   - ✅ Favoritos reales (locales, por dispositivo)
   - ✅ Fotos reales en los 50 lugares y 17 eventos (ver sección de Imágenes) + pantalla de créditos en Perfil
   - ✅ Compartir lugar (share sheet nativo) y deep links `tequismagico://place/<uuid>`
   - ✅ Pull to refresh, loading state inicial y aviso de "sin conexión" en Explorar/Eventos/mapa
   - ✅ Rutas temáticas (Vino y Queso, Artesanal, Histórica, Aventura) en Explorar
   - ✅ Siri/App Shortcuts: "busca lugares en Tequis Magico", "qué eventos hay hoy en Tequis Magico"
   - ✅ Términos, Privacidad y Contacto con contenido real (borrador, ver sección Legal)

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

Los archivos son planos dentro de `Tequis Magico/Tequis Magico/` (Xcode 16 los sincroniza automáticamente vía `PBXFileSystemSynchronizedRootGroup` — no hace falta tocar el `.pbxproj` al agregar un archivo nuevo ahí). El prefijo indica su rol:

```
Tequis Magico/                        # raíz del repo interno (junto al .xcodeproj)
├── Info.plist                        # fragment con LSApplicationQueriesSchemes (detectar Google Maps) — fusionado con el generado
└── Tequis Magico/                    # carpeta que Xcode sincroniza al target
    ├── Models*.swift                 # Place, Event, PlaceCategory, PriceRange, BusinessTier
    ├── Views*.swift                  # MapView, ExploreView, PlaceDetailView, EventsView, FavoritesView, ProfileView
    ├── Services*.swift               # PlaceAPIService/EventAPIService (sync con el backend), MapsOpener
    ├── Data*.swift                   # Seed local offline (SeedData.createAllPlaces/Events)
    ├── ContentView.swift             # TabView principal + sincronización al arrancar
    ├── Tequis_MagicoApp.swift        # Entry point, ModelContainer de SwiftData
    └── Assets.xcassets
```

`Info.plist` vive fuera de esa carpeta a propósito: si se pone dentro, Xcode 16 lo suma dos veces (como recurso del bundle Y como Info.plist del target) y el build falla por "Multiple commands produce". Mismo motivo por el que `README.md`/`.gitignore` de este proyecto tampoco viven ahí adentro.

---

## 🔥 Próximos Pasos (Prioridad)

### Fase 1: Completar MVP (1-2 semanas)

#### Alta Prioridad:
1. **Sistema de Favoritos Real**
   - [x] `Place.isFavorite` en SwiftData (puramente local, no se sincroniza con el API)
   - [x] Botón toggle en PlaceDetailView
   - [x] Sincronizar con FavoritesView

2. **Imágenes Reales**
   - [x] Foto representativa por categoría/subcategoría en los 50 lugares y 17 eventos (Wikimedia Commons, con crédito — ver `database/IMAGE_CREDITS.md` y Perfil → Créditos de fotos)
   - [x] Foto real del negocio (no genérica) para 4 de los 6 lugares destacados — revisado a mano en el sitio oficial de cada uno, nunca de Google Maps (viola sus términos de servicio) ni de redes sociales (no es escrapeable de forma confiable)
   - [x] Vercel Blob conectado (`tequis-magico-photos`) — el panel ya sube fotos reales desde el formulario de editar lugar. Sigue faltando que cada negocio pueda subir la suya (necesita login por negocio, ver Fase 2)

3. **Datos Reales**
   - [x] 50 lugares reales de Tequisquiapan cargados en Neon (ver `database/databaseseed_part*.sql`)
   - [x] 17 eventos reales cargados en Neon (ver `database/databaseseed_events*.sql`, incluye info tomada de tequis.travel)
   - [x] Fotos representativas por categoría en los 50 lugares y 17 eventos (Wikimedia Commons, ver `database/IMAGE_CREDITS.md`)
   - [ ] Completar campos faltantes (horarios `schedule_json`, más teléfonos/websites)

4. **Backend Básico**
   - [x] API REST en `web-admin/app/api/places` y `web-admin/app/api/events` (Next.js + Neon), consumida por la app
   - [x] Sincronización de `Place` y `Event` al abrir la app (`ContentView.swift`), con upsert por `id`
   - [x] Manejo de lugares/eventos eliminados: si el API deja de devolverlos (soft-delete con `is_active`), la app borra su copia local

#### Media Prioridad:
5. **Mejoras UX**
   - [x] Animaciones de transición básicas (lista de Explorar al filtrar, overlay de carga) — falta pulir más si se quiere algo más elaborado
   - [x] Pull to refresh en Explorar y Eventos (`SyncService`)
   - [x] Loading state en el primer arranque sin datos locales
   - [x] Error handling: banner "sin conexión" cuando el sync inicial falla y cae al seed offline

6. **Search Mejorado**
   - [x] Búsqueda por tags (además de nombre/descripción/dirección)
   - [x] Autocompletado (`.searchSuggestions`, sugiere nombres y tags mientras se escribe)
   - [x] Historial de búsquedas (últimas 5, en `UserDefaults` vía `SearchHistory`)

7. **Share Functionality**
   - [x] Share sheet nativo (`ShareLink`) en PlaceDetailView
   - [x] Deep links `tequismagico://place/<uuid>` — registrados en Info.plist, manejados en `ContentView.onOpenURL`, abren la hoja de detalle del lugar
   - [ ] Preview en iMessage con imagen (hoy el `SharePreview` solo lleva título; para la foto habría que cachear la imagen localmente antes de compartir)

---

## 🛠️ Fase 2: Monetización (1-2 semanas)

> ⏸️ **Diferido a propósito**: todo lo de cobro (StoreKit, Stripe/Conekta) y login por negocio se deja para el final — necesitan cuentas/decisiones externas (Apple Developer, procesador de pagos, proveedor de auth) que le tocan al dueño del proyecto, no son solo código.

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
- [x] Portal web (`web-admin`, Next.js) — hoy es panel de admin único, no self-service por negocio
- [x] Autenticación: `/admin` y las escrituras del API (`POST`/`PUT`/`DELETE`) están protegidas con contraseña compartida (`ADMIN_PASSWORD`, ver `web-admin/proxy.ts`). **No** hay todavía login por negocio individual — es un solo admin operando todo.
- [x] CRUD real de lugares **y eventos**: crear y editar con formulario para ambos (antes eventos solo tenía API, había que usar curl)
- [x] Upload de imágenes vía Vercel Blob (`tequis-magico-photos`, store público) — la dependencia llevaba sin usarse desde que se creó el proyecto
- [x] Dashboard de analytics básico: por categoría, por nivel de negocio, mejor calificados
- [ ] Autenticación **por negocio** (que cada dueño solo vea/edite su propio lugar) — necesita decidir proveedor de auth (Next-Auth, Clerk, etc.) antes de construirlo
- [ ] Sistema de suscripción con Stripe/Conekta — necesita que el negocio real (dueño del proyecto) tenga cuenta con el procesador antes de integrar pagos reales

---

## 🎨 Fase 3: Polish & Features Premium (2-3 semanas)

### Features Avanzados:
- [ ] **Widgets** (WidgetKit) — **bloqueado, necesita acción tuya**: hay que crear el target de la extensión desde Xcode (File → New → Target → Widget Extension). Editar el `.pbxproj` a mano para esto es demasiado riesgoso (ya vimos lo delicado que es ese archivo con el grupo sincronizado); en cuanto exista el target vacío, le pongo el código.
  - [ ] Widget de evento próximo
  - [ ] Widget de lugar destacado
  - [ ] Widget de ruta del día

- [x] **App Intents & Siri**
  - [x] "Busca lugares/restaurantes en Tequis Magico" (`SearchPlacesIntent`, con parámetro de categoría opcional)
  - [x] "Qué eventos hay hoy en Tequis Magico" (`TodayEventsIntent`)
  - [x] Registrados como `AppShortcut` (`TequisMagicoShortcuts`) — verificado con un build limpio que Xcode extrae y entrena las frases (`ExtractAppIntentsMetadata`/`AppIntentsSSUTraining`)
  - [ ] Integración con Spotlight — no implementado

- [ ] **Visual Intelligence** — diferido indefinidamente. Reconocer edificios/AR overlay necesita un modelo de reconocimiento de imágenes real (Core ML entrenado o un servicio externo); no es algo razonable de improvisar, requeriría su propio proyecto.

- [x] **Rutas Temáticas** (versión realista de "Rutas Personalizadas")
  - [x] Agrupación de lugares existentes por subcategoría en rutas curadas (Vino y Queso, Artesanal, Histórica, Aventura) — sección nueva en Explorar
  - [ ] Algoritmo de rutas optimizadas — no implementado, el orden es solo por rating
  - [ ] Navegación turn-by-turn propia — se sigue usando "Cómo llegar" (Apple/Google Maps) lugar por lugar, no hay ruteo multi-parada

- [ ] **Notificaciones Push** — **necesita una decisión tuya**: Firebase Cloud Messaging (cuenta de Google/Firebase nueva) o APNs directo (necesita capacidad de Push en el Apple Developer account). No lo armé todavía porque implica crear infraestructura externa nueva, igual que StoreKit/Stripe.
  - [ ] Notificaciones de eventos próximos
  - [ ] Ofertas de negocios premium

---

## 🐛 Bugs Conocidos y TODOs

### Bugs:
- [x] ~~Tap en un pin del mapa abría el detalle y se cerraba solo casi al instante~~ — el `Map` tenía `selection: $selectedPlace` Y un `.onTapGesture` manual peleando por el mismo estado; se quitó el binding de `selection` (`ViewsMapView.swift`)
- [ ] FlowLayout puede no funcionar bien en dispositivos pequeños
- [ ] AsyncImage no tiene retry logic
- [ ] No hay manejo de errores visible al usuario si falla el sync con el API (falla silenciosa a datos locales)

### TODOs en el Código:
```swift
// Busca "TODO:" en el código para encontrar:
- TODO: Implementar share sheet
- TODO: Mostrar paywall de StoreKit
- TODO: Limpiar caché
```

---

## 📊 Arquitectura de Datos

### Swift Data (Local):
- Cache offline de `Place` y `Event`
- Favoritos y datos del usuario

### Neon + Vercel (Backend real, no CloudKit):
- Postgres en Neon es la base de datos principal (ver `../database/databaseschema.sql`)
- `web-admin/app/api/` (Next.js en Vercel) expone `GET/POST /api/places`, `GET/DELETE /api/places/[id]`, `GET/POST /api/events` y `GET/DELETE /api/events/[id]`
- La app sincroniza `Place` y `Event` desde ahí en cada arranque (`ServicesPlaceAPIService.swift`, `ServicesEventAPIService.swift` + `ContentView.swift`)
- Los códigos de `category`/`price_range`/`business_tier` que da el API son cortos (`"turistico"`, `"moderate"`, `"premium"`) y no el `rawValue` de despliegue de los enums — por eso existen los `init?(dbValue:)` en `ModelsPlaceCategory.swift`, `ModelsPriceRange.swift` y `ModelsBusinessTier.swift`

### Storage de imágenes:
- Vercel Blob (`tequis-magico-photos`, store público) conectado y en uso desde `web-admin/app/admin/places/PlaceForm.tsx` vía `@vercel/blob/client` (`/api/upload`)

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
1. **Cuenta de Apple Developer** ($99/año)
2. **Certificados y provisioning profiles**
3. **App Store Connect setup**
4. **Privacy Policy y Terms of Service**
5. **App Review guidelines compliance**
6. Revisar que `web-admin`/Neon estén en un plan que aguante el tráfico real (hoy es la única fuente de datos de la app)

### Legal:
- [x] Términos y condiciones — **borrador** en `ViewsLegalViews.swift` (`LegalTermsView`), visible en Perfil. ⚠️ No es asesoría legal, tiene `[placeholders]` por llenar (nombre del responsable, contacto) y falta que un abogado lo revise antes de publicar.
- [x] Política de privacidad (LFPDPPP México) — mismo archivo, `LegalPrivacyView`, mismo disclaimer que arriba.
- [ ] Contrato de suscripción para negocios — pendiente hasta que exista el cobro real (Fase 2, al final)
- [ ] Registrar marca "Tequisquiapan Mágico" — esto es un trámite ante el IMPI, no es algo que se resuelva con código; te toca a ti directamente

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
