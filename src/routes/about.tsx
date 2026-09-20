import { createFileRoute } from "@tanstack/react-router";
import { useShop } from "@/components/shop-store";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About & Referrals | BreathOptix Edmonton" },
      {
        name: "description",
        content:
          "About the BreathOptix respiratory diagnostic clinic in Edmonton, how physicians send referrals, and how patients prepare for testing.",
      },
      { property: "og:title", content: "About & Referrals | BreathOptix" },
      {
        property: "og:description",
        content:
          "Learn about our Edmonton respiratory clinic, physician referral process, and patient preparation guide.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { openBooking } = useShop();

  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <span className="text-sm font-semibold uppercase tracking-wider text-brand">About</span>
      <h1 className="mt-2 text-4xl font-extrabold lg:text-5xl">
        A dedicated respiratory diagnostic clinic in Edmonton
      </h1>
      <p className="mt-5 text-lg text-ink/70">
        BreathOptix combines full pulmonary function testing, sleep diagnostics, and ongoing CPAP
        therapy management under one roof. Our respiratory therapists run every study, and a
        respirologist reviews and interprets each result.
      </p>

      <section id="referrals" className="frost mt-12 rounded-3xl border border-white/60 p-8 scroll-mt-24">
        <h2 className="text-2xl font-extrabold">For Referring Physicians</h2>
        <p className="mt-3 text-sm leading-relaxed text-ink/70">
          Send completed referral forms by secure email to{" "}
          <a href="mailto:info@breathoptix.ca" className="text-brand">
            info@breathoptix.ca
          </a>{" "}
          or fax them to the front desk. Include the patient's name, date of birth, contact number,
          the requested study, and relevant clinical notes or prior imaging. Our intake team
          confirms receipt and scheduling within one business day, and reports are returned
          directly to your office.
        </p>
      </section>

      <section id="prepare" className="frost mt-6 rounded-3xl border border-white/60 p-8 scroll-mt-24">
        <h2 className="text-2xl font-extrabold">Preparing for Your Test</h2>
        <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink/70">
          <li>Avoid smoking and caffeine for six hours before spirometry or PFT.</li>
          <li>Skip heavy meals within two hours of your appointment.</li>
          <li>Bring a current medication list, including inhalers, and your health card.</li>
          <li>Wear loose clothing that does not restrict deep breathing.</li>
          <li>For sleep studies, arrive rested and bring your usual bedtime routine items.</li>
        </ul>
        <button
          onClick={() => openBooking()}
          className="mt-6 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-brand-deep"
        >
          Book an Appointment
        </button>
      </section>
    </main>
  );
}
