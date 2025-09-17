export type Deal = {
  id: string;
  title: string;
  description: string;
  price: number;
  discount: number;
};

function resolveBaseUrl() {
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
}

export async function getFeaturedDeals(limit = 4): Promise<Deal[]> {
  const res = await fetch(`${resolveBaseUrl()}/api/deals`, {
    next: { revalidate: 30 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch deals");
  }

  const deals: Deal[] = await res.json();
  return deals.slice(0, limit);
}
