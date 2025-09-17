import { Suspense } from "react";

type ProductPageProps = {
  params: { slug: string };
};

export function generateMetadata({ params }: ProductPageProps) {
  return {
    title: `Product – ${params.slug}`,
  };
}

async function fetchProduct(slug: string) {
  await new Promise((resolve) => setTimeout(resolve, 800));
  return { slug, description: `Details for ${slug}` };
}

async function ProductContent({ slug }: { slug: string }) {
  const product = await fetchProduct(slug);

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold capitalize">{product.slug}</h1>
      <p>{product.description}</p>
    </div>
  );
}

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <Suspense fallback={<p className="animate-pulse text-slate-500">Loading product...</p>}>
      <ProductContent slug={params.slug} />
    </Suspense>
  );
}
