import { createFileRoute } from "@tanstack/react-router";
import { useShop } from "@/components/shop-store";
import { clinic } from "@/lib/clinic-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact BreathOptix | Edmonton Respiratory Clinic" },
      {
        name: "description",
        content:
          "Visit BreathOptix at 8130 82 Ave NW, Edmonton, AB. Email info@breathoptix.ca. Open Monday to Friday, 8:30 AM to 4:30 PM.",
      },
      { property: "og:title", content: "Contact BreathOptix" },
      {
        property: "og:description",
        content:
          "Clinic address, hours, and appointment requests for the BreathOptix respiratory and sleep clinic in Edmonton.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { openBooking } = useShop();

  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <span className="text-sm font-semibold uppercase tracking-wider text-brand">Contact</span>
      <h1 className="mt-2 text-4xl font-extrabold lg:text-5xl">Visit the clinic</h1>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="frost rounded-3xl border border-white/60 p-8">
          <h2 className="font-display text-lg font-bold">Location</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/70">{clinic.address}</p>
          <h2 className="mt-6 font-display text-lg font-bold">Email</h2>
          <a href={`mailto:${clinic.email}`} className="mt-3 block text-sm text-brand">
            {clinic.email}
          </a>
        </div>
        <div className="frost rounded-3xl border border-white/60 p-8">
          <h2 className="font-display text-lg font-bold">Hours</h2>
          <ul className="mt-3 space-y-2 text-sm text-ink/70">
            {clinic.hours.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <button
            onClick={() => openBooking()}
            className="mt-6 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-brand-deep"
          >
            Request an Appointment
          </button>
        </div>
      </div>

      <p className="mt-8 text-sm text-ink/60">
        For insurance and billing questions, or to confirm coverage for a diagnostic study, email
        the clinic and our team will reply within one business day.
      </p>
    </main>
  );
}
