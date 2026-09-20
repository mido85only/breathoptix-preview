import { useState } from "react";
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, ShieldCheck } from "lucide-react";
import { useShop } from "./shop-store";
import { formatCAD } from "@/lib/clinic-data";

export function CartDrawer() {
  const { cartOpen, closeCart, lines, subtotal, setQuantity, removeLine, clearCart } =
    useShop();
  const [placed, setPlaced] = useState(false);

  if (!cartOpen) return null;

  const checkout = () => {
    setPlaced(true);
    clearCart();
    setTimeout(() => setPlaced(false), 5000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
        aria-hidden="true"
      />

      <aside className="animate-drawer-in absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-2xl">
        {/* Header */}
        <div className="flex h-20 items-center justify-between border-b border-slate-100 px-6">
          <div className="flex items-center gap-2.5">
            <div className="flex size-9 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
              <ShoppingBag className="size-5" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-slate-900">Your Supplies Cart</h3>
              <p className="text-xs text-slate-400">Edmonton Clinic Dispatch</p>
            </div>
          </div>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            className="flex size-9 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-4 overflow-y-auto px-6 py-5">
          {placed && (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
              <p className="font-bold flex items-center gap-2">
                <ShieldCheck className="size-5 text-emerald-600" />
                Demo Order Placed Successfully!
              </p>
              <p className="mt-1 text-xs text-emerald-700">
                This is a design prototype connected to WooCommerce. In production, this completes checkout securely.
              </p>
            </div>
          )}

          {lines.length === 0 && !placed && (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="flex size-16 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                <ShoppingBag className="size-8" />
              </div>
              <p className="mt-4 font-display font-bold text-slate-800">Your cart is currently empty</p>
              <p className="mt-1 max-w-xs text-xs text-slate-400">
                Browse our replacement CPAP masks, cushions, filters, and sanitizing accessories below.
              </p>
              <button
                onClick={closeCart}
                className="mt-6 rounded-full bg-sky-600 px-6 py-2.5 text-xs font-bold text-white hover:bg-sky-700 transition"
              >
                Browse Supplies
              </button>
            </div>
          )}

          {lines.map((line) => (
            <div
              key={line.product.id}
              className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50/50 p-3.5 transition hover:border-slate-200"
            >
              <img
                src={line.product.image}
                alt={line.product.title}
                loading="lazy"
                width={128}
                height={128}
                className="size-20 shrink-0 rounded-xl bg-white object-cover border border-slate-200"
              />
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-display text-sm font-bold text-slate-800 leading-snug">
                      {line.product.title}
                    </h4>
                    <button
                      onClick={() => removeLine(line.product.id)}
                      aria-label={`Remove ${line.product.title}`}
                      className="text-slate-400 hover:text-rose-500 transition"
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                  <p className="text-xs font-bold text-sky-600 mt-0.5">
                    {formatCAD(line.product.price)}
                  </p>
                </div>

                <div className="flex items-center gap-3 mt-2">
                  <div className="flex items-center rounded-full border border-slate-200 bg-white shadow-sm">
                    <button
                      onClick={() => setQuantity(line.product.id, line.quantity - 1)}
                      aria-label="Decrease quantity"
                      className="flex size-7 items-center justify-center text-slate-600 hover:text-slate-900"
                    >
                      <Minus className="size-3" />
                    </button>
                    <span className="w-8 text-center text-xs font-bold text-slate-800">
                      {line.quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(line.product.id, line.quantity + 1)}
                      aria-label="Increase quantity"
                      className="flex size-7 items-center justify-center text-slate-600 hover:text-slate-900"
                    >
                      <Plus className="size-3" />
                    </button>
                  </div>
                  <span className="text-xs font-medium text-slate-400">
                    Total: {formatCAD(line.product.price * line.quantity)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        {lines.length > 0 && (
          <div className="border-t border-slate-100 bg-slate-50/50 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm font-medium text-slate-500">Subtotal</span>
                <p className="text-[11px] text-slate-400">Taxes calculated at checkout</p>
              </div>
              <span className="font-display text-2xl font-extrabold text-slate-900">
                {formatCAD(subtotal)}
              </span>
            </div>

            <div className="rounded-xl bg-sky-50 p-3 text-[11px] font-medium text-sky-900 flex items-center gap-2">
              <ShieldCheck className="size-4 shrink-0 text-sky-600" />
              <span>Edmonton direct fulfillment · Authentic clinical supplies only</span>
            </div>

            <button
              onClick={checkout}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-sky-600 hover:shadow-sky-500/20 active:scale-[0.99]"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="size-4" />
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
