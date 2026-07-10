import ProductHero from "@/app/components/ProductHero";
import ProductGrid from "@/app/components/ProductGrid";
import ProductCTA from "@/app/components/ProductCTA";
import SectionHeading from "@/app/components/SectionHeading";
import dryFruitsProducts from "@/app/data/dryfruits";

export default function DryFruitsPage() {
  return (
    <main className="min-h-screen bg-[#faf8f2]">
      <ProductHero
        title="Premium Quality"
        highlight="Dry Fruits Export"
        description="Premium dry fruits and nuts processed, graded and packed for global importers, wholesalers, retailers, confectionery businesses and food processing industries."
        image="/images/dryfruits/dryfruits-banner.jpg"
        backLink="/products"
        backText="Back to Products"
        badges={[
          "Premium Grade",
          "Export Quality",
          "Bulk Supply",
          "Global Markets",
        ]}
      />

      <section id="dry-fruits-products" className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="Premium Dry Fruits"
            title="Our Dry Fruit Collection"
            description="Carefully selected dry fruits and nuts offering premium quality, freshness, nutritional value and reliable export packaging."
          />

          <ProductGrid products={dryFruitsProducts} columns={4} />
        </div>
      </section>

      <ProductCTA
        title="Looking For Bulk Dry Fruit Export?"
        description="Share your required dry fruit, grade, quantity, packaging preference and destination country. Our export team will provide pricing and shipment details."
      />
    </main>
  );
}