# Frontier Arena UI

An independent, educational recreation of a modern AI battle interface, inspired by the visual language of `arena.ai` and built from the architecture of `JCodesMore/ai-website-cloner-template`.

This project does **not** copy Arena's backend, model integrations, trademarks, logo files, private APIs, or proprietary assets. The interface uses an original `Frontier` wordmark and static demo behavior.

## Features

- Responsive desktop and mobile layout
- Collapsible navigation sidebar
- Battle and Direct mode switch
- Dismissible announcement bar
- Prompt composer with keyboard submit
- Interactive prompt suggestions
- Accessible focus states and reduced-motion support
- No remote fonts or image dependencies

## Tech stack

- Next.js 16 App Router
- React 19
- TypeScript strict mode
- Plain CSS design tokens and responsive rules
- Lucide React icons

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run check
```

## Next integration step

Replace the static submit handler in `src/components/arena-shell.tsx` with your own API route or model gateway. Keep provider credentials on the server and add rate limiting, request validation, content safety controls, and explicit privacy notices before production use.
