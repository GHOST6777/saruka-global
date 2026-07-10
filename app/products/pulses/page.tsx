import ProductHero from "@/app/components/ProductHero";
import ProductGrid from "@/app/components/ProductGrid";
import ProductCTA from "@/app/components/ProductCTA";
import SectionHeading from "@/app/components/SectionHeading";
import pulsesProducts from "@/app/data/pulses";

export default function PulsesPage() {
  return (
    <main className="min-h-screen bg-[#faf8f2]">
      <ProductHero
        title="Premium Quality"
        highlight="Pulse Export"
        description="Export-quality Indian pulses sourced from trusted farming regions, processed under strict quality standards and supplied to importers, wholesalers, retailers and food processing industries worldwide."
        image="/images/pulses/pulses-banner.jpg"
        backLink="/products"
        backText="Back to Products"
        badges={[
          "Premium Pulses",
          "Export Grade",
          "High Protein",
          "Global Supply",
        ]}
      />

      <section id="pulses-products" className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="Premium Pulses"
            title="Our Pulse Collection"
            description="Premium export-quality pulses carefully selected for purity, nutritional value and international quality standards."
          />

          <ProductGrid
            products={pulsesProducts}
            columns={4}
          />
        </div>
      </section>

      <ProductCTA
        title="Looking For Bulk Pulse Export?"
        description="Share your required pulse variety, quantity, packaging preference and destination country. Our export specialists will provide pricing, specifications and shipment details."
      />
    </main>
  );
}