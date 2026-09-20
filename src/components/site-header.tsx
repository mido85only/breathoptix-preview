import { Link } from "@tanstack/react-router";
import { Activity, Menu, ShoppingCart, X, Calendar, Phone } from "lucide-react";
import { useState } from "react";
import { useShop } from "./shop-store";

export function SiteHeader() {
  const { count, openCart, openBooking } = useShop();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/85 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative flex size-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-sky-600 to-cyan-500 shadow-md shadow-sky-500/20 text-white font-display text-xl font-black tracking-tighter transition-transform group-hover:scale-105">
            <Activity className="size-6 text-white" />
          </div>
          <div>
            <span className="font-display text-xl font-extrabold tracking-tight text-slate-900 flex items-center gap-1">
              Breath<span className="text-sky-600">Optix</span>
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-widest text-slate-400">
              Diagnostics &amp; Sleep Clinic
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 lg:flex">
          <a href="/#services" className="transition hover:text-sky-600">
            Clinical Services
          </a>
          <a href="/#how-it-works" className="transition hover:text-sky-600">
            How It Works
          </a>
          <a href="/#shop" className="transition hover:text-sky-600">
            CPAP Supplies Shop
          </a>
          <a href="/#referrals" className="transition hover:text-sky-600">
            Physician Referrals
          </a>
          <a href="/#location" className="transition hover:text-sky-600">
            Clinic &amp; Hours
          </a>
        </nav>

        {/* Actions (Cart & Book CTA) */}
        <div className="flex items-center gap-3">
          {/* Cart Icon */}
          <button
            onClick={openCart}
            aria-label={`Open cart with ${count} items`}
            className="relative flex size-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-sky-300 hover:text-sky-600 hover:shadow"
          >
            <ShoppingCart className="size-5" />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-sky-600 px-1.5 text-[10px] font-bold text-white shadow-sm animate-scale">
                {count}
              </span>
            )}
          </button>

          {/* Book Appointment CTA */}
          <button
            onClick={() => openBooking()}
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-600 to-cyan-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-sky-500/25 transition-all hover:from-sky-700 hover:to-cyan-700 hover:shadow-sky-500/35 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Calendar className="size-4" />
            <span>Book Diagnostic Test</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex size-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="border-t border-slate-200/80 bg-white px-6 py-6 shadow-xl lg:hidden">
          <nav className="flex flex-col gap-4 text-base font-semibold text-slate-700">
            <a
              href="/#services"
              onClick={() => setOpen(false)}
              className="py-1 hover:text-sky-600"
            >
              Clinical Services
            </a>
            <a
              href="/#how-it-works"
              onClick={() => setOpen(false)}
              className="py-1 hover:text-sky-600"
            >
              How It Works
            </a>
            <a
              href="/#shop"
              onClick={() => setOpen(false)}
              className="py-1 hover:text-sky-600"
            >
              CPAP Supplies Shop
            </a>
            <a
              href="/#referrals"
              onClick={() => setOpen(false)}
              className="py-1 hover:text-sky-600"
            >
              Physician Referrals
            </a>
            <a
              href="/#location"
              onClick={() => setOpen(false)}
              className="py-1 hover:text-sky-600"
            >
              Clinic &amp; Hours
            </a>

            <button
              onClick={() => {
                setOpen(false);
                openBooking();
              }}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-sky-600 py-3.5 text-sm font-bold text-white shadow-md shadow-sky-500/20"
            >
              <Calendar className="size-4" />
              <span>Book an Appointment</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
