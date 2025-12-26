# Clon de PUMA México (Landing)

Proyecto web que replica la landing principal de **PUMA México** con enfoque en maquetación, diseño responsive y componentes interactivos (headers, carruseles, banners y footer tipo acordeón).

## Tecnologías

- HTML5
- CSS3 (Flexbox, Grid, media queries)
- JavaScript (Vanilla)
- Imágenes / íconos en formato PNG y recursos externos

## Estructura principal

- `index.html`  
  Página principal con toda la maquetación:
  - Barra promo superior (envíos, MSI, campañas).
  - Header de navegación negro con:
    - Logo PUMA.
    - Menú principal (Gift guide, Mujeres, Hombres, Niños, Deportes, Colecciones, Rebajas).
    - Botón de búsqueda con icono de lupa.
    - Iconos de favoritos, usuario y carrito.
  - Banner hero con imagen/video de campaña y botón **COMPRAR**.
  - Sección **TRENDING NOW** con carrusel de cards.
  - Sección de múltiples banners a pantalla completa.
  - Carrusel de logos/imágenes (10 ítems).
  - Sección descriptiva de PUMA México.
  - Footer responsive tipo PUMA:
    - Columnas: Ayuda, Servicios, Acerca de PUMA, Mantente al día.
    - Newsletter + redes sociales.
    - Selector de idioma + métodos de pago.
    - Enlaces legales y copyright.

- `css/`  
  - `styles.css`  
    Estilos globales de la página:
    - Tipografía, colores base, resets simples.
    - Header fijo (`position: fixed`) con comportamiento responsive (desktop / móvil).
    - Banners con imágenes de fondo (desktop) y texto que se reubica en móvil.
    - Carrusel **TRENDING NOW** (cards con imagen, título, descripción y botón).
    - Carrusel de logos (10 imágenes, 6 visibles en desktop, 2 en móvil).
    - Sección de texto “Descubre la velocidad y el estilo únicos de PUMA México”.
    - Footer con layout de 4 columnas en desktop y acordeón en móvil.

- `js/`  
  - `carousels.js`  
    Lógica del carrusel de **TRENDING NOW**.  
    - Soporta múltiples carruseles en la misma página.
    - Calcula dinámicamente cuántas cards son visibles según el ancho.
    - Permite navegar con flechas izquierda/derecha en desktop y móvil.
  - `logosCarousel.js`  
    Lógica del carrusel para la sección de 10 imágenes/logos:
    - 6 ítems visibles en escritorio, 4 en tablet, 2 en móvil.
    - Desplazamiento horizontal con flechas.
  - `footerAccordion.js`  
    Acordeón del footer:
    - En desktop las 4 columnas permanecen abiertas.
    - En pantallas ≤ 768px cada sección (Ayuda, Servicios, etc.) se colapsa/expande al tocar el título.

- `assets/`  
  - `img/`  
    Imágenes de banners, productos, fondos, etc.
  - `icons/`  
    Íconos en PNG:
    - Hamburguesa, lupa, favoritos, usuario, carrito.
    - Bandera de idioma.
    - Redes sociales.
    - Métodos de pago.

## Características principales

- **Header fijo**  
  Barra de navegación siempre visible al hacer scroll.

- **Diseño totalmente responsive**  
  - Menú principal se convierte en barra con iconos (hamburguesa + búsqueda + logo centrado + usuario y carrito).
  - Banners con texto sobre la imagen en desktop y texto debajo de la imagen en móvil.
  - Carruseles adaptativos (cantidad de ítems visibles cambia según el ancho).
  - Footer en formato columnas en escritorio y acordeón plegable en móvil.

- **Carruseles reutilizables**  
  Código JS desacoplado que permite:
  - Usar el mismo script para varios carruseles.
  - Calcular automáticamente el número de elementos visibles.

## Cómo ejecutar el proyecto

1. Clona el repositorio o copia los archivos en tu entorno local (por ejemplo XAMPP o cualquier servidor estático).
2. Asegúrate de mantener la estructura de carpetas:
   - `index.html`
   - `css/styles.css`
   - `js/carousels.js`, `js/logosCarousel.js`, `js/footerAccordion.js`
   - `assets/img/`, `assets/icons/`
3. Abre `index.html` en el navegador o sirve el proyecto desde `http://localhost`.

## Personalización rápida

- Cambia imágenes de banners y cards editando las rutas `src` en `index.html`.
- Actualiza colores, tipografías y tamaños modificando `css/styles.css`.
- Ajusta la cantidad de elementos visibles en los carruseles cambiando los `flex-basis` en las clases:
  - `.trend-card` para TRENDING NOW.
  - `.logos-item` para el carrusel de logos.

## Licencia

Proyecto creado con fines educativos como clon de la interfaz de PUMA México.  
No está afiliado ni respaldado por PUMA.
