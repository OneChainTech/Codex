'use client';

import { useState } from "react";
import type { Deal } from "@/lib/deals";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export default function DealCard({ deal }: { deal: Deal }) {
  const [liked, setLiked] = useState(false);
  const originalPrice = deal.discount
    ? deal.price / (1 - deal.discount / 100)
    : deal.price;
  const savings = Math.max(0, originalPrice - deal.price);

  return (
    <article className="flex h-full flex-col justify-between rounded-[2.5rem] border border-slate-200 bg-white/80 p-8 text-slate-900 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg">
      <header className="mb-6 space-y-2">
        <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
          Featured
        </p>
        <h2 className="text-2xl font-medium tracking-tight">{deal.title}</h2>
      </header>

      <p className="mb-8 text-sm leading-relaxed text-slate-500">
        {deal.description}
      </p>

      <div className="mt-auto space-y-6">
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
            今日售价
          </p>
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-semibold">
              {currencyFormatter.format(deal.price)}
            </span>
            <span className="text-sm text-slate-300 line-through">
              {currencyFormatter.format(originalPrice)}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <p className="text-slate-400">
            节省 {currencyFormatter.format(savings)} · 优惠 {deal.discount}%
          </p>
          <button
            type="button"
            aria-pressed={liked}
            className={`rounded-full px-5 py-2 text-xs font-medium tracking-[0.2em] uppercase transition ${
              liked
                ? "bg-slate-900 text-white"
                : "border border-slate-300 text-slate-700 hover:border-slate-400"
            }`}
            onClick={() => setLiked((prev) => !prev)}
          >
            {liked ? "Saved" : "Save"}
          </button>
        </div>
      </div>
    </article>
  );
}
