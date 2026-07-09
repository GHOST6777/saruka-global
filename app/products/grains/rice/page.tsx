import ProductHero from "@/app/components/ProductHero";
import SectionHeading from "@/app/components/SectionHeading";
import ProductGrid from "@/app/components/ProductGrid";
import ProductCTA from "@/app/components/ProductCTA";
import riceProducts from "@/app/data/rice";

export default function RicePage() {
  return (
    <main className="min-h-screen bg-[#faf8f2]">
      <ProductHero
        title="Premium Indian"
        highlight="Rice Export"
        description="Export-quality Basmati and Non-Basmati rice varieties for global importers, wholesalers, hospitality buyers and food service businesses."
        image="/images/rice/rice-banner.jpg"
        backLink="/products/grains"
        backText="Back to Grains"
        badges={["1121", "1509", "IR64", "Pusa", "Traditional"]}
      />

      <section id="rice-products" className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="Rice Varieties"
            title="Our Rice Products"
            description="Carefully selected rice varieties with essential export details for serious buyers."
          />

          <ProductGrid products={riceProducts} columns={3}/>
        </div>
      </section>

      <ProductCTA
        title="Looking For Bulk Rice Export?"
        description="Send your required rice variety, quantity, packaging preference and destination country. Our team will share pricing and shipment details."
      />
    </main>
  );
}