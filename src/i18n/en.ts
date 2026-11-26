import type { Translations } from './es';

const en: Translations = {
  lang: 'en',
  dir: 'ltr',
  meta: {
    title: 'Inkpact — Tactical overlay whiteboard for esports coaches',
    description:
      'Draw arrows, zones and routes over your game, replay or Discord without pausing anything. Free, open source and portable.',
    ogImage: '/og-en.png',
  },

  nav: {
    subtitle: 'TACTICAL OVERLAY',
    home: 'Home',
    steps: 'How it works',
    features: 'Features',
    games: 'Games',
    security: 'Security',
    faq: 'FAQ',
    download: '▶ DOWNLOAD',
  },

  hero: {
    badge: '★ INSERT COIN // 100% PORTABLE ★',
    headline: 'DRAW THE PLAY RIGHT ON TOP OF THE GAME',
    sub: 'Inkpact is a transparent whiteboard that floats over your screen. Draw arrows, zones and routes over your game, a replay or Discord without pausing anything.',
    cta: '⬇ DOWNLOAD FOR WINDOWS',
    freeBadge: 'FREE',
    github: 'VIEW ON GITHUB',
    meta: 'Windows 10/11 · 64-bit · ~2.5 MB · Free · Open source MIT',
    videoPause: 'Pause background video',
    videoPlay: 'Play background video',
  },

  steps: {
    title: 'HOW IT WORKS // 3 LEVELS',
    subtitle: 'ZERO SETUP. STRAIGHT INTO BATTLE.',
    items: [
      {
        num: 'LV. 1',
        icon: 'zip',
        accentColor: 'accent',
        title: 'DOWNLOAD THE .ZIP',
        text: 'Download the lightweight archive and extract it wherever you want (Desktop, USB…).',
        status: 'STATUS: 0 INSTALLERS',
      },
      {
        num: 'LV. 2',
        icon: 'play',
        accentColor: 'warning',
        title: 'OPEN INKPACT.EXE',
        text: 'Double-click and launch instantly. Zero background resource usage when idle.',
        status: 'STATUS: STANDBY READY',
      },
      {
        num: 'LV. 3',
        icon: 'keyboard',
        accentColor: 'danger',
        title: 'PRESS THE SHORTCUT',
        text: 'Toggle the transparent whiteboard on the fly from any app:',
        keys: ['Ctrl', 'Shift', 'D'],
        status: 'STATUS: OVERLAY IN ACTION',
      },
    ],
  },

  features: {
    title: 'FEATURES // LOADOUT',
    subtitle: 'AVAILABLE INVENTORY SLOTS',
    items: [
      {
        slot: 'SLOT 01',
        icon: 'pencil',
        title: 'DRAWING TOOLS',
        text: 'Pen, highlighter, line, arrow, rectangle, ellipse, text and eraser.',
      },
      {
        slot: 'SLOT 02',
        icon: 'laser',
        title: 'LASER POINTER',
        text: 'Hold click to point. Leaves a trail that fades on its own.',
      },
      {
        slot: 'SLOT 03',
        icon: 'shield',
        title: 'TRANSLUCENT ZONES',
        text: 'Circles, vision cones, rings, polygons and bands to mark smokes, ranges or areas.',
      },
      {
        slot: 'SLOT 04',
        icon: 'users',
        title: 'AGENT BANK',
        text: 'Valorant, Overwatch 2 and LoL, filtered by role with search. Drag them to the board.',
      },
      {
        slot: 'SLOT 05',
        icon: 'freeze',
        title: 'FREEZE SCREEN',
        text: "Freeze what's on screen to explain something that can't be paused.",
      },
      {
        slot: 'SLOT 06',
        icon: 'pages',
        title: 'PAGES & .INKPACT',
        text: 'One play per page, like slides. Save self-contained .inkpact files or export PNG.',
      },
      {
        slot: 'SLOT 07',
        icon: 'keyboard',
        title: 'GLOBAL SHORTCUTS',
        text: 'All configurable. Ctrl+Shift+D toggles drawing from any app.',
      },
      {
        slot: 'SLOT 08',
        icon: 'lock',
        title: 'FULL PRIVACY',
        text: 'No accounts, no ads and no telemetry. Everything stays in your folder.',
      },
    ],
  },

  games: {
    eyebrow: '// MULTI-GAME SUPPORT',
    title: 'COMPATIBLE WITH ANY SCENARIO',
    sub: 'Works on top of any application. The agent bank includes:',
    list: ['Valorant', 'Overwatch 2', 'League of Legends'],
    anyGame: 'Any game in borderless windowed',
  },

  security: {
    title: 'SECURITY',
    checks: [
      'Download only from this page or from GitHub.',
      'Open source: anyone can review the code.',
      'Built on GitHub Actions with provenance attestation.',
      'Verify your download with SHA256 (optional).',
    ],
    hashLabel: 'Verify hash (PowerShell):',
    hashCmd: 'Get-FileHash .\\Inkpact-<VERSION>-portable.zip -Algorithm SHA256',
    copyLabel: 'Copy',
    copiedLabel: 'Copied!',
    smartscreen: {
      title: 'Windows SmartScreen warning',
      text: 'Since the executable is not yet code-signed, Windows may show "Windows protected your PC". Click More info → Run anyway.',
    },
  },

  donate: {
    eyebrow: 'SHOP // VOLUNTARY SUPPORT',
    title: 'DOES INKPACT HELP YOUR TEAM?',
    text: "It's free and always will be. If you'd like to support development (new games, maps, shared whiteboard), buy us a coffee.",
    cta: '☕ BUY US A COFFEE',
    toastTitle: 'DOWNLOAD STARTED!',
    toastText:
      'Inkpact is 100% free with no ads. If it helps your team, buy us a coffee to help add new games and a shared whiteboard.',
    toastCta: '☕ BUY US A COFFEE',
    toastClose: 'Close notice',
  },

  faq: {
    title: 'FREQUENTLY ASKED QUESTIONS',
    items: [
      {
        q: 'Is it free?',
        a: 'Yes, completely. No ads, no accounts and no paid version.',
      },
      {
        q: 'Is it safe? Windows shows a warning.',
        a: 'Yes. The SmartScreen warning appears with new unsigned programs. The code is public and binaries are built on GitHub. Click More info → Run anyway.',
      },
      {
        q: 'Do I need to install anything?',
        a: 'No. Extract and open Inkpact.exe. Everything is saved in the data folder next to it. To remove it, delete the folder.',
      },
      {
        q: 'Can I get banned for using it?',
        a: "Inkpact doesn't read or modify game memory: it's a transparent window on top, like Discord or OBS. Use it for coaching and analysis, not in live competitive matches.",
      },
      {
        q: "I can't see the whiteboard over the game.",
        a: "Set the game to borderless windowed. Exclusive fullscreen doesn't allow overlays.",
      },
      {
        q: 'Does it work with other games?',
        a: 'Yes: drawing works on top of anything. The bank includes Valorant, Overwatch 2 and LoL, and you can add custom agents by placing images in a folder.',
      },
      {
        q: 'Mac or Linux?',
        a: 'Currently Windows 10/11 only.',
      },
      {
        q: 'How can I support the project?',
        a: 'With a donation, by reporting bugs on GitHub, or by sharing it with your team.',
      },
    ],
  },

  cta: {
    title: 'READY TO DRAW?',
    sub: 'Download Inkpact and start explaining plays in seconds.',
    btn: '⬇ DOWNLOAD FOR WINDOWS',
    meta: 'Windows 10/11 · ~2.5 MB · Portable .ZIP',
  },

  footer: {
    license: 'MIT License',
    github: 'GitHub',
    issues: 'Report a bug',
    legal:
      'Inkpact is not affiliated with, associated with, or endorsed by Riot Games, Blizzard Entertainment, or any other developer. Valorant and League of Legends are trademarks of Riot Games, Inc. Overwatch is a trademark of Blizzard Entertainment, Inc.',
  },
};

export default en;
