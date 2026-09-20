import { Link } from "@tanstack/react-router";
import { Menu, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { useShop } from "./shop-store";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/shop", label: "Shop Supplies" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const { count, openCart, openBooking } = useShop();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40">
      <div className="frost border-b border-white/60">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid size-9 place-items-center rounded-xl bg-brand font-display text-lg font-extrabold text-primary-foreground">
              B
            </span>
            <span className="font-display text-lg font-extrabold tracking-tight">
              BreathOptix
            </span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-ink/70 lg:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-brand" }}
                className="transition hover:text-brand"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={openCart}
              aria-label={`Open cart, ${count} items`}
              className="relative grid size-10 place-items-center rounded-full border border-white/70 bg-white/70 text-ink/70 transition hover:text-brand"
            >
              <ShoppingCart className="size-[18px]" />
              {count > 0 && (
                <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-brand px-1 text-[10px] font-bold text-primary-foreground">
                  {count}
                </span>
              )}
            </button>
            <button
              onClick={() => openBooking()}
              className="hidden rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-brand/30 transition hover:bg-brand-deep sm:block"
            >
              Book an Appointment
            </button>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="grid size-10 place-items-center rounded-full border border-white/70 bg-white/70 text-ink/70 lg:hidden"
            >
              {open ? <X className="size-[18px]" /> : <Menu className="size-[18px]" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-white/60 px-6 py-4 lg:hidden">
            <div className="flex flex-col gap-3 text-sm font-medium text-ink/75">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{ className: "text-brand" }}
                >
                  {l.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  setOpen(false);
                  openBooking();
                }}
                className="mt-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                Book an Appointment
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
