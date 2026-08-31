# Portfolio — Mateo Carballo Juárez

Portfolio personal desarrollado con **Angular 22** (standalone components) y **Tailwind CSS**, con soporte multidioma (Español, Inglés, Portugués) y modo claro/oscuro.

## ✨ Características

- **Hero** con carrusel de acceso a las secciones (coverflow con transiciones).
- **Sobre mí** — trayectoria, stack y datos de contacto.
- **Habilidades** — tecnologías organizadas por categoría (Lenguajes, Frameworks, Bases de datos, Herramientas, IA).
- **Proyectos** — clasificados entre hechos con IA y hechos a mano, con subcategorías (Escritorio, Web, Videojuegos) y link al código.
- **Contacto** — GitHub, LinkedIn, Instagram y email.
- **i18n** — español, inglés y portugués con `@ngx-translate`, cambiables al instante desde el header.
- **Modo claro/oscuro** — persistente en `localStorage`.
- **Partículas animadas** de fondo y efectos de hover.

## 🛠️ Stack

| | |
|---|---|
| Framework | Angular 22 (standalone) |
| Estilos | Tailwind CSS v4 |
| Traducción | @ngx-translate/core v18 |
| Build | @angular/build (esbuild) |

## 🚀 Desarrollo

```bash
npm install
npm start        # compila Tailwind + arranca dev server en http://localhost:4200
```

## 📦 Producción

```bash
npm run build    # genera dist/
```

## 🌐 Deploy

Hosteado en **Vercel** (auto-deploy al pushear a `main`).

## 📁 Estructura

```
src/app/
├── components/   # header, hero, about, skills, projects, contact, footer, particles...
├── i18n/         # claves de traducción (public/i18n)
├── app.config.ts
└── app.routes.ts
```

## ©️

2026 · Mateo Carballo Juárez