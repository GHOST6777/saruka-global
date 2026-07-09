import ProductHero from "@/app/components/ProductHero";
import ProductGrid from "@/app/components/ProductGrid";
import ProductCTA from "@/app/components/ProductCTA";
import SectionHeading from "@/app/components/SectionHeading";
import wheatProducts from "@/app/data/wheat";

export default function WheatPage() {
  return (
    <main className="min-h-screen bg-[#faf8f2]">
      <ProductHero
        title="Premium Indian"
        highlight="Wheat Export"
        description="Export-quality Indian wheat varieties for global importers, flour mills, food processors and wholesale buyers."
        image="/images/wheat/wheat-banner.jpg"
        backLink="/products/grains"
        backText="Back to Grains"
        badges={["Sharbati", "Lokwan", "Durum"]}
      />

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="Wheat Varieties"
            title="Our Wheat Products"
            description="Carefully sourced Indian wheat varieties with essential export details for serious buyers."
          />

          <ProductGrid products={wheatProducts} columns={3} />
        </div>
      </section>

      <ProductCTA
        title="Looking For Bulk Wheat Export?"
        description="Send your required wheat variety, quantity, packaging preference and destination country. Our team will share pricing and shipment details."
      />
    </main>
  );
}