# DESIGN.md: Inkpact Download Landing

Sistema de diseño para la landing de descarga de **Inkpact** (pizarra overlay para coaches de esports, Windows, gratis y open source).
Estilo: **Minimalismo Retro-Tech / Pixel UI minimalista**, modo oscuro obligatorio.

---

## 1. Visión general

- **Objetivo único de la página:** que la persona descargue el `.zip` portable.
- **Personalidad:** técnica, limpia, un guiño 8-bit sin caer en la parodia. Pixel-art como acento, no como ruido.
- **Principios:**
  1. Bordes duros, sombras sólidas, cero blur, cero degradados suaves.
  2. Mucho espacio vacío. Una sola acción dominante: descargar.
  3. El pixel vive en titulares, botones, iconos y marcos. El texto largo es siempre sans-serif legible.
  4. El color de acento (`#64D2FF`) se reserva para acciones, enlaces y selección.
  5. Sin logos, arte oficial ni retratos de juegos como decoración.

---

## 2. Colores

### Tokens base

| Token | Valor | Uso |
|---|---|---|
| `--bg` | `#14161D` | Fondo de página, navbar, paneles |
| `--bg-elevated` | `#222530` | Tarjetas, menús, chips, acordeón |
| `--bg-board` | `#11151C` | Mockups de pizarra, bloques de código, marco de demo |
| `--text` | `#E9ECF2` | Texto principal |
| `--text-muted` | `#8C93A3` | Texto secundario, metadatos, aviso legal |
| `--accent` | `#64D2FF` | Botón principal, enlaces, checks, selección, foco |
| `--border` | `rgba(255,255,255,0.08)` | Líneas y bordes finos |
| `--hover` | `rgba(255,255,255,0.07)` | Fondo en hover |
| `--active` | `rgba(255,255,255,0.13)` | Fondo en estado activo |
| `--danger` | `#FF6B6B` | Solo detalles puntuales |
| `--warning` | `#FFD60A` | Solo detalles puntuales (badge "Gratis", aviso SmartScreen) |

### Tokens auxiliares

| Token | Valor | Uso |
|---|---|---|
| `--pixel-ink` | `#0B0D12` | Contorno grueso y sombra dura de los elementos pixel |
| `--team-ally` | `#0A84FF` | Solo dentro del mockup de pizarra (tokens aliados) |
| `--team-enemy` | `#FF3B30` | Solo dentro del mockup de pizarra (tokens enemigos) |
| `--accent-glow` | `rgba(100,210,255,0.35)` | Pulso del botón de descarga |

### Reglas de uso

- Texto sobre `--accent` es siempre `--bg` (`#14161D`).
- `--warning` y `--danger` nunca son fondo de sección; solo badges, bordes o iconos pequeños.
- Los colores de equipo (`--team-*`) no se usan fuera del mockup.
- Contraste mínimo AA en todo el texto.

---

## 3. Tipografía

| Rol | Fuente | Estilo |
|---|---|---|
| Display / H1 / H2 | **Pixelify Sans** (alternativas: Silkscreen, Press Start 2P) | MAYÚSCULAS, peso 700 |
| Botones, nav, chips, números, teclas | Misma fuente pixel | MAYÚSCULAS, peso 600 |
| Párrafos, FAQ, descripciones | **Inter** (fallback: Segoe UI, system-ui) | Peso 400 / 500 |
| Código | `ui-monospace`, Consolas | Peso 400 |

### Escala

| Nivel | Desktop | Móvil | Interlineado |
|---|---|---|---|
| H1 (hero) | 56 px | 32 px | 1.15 |
| H2 (secciones) | 32 px | 22 px | 1.2 |
| H3 (tarjetas) | 18 px | 16 px | 1.3 |
| Cuerpo | 17 px | 16 px | 1.6 |
| Pequeño / legal | 13 px | 13 px | 1.5 |
| Botón | 16 px | 14 px | 1 |

Reglas: máximo 2 pesos por familia. Letter-spacing de la fuente pixel: `0.02em`. Nunca párrafos largos en fuente pixel.

---

## 4. Forma, bordes y sombras

### Esquinas escalonadas (sin `border-radius` suave)

Todas las esquinas de botones, tarjetas, navbar y chips son **escalonadas** (2 niveles de 4 px):

```css
.pixel-corners {
  clip-path: polygon(
    0 8px, 4px 8px, 4px 4px, 8px 4px, 8px 0,
    calc(100% - 8px) 0, calc(100% - 8px) 4px, calc(100% - 4px) 4px, calc(100% - 4px) 8px, 100% 8px,
    100% calc(100% - 8px), calc(100% - 4px) calc(100% - 8px), calc(100% - 4px) calc(100% - 4px), calc(100% - 8px) calc(100% - 4px), calc(100% - 8px) 100%,
    8px 100%, 8px calc(100% - 4px), 4px calc(100% - 4px), 4px calc(100% - 8px), 0 calc(100% - 8px)
  );
}
```

