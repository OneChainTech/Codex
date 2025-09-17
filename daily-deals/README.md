# Daily Deals

Sample Next.js 14 project that demonstrates App Router patterns (server components, streaming, API routes, and Tailwind styling) through a small "Daily Deals" storefront.

## Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000 to open the storefront. The UI streams featured deals from a server component while the `app/api/deals` route serves JSON that can also be inspected directly.

## Structure highlights

- `app/page.tsx` renders the landing page and streams `<DealsList />` with React Suspense.
- `app/sections/deals-list.tsx` is a server component that calls `getFeaturedDeals()`.
- `components/deal-card.tsx` is a client component showing local state (`Save`/`Saved`).
- `app/api/deals/route.ts` exposes mock deal data revalidated every 30 seconds.
- `app/products` demonstrates static + dynamic routes with `generateMetadata` and `Suspense` fallback loading states.

## Learning ideas

- Swap the mock API for a real data source (Prisma, REST, etc.).
- Add auth-guarded pages or middleware to explore server actions.
- Deploy to Vercel and configure `NEXT_PUBLIC_BASE_URL` for production fetches.
