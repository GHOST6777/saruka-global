import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | Saruka Global",
  description:
    "Terms and Conditions governing the use of the Saruka Global website and export enquiries.",
};

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-[#faf8f2] pb-20 pt-28">
      <div className="mx-auto max-w-5xl px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:text-primary"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <p className="mt-10 text-xs font-black uppercase tracking-[0.35em] text-accent">
          Legal
        </p>

        <h1 className="mt-3 text-5xl font-semibold tracking-tight text-primary md:text-6xl">
          Terms & Conditions
        </h1>

        <p className="mt-5 max-w-3xl font-medium leading-8 text-zinc-700">
          These Terms and Conditions govern your use of the Saruka Global
          website and any enquiries, quotations or business communications
          initiated through it. By using this website, you agree to these terms.
        </p>

        <div className="mt-12 space-y-12">
          <LegalSection title="1. Website Information">
            The information provided on this website is intended for general
            business and product enquiry purposes. Product descriptions,
            specifications, availability, packaging and other details may be
            updated without prior notice.
          </LegalSection>

          <LegalSection title="2. Product Enquiries and Quotations">
            Any quotation provided by Saruka Global is subject to product
            availability, quality specifications, order quantity, packaging,
            destination, freight rates, currency movements and applicable
            government or regulatory requirements.
          </LegalSection>

          <LegalSection title="3. Orders and Confirmation">
            An order will be considered confirmed only after the buyer and
            seller agree in writing on the product specification, quantity,
            price, packaging, payment terms, Incoterms, shipment schedule and
            other applicable commercial conditions.
          </LegalSection>

          <LegalSection title="4. Pricing and Payment">
            Prices displayed or discussed through the website are not binding
            unless included in an official quotation, Proforma Invoice or
            written sales agreement. Payment terms will be mutually agreed
            before order confirmation.
          </LegalSection>

          <LegalSection title="5. Product Quality and Specifications">
            Agricultural products may show natural variations in colour, size,
            shape, moisture or appearance. Final quality requirements,
            tolerances, grade and inspection conditions must be agreed before
            shipment.
          </LegalSection>

          <LegalSection title="6. Packaging">
            Packaging may vary depending on the product, quantity, transport
            method, buyer requirement and destination-country regulations.
            Customized packaging may be available subject to commercial and
            technical feasibility.
          </LegalSection>

          <LegalSection title="7. Shipping and Delivery">
            Shipping schedules are estimates and may be affected by vessel
            availability, port congestion, customs procedures, weather,
            inspection, documentation, transport disruption or other events
            beyond reasonable control.
          </LegalSection>

          <LegalSection title="8. Export Documentation">
            Export documents will be provided according to the agreed order
            terms and applicable regulatory requirements. Additional
            certificates, inspections or third-party reports may involve extra
            cost and processing time.
          </LegalSection>

          <LegalSection title="9. Third-Party Inspection">
            Third-party inspection services such as SGS or other agencies may
            be arranged when mutually agreed. The scope, cost and inspection
            standard must be confirmed before the inspection is scheduled.
          </LegalSection>

          <LegalSection title="10. Intellectual Property">
            The Saruka Global name, logo, website design, written content,
            images and other original materials may not be copied, reproduced
            or used without prior written permission.
          </LegalSection>

          <LegalSection title="11. External Links">
            This website may contain links to third-party services or websites.
            Saruka Global is not responsible for the content, availability,
            privacy practices or security of those external websites.
          </LegalSection>

          <LegalSection title="12. Limitation of Liability">
            Saruka Global will not be liable for indirect, incidental or
            consequential loss arising from the use of this website, reliance
            on general website information or delays caused by events outside
            its reasonable control.
          </LegalSection>

          <LegalSection title="13. Force Majeure">
            Saruka Global will not be responsible for failure or delay caused
            by natural disasters, war, government restrictions, strikes,
            epidemics, port closures, transport disruptions or other events
            beyond reasonable control.
          </LegalSection>

          <LegalSection title="14. Governing Law">
            These website Terms and Conditions are governed by the applicable
            laws of India. Any formal commercial contract may contain separate
            jurisdiction and dispute-resolution provisions agreed by both
            parties.
          </LegalSection>

          <LegalSection title="15. Changes to These Terms">
            Saruka Global may update these Terms and Conditions when necessary.
            The revised version will be published on this page with an updated
            revision date.
          </LegalSection>

          <section>
            <h2 className="text-2xl font-bold text-primary">
              16. Contact Information
            </h2>

            <p className="mt-4 font-medium leading-8 text-zinc-700">
              For questions regarding these Terms and Conditions, contact:
            </p>

            <div className="mt-5 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <p className="font-medium text-zinc-700">
                <strong className="text-primary">Company:</strong> Saruka Global
              </p>

              <p className="mt-2 font-medium text-zinc-700">
                <strong className="text-primary">Email:</strong>{" "}
                <a
                  href="mailto:sraentreprises@gmail.com"
                  className="transition hover:text-accent"
                >
                  sraentreprises@gmail.com
                </a>
              </p>

              <p className="mt-2 font-medium text-zinc-700">
                <strong className="text-primary">Phone:</strong>{" "}
                <a
                  href="tel:+918595203649"
                  className="transition hover:text-accent"
                >
                  +91 8595203649
                </a>
              </p>

              <p className="mt-2 font-medium text-zinc-700">
                <strong className="text-primary">Location:</strong> Faridabad,
                Haryana, India
              </p>
            </div>
          </section>
        </div>

        <p className="mt-14 text-sm font-medium text-zinc-500">
          Last updated: July 2026
        </p>
      </div>
    </main>
  );
}

function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-primary">{title}</h2>

      <p className="mt-4 font-medium leading-8 text-zinc-700">{children}</p>
    </section>
  );
}