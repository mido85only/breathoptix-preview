import { useState } from "react";
import { X } from "lucide-react";
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
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
        onClick={closeCart}
        aria-hidden="true"
      />
      <aside className="animate-drawer-in absolute right-0 top-0 flex h-full w-full max-w-sm flex-col border-l border-white/60 frost-strong shadow-2xl shadow-ink/10">
        <div className="flex h-16 items-center justify-between border-b border-black/5 px-6">
          <h3 className="font-display text-lg font-extrabold">Your Cart</h3>
          <button onClick={closeCart} aria-label="Close cart" className="text-ink/50 hover:text-brand">
            <X className="size-5" />
          </button>
        </div>

        <div className="flex-1 space-y-5 overflow-y-auto px-6 py-4">
          {placed && (
            <p className="rounded-2xl bg-instock/10 px-4 py-3 text-sm font-medium text-instock">
              Order placed. This is a demo checkout — no payment was taken.
            </p>
          )}
          {lines.length === 0 && !placed && (
            <p className="text-sm text-ink/60">
              Your cart is empty. Browse replacement supplies in the shop.
            </p>
          )}
          {lines.map((line) => (
            <div key={line.product.id} className="flex gap-4">
              <img
                src={line.product.image}
                alt={line.product.title}
                loading="lazy"
                width={512}
                height={512}
                className="size-16 shrink-0 rounded-xl bg-mist object-cover"
              />
              <div className="flex-1">
                <p className="font-display text-sm font-bold">{line.product.title}</p>
                <p className="text-xs text-ink/50">{formatCAD(line.product.price)}</p>
                <div className="mt-2 flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(line.product.id, line.quantity - 1)}
                    aria-label="Decrease quantity"
                    className="size-6 rounded-full bg-mist text-sm font-bold"
                  >
                    −
                  </button>
                  <span className="text-sm font-semibold">{line.quantity}</span>
                  <button
                    onClick={() => setQuantity(line.product.id, line.quantity + 1)}
                    aria-label="Increase quantity"
                    className="size-6 rounded-full bg-mist text-sm font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => removeLine(line.product.id)}
                aria-label={`Remove ${line.product.title}`}
                className="self-start text-ink/40 hover:text-brand"
              >
                <X className="size-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="space-y-4 border-t border-black/5 px-6 py-5">
          <div className="flex items-center justify-between">
            <span className="text-sm text-ink/60">Subtotal</span>
            <span className="font-display text-xl font-extrabold">{formatCAD(subtotal)}</span>
          </div>
          <p className="text-[11px] text-ink/50">
            Shipping &amp; taxes calculated at checkout. Prescription items require a consultation.
          </p>
          <button
            onClick={checkout}
            disabled={lines.length === 0}
            className="w-full rounded-full bg-brand py-3.5 font-semibold text-primary-foreground transition hover:bg-brand-deep disabled:opacity-40"
          >
            Proceed to Checkout
          </button>
        </div>
      </aside>
    </div>
  );
}
