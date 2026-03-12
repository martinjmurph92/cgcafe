# Aqua

A white-label site base built on **Next.js 15** and **Payload CMS 3**. Use it as a starting point for client projects: clone, add your content and branding, then deploy.

## Tech stack

- **Next.js 15** (App Router, Turbopack)
- **Payload CMS 3** (headless CMS, Postgres)
- **Tailwind CSS 4**
- **TypeScript**

## Prerequisites

- Node.js 18+
- pnpm
- PostgreSQL (local or hosted)
- Docker (optional, for MinIO and Mailpit in local dev)

## Quick start

```bash
pnpm install
cp .env.example .env
# Edit .env with your database URL and secrets (see below)
pnpm dev
```

- **Site:** http://localhost:3000  
- **Payload Admin:** http://localhost:3000/admin  

Create your first admin user when prompted, then set up **Settings** (logo, menu, SEO) and create a page with slug `home` to use as the homepage.

## Environment variables

Copy `.env.example` to `.env` and set at least:

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | Postgres connection string, e.g. `postgresql://user:pass@localhost:5432/dbname` |
| `PAYLOAD_SECRET` | Random string for JWT signing (e.g. `openssl rand -hex 32`) |
| `PREVIEW_SECRET` | Random string for preview auth |
| `NEXT_PUBLIC_SERVER_URL` | Site URL, e.g. `http://localhost:3000` (no trailing slash) |

For **local email testing**, see the section below. Media is stored locally in the `media/` directory.

**Email by environment:** locally we use **Mailpit** (SMTP); in production we use **Resend**. Set `RESEND_API_KEY` in production (see below).

## Local development

### Database (Postgres)

Create a database and set `DATABASE_URL` in `.env`. Payload will create tables on first run.

Example (local Postgres):

```bash
createdb aqua
# In .env: DATABASE_URL="postgresql://postgres:postgres@localhost:5432/aqua"
```

### Email testing (Mailpit)

To catch outgoing emails locally:

```bash
pnpm mailpit
# or: docker run -d --name mailpit -p 1025:1025 -p 8026:8025 axllent/mailpit
```

In `.env` keep the SMTP settings (Mailpit catches emails). View emails at http://localhost:8025.

### Production email (Resend)

In production, emails are sent via **Resend**. Add to your production environment:

```
RESEND_API_KEY="re_xxxxxxxxx"
```

Replace `re_xxxxxxxxx` with your real API key from [resend.com](https://resend.com). Verify your domain in Resend so `EMAIL_FROM_ADDRESS` can send.

### Email template preview

```bash
pnpm dev:email
```

Opens the React Email preview at http://localhost:3001.

## What’s included

### Payload collections

- **Admins** – CMS users
- **Media** – Images and files (stored locally)
- **Pages** – Flexible pages with blocks
- **Posts** – News/blog (under `/news`)
- **Form Submissions** – Contact form entries
- **Redirects** – Via plugin

### Globals

- **Settings** – Logo, favicon, SEO, integrations (GTM, GA), header menu, footer (logos, privacy/cookie policy links), social links
- **Config** – Extra site/footer/email config if you use it

### Page blocks

- Page Hero  
- Content (rich text)  
- Media + Text  
- Contact (form)  
- Posts (listing)

Pages use a block-based layout; set a page’s slug to `home` to make it the homepage.

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start Next.js dev server (Turbopack) |
| `pnpm build` | Production build |
| `pnpm start` | Run production server |
| `pnpm dev:email` | React Email preview (port 3001) |
| `pnpm lint` | Run ESLint |

## Using Aqua as a white-label base

1. Clone this repo and rename it for the project.
2. Set up `.env` (and optionally add envs per environment).
3. In Payload Admin: set **Settings** (logo, menu, SEO, footer) and create your pages.
4. Add project-specific collections or blocks in `payload/collections` and `payload/blocks` as needed.
5. Adjust styling in `app/(site)/globals.css` and components to match the brand.

Aqua keeps a minimal, generic feature set so each project can add its own content and behaviour without fighting the base.
