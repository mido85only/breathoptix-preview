import cushion from "@/assets/product-cushion.jpg";
import tubing from "@/assets/product-tubing.jpg";
import humidifier from "@/assets/product-humidifier.jpg";
import wipes from "@/assets/product-wipes.jpg";
import filters from "@/assets/product-filters.jpg";
import nasalMask from "@/assets/product-nasal-mask.jpg";
import cleaningKit from "@/assets/product-cleaning-kit.jpg";

export type Service = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    id: "pft",
    eyebrow: "Lung Volumes",
    title: "Full Pulmonary Function Testing",
    description:
      "Comprehensive assessment of lung volumes and gas exchange to map overall respiratory capacity.",
  },
  {
    id: "spirometry",
    eyebrow: "Airflow",
    title: "Spirometry",
    description:
      "Pre- and post-bronchodilator airflow evaluation to detect reversible obstruction.",
  },
  {
    id: "assessment",
    eyebrow: "Evaluation",
    title: "Comprehensive Respiratory Assessment",
    description:
      "Specialized, hands-on evaluation conducted by our certified respiratory therapists.",
  },
  {
    id: "consultation",
    eyebrow: "Physician",
    title: "Respirologist Consultation",
    description:
      "Specialized physician consultation, diagnosis, and tailored care planning.",
  },
  {
    id: "sleep",
    eyebrow: "Sleep",
    title: "Sleep Apnea Diagnostic & CPAP Therapy",
    description:
      "Overnight sleep evaluation plus ongoing pressure therapy management.",
  },
];

export const cpapFittingService = "CPAP Machine Fitting & Prescription Consultation";

export const serviceOptions = [
  ...services.map((s) => s.title),
  cpapFittingService,
];

export const categories = [
  "CPAP Masks & Replacement Cushions",
  "Filters & Tubing",
  "Humidification Chambers & Water Tubs",
  "Sanitization & Cleaning",
] as const;

export type Category = (typeof categories)[number];

export type Product = {
  id: string;
  title: string;
  category: Category;
  description: string;
  price: number;
  image: string;
  inStock: boolean;
  featured?: boolean;
};

export const products: Product[] = [
  {
    id: "hybrid-cushion",
    title: "Hybrid CPAP Cushion",
    category: "CPAP Masks & Replacement Cushions",
    description: "Ultra-soft memory-foam seal for full-face frames.",
    price: 45,
    image: cushion,
    inStock: true,
    featured: true,
  },
  {
    id: "heated-tubing",
    title: "Heated Tubing Kit",
    category: "Filters & Tubing",
    description: "Anti-condensation heated line, 2 m.",
    price: 89,
    image: tubing,
    inStock: true,
    featured: true,
  },
  {
    id: "water-tub",
    title: "Humidifier Water Tub",
    category: "Humidification Chambers & Water Tubs",
    description: "BPA-free, easy-clean chamber with lid.",
    price: 32,
    image: humidifier,
    inStock: true,
    featured: true,
  },
  {
    id: "wipes",
    title: "Sanitizing Wipe Pack",
    category: "Sanitization & Cleaning",
    description: "60 fragrance-free disinfecting wipes.",
    price: 24,
    image: wipes,
    inStock: true,
    featured: true,
  },
  {
    id: "nasal-mask",
    title: "Nasal Pillow Mask & Headgear",
    category: "CPAP Masks & Replacement Cushions",
    description: "Lightweight frame with three cushion sizes.",
    price: 129,
    image: nasalMask,
    inStock: true,
  },
  {
    id: "filters",
    title: "Disposable Filters · 6 Pack",
    category: "Filters & Tubing",
    description: "Fine filters plus one reusable pre-filter.",
    price: 18,
    image: filters,
    inStock: true,
  },
  {
    id: "standard-tubing",
    title: "Standard Tubing · 1.8 m",
    category: "Filters & Tubing",
    description: "Flexible non-heated replacement hose.",
    price: 29,
    image: tubing,
    inStock: false,
  },
  {
    id: "chamber-seal",
    title: "Chamber Seal & Lid Set",
    category: "Humidification Chambers & Water Tubs",
    description: "Replacement gasket kit for water chambers.",
    price: 21,
    image: humidifier,
    inStock: true,
  },
  {
    id: "cleaning-kit",
    title: "CPAP Cleaning Brush Kit",
    category: "Sanitization & Cleaning",
    description: "Three-piece brush set with mask wipes.",
    price: 38,
    image: cleaningKit,
    inStock: true,
  },
];

export const clinic = {
  address: "8130 82 Ave NW, Edmonton, AB, Canada",
  email: "info@breathoptix.ca",
  hours: ["Monday – Friday: 8:30 AM – 4:30 PM", "Saturday: By Appointment"],
};

export const formatCAD = (value: number) =>
  `$${value.toFixed(2)} CAD`;
