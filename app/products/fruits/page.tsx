import ProductHero from "@/app/components/ProductHero";
import ProductGrid from "@/app/components/ProductGrid";
import ProductCTA from "@/app/components/ProductCTA";
import SectionHeading from "@/app/components/SectionHeading";
import fruitsProducts from "@/app/data/fruits";

export default function FruitsPage() {
  return (
    <main className="min-h-screen bg-[#faf8f2]">
      <ProductHero
        title="Premium Fresh"
        highlight="Fruit Export"
        description="Export-quality fresh fruits sourced from trusted growing regions for global importers, wholesalers, supermarkets and hospitality buyers."
        image="/images/fruits/fruits-banner.jpg"
        backLink="/products"
        backText="Back to Products"
        badges={[
          "Fresh Fruits",
          "Export Grade",
          "Premium Quality",
          "Global Supply",
        ]}
      />

      <section id="fruits-products" className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="Fresh Fruits"
            title="Our Fruit Collection"
            description="Premium export-quality fruits selected for freshness, appearance, shelf life and international market requirements."
          />

          <ProductGrid products={fruitsProducts} columns={4} />
        </div>
      </section>

      <ProductCTA
        title="Looking For Bulk Fruit Export?"
        description="Send your required fruit variety, quantity, packaging preference and destination country. Our team will share availability, pricing and shipment details."
      />
    </main>
  );
}