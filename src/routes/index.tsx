import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-clinic.jpg";
import { useShop } from "@/components/shop-store";
import { ProductCard } from "@/components/product-card";
import { cpapFittingService, products, services } from "@/lib/clinic-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BreathOptix | Respiratory & Sleep Diagnostics in Edmonton" },
      {
        name: "description",
        content:
          "Lung function testing, spirometry, and sleep apnea care in Edmonton, plus CPAP replacement supplies. Physician referrals welcome.",
      },
      { property: "og:title", content: "BreathOptix | Respiratory & Sleep Diagnostics" },
      {
        property: "og:description",
        content:
          "Advanced lung function testing, spirometry, and sleep apnea care by certified respirologists in Edmonton, Alberta.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const { openBooking } = useShop();
  const featured = products.filter((p) => p.featured);

  return (
    <main className="mx-auto max-w-7xl px-6">
      {/* HERO */}
      <section className="grid items-center gap-10 pb-16 pt-20 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
            Respiratory &amp; Sleep Diagnostics
          </span>
          <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] lg:text-6xl">
            See clearly. <span className="text-brand">Breathe</span> better.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
            Advanced lung function testing, spirometry, and sleep apnea care — delivered by
            certified respirologists right here in Edmonton.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => openBooking()}
              className="rounded-full bg-brand px-7 py-3.5 font-semibold text-primary-foreground shadow-xl shadow-brand/30 transition hover:bg-brand-deep"
            >
              Book Diagnostic Test
            </button>
            <Link
              to="/shop"
              className="rounded-full border border-white/70 bg-white/70 px-7 py-3.5 font-semibold text-ink transition hover:bg-white"
            >
              Explore CPAP Supplies →
            </Link>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/60 bg-white/50 px-4 py-3 text-sm font-medium">
              ✓ Physician Referrals Welcome
            </div>
            <div className="rounded-2xl border border-white/60 bg-white/50 px-4 py-3 text-sm font-medium">
              ✓ Certified Respirology Care
            </div>
            <div className="rounded-2xl border border-white/60 bg-white/50 px-4 py-3 text-sm font-medium">
              ✓ Serving Edmonton &amp; N. Alberta
            </div>
          </div>
        </div>
        <div className="lg:col-span-5">
          <img
            src={heroImg}
            alt="Patient completing a lung function test with a respiratory therapist"
            width={1088}
            height={1280}
            className="aspect-[4/5] w-full rounded-3xl bg-mist object-cover"
          />
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand">
              Clinical Services
            </span>
            <h2 className="text-3xl font-extrabold lg:text-4xl">Precision diagnostics, end to end</h2>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.id} className="frost flex flex-col rounded-3xl border border-white/60 p-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                {s.eyebrow}
              </span>
              <h3 className="mt-2 font-display text-lg font-bold">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm text-ink/70">{s.description}</p>
              <button
                onClick={() => openBooking(s.title)}
                className="mt-5 text-left text-sm font-semibold text-brand hover:text-brand-deep"
              >
                Book This Service →
              </button>
            </div>
          ))}
          <div className="flex flex-col rounded-3xl bg-brand p-6 text-primary-foreground shadow-xl shadow-brand/30">
            <span className="text-xs font-semibold uppercase tracking-wider text-white/80">
              Prescription
            </span>
            <h3 className="mt-2 font-display text-lg font-bold">CPAP Machine Fitting</h3>
            <p className="mt-2 flex-1 text-sm text-white/80">
              Machines are prescribed in-clinic — never sold online. Book a fitting &amp;
              consultation to begin.
            </p>
            <button
              onClick={() => openBooking(cpapFittingService)}
              className="mt-5 self-start rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-brand"
            >
              Book Fitting &amp; Consult
            </button>
          </div>
        </div>
      </section>

      {/* SHOP PREVIEW */}
      <section className="py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand">
              Shop Supplies
            </span>
            <h2 className="text-3xl font-extrabold lg:text-4xl">
              Top-selling replacement accessories
            </h2>
          </div>
          <Link
            to="/shop"
            className="whitespace-nowrap text-sm font-semibold text-brand hover:text-brand-deep"
          >
            View full store →
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* REFERRAL */}
      <section className="py-16">
        <div className="frost grid gap-8 rounded-3xl border border-white/60 p-8 md:grid-cols-2 lg:p-12">
          <div>
            <h3 className="text-2xl font-extrabold">For Referring Physicians</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/70">
              Send referral forms securely by email to {""}
              <a href="mailto:info@breathoptix.ca" className="text-brand">
                info@breathoptix.ca
              </a>{" "}
              or fax to the front desk. Include patient name, date of birth, and the requested
              study. We confirm receipt and scheduling within one business day.
            </p>
            <Link
              to="/about"
              hash="referrals"
              className="mt-5 inline-block rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-brand-deep"
            >
              Referral Details
            </Link>
          </div>
          <div>
            <h3 className="text-2xl font-extrabold">Preparing as a Patient</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/70">
              For spirometry, avoid smoking or caffeine for 6 hours and skip heavy meals before
              your visit. For sleep studies, arrive rested and bring your regular medications. A
              respiratory therapist will guide you through each step.
            </p>
            <Link
              to="/about"
              hash="prepare"
              className="mt-5 inline-block rounded-full border border-white/70 bg-white px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-mist"
            >
              Read Patient Guide
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
