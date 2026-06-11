# PMC — Purity for Maintenance and Cleaning

Corporate website for **Purity for Maintenance and Cleaning Co. (PMC)**, a Saudi Arabia-based facility management, manpower supply, cleaning, maintenance, and contracting support company headquartered in Jeddah, KSA.

## Key Technologies

- **Framework**: [TanStack Start](https://tanstack.com/start) with React 19
- **Routing**: TanStack Router (file-based routing)
- **Styling**: Tailwind CSS v4
- **Forms**: Netlify Forms (via static HTML skeleton in `public/`)
- **Deployment**: Netlify (SSR via Netlify Functions)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, services overview, why choose us, CTA |
| `/about` | About Us — company profile, vision/mission, values |
| `/services` | Services — 13 detailed service sections |
| `/industries` | Industries We Serve — 8 industry sectors |
| `/projects` | Projects & Clients — portfolio and client showcase |
| `/quote` | Request a Quote — full quote submission form |
| `/contact` | Contact Us — contact form, details, WhatsApp, map |

## Running Locally

```bash
npm install
npm run dev
```

The app runs at `http://localhost:3000`.

> **Note**: Netlify Forms do not work in local development. Form submissions are only processed on deployed Netlify environments.

## Environment

No environment variables are required for the base site.