Variante pequeña (chips, teclas): escalón de 2 px.

### Bordes

- Contorno pixel grueso: **3 px** `--pixel-ink` (botones, navbar, tarjetas destacadas).
- Línea fina de separación: **1 px** `--border`.

### Sombras duras

Sin blur, siempre sólidas:

| Nivel | Valor | Uso |
|---|---|---|
| `--shadow-sm` | `4px 4px 0 var(--pixel-ink)` | Botones, chips, tarjetas en reposo |
| `--shadow-md` | `8px 8px 0 var(--pixel-ink)` | Tarjetas en hover, navbar compacta al scroll |
| `--shadow-none` | `0 0 0` | Botón en hover/active (se "hunde") |

> Con `clip-path` las sombras de `box-shadow` se recortan. Usar `filter: drop-shadow(4px 4px 0 #0B0D12)` en un contenedor padre, o un pseudo-elemento desplazado.

---

## 5. Espaciado y layout

- **Base:** 4 px. Escala: 4, 8, 12, 16, 24, 32, 48, 64, 96.
- **Ancho máximo del contenido:** 1120 px, centrado, padding lateral 24 px (16 px en móvil).
- **Separación entre secciones:** 96 px desktop, 64 px móvil.
- **Grid de características:** 4 columnas desktop, 2 tablet, 1 móvil, gap 24 px.
- **Grid de pasos:** 3 columnas desktop, 1 móvil.
- **Breakpoints:** 640 px, 900 px, 1200 px.

---

## 6. Componentes

### Navbar flotante
- Píldora centrada, fondo `--bg-elevated`, contorno 3 px `--pixel-ink`, esquinas escalonadas, sticky a 16 px del borde superior.
- Izquierda: logo pixel "Inkpact". Centro: Inicio · Características · Seguridad · FAQ. Derecha: botón pequeño "Descargar" + selector ES/EN.
- Enlace activo: barra pixel de 3 px `--accent` debajo.
- Al hacer scroll: altura se reduce ~20 % y pasa a `--shadow-md`.
- Móvil: logo + botón "Descargar" + menú hamburguesa pixel.

### Botón primario (CTA)
- Fondo `--accent`, texto `--bg`, fuente pixel MAYÚSCULAS, padding 20 × 32 px (versión hero: 24 × 40 px, 20 px de fuente).
- Contorno 3 px `--pixel-ink`, esquinas escalonadas, `--shadow-sm`.
- **Hover:** `translate(4px, 4px)` y sombra a 0.
- **Active:** `translate(4px, 4px)` y fondo un 10 % más oscuro.
- **Foco:** anillo 3 px `--text` con offset 3 px.
- Texto de ejemplo: `⬇ DESCARGAR PARA WINDOWS`.

### Botón secundario (outline)
- Fondo transparente, texto `--text`, contorno 3 px `--text` (o `--pixel-ink` sobre `--bg-elevated`), misma forma y sombra que el primario.
- Hover: fondo `--hover`. Active: fondo `--active`.

### Tarjeta
- Fondo `--bg-elevated`, borde 1 px `--border`, esquinas escalonadas, `--shadow-sm`, padding 24 px.
- Icono pixel-art de 32–48 px arriba, título H3 pixel, descripción en Inter `--text-muted`.
- **Hover:** sombra a `--shadow-md`, borde `--accent`, `translate(-2px, -2px)`.

### Tarjeta de paso (Cómo funciona)
- Igual que tarjeta, con número pixel grande (48 px) en `--accent`.
- Paso 3 muestra `Ctrl` `+` `Shift` `+` `D` como **teclas pixel**.

### Tecla pixel (keycap)
- Fondo `--bg-board`, texto `--text`, contorno 2 px `--pixel-ink`, sombra inferior de 3 px sólida, escalón de 2 px, fuente pixel 14 px.
- Estado "pulsada": `translateY(3px)` y sombra a 0.

### Chip / badge
- Fondo `--bg-elevated`, texto `--text`, fuente pixel 12 px MAYÚSCULAS, padding 6 × 12 px.
- Variante "Gratis": fondo `--warning`, texto `--bg`.
- Chips de juegos: solo texto, sin logos.

### Bloque de código
- Fondo `--bg-board`, borde 1 px `--border`, esquinas escalonadas pequeñas, fuente mono 14 px, botón "Copiar" pixel en la esquina.
- Contenido: `Get-FileHash .\Inkpact-<VERSIÓN>-portable.zip -Algorithm SHA256`.

### Aviso (SmartScreen)
- Fondo `rgba(255,214,10,0.10)`, borde izquierdo 4 px `--warning`, icono pixel de alerta, texto `--text`.

### Acordeón FAQ
- Cada ítem es una tarjeta compacta. Cabecera en Inter 500, icono `+` pixel a la derecha que rota a `×` al abrir.
- Abierto: borde `--accent`; contenido en `--text-muted`.

