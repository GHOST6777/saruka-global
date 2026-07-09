import ProductHero from "@/app/components/ProductHero";
import ProductGrid from "@/app/components/ProductGrid";
import ProductCTA from "@/app/components/ProductCTA";
import SectionHeading from "@/app/components/SectionHeading";
import maizeProducts from "@/app/data/maize";

export default function MaizePage() {
  return (
    <main className="min-h-screen bg-[#faf8f2]">
      <ProductHero
        title="Premium Indian"
        highlight="Maize Export"
        description="Export-quality Indian maize products for animal feed, poultry feed, starch production, ethanol manufacturing, food processing and retail markets worldwide."
        image="/images/maize/maize-banner.jpg"
        backLink="/products/grains"
        backText="Back to Grains"
        badges={[
          "Yellow Maize",
          "Broken Maize",
          "White Maize",
          "Sweet Corn",
          "Popcorn Maize",
          "Baby Corn",
        ]}
      />

      <section id="maize-products" className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="Maize Products"
            title="Our Maize Range"
            description="Carefully sourced Indian maize products with essential export details for global buyers and importers."
          />

          <ProductGrid products={maizeProducts} columns={3} />
        </div>
      </section>

      <ProductCTA
        title="Looking For Bulk Maize Export?"
        description="Send us your required maize variety, quantity, packaging preference and destination country. Our export team will share pricing, specifications and shipment details."
      />
    </main>
  );
}