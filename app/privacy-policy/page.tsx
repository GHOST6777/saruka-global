import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Saruka Global",
  description:
    "Privacy Policy of Saruka Global - Agricultural Export Company.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#faf8f2] pt-28 pb-20">
      <div className="mx-auto max-w-5xl px-6">

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <p className="mt-10 text-xs font-black uppercase tracking-[0.35em] text-accent">
          Legal
        </p>

        <h1 className="mt-3 text-5xl font-semibold text-primary">
          Privacy Policy
        </h1>

        <p className="mt-5 text-zinc-600 leading-8">
          At Saruka Global, we respect your privacy and are committed to
          protecting the information you share with us. This Privacy Policy
          explains how we collect, use and safeguard your information when you
          visit our website or contact us regarding our export services.
        </p>

        <div className="mt-12 space-y-12">

          <section>
            <h2 className="text-2xl font-bold text-primary">
              1. Information We Collect
            </h2>

            <p className="mt-4 text-zinc-700 leading-8">
              We may collect information such as your name, company name,
              email address, phone number, country, requested products and
              enquiry details when you contact us through our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary">
              2. How We Use Your Information
            </h2>

            <p className="mt-4 text-zinc-700 leading-8">
              The information collected is used only to respond to enquiries,
              prepare quotations, communicate regarding export requirements,
              improve customer service and fulfill legitimate business
              purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary">
              3. Data Protection
            </h2>

            <p className="mt-4 text-zinc-700 leading-8">
              We implement reasonable administrative and technical measures
              to protect your information from unauthorized access,
              disclosure or misuse.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary">
              4. Cookies
            </h2>

            <p className="mt-4 text-zinc-700 leading-8">
              Our website may use cookies to improve browsing experience,
              analyze website traffic and enhance website performance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary">
              5. Third-Party Services
            </h2>

            <p className="mt-4 text-zinc-700 leading-8">
              We may use trusted third-party services such as email providers,
              analytics tools or hosting platforms. These providers only
              process information necessary for delivering our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary">
              6. Information Sharing
            </h2>

            <p className="mt-4 text-zinc-700 leading-8">
              Saruka Global does not sell or rent your personal information.
              Information is shared only when legally required or necessary
              to fulfill export-related services requested by you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary">
              7. Contact Us
            </h2>

            <p className="mt-4 text-zinc-700 leading-8">
              If you have any questions regarding this Privacy Policy,
              please contact us.
            </p>

            <div className="mt-5 rounded-2xl bg-white border border-zinc-200 p-6">
              <p>
                <strong>Company:</strong> Saruka Global
              </p>

              <p className="mt-2">
                <strong>Email:</strong> sraentreprises@gmail.com
              </p>

              <p className="mt-2">
                <strong>Phone:</strong> +91 8595203649
              </p>

              <p className="mt-2">
                <strong>Location:</strong> Faridabad, Haryana, India
              </p>
            </div>
          </section>

        </div>

        <p className="mt-14 text-sm text-zinc-500">
          Last Updated: July 2026
        </p>

      </div>
    </main>
  );
}