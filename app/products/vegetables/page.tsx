import ProductHero from "@/app/components/ProductHero";
import ProductGrid from "@/app/components/ProductGrid";
import ProductCTA from "@/app/components/ProductCTA";
import SectionHeading from "@/app/components/SectionHeading";
import vegetablesProducts from "@/app/data/vegetables";

export default function VegetablesPage() {
  return (
    <main className="min-h-screen bg-[#faf8f2]">
      <ProductHero
        title="Premium Fresh"
        highlight="Vegetable Export"
        description="Export-quality fresh vegetables sourced from India's leading farming regions for global importers, wholesalers, supermarkets and food service industries."
        image="/images/vegetables/vegetables-banner.jpg"
        backLink="/products"
        backText="Back to Products"
        badges={[
          "Fresh Vegetables",
          "Export Grade",
          "Premium Quality",
          "Global Supply",
        ]}
      />

      <section id="vegetables-products" className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="Fresh Vegetables"
            title="Our Vegetable Collection"
            description="Premium export-quality vegetables carefully selected to meet international quality standards."
          />

          <ProductGrid
            products={vegetablesProducts}
            columns={4}
          />
        </div>
      </section>

      <ProductCTA
        title="Looking For Bulk Vegetable Export?"
        description="Share your required vegetable variety, quantity, packaging preference and destination country. Our export team will provide pricing, specifications and shipment details."
      />
    </main>
  );
}