import { useState } from "react";
import { useShop } from "./shop-store";
import { formatCAD, type Product } from "@/lib/clinic-data";
import { Check, ShoppingCart } from "lucide-react";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useShop();
  const [added, setAdded] = useState(false);

  const add = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  return (
    <div className="group relative flex flex-col rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-500/10">
      {/* Image container with subtle zoom */}
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-slate-50">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          width={800}
          height={800}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.inStock && (
          <span className="absolute left-2.5 top-2.5 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/90 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
            In Stock
          </span>
        )}
      </div>

      <div className="mt-3.5 flex flex-1 flex-col">
        <span className="text-[11px] font-bold uppercase tracking-wider text-sky-600">
          {product.category}
        </span>
        <h3 className="mt-1 font-display text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
          {product.title}
        </h3>
        <p className="mt-1.5 flex-1 text-xs leading-relaxed text-slate-500">
          {product.description}
        </p>

        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
          <div>
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Price</span>
            <span className="font-display text-lg font-extrabold text-slate-900">
              {formatCAD(product.price).replace(" CAD", "")}
              <span className="ml-1 text-xs font-semibold text-slate-400">CAD</span>
            </span>
          </div>

          <button
            onClick={add}
            disabled={!product.inStock}
            className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 ${
              added
                ? "bg-emerald-600 text-white"
                : "bg-slate-900 text-white hover:bg-sky-600 hover:shadow-md hover:shadow-sky-500/20 active:scale-95"
            } disabled:cursor-not-allowed disabled:opacity-40`}
          >
            {added ? (
              <>
                <Check className="size-3.5" /> Added
              </>
            ) : (
              <>
                <ShoppingCart className="size-3.5" /> Add
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
