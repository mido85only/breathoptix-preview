import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ProductCard } from "@/components/product-card";
import { useShop } from "@/components/shop-store";
import {
  categories,
  cpapFittingService,
  products,
  type Category,
} from "@/lib/clinic-data";
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Filter,
  Package,
  Search,
  ShieldAlert,
  ShieldCheck,
  ShoppingBag,
  Truck,
} from "lucide-react";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "CPAP Supplies & Replacement Accessories | BreathOptix Edmonton" },
      {
        name: "description",
        content:
          "Official replacement masks, cushions, tubing, filters, and sanitizing supplies for CPAP therapy in Edmonton, Alberta. Priced in CAD.",
      },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  const { openBooking, openCart, count } = useShop();
  const [activeCategory, setActiveCategory] = useState<Category | "All">("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = products.filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-28">
      {/* 1. Header Banner */}
      <div className="border-b border-slate-200/80 bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6">
          {/* Breadcrumb */}
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-sky-600 transition mb-4"
          >
            <ArrowLeft className="size-3.5" />
            <span>Back to Clinic Home</span>
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <span className="inline-block rounded-full bg-sky-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-sky-700 border border-sky-100">
                Official Clinical Store
              </span>
              <h1 className="mt-3 font-display text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                CPAP Supplies &amp; Maintenance
              </h1>
              <p className="mt-3 max-w-2xl text-base text-slate-600 leading-relaxed">
                Hospital-grade replacement masks, memory-foam cushions, fine filters, and sanitizing
                supplies. Authentic products with Edmonton clinic pickup or fast Alberta-wide shipping.
              </p>
            </div>

            {/* Quick Cart Drawer Opener */}
            <button
              onClick={openCart}
              className="self-start lg:self-auto flex items-center gap-2.5 rounded-full bg-slate-900 px-6 py-3.5 text-xs font-bold text-white shadow-lg shadow-slate-900/10 transition hover:bg-sky-600"
            >
              <ShoppingBag className="size-4" />
              <span>Open Cart ({count} items)</span>
            </button>
          </div>

          {/* Value Badges Strip */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-3 text-xs font-semibold text-slate-700">
              <div className="flex size-8 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                <Truck className="size-4" />
              </div>
              <span>Fast Alberta Shipping</span>
            </div>

            <div className="flex items-center gap-3 text-xs font-semibold text-slate-700">
              <div className="flex size-8 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <Package className="size-4" />
              </div>
              <span>Free Edmonton Pickup</span>
            </div>

            <div className="flex items-center gap-3 text-xs font-semibold text-slate-700">
              <div className="flex size-8 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                <ShieldCheck className="size-4" />
              </div>
              <span>100% Genuine Supplies</span>
            </div>

            <div className="flex items-center gap-3 text-xs font-semibold text-slate-700">
              <div className="flex size-8 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <CheckCircle2 className="size-4" />
              </div>
              <span>Priced in CAD ($)</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Important Notice: Prescription Machines */}
      <div className="mx-auto max-w-7xl px-6 pt-8">
        <div className="rounded-3xl border border-sky-200 bg-gradient-to-r from-sky-50 via-cyan-50 to-white p-6 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="flex size-11 items-center justify-center rounded-2xl bg-sky-600 text-white shrink-0 shadow-md shadow-sky-600/20">
              <ShieldAlert className="size-6" />
            </div>
            <div>
              <h3 className="font-display text-base font-bold text-slate-900">
                Looking for a complete CPAP pressure machine?
              </h3>
              <p className="text-xs text-slate-600 mt-1 max-w-2xl leading-relaxed">
                Under Alberta medical regulations, CPAP devices are prescription equipment requiring
                physician evaluation, pressure titration, and custom mask fitting. We size and set up
                machines directly in our Edmonton clinic — never sold uncalibrated online.
              </p>
            </div>
          </div>

          <button
            onClick={() => openBooking(cpapFittingService)}
            className="shrink-0 flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-xs font-bold text-white transition hover:bg-sky-600 shadow-md"
          >
            <Calendar className="size-3.5" />
            <span>Book Machine Sizing &amp; Fitting</span>
          </button>
        </div>
      </div>

      {/* 3. Search & Filter Bar */}
      <div className="mx-auto max-w-7xl px-6 pt-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {(["All", ...categories] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2.5 text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? "bg-sky-600 text-white shadow-md shadow-sky-500/20"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-sky-300 hover:text-sky-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search accessories &amp; parts..."
              className="w-full rounded-full border border-slate-200 bg-white pl-10 pr-4 py-2.5 text-xs font-medium text-slate-800 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/10 transition shadow-sm"
            />
          </div>
        </div>

        {/* 4. Products Grid */}
        <div className="mt-8">
          {filtered.length === 0 ? (
            <div className="rounded-3xl border border-slate-200 bg-white py-16 text-center">
              <Package className="mx-auto size-12 text-slate-300" />
              <h3 className="mt-3 font-display font-bold text-slate-800">No products found</h3>
              <p className="text-xs text-slate-500 mt-1">Try searching for a different keyword or select another category.</p>
              <button
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
                className="mt-4 text-xs font-bold text-sky-600 hover:underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>

        {/* 5. Clinic Assurance Footer Box */}
        <div className="mt-16 rounded-3xl border border-slate-200/80 bg-white p-8 text-center sm:p-12 shadow-sm">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
            <ShieldCheck className="size-7" />
          </div>
          <h3 className="mt-4 font-display text-xl font-extrabold text-slate-900">
            Need assistance identifying your replacement part?
          </h3>
          <p className="mx-auto mt-2 max-w-lg text-xs text-slate-600 leading-relaxed">
            Bring your current mask or machine to our Edmonton clinic at 8130 82 Ave NW, or email our respiratory therapists at <strong className="text-slate-900">info@breathoptix.ca</strong> for personalized sizing guidance.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={() => openBooking("CPAP Mask Sizing / Sizing Consult")}
              className="rounded-full bg-slate-900 px-6 py-3 text-xs font-bold text-white transition hover:bg-sky-600"
            >
              Book Sizing Consultation
            </button>
            <a
              href="mailto:info@breathoptix.ca"
              className="rounded-full border border-slate-200 bg-slate-50 px-6 py-3 text-xs font-bold text-slate-700 transition hover:bg-slate-100"
            >
              Contact Clinic
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
