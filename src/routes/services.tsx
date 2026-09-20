import { createFileRoute } from "@tanstack/react-router";
import { useShop } from "@/components/shop-store";
import { cpapFittingService, services } from "@/lib/clinic-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Clinical Services | BreathOptix Edmonton" },
      {
        name: "description",
        content:
          "Pulmonary function testing, spirometry, respiratory assessment, respirologist consultation, and sleep apnea diagnostics with CPAP therapy.",
      },
      { property: "og:title", content: "Clinical Services | BreathOptix" },
      {
        property: "og:description",
        content:
          "Full PFT, spirometry, respiratory assessment, respirologist consultation, and sleep apnea care in Edmonton.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { openBooking } = useShop();

  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <span className="text-sm font-semibold uppercase tracking-wider text-brand">
        Clinical Services
      </span>
      <h1 className="mt-2 max-w-3xl text-4xl font-extrabold lg:text-5xl">
        Diagnostics and therapy for every stage of respiratory care
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-ink/70">
        Each study is performed by certified respiratory therapists and interpreted by a
        respirologist. Physician referrals and self-referrals are both welcome.
      </p>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div key={s.id} className="frost flex flex-col rounded-3xl border border-white/60 p-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">
              {s.eyebrow}
            </span>
            <h2 className="mt-2 font-display text-lg font-bold">{s.title}</h2>
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
          <h2 className="mt-2 font-display text-lg font-bold">CPAP Machine Fitting</h2>
          <p className="mt-2 flex-1 text-sm text-white/80">
            CPAP devices require a prescription and in-clinic fitting. We size your mask, set your
            pressure, and follow up on therapy.
          </p>
          <button
            onClick={() => openBooking(cpapFittingService)}
            className="mt-5 self-start rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-brand"
          >
            Book Fitting &amp; Consult
          </button>
        </div>
      </div>
    </main>
  );
}
