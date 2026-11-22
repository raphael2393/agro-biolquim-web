# agro-biolquim-web
Sitio oficial de **Agro Biolquim** — Biotecnología Agrícola Avanzada.

Sitio estático (un solo `index.html`, sin dependencias de compilación). Se puede publicar directamente con GitHub Pages.

## Funciones
- Catálogo de los 21 productos con filtros por línea y buscador.
- Ficha detallada de cada producto (composición, dosis, beneficios) y visor de la ficha técnica original.
- Kits agrícolas por objetivo (raíz, vigor, floración, llenado, protección, clima extremo).
- Sección de cultivos y cobertura en Ecuador (13 provincias) y Colombia (Nariño, Cauca, Bogotá, Medellín).
- Selector de país: los botones de WhatsApp usan el número de Ecuador (+593 95 943 2050) o Colombia (+57 323 398 6209).
- Asesor técnico: Ing. Agr. Rafael Patiño.
- Asistente técnico: compatibilidad de mezcla en tanque (dosis, orden de mezcla, alertas) y rotación de ingredientes activos por grupos FRAC/IRAC.
- Plan de aplicaciones por cultivo y fecha, y comparador de productos (en el asistente técnico).
- Programa por etapa del cultivo (suelo y raíz, crecimiento, floración, llenado, protección).
- Calculadora de dosis según litros, número de cargas y presentación.
- "Mi pedido": carrito que arma el mensaje y lo envía por WhatsApp.

- Calculadora por superficie (hectáreas y litros de agua por hectárea).
- Instalable como app en el celular y funciona sin internet (`manifest.webmanifest`, `sw.js`). Al cambiar imágenes o la página, sube la versión `VERSION` en `sw.js`.
- Página propia por producto en `productos/<id>/` (para Google y para compartir).
- Catálogo descargable en `assets/catalogo-agro-biolquim.pdf`.

## Estructura
- `assets/productos/` — imagen de cada envase (`.webp`); `assets/productos/mini/` — versión liviana para el catálogo.
- `assets/fichas/` — fichas técnicas originales de cada producto.
- `assets/logo-mark.png` — logotipo.

Los datos de los productos están en el arreglo `P` dentro del `<script>` de `index.html`.

## Publicación en www.agrobiolquim.com
El sitio se publica con GitHub Pages desde la rama `main` (carpeta raíz). Dirección actual: https://raphael2393.github.io/agro-biolquim-web/ . Cuando el dominio esté configurado, crea el archivo `CNAME` con `www.agrobiolquim.com` y cambia la dirección base en `index.html` (SITE), `sitemap.xml`, `robots.txt` y las páginas de `productos/`.

DNS del dominio (en el proveedor donde se compró):
- `www` → registro **CNAME** a `raphael2393.github.io`
- `agrobiolquim.com` (raíz, `@`) → registros **A**: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
