# Magic Beauty — Sitio web

Estética premium · Jamundí · Desde 2016

## Estructura

```
site/
├── index.html        ← página principal (todo el código va aquí)
└── assets/           ← imágenes y logos
    ├── hero-lashes.jpg
    ├── hero-nails.jpg
    ├── tex-lashes.jpg
    ├── tex-nails.jpg
    ├── logo-dark.png
    └── logo-light.png
```

## Desplegar en Vercel

1. Sube esta carpeta a un repositorio de GitHub.
2. En Vercel: **Add New → Project → Import** el repositorio.
3. Framework Preset: **Other** (es un sitio estático, sin build).
   - Build Command: _(vacío)_
   - Output Directory: _(vacío / raíz)_
4. Deploy. Vercel te dará una URL `*.vercel.app`.

### Si el repo tiene el contenido dentro de `site/`

En Vercel → Settings → **Root Directory** = `site`.
(O sube el contenido de `site/` a la raíz del repo.)

## Dominio propio

Vercel → tu proyecto → **Settings → Domains → Add** y sigue los registros DNS que te indique.
