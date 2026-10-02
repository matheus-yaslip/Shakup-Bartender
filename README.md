# ShakeUp Bartenders — Next.js

Redesign completo do site ShakeUp Bartenders, migrado da versão PHP para a base oficial em Next.js.

## Stack

- Next.js 15.5.9 (App Router)
- React 19.1.0
- TypeScript
- Sass / CSS global
- `next/image` para imagens
- Route handlers existentes para formulário/e-mail

## Rodar localmente

```bash
npm ci
npm run dev
```

Build de produção:

```bash
npm run build
npm start
```

## Rotas principais

- `/` — Home
- `/empresa` — Empresa
- `/cardapio` — Cardápio
- `/galeria` — Galeria editorial com lightbox
- `/contato` — Contato/orçamento
- `/informacoes` — índice das páginas de serviço
- `/mapa-site` — mapa do site
- `/[contratada]` — 82 páginas SEO migradas do PHP

As URLs antigas `.php` foram mapeadas em `next.config.ts` para redirects permanentes para as rotas limpas.

## Mídia

Os assets reaproveitados do site anterior estão em `public/fashion/`:

- `drinks/`
- `drink-pagina/`
- `galeria/`
- `clientes/`
- `contratadas/`
- `video/banner.mp4`

O hero usa o vídeo original `banner.mp4` com poster/fallback. O comentário no componente da Home indica o ponto ideal para substituição futura por vídeo profissional.

## Experiência visual

A implementação utiliza composição editorial, tipografia em grande escala, hero cinematográfico, menu overlay, parallax leve, reveals via IntersectionObserver, cursor contextual em desktop, galeria assimétrica, lightbox e responsividade específica para mobile. O código respeita `prefers-reduced-motion`.

## SEO

- Metadata por rota
- Canonicals nas páginas dinâmicas
- Open Graph
- JSON-LD de LocalBusiness
- `robots.ts`
- Sitemap XML com rotas principais e páginas SEO
- Redirecionamentos das URLs PHP antigas
- Conteúdo textual renderizado em HTML indexável

## Formulário

O projeto preserva as rotas de API e a estrutura de formulário da base original. A variável `RECAPTCHA_ENABLED` continua controlada por `.env`.
