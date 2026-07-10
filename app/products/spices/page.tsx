import ProductHero from "@/app/components/ProductHero";
import ProductGrid from "@/app/components/ProductGrid";
import ProductCTA from "@/app/components/ProductCTA";
import SectionHeading from "@/app/components/SectionHeading";
import spicesProducts from "@/app/data/spices";

export default function SpicesPage() {
  return (
    <main className="min-h-screen bg-[#faf8f2]">
      <ProductHero
        title="Premium Indian"
        highlight="Spice Export"
        description="Export-quality whole spices sourced from India's finest spice-growing regions. Carefully cleaned, graded and packed to meet international quality standards for importers, wholesalers and food processing industries worldwide."
        image="/images/spices/spices-banner.jpg"
        backLink="/products"
        backText="Back to Products"
        badges={[
          "Whole Spices",
          "Export Grade",
          "Premium Quality",
          "Global Supply",
        ]}
      />

      <section
        id="spices-products"
        className="px-6 py-16"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="Premium Spices"
            title="Our Spice Collection"
            description="Premium export-quality whole spices processed under strict quality standards to ensure exceptional aroma, purity and freshness for international markets."
          />

          <ProductGrid
            products={spicesProducts}
            columns={4}
          />
        </div>
      </section>

      <ProductCTA
        title="Looking For Bulk Spice Export?"
        description="Share your required spice, quantity, packaging preference and destination country. Our export specialists will provide pricing, specifications and shipment details tailored to your requirements."
      />
    </main>
  );
}