### Marco de demo (ventana retro)
- Barra superior `--bg-elevated` con 3 puntos pixel (`--danger`, `--warning`, `--accent`), cuerpo `--bg-board`, contorno 3 px `--pixel-ink`, `--shadow-md`.

### Mockup de pizarra (hero)
- Fondo `--bg-board` con un mapa táctico abstracto (rejilla tenue, formas geométricas).
- Flechas y zonas semitransparentes (`--accent` al 25–40 %), tokens de equipo `--team-ally` / `--team-enemy`.
- Cursor pixel que dibuja una flecha. Sin retratos ni arte de juegos.

---

## 7. Iconografía e ilustración

- **Pixel-art en rejilla de 16 × 16 o 32 × 32**, escalado con `image-rendering: pixelated`.
- Paleta limitada: tonos de la paleta base + 1 acento.
- Set requerido: lápiz, flecha, escudo, ojo (visión), láser, diapositivas/páginas, congelar (copo), archivo `.inkpact`, check, alerta, café.
- Mascota opcional: robot/pizarra pixel pequeño en el hero (inspirada en la referencia, adaptada a la paleta oscura).
- Prohibido: logos de Valorant, Overwatch, League of Legends o cualquier desarrolladora.

---

## 8. Movimiento

Todo con estética **pixel** (easing `steps()`), y todo desactivado o reducido bajo `prefers-reduced-motion: reduce`.

| Elemento | Animación | Duración |
|---|---|---|
| Titular hero | Typewriter letra a letra + cursor `▌` parpadeante | 1.2 s |
| Botón de descarga | Hover/active "presionar" (sombra → 0); pulso de brillo `--accent-glow` cada 3 s | 120 ms / 3 s loop |
| Mockup de pizarra | Flecha que se dibuja sola (stroke-dashoffset) en bucle; puntero láser con estela que se desvanece | 4 s loop |
| Iconos flotantes | Levitación "a saltos" con `steps(4)`, desfase distinto por icono | 2.4 s loop |
| Scroll reveal | Fade + subida de 16 px, stagger de 80 ms, `steps(4)` | 400 ms |
| Tarjetas | Elevación dura de sombra 4 → 8 px y borde `--accent` | 120 ms |
| Navbar | Compactación + sombra dura al hacer scroll | 200 ms |
| Pasos | Número se ilumina secuencialmente; teclas `Ctrl`, `Shift`, `D` se pulsan una a una | 1.5 s |
| FAQ | Apertura suave del contenido; `+` rota a `×` | 250 ms |
| Progreso de scroll | Barra fina de 3 px `--accent` fija arriba | continua |

---

## 9. Estructura de la página

1. Navbar flotante
2. Hero: titular, subtítulo, CTA grande, botón "Ver en GitHub", metadatos, mockup
3. Cómo funciona (3 pasos)
4. Características (8 tarjetas)
5. Demo (marco retro con GIF/vídeo)
6. Juegos compatibles (chips de texto)
7. Seguridad (panel con checks, bloque `Get-FileHash`, aviso SmartScreen)
8. Apoya el proyecto (sección propia, sin popups, botón outline)
9. FAQ (acordeón, 6 preguntas)
10. CTA final de descarga (repetido)
11. Footer: MIT, GitHub, Reportar un error, aviso legal

---

## 10. Contenido y tono

- Idioma por defecto: español. Versión EN con selector.
- Tono directo, claro, cercano al mundo del coaching. Sin jerga de marketing.
- Metadatos bajo el CTA: `Windows 10/11 · 64 bits · ~2,5 MB · Gratis · Código abierto MIT`.
- Donación: opcional, discreta, nunca antes de la descarga.
- Aviso legal en el footer (texto secundario pequeño): Inkpact no está afiliado ni respaldado por Riot Games, Blizzard Entertainment ni ninguna otra desarrolladora.

---

## 11. Accesibilidad y rendimiento

- Contraste AA en todo el texto; foco visible en todos los elementos interactivos.
- Objetivos táctiles mínimos de 44 × 44 px.
- Animaciones respetan `prefers-reduced-motion`.
- Imágenes con `alt`; iconos decorativos con `aria-hidden`.
- Acordeón y navegación operables con teclado.
- Página estática, sin dependencias pesadas, fuentes con `font-display: swap`, imágenes pixel en PNG/SVG optimizados.

---

## 12. Do / Don't

**Do**
- Bordes duros, sombras sólidas, esquinas escalonadas.
- Un CTA dominante en `--accent`.
- Mucho espacio, jerarquía clara.
- Pixel-art propio y original.

**Don't**
- Blur, degradados suaves, `border-radius` redondeado.
- Fuente pixel en párrafos largos.
- Logos o arte oficial de juegos.
- Popups, banners intrusivos o donación como paso previo a descargar.
- Más de un color de acento.