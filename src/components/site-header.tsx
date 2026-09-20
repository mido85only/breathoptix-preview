import { Link } from "@tanstack/react-router";
import {
  Calendar,
  Clock,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShoppingCart,
  X,
} from "lucide-react";
import { useState } from "react";
import { useShop } from "./shop-store";
import { clinic } from "@/lib/clinic-data";
import logoHorizontal from "@/assets/logo-horizontal.png";
import logoSquare from "@/assets/logo.png";

export function SiteHeader() {
  const { count, openCart, openBooking } = useShop();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full transition-all">
      {/* 1. Top Utility Info Bar (Professional Clinic Standard) */}
      <div className="hidden border-b border-slate-200/80 bg-slate-900 text-slate-300 text-xs font-medium md:block">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-6">
          {/* Left: Location & Hours */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="size-3.5 text-sky-400" />
              <span>8130 82 Ave NW, Edmonton, AB</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <Clock className="size-3.5 text-emerald-400" />
              <span>Mon–Fri: 8:30 AM – 4:30 PM · Open Today</span>
            </div>
          </div>

          {/* Right: Direct Phone & Email */}
          <div className="flex items-center gap-6">
            <a
              href="tel:7805550142"
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition"
            >
              <Phone className="size-3.5 text-sky-400" />
              <span>(780) 555-0142</span>
            </a>
            <a
              href={`mailto:${clinic.email}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition"
            >
              <Mail className="size-3.5 text-sky-400" />
              <span>{clinic.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar (Glassmorphic & Clean) */}
      <div className="border-b border-slate-200/80 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          {/* Official Brand Logo */}
          <a href="/#" className="flex items-center gap-3 group">
            <img
              src={logoHorizontal}
              alt="BreathOptix Diagnostic Clinic"
              className="h-11 w-auto max-w-[200px] object-contain transition-transform group-hover:scale-102"
              onError={(e) => {
                // Fallback to square logo or text if horizontal has specific aspect
                (e.currentTarget as HTMLImageElement).src = logoSquare;
              }}
            />
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden items-center gap-7 text-sm font-bold text-slate-700 lg:flex">
            <a
              href="/#services"
              className="transition hover:text-sky-600 active:text-sky-700"
            >
              Diagnostics
            </a>
            <a
              href="/#about-clinic"
              className="transition hover:text-sky-600 active:text-sky-700"
            >
              The Clinic
            </a>
            <a
              href="/shop"
              className="transition hover:text-sky-600 active:text-sky-700"
            >
              CPAP Supplies
            </a>
            <a
              href="/#how-it-works"
              className="transition hover:text-sky-600 active:text-sky-700"
            >
              Patient Journey
            </a>
            <a
              href="/#referrals"
              className="transition hover:text-sky-600 active:text-sky-700"
            >
              Physicians
            </a>
            <a
              href="/#location"
              className="transition hover:text-sky-600 active:text-sky-700"
            >
              Hours &amp; Map
            </a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3.5">
            {/* Supplies Cart Button */}
            <button
              onClick={openCart}
              aria-label={`Open supplies cart with ${count} items`}
              className="relative flex size-11 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 transition hover:border-sky-300 hover:bg-white hover:text-sky-600 hover:shadow-sm"
            >
              <ShoppingCart className="size-5" />
              {count > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-sky-600 px-1.5 text-[10px] font-bold text-white shadow-md">
                  {count}
                </span>
              )}
            </button>

            {/* Direct Book CTA */}
            <button
              onClick={() => openBooking()}
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-600 to-cyan-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-sky-500/25 transition hover:from-sky-700 hover:to-cyan-700 hover:shadow-sky-500/35 active:scale-98"
            >
              <Calendar className="size-4" />
              <span>Book Appointment</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle navigation menu"
              className="flex size-11 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {open && (
          <div className="border-t border-slate-200/80 bg-white px-6 py-6 shadow-2xl lg:hidden">
            <nav className="flex flex-col gap-4 text-base font-semibold text-slate-700">
              <a
                href="/#services"
                onClick={() => setOpen(false)}
                className="py-1 hover:text-sky-600"
              >
                Diagnostic Services
              </a>
              <a
                href="/#about-clinic"
                onClick={() => setOpen(false)}
                className="py-1 hover:text-sky-600"
              >
                The Clinic Tour
              </a>
              <a
                href="/shop"
                onClick={() => setOpen(false)}
                className="py-1 hover:text-sky-600"
              >
                CPAP Supplies Store
              </a>
              <a
                href="/#how-it-works"
                onClick={() => setOpen(false)}
                className="py-1 hover:text-sky-600"
              >
                Patient Journey
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
                Location &amp; Hours
              </a>

              <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setOpen(false);
                    openBooking();
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-sky-600 py-3.5 text-sm font-bold text-white shadow-md shadow-sky-500/20"
                >
                  <Calendar className="size-4" />
                  <span>Book an Appointment</span>
                </button>

                <div className="text-xs text-slate-500 text-center space-y-1 pt-2">
                  <p>📍 8130 82 Ave NW, Edmonton, AB</p>
                  <p>📞 (780) 555-0142 · Mon–Fri 8:30 AM–4:30 PM</p>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
