# agro-biolquim-web
Sitio oficial de **Agro Biolquim** — Biotecnología Agrícola Avanzada.

Sitio estático (un solo `index.html`, sin dependencias de compilación). Se puede publicar directamente con GitHub Pages.

## Funciones
- Catálogo de los 21 productos con filtros por línea y buscador.
- Ficha detallada de cada producto (composición, dosis, beneficios) y visor de la ficha técnica original.
- Kits agrícolas por objetivo (raíz, vigor, floración, llenado, protección, clima extremo).
- Sección de cultivos y cobertura en Ecuador (13 provincias) y Colombia (Nariño, Cauca, Bogotá, Medellín).
- Selector de país: los botones de WhatsApp usan el número de Ecuador (+593 95 943 2050) o Colombia (+57 323 398 6209).
- Programa por etapa del cultivo (suelo y raíz, crecimiento, floración, llenado, protección).
- Calculadora de dosis según litros, número de cargas y presentación.
- "Mi pedido": carrito que arma el mensaje y lo envía por WhatsApp.

## Estructura
- `assets/productos/` — fotos recortadas de cada envase (`.webp`).
- `assets/fichas/` — fichas técnicas originales de cada producto.
- `assets/logo-mark.png`, `assets/logo-original.png` — logotipo.

Los datos de los productos están en el arreglo `P` dentro del `<script>` de `index.html`.

## Publicación en www.agrobiolquim.com
El sitio se publica con GitHub Pages desde la rama `main` (carpeta raíz). El archivo `CNAME` apunta a `www.agrobiolquim.com`.

DNS del dominio (en el proveedor donde se compró):
- `www` → registro **CNAME** a `raphael2393.github.io`
- `agrobiolquim.com` (raíz, `@`) → registros **A**: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
