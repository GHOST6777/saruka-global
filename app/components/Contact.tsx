"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  LoaderCircle,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 8595203649",
  },
  {
    icon: Mail,
    title: "Email",
    value: "sraentreprises@gmail.com",
  },
  {
    icon: MapPin,
    title: "Office",
    value: "Faridabad, Haryana, India",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Mon - Sat | 9:00 AM - 6:00 PM",
  },
];

interface FormData {
  name: string;
  company: string;
  country: string;
  email: string;
  phone: string;
  product: string;
  quantity: string;
  destinationPort: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  company: "",
  country: "",
  email: "",
  phone: "",
  product: "",
  quantity: "",
  destinationPort: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

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
      !formData.country.trim() ||
      !formData.email.trim() ||
      !formData.product.trim() ||
      !formData.message.trim()
    ) {
      setStatus({
        type: "error",
        message: "Please fill all required fields.",
      });
      return;
    }

    setIsSending(true);
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
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Your enquiry could not be sent.");
      }

      setStatus({
        type: "success",
        message:
          result.message ||
          "Your enquiry has been sent successfully. Our team will contact you shortly.",
      });

      setFormData(initialFormData);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  }

  const inputClasses =
    "w-full rounded-xl border border-zinc-300 bg-white px-5 py-4 text-sm font-medium text-zinc-800 outline-none transition placeholder:text-zinc-400 focus:border-accent focus:ring-2 focus:ring-accent/20 disabled:cursor-not-allowed disabled:bg-zinc-100";

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-white to-zinc-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-5 py-2 text-sm font-bold uppercase tracking-[0.3em] text-accent md:text-base">
            Contact Us
          </span>

          <h2 className="mt-4 text-4xl font-light text-primary md:text-5xl">
            Let&apos;s Build Business Together
          </h2>

          <p className="mx-auto mt-5 max-w-2xl font-medium leading-7 text-zinc-700">
            Looking for reliable agricultural exports from India? Send us your
            requirements and our export team will contact you shortly.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[30px] bg-primary p-8 text-white md:p-10"
          >
            <h3 className="mb-8 text-3xl font-light">Get In Touch</h3>

            <div className="space-y-8">
              {contactInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex items-start gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent">
                      <Icon size={24} className="text-primary" />
                    </div>

                    <div>
                      <p className="text-sm font-bold uppercase tracking-wider text-accent">
                        {item.title}
                      </p>

                      <p className="mt-1 break-words font-medium text-white/90">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold leading-7 text-zinc-300">
                Please mention the product, required quantity, preferred
                packaging and destination port for a more accurate quotation.
              </p>
            </div>
          </motion.div>

          {/* Right Side */}

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-5 rounded-[30px] border border-zinc-200 bg-white p-7 shadow-xl md:p-10"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-bold text-primary"
                >
                  Full Name *
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSending}
                  placeholder="Your full name"
                  autoComplete="name"
                  className={inputClasses}
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-sm font-bold text-primary"
                >
                  Company Name
                </label>

                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  disabled={isSending}
                  placeholder="Your company"
                  autoComplete="organization"
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-bold text-primary"
                >
                  Email Address *
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSending}
                  placeholder="name@company.com"
                  autoComplete="email"
                  className={inputClasses}
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-bold text-primary"
                >
                  Phone / WhatsApp
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isSending}
                  placeholder="+971..."
                  autoComplete="tel"
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label
                  htmlFor="country"
                  className="mb-2 block text-sm font-bold text-primary"
                >
                  Country *
                </label>

                <input
                  id="country"
                  name="country"
                  type="text"
                  required
                  value={formData.country}
                  onChange={handleChange}
                  disabled={isSending}
                  placeholder="Your country"
                  autoComplete="country-name"
                  className={inputClasses}
                />
              </div>

              <div>
                <label
                  htmlFor="destinationPort"
                  className="mb-2 block text-sm font-bold text-primary"
                >
                  Destination Port
                </label>

                <input
                  id="destinationPort"
                  name="destinationPort"
                  type="text"
                  value={formData.destinationPort}
                  onChange={handleChange}
                  disabled={isSending}
                  placeholder="Example: Jebel Ali"
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label
                  htmlFor="product"
                  className="mb-2 block text-sm font-bold text-primary"
                >
                  Product Required *
                </label>

                <input
                  id="product"
                  name="product"
                  type="text"
                  required
                  value={formData.product}
                  onChange={handleChange}
                  disabled={isSending}
                  placeholder="Example: 1121 Basmati Rice"
                  className={inputClasses}
                />
              </div>

              <div>
                <label
                  htmlFor="quantity"
                  className="mb-2 block text-sm font-bold text-primary"
                >
                  Required Quantity
                </label>

                <input
                  id="quantity"
                  name="quantity"
                  type="text"
                  value={formData.quantity}
                  onChange={handleChange}
                  disabled={isSending}
                  placeholder="Example: 20 MT"
                  className={inputClasses}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-bold text-primary"
              >
                Requirement Details *
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                disabled={isSending}
                placeholder="Please mention grade, packaging, quantity, destination and preferred Incoterm."
                className={`${inputClasses} resize-none`}
              />
            </div>

            {status.type && (
              <div
                role="alert"
                className={`flex items-start gap-3 rounded-xl border p-4 ${
                  status.type === "success"
                    ? "border-green-200 bg-green-50 text-green-800"
                    : "border-red-200 bg-red-50 text-red-800"
                }`}
              >
                {status.type === "success" ? (
                  <CheckCircle2 className="mt-0.5 shrink-0" size={20} />
                ) : (
                  <AlertCircle className="mt-0.5 shrink-0" size={20} />
                )}

                <p className="text-sm font-semibold leading-6">
                  {status.message}
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSending}
              className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-accent px-8 py-4 font-bold text-primary transition hover:scale-[1.02] hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100 md:w-auto"
            >
              {isSending ? (
                <>
                  Sending Enquiry
                  <LoaderCircle size={19} className="animate-spin" />
                </>
              ) : (
                <>
                  Send Inquiry
                  <Send size={18} />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}