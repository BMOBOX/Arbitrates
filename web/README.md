This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Environment variables

Create a `.env.local` in `web/`:

```bash
R2_ACCOUNT_ID=your_cloudflare_account_id
R2_ACCESS_KEY_ID=your_r2_access_key_id
R2_SECRET_ACCESS_KEY=your_r2_secret_access_key

# backend base URL used by server-side API proxy
NEXT_PUBLIC_API_URL=http://localhost:8000

# Auth.js / NextAuth (GitHub OAuth)
AUTH_SECRET=replace_with_a_long_random_secret
AUTH_GITHUB_ID=your_github_oauth_app_client_id
AUTH_GITHUB_SECRET=your_github_oauth_app_client_secret
# for local/dev set this to frontend origin
AUTH_URL=http://localhost:3000
# set true when behind proxy/load balancer
AUTH_TRUST_HOST=true
# GitHub OAuth callback URL should be:
# http://localhost:3000/auth/callback/github

# server-side only API key for /api/webhooks proxy (do NOT use NEXT_PUBLIC_)
NEXT_SERVER_API_KEY=your_backend_api_key
# optional fallback name
# API_KEY=your_backend_api_key

# optional fallback names used elsewhere in repo:
# CF_ACCOUNT_ID=...
# R2_ACCESS_KEY=...
# R2_SECRET_KEY=...
```

The app reads HTML from Cloudflare R2 bucket `arbirates-static-html` with object key pattern `graphs/{job_id}.html`.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
