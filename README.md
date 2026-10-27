# Hornero-Arq

Portafolio web de Hornero-Arq, construido con React, Vite y TypeScript. La interfaz usa Tailwind CSS 4, Framer Motion y lucide-react, con tema oscuro y la identidad visual oficial del hornero.

## Desarrollo

```sh
pnpm install
pnpm dev
```

## Validación y build

```sh
pnpm lint
pnpm build
pnpm preview
```

## Personalización

- Edita los datos y textos de la página en `src/App.tsx`.
- Actualiza los proyectos y sus enlaces en el arreglo `projects` de `src/App.tsx`.
- Los logotipos oficiales se encuentran en `public/Hornero-Arq.jpg` y `public/Hornero-Arq.svg`.
- Cambia los tres colores principales editando `--accent-primary`, `--accent-secondary` y `--accent-tertiary` en `src/index.css`. Las clases Tailwind `text-clay`, `text-aqua` y `text-cyan` siguen esas variables.
- Ajusta inclinación, contenido y colores por proyecto en `src/components/ProjectCard.tsx`.
