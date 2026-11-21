# InkWell

Lector de libros electrónicos minimalista y resiliente para escritorio (Ubuntu/Linux y Windows).

## Problema y Propuesta de Valor
Los lectores actuales en Linux pierden el rastro de los archivos cuando se mueven de carpeta o sufren tras actualizaciones, o bien presentan interfaces saturadas. **InkWell** gestiona los libros dentro de una biblioteca interna aislada para garantizar tolerancia a fallos, ofreciendo una experiencia de lectura limpia y sin distracciones.

## Alcance del MVP (v0.1)
- **Importación segura:** Añadir archivos `.epub` mediante diálogo nativo y copiarlos al almacenamiento interno de la app.
- **Biblioteca persistente:** Base de datos local con metadatos (título, autor, portada) y progreso de lectura.
- **Lector a doble página:** Visualización fluida del libro con paginación y barra de progreso.
- **Marcador automático:** Guardado continuo de la posición exacta de lectura (CFI) y señalización visual.
- **Personalización básica:** Cambio de tamaño de fuente y temas visuales (Claro, Oscuro, Papiro).
- **Empaquetado:** Ejecutable nativo para Ubuntu (`.deb` / AppImage) y preparación para Flatpak.

### Fuera de alcance para v0.1 (Futuro v0.2+)
- Soporte para PDF, MOBI o CBZ.
- Subrayado de texto, notas y diccionarios.
- Sincronización en la nube.

## Arquitectura Técnica
- **Frontend (UI):** HTML, CSS, JavaScript + `epub.js` (renderizado del libro).
- **Backend (Core):** Rust con **Tauri** (gestión de archivos, diálogos del sistema y lógica nativa).
- **Persistencia:** 
  - *Archivos físicos:* Carpeta interna de datos de la app (`app_data_dir/books/{uuid}.epub`).
  - *Metadatos y estado:* Base de datos **SQLite** local.

