import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ProductCard } from "@/components/product-card";
import { useShop } from "@/components/shop-store";
import { categories, cpapFittingService, products, type Category } from "@/lib/clinic-data";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop CPAP & Respiratory Supplies | BreathOptix" },
      {
        name: "description",
        content:
          "Replacement CPAP masks, cushions, filters, tubing, humidification chambers, and cleaning supplies priced in CAD.",
      },
      { property: "og:title", content: "Shop CPAP & Respiratory Supplies | BreathOptix" },
      {
        property: "og:description",
        content:
          "Replacement CPAP cushions, tubing, filters, water chambers, and sanitization supplies from our Edmonton clinic.",
      },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  const { openBooking } = useShop();
  const [active, setActive] = useState<Category | "All">("All");
  const list = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <span className="text-sm font-semibold uppercase tracking-wider text-brand">
        Shop Supplies
      </span>
      <h1 className="mt-2 text-4xl font-extrabold lg:text-5xl">
        Replacement supplies &amp; maintenance
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-ink/70">
        We stock replacement accessories and cleaning items only. We do not sell prescription
        medication or CPAP machines online.
      </p>

      <div className="frost mt-8 flex flex-col gap-4 rounded-3xl border border-white/60 p-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-display text-lg font-bold">Need a CPAP machine?</h2>
          <p className="mt-1 max-w-xl text-sm text-ink/70">
            CPAP devices are prescription medical equipment. Book a fitting and prescription
            consultation and we'll set up your therapy in clinic.
          </p>
        </div>
        <button
          onClick={() => openBooking(cpapFittingService)}
          className="shrink-0 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-brand-deep"
        >
          Book CPAP Fitting &amp; Prescription Consultation
        </button>
      </div>

      <div className="mt-10 flex flex-wrap gap-2">
        {(["All", ...categories] as const).map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={
              active === c
                ? "rounded-full bg-brand px-4 py-2 text-sm font-semibold text-primary-foreground"
                : "rounded-full border border-white/70 bg-white/60 px-4 py-2 text-sm font-medium text-ink/70 hover:text-brand"
            }
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
  );
}
