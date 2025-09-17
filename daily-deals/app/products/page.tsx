import Link from "next/link";

const PRODUCTS = ["chair", "keyboard", "monitor", "mouse"];

export default function ProductsPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-semibold">Products</h1>
      <ul className="list-disc space-y-2 pl-6">
        {PRODUCTS.map((slug) => (
          <li key={slug}>
            <Link href={`/products/${slug}`} className="text-blue-600 underline">
              View {slug}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
