import type { IconName } from '../types/icons';

const es = {
  lang: 'es',
  dir: 'ltr' as const,
  meta: {
    title: 'Inkpact — Pizarra táctica overlay para coaches de esports',
    description:
      'Dibuja flechas, zonas y rutas encima de tu juego, replay o Discord sin pausar nada. Gratis, código abierto y portable.',
    ogImage: '/og-es.png',
  },

  nav: {
    subtitle: 'TACTICAL OVERLAY',
    home: 'Inicio',
    steps: 'Cómo funciona',
    features: 'Características',
    games: 'Juegos',
    security: 'Seguridad',
    faq: 'FAQ',
    download: '▶ DESCARGAR',
  },

  hero: {
    badge: '★ INSERT COIN // 100% PORTABLE ★',
    headline: 'DIBUJA LA JUGADA ENCIMA DEL JUEGO',
    sub: 'Inkpact es una pizarra transparente que flota sobre tu pantalla. Dibuja flechas, zonas y rutas encima del juego, de una repetición o de Discord sin pausar nada.',
    cta: '⬇ DESCARGAR PARA WINDOWS',
    freeBadge: 'GRATIS',
    github: 'VER EN GITHUB',
    meta: 'Windows 10/11 · 64 bits · 2,4 MB · Gratis · Código abierto MIT',
    videoPause: 'Pausar vídeo de fondo',
    videoPlay: 'Reproducir vídeo de fondo',
  },

  steps: {
    title: 'CÓMO FUNCIONA // 3 NIVELES',
    subtitle: 'ZERO SETUP. DIRECTO A LA BATALLA.',
    items: [
      {
        num: 'LV. 1',
        icon: 'zip' as IconName,
        accentColor: 'accent' as const,
        title: 'DESCARGA EL .ZIP',
        text: 'Descarga el archivo liviano y descomprímelo donde quieras (Escritorio, USB…).',
        status: 'STATUS: 0 INSTALADORES',
      },
      {
        num: 'LV. 2',
        icon: 'play' as IconName,
        accentColor: 'warning' as const,
        title: 'ABRE INKPACT.EXE',
        text: 'Doble clic y arranca al instante. No consume recursos mientras no se usa.',
        status: 'STATUS: STANDBY READY',
      },
      {
        num: 'LV. 3',
        icon: 'keyboard' as IconName,
        accentColor: 'danger' as const,
        title: 'PULSA EL ATAJO',
        text: 'Activa o apaga la pizarra transparente al vuelo desde cualquier app:',
        keys: ['Ctrl', 'Shift', 'D'],
        status: 'STATUS: OVERLAY IN ACTION',
      },
    ],
  },

  features: {
    title: 'CARACTERÍSTICAS // EQUIPAMIENTO',
    subtitle: 'SLOTS DE INVENTARIO DISPONIBLES',
    items: [
      {
        slot: 'SLOT 01',
        icon: 'pencil' as IconName,
        title: 'HERRAMIENTAS DE DIBUJO',
        text: 'Lápiz, resaltador, línea, flecha, rectángulo, elipse, texto y borrador.',
      },
      {
        slot: 'SLOT 02',
        icon: 'laser' as IconName,
        title: 'PUNTERO LÁSER',
        text: 'Mantén el clic para señalar. Deja una estela que desaparece sola.',
      },
      {
        slot: 'SLOT 03',
        icon: 'shield' as IconName,
        title: 'ZONAS SEMITRANSPARENTES',
        text: 'Círculos, conos de visión, anillos, polígonos y bandas para marcar humos, rangos o áreas.',
      },
      {
        slot: 'SLOT 04',
        icon: 'users' as IconName,
        title: 'BANCO DE PERSONAJES',
        text: 'Valorant, Overwatch 2 y LoL, filtrados por rol con buscador. Arrástralos al tablero.',
      },
      {
        slot: 'SLOT 05',
        icon: 'freeze' as IconName,
        title: 'CONGELAR PANTALLA',
        text: 'Congela lo que se ve para explicar algo que no se puede pausar.',
      },
      {
        slot: 'SLOT 06',
        icon: 'pages' as IconName,
        title: 'PÁGINAS Y .INKPACT',
        text: 'Una jugada por página, como diapositivas. Guarda archivos .inkpact autocontenidos o exporta PNG.',
      },
      {
        slot: 'SLOT 07',
        icon: 'keyboard' as IconName,
        title: 'ATAJOS GLOBALES',
        text: 'Todos configurables. Ctrl+Shift+D activa o desactiva el dibujo desde cualquier app.',
      },
      {
        slot: 'SLOT 08',
        icon: 'lock' as IconName,
        title: 'PRIVACIDAD TOTAL',
        text: 'Sin cuentas, sin anuncios y sin telemetría. Todo se queda en tu carpeta.',
      },
    ],
  },

  games: {
    eyebrow: '// SOPORTE MULTIJUEGO',
    title: 'COMPATIBLE CON CUALQUIER ESCENARIO',
    sub: 'Funciona sobre cualquier aplicación. El banco de personajes incluye:',
    list: ['Valorant', 'Overwatch 2', 'League of Legends'],
    anyGame: 'Cualquier juego en ventana sin bordes',
  },

  security: {
    title: 'SEGURIDAD',
    checks: [
      'Descarga solo desde esta página o desde GitHub.',
      'Código abierto: cualquiera puede revisar el código.',
      'Compilado en GitHub Actions con atestación de procedencia.',
      'Verifica tu descarga con SHA256 (opcional).',
    ],
    hashLabel: 'Verificar hash (PowerShell):',
    hashCmd: 'Get-FileHash .\\Inkpact-0.0.2-portable.zip -Algorithm SHA256',
    copyLabel: 'Copiar',
    copiedLabel: '¡Copiado!',
    smartscreen: {
      title: 'Aviso de Windows SmartScreen',
      text: 'Como el ejecutable aún no tiene firma digital de pago, Windows puede mostrar «Windows protegió tu PC». Pulsa Más información → Ejecutar de todas formas.',
    },
  },

  donate: {
    eyebrow: 'SHOP // SOPORTE VOLUNTARIO',
    title: '¿TE AYUDA INKPACT CON TU EQUIPO?',
    text: 'Es gratis y lo seguirá siendo. Si quieres apoyar su desarrollo (nuevos juegos, mapas, pizarra compartida), puedes invitarnos un café.',
    cta: '☕ INVÍTANOS UN CAFÉ',
    toastTitle: '¡DESCARGA INICIADA!',
    toastText:
      'Inkpact es 100 % gratis y sin anuncios. Si te ayuda con tu equipo, invítanos un café para sumar nuevos juegos y pizarra compartida.',
    toastCta: '☕ INVITAR UN CAFÉ',
    toastClose: 'Cerrar aviso',
  },

  faq: {
    title: 'PREGUNTAS FRECUENTES',
    items: [
      {
        q: '¿Es gratis?',
        a: 'Sí, totalmente. Sin anuncios, sin cuentas y sin versión de pago.',
      },
      {
        q: '¿Es seguro? Windows me muestra un aviso.',
        a: 'Sí. El aviso de SmartScreen aparece con programas nuevos sin firma de pago. El código es público y los archivos se compilan en GitHub. Pulsa Más información → Ejecutar de todas formas.',
      },
      {
        q: '¿Necesito instalar algo?',
        a: 'No. Descomprime y abre Inkpact.exe. Todo se guarda en la carpeta data de al lado. Para borrarla, borras la carpeta.',
      },
      {
        q: '¿Me pueden banear por usarla?',
        a: 'Inkpact no lee ni modifica la memoria del juego: es una ventana transparente encima, como Discord o OBS. Úsala para coaching y análisis, no en partidas competitivas en curso.',
      },
      {
        q: 'No veo la pizarra sobre el juego.',
        a: 'Pon el juego en «ventana sin bordes» (borderless). La pantalla completa exclusiva no permite overlays.',
      },
      {
        q: '¿Funciona con otros juegos?',
        a: 'Sí: el dibujo funciona sobre cualquier cosa. El banco trae Valorant, Overwatch 2 y LoL, y puedes añadir personajes propios poniendo imágenes en una carpeta.',
      },
      {
        q: '¿Mac o Linux?',
        a: 'De momento solo Windows 10/11.',
      },
      {
        q: '¿Cómo apoyo el proyecto?',
        a: 'Con una donación, reportando errores en GitHub o compartiéndola con tu equipo.',
      },
    ],
  },

  cta: {
    title: '¿LISTO PARA DIBUJAR?',
    sub: 'Descarga Inkpact y empieza a explicar jugadas en segundos.',
    btn: '⬇ DESCARGAR PARA WINDOWS',
    meta: 'Windows 10/11 · ~2,5 MB · .ZIP Portable',
  },

  footer: {
    license: 'Licencia MIT',
    github: 'GitHub',
    issues: 'Reportar un error',
    legal:
      'Inkpact no está afiliado, asociado ni respaldado por Riot Games, Blizzard Entertainment ni ninguna otra desarrolladora. Valorant y League of Legends son marcas de Riot Games, Inc. Overwatch es una marca de Blizzard Entertainment, Inc.',
  },
};

export default es;
export type Translations = typeof es;
