"use client";

import { FormEvent, useEffect, useState } from "react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Globe2,
  LoaderCircle,
  Mail,
  MapPin,
  Package,
  Phone,
  Send,
  ShieldCheck,
  User,
  Weight,
  X,
} from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

interface QuoteFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  product: string;
  quantity: string;
  destinationPort: string;
  message: string;
}

const initialFormData: QuoteFormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  product: "",
  quantity: "",
  destinationPort: "",
  message: "",
};

const trustPoints = [
  "Buyer-specific quotations",
  "Flexible export solutions",
  "FOB, CIF and CFR support",
  "Inspection available on request",
];

export default function QuoteModal({
  isOpen,
  onClose,
  defaultProduct = "",
}: QuoteModalProps) {
  const [formData, setFormData] = useState<QuoteFormData>({
    ...initialFormData,
    product: defaultProduct,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  useEffect(() => {
    if (!isOpen) return;

    setFormData((previous) => ({
      ...previous,
      product: defaultProduct || previous.product,
    }));

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose, defaultProduct]);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (status.type) {
      setStatus({
        type: null,
        message: "",
      });
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.country.trim() ||
      !formData.product.trim() ||
      !formData.message.trim()
    ) {
      setStatus({
        type: "error",
        message: "Please complete all required fields.",
      });

      return;
    }

    setIsSubmitting(true);
    setStatus({
      type: null,
      message: "",
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          country: formData.country,
          product: formData.product,
          quantity: formData.quantity,
          destinationPort: formData.destinationPort,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Your enquiry could not be sent.");
      }

      setStatus({
        type: "success",
        message:
          "Your quotation request has been submitted. Our export team will contact you shortly.",
      });

      setFormData({
        ...initialFormData,
        product: defaultProduct,
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleClose() {
    if (isSubmitting) return;

    setStatus({
      type: null,
      message: "",
    });

    onClose();
  }

  if (!isOpen) return null;

  const inputClass =
    "w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3.5 text-sm font-semibold text-zinc-800 outline-none transition placeholder:font-medium placeholder:text-zinc-400 focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 disabled:cursor-not-allowed disabled:opacity-60";

  return (
    <div className="fixed inset-0 z-[10050] flex items-center justify-center p-3 sm:p-5">
      {/* Background Overlay */}

      <button
        type="button"
        onClick={handleClose}
        aria-label="Close quotation modal"
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
      />

      {/* Modal */}

      <div className="relative z-[10060] flex max-h-[94dvh] w-full max-w-6xl overflow-hidden rounded-[28px] border border-white/10 bg-white shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
        {/* Close Button */}

        <button
          type="button"
          onClick={handleClose}
          disabled={isSubmitting}
          aria-label="Close quotation form"
          className="absolute right-3 top-3 z-[10070] flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-primary shadow-lg transition hover:rotate-90 hover:border-accent hover:bg-accent disabled:cursor-not-allowed md:right-5 md:top-5"
        >
          <X size={21} />
        </button>

        {/* Left Branding Panel */}

        <div className="relative hidden w-[38%] shrink-0 overflow-hidden bg-primary p-10 text-white lg:flex lg:flex-col lg:justify-between">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-accent/15" />
          <div className="absolute -bottom-32 -left-28 h-96 w-96 rounded-full border border-accent/10" />
          <div className="absolute right-8 top-40 h-44 w-44 rounded-full bg-accent/5 blur-3xl" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-4 py-2">
              <Globe2 size={16} className="text-accent" />

              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-accent">
                Global Export Enquiries
              </span>
            </div>

            <h2 className="mt-8 text-4xl font-semibold leading-tight">
              Request Your
              <span className="block text-accent">Export Quotation</span>
            </h2>

            <p className="mt-5 text-sm font-medium leading-7 text-white/70">
              Tell us what you need and receive a quotation based on your
              product, quantity and destination requirements.
            </p>

            <div className="mt-9 space-y-4">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                    <ShieldCheck size={18} />
                  </div>

                  <p className="text-sm font-semibold text-white/90">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-accent">
              Saruka Global
            </p>

            <p className="mt-2 text-sm font-medium leading-6 text-white/65">
              Connecting Indian agricultural products with international
              importers, wholesalers and distributors.
            </p>
          </div>
        </div>

        {/* Form Area */}

        <div className="w-full overflow-y-auto overscroll-contain bg-white">
          <form
            onSubmit={handleSubmit}
            className="px-5 pb-7 pt-20 sm:px-8 md:px-10 md:pb-10 md:pt-10 lg:px-12"
          >
            {/* Mobile Heading */}

            <div className="mb-8 lg:hidden">
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-accent">
                Export Enquiry
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary">
                Request Export Quotation
              </h2>

              <p className="mt-3 text-sm font-medium leading-6 text-zinc-600">
                Share your requirements and our team will contact you shortly.
              </p>
            </div>

            {/* Desktop Heading */}

            <div className="mb-8 hidden pr-14 lg:block">
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-accent">
                Tell Us Your Requirements
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary">
                Get A Customized Export Quote
              </h2>

              <p className="mt-3 max-w-xl text-sm font-medium leading-6 text-zinc-600">
                Fields marked with an asterisk are required.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <FormField label="Full Name *" icon={User}>
                <input
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={inputClass}
                />
              </FormField>

              <FormField label="Company Name" icon={Building2}>
                <input
                  type="text"
                  name="company"
                  autoComplete="organization"
                  placeholder="Your company name"
                  value={formData.company}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={inputClass}
                />
              </FormField>

              <FormField label="Business Email *" icon={Mail}>
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={inputClass}
                />
              </FormField>

              <FormField label="Phone / WhatsApp" icon={Phone}>
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  placeholder="+971..."
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={inputClass}
                />
              </FormField>

              <FormField label="Country *" icon={Globe2}>
                <input
                  type="text"
                  name="country"
                  required
                  autoComplete="country-name"
                  placeholder="Your country"
                  value={formData.country}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={inputClass}
                />
              </FormField>

              <FormField label="Destination Port" icon={MapPin}>
                <input
                  type="text"
                  name="destinationPort"
                  placeholder="Example: Jebel Ali"
                  value={formData.destinationPort}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={inputClass}
                />
              </FormField>

              <FormField label="Product Required *" icon={Package}>
                <input
                  type="text"
                  name="product"
                  required
                  placeholder="Example: 1121 Basmati Rice"
                  value={formData.product}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={inputClass}
                />
              </FormField>

              <FormField label="Required Quantity" icon={Weight}>
                <input
                  type="text"
                  name="quantity"
                  placeholder="Example: 20 MT"
                  value={formData.quantity}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={inputClass}
                />
              </FormField>
            </div>

            <div className="mt-5">
              <FormField label="Requirement Details *" icon={Send}>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Mention grade, variety, quantity, destination and preferred Incoterm."
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`${inputClass} resize-none`}
                />
              </FormField>
            </div>

            {status.type && (
              <div
                role="alert"
                className={`mt-6 flex items-start gap-3 rounded-2xl border p-4 ${
                  status.type === "success"
                    ? "border-green-200 bg-green-50 text-green-800"
                    : "border-red-200 bg-red-50 text-red-800"
                }`}
              >
                {status.type === "success" ? (
                  <CheckCircle2 size={21} className="mt-0.5 shrink-0" />
                ) : (
                  <ShieldCheck size={21} className="mt-0.5 shrink-0" />
                )}

                <p className="text-sm font-semibold leading-6">
                  {status.message}
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-7 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-primary px-7 py-4 text-sm font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-accent hover:text-primary disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {isSubmitting ? (
                <>
                  Submitting Request
                  <LoaderCircle size={19} className="animate-spin" />
                </>
              ) : (
                <>
                  Get My Export Quote
                  <ArrowRight size={19} />
                </>
              )}
            </button>

            <p className="mt-4 text-center text-[11px] font-medium leading-5 text-zinc-500">
              Your details will only be used to respond to your business
              enquiry.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

function FormField({
  label,
  icon: Icon,
  children,
}: {
  label: string;
  icon: typeof User;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-primary">
        <Icon size={15} className="text-accent" />
        {label}
      </span>

      {children}
    </label>
  );
}