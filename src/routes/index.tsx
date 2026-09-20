import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero-clinic.jpg";
import servicePftImg from "@/assets/service-pft.jpg";
import serviceSleepImg from "@/assets/service-sleep.jpg";
import serviceConsultImg from "@/assets/service-consult.jpg";
import clinicInteriorImg from "@/assets/clinic-interior.jpg";
import clinicSuiteImg from "@/assets/clinic-suite.jpg";
import doctorReferralImg from "@/assets/doctor-referral.jpg";
import { useShop } from "@/components/shop-store";
import { ProductCard } from "@/components/product-card";
import {
  categories,
  clinic,
  cpapFittingService,
  products,
  services,
  type Category,
} from "@/lib/clinic-data";
import {
  Activity,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  FileText,
  HeartPulse,
  Mail,
  MapPin,
  Moon,
  Phone,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  Wind,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BreathOptix | Premier Respiratory & Sleep Diagnostics in Edmonton" },
      {
        name: "description",
        content:
          "Edmonton's specialized clinic for full pulmonary function testing, spirometry, and sleep apnea care. Certified respirology lab with genuine CPAP replacement supplies.",
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  const { openBooking, openCart } = useShop();
  const [activeCategory, setActiveCategory] = useState<Category | "All">("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const getServicePhoto = (id: string) => {
    switch (id) {
      case "pft":
        return servicePftImg;
      case "spirometry":
        return servicePftImg;
      case "consultation":
        return serviceConsultImg;
      case "sleep":
        return serviceSleepImg;
      default:
        return clinicSuiteImg;
    }
  };

  const getServiceIcon = (id: string) => {
    switch (id) {
      case "pft":
        return <Wind className="size-5 text-sky-600" />;
      case "spirometry":
        return <Activity className="size-5 text-cyan-600" />;
      case "assessment":
        return <Stethoscope className="size-5 text-sky-600" />;
      case "consultation":
        return <HeartPulse className="size-5 text-blue-600" />;
      case "sleep":
        return <Moon className="size-5 text-indigo-600" />;
      default:
        return <Activity className="size-5 text-sky-600" />;
    }
  };

  return (
    <div className="relative overflow-hidden bg-slate-50 text-slate-900">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
        {/* Soft Ambient Background Glows */}
        <div className="ambient-glow -top-24 -left-24 size-96 bg-sky-200/50" />
        <div className="ambient-glow top-1/3 -right-24 size-[32rem] bg-cyan-100/60" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Left Column: Copy & CTAs */}
            <div className="lg:col-span-7">
              {/* Live Status Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50/90 px-4 py-1.5 text-xs font-bold text-sky-800 backdrop-blur-sm shadow-sm">
                <span className="flex size-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Accepting New Patients &amp; Referrals · Edmonton, AB</span>
              </div>

              {/* Main Headline */}
              <h1 className="mt-6 font-display text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.08]">
                Breathe easier with <br />
                <span className="bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">
                  precision respiratory
                </span>{" "}
                care.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
                Edmonton's dedicated diagnostic clinic providing Comprehensive Pulmonary Function
                Testing (PFT), Spirometry, and Sleep Apnea evaluations. Certified respiratory
                therapists and specialist respirologist interpretation delivered with empathy and speed.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => openBooking()}
                  className="flex items-center gap-2.5 rounded-full bg-gradient-to-r from-sky-600 to-cyan-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-sky-500/25 transition-all hover:from-sky-700 hover:to-cyan-700 hover:shadow-sky-500/40 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Calendar className="size-5" />
                  <span>Book Diagnostic Test</span>
                </button>

                <a
                  href="#shop"
                  className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 text-base font-bold text-slate-700 shadow-sm transition hover:border-sky-300 hover:text-sky-600 hover:shadow-md"
                >
                  <span>Explore CPAP Supplies</span>
                  <ArrowRight className="size-4" />
                </a>
              </div>

              {/* Trust Features Strip */}
              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 pt-6 border-t border-slate-200/80">
                <div className="flex items-center gap-2.5 text-xs font-bold text-slate-700">
                  <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                    <CheckCircle2 className="size-4" />
                  </div>
                  <span>Physician Referrals Welcome</span>
                </div>

                <div className="flex items-center gap-2.5 text-xs font-bold text-slate-700">
                  <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-600">
                    <Clock className="size-4" />
                  </div>
                  <span>24–48h Report Turnaround</span>
                </div>

                <div className="flex items-center gap-2.5 text-xs font-bold text-slate-700 col-span-2 sm:col-span-1">
                  <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600">
                    <ShieldCheck className="size-4" />
                  </div>
                  <span>Alberta HIA Compliant</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual with Layered Floating Cards */}
            <div className="relative lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Clinic Image Frame */}
                <div className="relative overflow-hidden rounded-3xl border-4 border-white bg-slate-100 shadow-2xl shadow-slate-900/10">
                  <img
                    src={heroImg}
                    alt="Respiratory therapist conducting lung function testing at BreathOptix Edmonton"
                    width={1088}
                    height={1280}
                    className="aspect-[4/5] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

                  {/* Caption on image */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="inline-block rounded-md bg-sky-600/90 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider backdrop-blur-sm">
                      Accredited Diagnostic Lab
                    </span>
                    <p className="mt-2 text-sm font-semibold text-slate-100">
                      Modern diagnostic testing equipment &amp; certified clinical care team.
                    </p>
                  </div>
                </div>

                {/* Floating Card 1: Fast Turnaround (Top Right) */}
                <div className="absolute -top-5 -right-4 sm:-right-6 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/95 p-3.5 shadow-xl backdrop-blur-md">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                    <Activity className="size-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-extrabold text-slate-900">
                      Rapid Results
                    </span>
                    <span className="text-[11px] font-medium text-slate-500">
                      Reports to MD in 24–48h
                    </span>
                  </div>
                </div>

                {/* Floating Card 2: Location Card (Bottom Left) */}
                <div className="absolute -bottom-6 -left-4 sm:-left-6 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/95 p-3.5 shadow-xl backdrop-blur-md">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-extrabold text-slate-900">
                      Edmonton Clinic
                    </span>
                    <span className="text-[11px] font-medium text-slate-500">
                      8130 82 Ave NW
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CLINICAL STATS HIGHLIGHT */}
      {/* ========================================================================= */}
      <section className="border-y border-slate-200/80 bg-white py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center md:border-r border-slate-100">
              <span className="font-display text-3xl font-black text-sky-600 lg:text-4xl">
                24–48h
              </span>
              <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">
                Report Turnaround
              </p>
              <p className="mt-1 text-xs text-slate-400">Direct transmission to your physician</p>
            </div>

            <div className="text-center md:border-r border-slate-100">
              <span className="font-display text-3xl font-black text-slate-900 lg:text-4xl">
                5+ Modalities
              </span>
              <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">
                Full Diagnostic Scope
              </p>
              <p className="mt-1 text-xs text-slate-400">PFT, Spirometry &amp; Sleep Studies</p>
            </div>

            <div className="text-center md:border-r border-slate-100">
              <span className="font-display text-3xl font-black text-cyan-600 lg:text-4xl">
                100%
              </span>
              <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">
                Licensed Team
              </p>
              <p className="mt-1 text-xs text-slate-400">Registered Respiratory Therapists</p>
            </div>

            <div className="text-center">
              <span className="font-display text-3xl font-black text-slate-900 lg:text-4xl">
                Direct Care
              </span>
              <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">
                Easy Scheduling
              </p>
              <p className="mt-1 text-xs text-slate-400">Physician referral or self-inquiry</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. CLINICAL SERVICES WITH PHOTOGRAPHY (BENTO GRID) */}
      {/* ========================================================================= */}
      <section id="services" className="py-24 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
              Diagnostic Services
            </span>
            <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Advanced clinical services, tailored for your lungs.
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Every study is administered by certified respiratory therapists and interpreted by a
              specialist respirologist to ensure rigorous diagnostic accuracy.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const photo = getServicePhoto(s.id);
              return (
                <div
                  key={s.id}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-500/10"
                >
                  {/* Photo Header */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <img
                      src={photo}
                      alt={s.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />

                    <div className="absolute top-3.5 left-3.5 flex size-10 items-center justify-center rounded-xl bg-white/90 shadow-md backdrop-blur-sm">
                      {getServiceIcon(s.id)}
                    </div>

                    <span className="absolute bottom-3 left-4 text-xs font-bold uppercase tracking-wider text-sky-300 drop-shadow">
                      {s.eyebrow}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-slate-600">
                        {s.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <button
                        onClick={() => openBooking(s.title)}
                        className="flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-700 transition"
                      >
                        <span>Book This Test</span>
                        <ArrowRight className="size-3.5" />
                      </button>
                      <span className="text-[11px] font-semibold text-slate-400">
                        Covered via Referral
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Featured Bento Box: CPAP Fitting & Consultation with Visual Banner */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-sky-950 text-white shadow-xl shadow-slate-900/15">
              {/* Photo top header */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={clinicSuiteImg}
                  alt="CPAP Calibration Suite"
                  loading="lazy"
                  className="h-full w-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
                <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 rounded-full bg-sky-500/80 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                  <Shield className="size-3.5" /> Prescription Fitting
                </div>
              </div>

              <div className="p-6 pt-2 flex flex-1 flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-black text-white">
                    CPAP Machine Sizing &amp; Clinical Calibration
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-slate-300">
                    CPAP machines require medical prescription &amp; in-clinic fitting. We size your
                    mask, set your pressure titration, and provide ongoing compliance reports for your physician.
                  </p>

                  <ul className="mt-4 space-y-1.5 text-[11px] text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="size-3.5 text-sky-400" />
                      <span>Custom facial mask sizing &amp; comfort seal</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="size-3.5 text-sky-400" />
                      <span>Pressure calibration &amp; humidifier tuning</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <button
                    onClick={() => openBooking(cpapFittingService)}
                    className="w-full flex items-center justify-center gap-2 rounded-full bg-sky-500 py-3 text-xs font-bold text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400 active:scale-98"
                  >
                    <Calendar className="size-4" />
                    <span>Book In-Clinic Fitting</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. NEW: CLINIC ATMOSPHERE & ENVIRONMENT (VISUAL SHOWCASE) */}
      {/* ========================================================================= */}
      <section id="about-clinic" className="border-y border-slate-200/80 bg-white py-24 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            {/* Left: Dual Photo Gallery Collage */}
            <div className="lg:col-span-6 relative">
              <div className="grid grid-cols-12 gap-4">
                {/* Photo 1: Lounge */}
                <div className="col-span-8 overflow-hidden rounded-3xl border-4 border-white shadow-xl">
                  <img
                    src={clinicInteriorImg}
                    alt="BreathOptix clinic reception and patient lounge in Edmonton"
                    className="h-64 sm:h-80 w-full object-cover"
                  />
                </div>

                {/* Photo 2: Diagnostic Suite */}
                <div className="col-span-4 flex flex-col justify-between overflow-hidden rounded-3xl border-4 border-white shadow-xl bg-slate-900">
                  <img
                    src={clinicSuiteImg}
                    alt="Testing suite equipment"
                    className="h-full w-full object-cover opacity-90"
                  />
                </div>
              </div>

              {/* Floating Quote Badge */}
              <div className="absolute -bottom-6 left-6 right-6 sm:right-auto flex items-center gap-3 rounded-2xl border border-white/90 bg-white/95 p-4 shadow-xl backdrop-blur-md">
                <div className="flex size-10 items-center justify-center rounded-xl bg-sky-100 text-sky-600 shrink-0">
                  <HeartPulse className="size-5" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-slate-900">
                    Designed for Patient Comfort &amp; Breathing Ease
                  </p>
                  <p className="text-[11px] text-slate-500">
                    No hospital queues · Direct parking · Private suites
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Copy Description */}
            <div className="lg:col-span-6 lg:pl-6 pt-6 lg:pt-0">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                The Patient Experience
              </span>
              <h2 className="mt-3 font-display text-3xl font-black text-slate-900 sm:text-4xl">
                A calm, state-of-the-art diagnostic environment.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Medical diagnostics don't have to be stressful or cold. We designed BreathOptix to
                feel welcoming, clean, and modern. From comfortable private testing rooms to
                friendly therapists who listen, we make your lung and sleep assessment smooth from start to finish.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-4">
                  <h4 className="font-display font-bold text-slate-900 text-sm">
                    Dedicated Private Suites
                  </h4>
                  <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                    Individual examination spaces equipped with state-of-the-art diagnostic air sensors.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-4">
                  <h4 className="font-display font-bold text-slate-900 text-sm">
                    Direct Free Parking
                  </h4>
                  <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                    Easy doorstep parking right on 82 Ave NW — no parkades or long hospital walks.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <button
                  onClick={() => openBooking()}
                  className="rounded-full bg-slate-900 px-6 py-3.5 text-xs font-bold text-white transition hover:bg-sky-600"
                >
                  Schedule Your Visit
                </button>
                <a
                  href="#location"
                  className="text-xs font-bold text-sky-600 hover:underline flex items-center gap-1"
                >
                  <span>View location &amp; hours</span>
                  <ArrowRight className="size-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. HOW IT WORKS (3-STEP PATIENT JOURNEY) */}
      {/* ========================================================================= */}
      <section id="how-it-works" className="py-24 scroll-mt-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
              Simple 3-Step Process
            </span>
            <h2 className="mt-3 font-display text-3xl font-black text-slate-900 sm:text-4xl">
              How your clinical journey works
            </h2>
            <p className="mt-3 text-base text-slate-600">
              We make diagnostic testing straightforward and stress-free for both patients and referring physicians.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3 relative">
            {/* Step 1 */}
            <div className="relative rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-sky-600 text-white font-display text-xl font-black shadow-md shadow-sky-600/20">
                01
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-slate-900">
                Request or Referral
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Submit an appointment request online or have your family physician fax/email a
                referral form. Our intake team confirms within 1 business day.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-cyan-600 text-white font-display text-xl font-black shadow-md shadow-cyan-600/20">
                02
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-slate-900">
                Comfortable In-Clinic Testing
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Visit our modern Edmonton clinic. Our licensed respiratory therapists guide you
                step-by-step through your lung function or sleep evaluation.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-slate-900 text-white font-display text-xl font-black shadow-md shadow-slate-900/20">
                03
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-slate-900">
                Rapid Specialist Results
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                A specialist respirologist analyzes your findings. Formal diagnostic reports are
                returned directly to your doctor within 24 to 48 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. INTEGRATED CPAP & RESPIRATORY SUPPLIES STORE */}
      {/* ========================================================================= */}
      <section id="shop" className="border-t border-slate-200/80 bg-white py-24 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                Supplies &amp; Accessories Store
              </span>
              <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                Genuine CPAP &amp; Respiratory Supplies
              </h2>
              <p className="mt-2 text-base text-slate-600 max-w-2xl">
                Hospital-grade replacement parts, memory-foam cushions, filters, and sanitizer wipes.
                Priced in Canadian Dollars (CAD) with Edmonton clinic pickup or fast Alberta shipping.
              </p>
            </div>

            <button
              onClick={openCart}
              className="self-start md:self-auto flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs font-bold text-slate-700 shadow-sm hover:border-sky-300 hover:text-sky-600"
            >
              <span>View Your Cart</span>
              <ArrowRight className="size-3.5" />
            </button>
          </div>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap gap-2">
            {(["All", ...categories] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2 text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? "bg-sky-600 text-white shadow-md shadow-sky-500/20"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-sky-200 hover:text-sky-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Clinic Compliance Note */}
          <div className="mt-12 rounded-2xl border border-sky-100 bg-sky-50/70 p-5 text-xs text-sky-900 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="size-5 text-sky-600 shrink-0" />
              <span>
                <strong>Notice:</strong> We do not retail prescription medications (inhalers) or uncalibrated CPAP machines online. All supplies are authentic medical grade.
              </span>
            </div>
            <button
              onClick={() => openBooking(cpapFittingService)}
              className="shrink-0 text-xs font-bold text-sky-700 hover:underline"
            >
              Need a machine? Book in-clinic fitting →
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. PHYSICIAN REFERRALS & PATIENT PREPARATION (WITH DOCTOR PHOTO) */}
      {/* ========================================================================= */}
      <section id="referrals" className="border-t border-slate-200/80 bg-slate-50 py-24 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Box 1: For Physicians with Doctor Photo */}
            <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-sm flex flex-col justify-between">
              <div>
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={doctorReferralImg}
                    alt="Doctor reviewing diagnostic report"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
                  <span className="absolute bottom-4 left-6 text-xs font-bold uppercase tracking-wider text-sky-300">
                    Medical Professionals
                  </span>
                </div>

                <div className="p-8">
                  <h3 className="font-display text-2xl font-black text-slate-900">
                    For Referring Physicians
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    We partner with primary care clinics, family doctors, and regional specialists across Edmonton &amp; Northern Alberta. Submit referrals securely via fax or encrypted email.
                  </p>

                  <div className="mt-6 rounded-2xl bg-slate-50 p-4 border border-slate-200 space-y-2.5 text-xs">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                      <span className="font-bold text-slate-700">Direct Intake Email</span>
                      <a href="mailto:info@breathoptix.ca" className="font-bold text-sky-600 hover:underline">
                        info@breathoptix.ca
                      </a>
                    </div>
                    <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                      <span className="font-bold text-slate-700">Turnaround Standard</span>
                      <span className="text-slate-600 font-semibold">24–48 hours post-study</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-700">Required Info</span>
                      <span className="text-slate-600">PHN, Patient DOB, Requested Modality</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 pt-0 flex flex-wrap gap-3">
                <a
                  href="mailto:info@breathoptix.ca?subject=Physician%20Referral"
                  className="rounded-full bg-slate-900 px-6 py-3 text-xs font-bold text-white transition hover:bg-sky-600"
                >
                  Send Referral via Email
                </a>
                <button
                  onClick={() => openBooking("Physician Referral")}
                  className="rounded-full border border-slate-200 bg-white px-6 py-3 text-xs font-bold text-slate-700 transition hover:border-sky-300"
                >
                  Submit Online Referral
                </button>
              </div>
            </div>

            {/* Box 2: For Patients */}
            <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-sm flex flex-col justify-between">
              <div>
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={serviceConsultImg}
                    alt="Patient consulting with respiratory specialist"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
                  <span className="absolute bottom-4 left-6 text-xs font-bold uppercase tracking-wider text-cyan-300">
                    Patient Instructions
                  </span>
                </div>

                <div className="p-8">
                  <h3 className="font-display text-2xl font-black text-slate-900">
                    Preparing for Your Appointment
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    To guarantee optimal test accuracy during your pulmonary function or sleep study, please follow these standard preparation guidelines:
                  </p>

                  <ul className="mt-6 space-y-3 text-xs text-slate-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>No smoking or vaping</strong> for at least 6 hours before your test.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Avoid caffeine</strong> (coffee, tea, soda, energy drinks) 6 hours prior.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Bring medication list &amp; inhalers</strong>, plus your Alberta Health Card.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Wear comfortable clothing</strong> that permits deep chest expansion.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-8 pt-0">
                <button
                  onClick={() => openBooking()}
                  className="rounded-full bg-gradient-to-r from-sky-600 to-cyan-600 px-6 py-3 text-xs font-bold text-white shadow-md shadow-sky-500/20 transition hover:shadow-lg"
                >
                  Book Your Appointment Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. CLINIC LOCATION, HOURS & CONTACT */}
      {/* ========================================================================= */}
      <section id="location" className="py-24 scroll-mt-20 border-t border-slate-200/80 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            {/* Info */}
            <div className="lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                Clinic Details
              </span>
              <h2 className="mt-3 font-display text-3xl font-black text-slate-900 sm:text-4xl">
                Convenient Edmonton Location
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Easily accessible with ample free parking directly in front of the clinic.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-5 border border-slate-200/80 shadow-sm">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-sky-100 text-sky-600 shrink-0">
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-900">Clinic Address</h4>
                    <p className="text-sm text-slate-600 mt-0.5">{clinic.address}</p>
                    <span className="inline-block mt-1 text-xs text-sky-600 font-semibold">
                      Free on-site parking available
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-5 border border-slate-200/80 shadow-sm">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-cyan-100 text-cyan-600 shrink-0">
                    <Clock className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-900">Hours of Operation</h4>
                    <p className="text-sm text-slate-600 mt-0.5">{clinic.hours[0]}</p>
                    <p className="text-sm text-slate-600">{clinic.hours[1]}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-5 border border-slate-200/80 shadow-sm">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 shrink-0">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-900">Contact &amp; Intake</h4>
                    <a href={`mailto:${clinic.email}`} className="text-sm font-bold text-sky-600 hover:underline">
                      {clinic.email}
                    </a>
                    <p className="text-xs text-slate-400 mt-0.5">Response within 1 business day</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Location Frame / Quick Booking Card */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-slate-200 bg-slate-50/50 p-8 sm:p-10 shadow-xl">
                <div className="flex items-center gap-2 text-sky-600">
                  <Sparkles className="size-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">Fast Track Intake</span>
                </div>
                <h3 className="mt-2 font-display text-2xl font-black text-slate-900">
                  Ready to schedule your appointment?
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Fill out our quick form and our clinical coordinator will contact you to confirm a convenient slot.
                </p>

                <div className="mt-6 space-y-3">
                  <button
                    onClick={() => openBooking()}
                    className="w-full flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-600 to-cyan-600 py-4 text-sm font-bold text-white shadow-lg shadow-sky-500/25 transition hover:from-sky-700 hover:to-cyan-700"
                  >
                    <Calendar className="size-4" />
                    <span>Book Diagnostic Appointment</span>
                  </button>

                  <a
                    href={`mailto:${clinic.email}?subject=Appointment%20Inquiry`}
                    className="w-full flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white py-3.5 text-xs font-bold text-slate-700 transition hover:bg-slate-100"
                  >
                    <Mail className="size-4" />
                    <span>Email Front Desk Directly</span>
                  </a>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                  <span>Edmonton, Alberta</span>
                  <span className="flex items-center gap-1 text-emerald-600 font-bold">
                    <span className="size-2 rounded-full bg-emerald-500" /> Clinic Open Mon–Fri
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. HIGH-IMPACT FINAL CTA BANNER */}
      {/* ========================================================================= */}
      <section className="bg-slate-900 py-20 text-white relative overflow-hidden">
        <div className="ambient-glow -bottom-24 -left-24 size-80 bg-sky-500/20" />
        <div className="ambient-glow -top-24 -right-24 size-96 bg-cyan-500/20" />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-sky-400 backdrop-blur-sm">
            Dedicated Respiratory Care
          </span>
          <h2 className="mt-4 font-display text-3xl font-black sm:text-5xl tracking-tight">
            Take control of your respiratory health today.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300">
            Whether you need a physician-ordered pulmonary function test or regular replacement supplies for your CPAP machine, BreathOptix is here for you.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => openBooking()}
              className="rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 px-8 py-4 font-bold text-white shadow-xl shadow-sky-500/30 transition hover:from-sky-600 hover:to-cyan-600"
            >
              Book an Appointment
            </button>
            <a
              href="#shop"
              className="rounded-full border border-white/20 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Browse Supplies Store
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
