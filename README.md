# mirrahman.ca

The personal portfolio of Mir Rahman, built with Next.js, TypeScript, and Tailwind CSS. The site is static-first and ready for Vercel.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Before committing a release, run:

```bash
npm run lint
npm run typecheck
npm run build
```

## Updating content

All profile content—experience, projects, skills, links, and availability—is in `data/profile.ts`.

### Résumé

The résumé displayed by the hero button is stored at `public/resume.pdf`. Replace that file with the latest PDF whenever the résumé is updated, keeping the same filename.

## Deploying to Vercel

Import the Git repository into Vercel with these settings:

- Framework Preset: `Next.js`
- Root Directory: `./`
- Install Command: `npm install` (default)
- Build Command: `npm run build` (default)
- Output Directory: leave blank/default

After the first deployment, add `mirrahman.ca` and `www.mirrahman.ca` under **Project Settings → Domains**. Set `mirrahman.ca` as the primary domain and configure `www.mirrahman.ca` to redirect to it. Vercel will show the required DNS records for the domain.

No environment variables, database, analytics, or server-side form services are required.
