import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service | BreathOptix" },
      {
        name: "description",
        content:
          "Terms covering appointment requests, supply orders, and prescription equipment at BreathOptix Diagnostic Clinic.",
      },
      { property: "og:title", content: "Terms of Service | BreathOptix" },
      {
        property: "og:description",
        content: "Terms for appointments, online supply orders, and prescription equipment.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-4xl font-extrabold">Terms of Service</h1>
      <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink/70">
        <p>
          Appointment requests submitted online are requests only and are confirmed by our intake
          team, typically within one business day.
        </p>
        <p>
          Our online store sells replacement supplies and maintenance items. Prescription
          medication and CPAP machines are not sold online; CPAP devices require an in-clinic
          fitting and prescription consultation.
        </p>
        <p>
          Website content is general information and does not replace medical advice from your
          physician or respirologist.
        </p>
        <p>Unopened supplies may be returned within 30 days of purchase with proof of purchase.</p>
      </div>
    </main>
  );
}
