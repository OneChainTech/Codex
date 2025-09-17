import type { Deal } from "@/lib/deals";
import DealCard from "@/components/deal-card";

type DealsListProps = {
  deals: Deal[];
};

export default function DealsList({ deals }: DealsListProps) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
      {deals.map((deal) => (
        <DealCard key={deal.id} deal={deal} />
      ))}
    </div>
  );
}
