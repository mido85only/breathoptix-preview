import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Product } from "@/lib/clinic-data";

export type CartLine = { product: Product; quantity: number };

type ShopState = {
  lines: CartLine[];
  count: number;
  subtotal: number;
  cartOpen: boolean;
  bookingService: string | null;
  addToCart: (product: Product) => void;
  setQuantity: (id: string, quantity: number) => void;
  removeLine: (id: string) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  openBooking: (service?: string) => void;
  closeBooking: () => void;
};

const ShopContext = createContext<ShopState | null>(null);

export function ShopProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [bookingService, setBookingService] = useState<string | null>(null);

  const addToCart = useCallback((product: Product) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.product.id === product.id);
      if (existing) {
        return prev.map((l) =>
          l.product.id === product.id ? { ...l, quantity: l.quantity + 1 } : l,
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setCartOpen(true);
  }, []);

  const setQuantity = useCallback((id: string, quantity: number) => {
    setLines((prev) =>
      quantity <= 0
        ? prev.filter((l) => l.product.id !== id)
        : prev.map((l) => (l.product.id === id ? { ...l, quantity } : l)),
    );
  }, []);

  const removeLine = useCallback((id: string) => {
    setLines((prev) => prev.filter((l) => l.product.id !== id));
  }, []);

  const value = useMemo<ShopState>(() => {
    const count = lines.reduce((n, l) => n + l.quantity, 0);
    const subtotal = lines.reduce((n, l) => n + l.quantity * l.product.price, 0);
    return {
      lines,
      count,
      subtotal,
      cartOpen,
      bookingService,
      addToCart,
      setQuantity,
      removeLine,
      clearCart: () => setLines([]),
      openCart: () => setCartOpen(true),
      closeCart: () => setCartOpen(false),
      openBooking: (service?: string) => setBookingService(service ?? ""),
      closeBooking: () => setBookingService(null),
    };
  }, [lines, cartOpen, bookingService, addToCart, setQuantity, removeLine]);

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error("useShop must be used within ShopProvider");
  return ctx;
}
