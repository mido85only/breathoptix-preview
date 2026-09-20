import { useState } from "react";
import { useShop } from "./shop-store";
import { formatCAD, type Product } from "@/lib/clinic-data";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useShop();
  const [added, setAdded] = useState(false);

  const add = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  return (
    <div className="frost flex flex-col rounded-3xl border border-white/60 p-4">
      <img
        src={product.image}
        alt={product.title}
        loading="lazy"
        width={1024}
        height={1024}
        className="aspect-square w-full rounded-2xl bg-mist object-cover"
      />
      <span className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-brand">
        {product.category}
      </span>
      <h3 className="font-display font-bold">{product.title}</h3>
      <p className="mt-1 flex-1 text-sm text-ink/60">{product.description}</p>
      <div className="mt-3 flex items-center gap-2 text-[11px] font-semibold">
        {product.inStock ? (
          <span className="flex items-center gap-2 text-instock">
            <span className="size-1.5 rounded-full bg-instock" /> In Stock
          </span>
        ) : (
          <span className="text-ink/45">Temporarily out of stock</span>
        )}
      </div>
      <div className="mt-3 flex items-center justify-between">
        <span className="font-display text-lg font-bold">
          {formatCAD(product.price).replace(" CAD", "")}{" "}
          <span className="text-xs font-medium text-ink/50">CAD</span>
        </span>
        <button
          onClick={add}
          disabled={!product.inStock}
          className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-brand-deep disabled:opacity-40"
        >
          {added ? "Added ✓" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
