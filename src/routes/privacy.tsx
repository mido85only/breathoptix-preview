import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | BreathOptix" },
      {
        name: "description",
        content:
          "How BreathOptix Diagnostic Clinic collects, stores, and protects patient health information in Alberta.",
      },
      { property: "og:title", content: "Privacy Policy | BreathOptix" },
      {
        property: "og:description",
        content: "Patient privacy and health information practices at BreathOptix Diagnostic Clinic.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-4xl font-extrabold">Privacy Policy</h1>
      <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink/70">
        <p>
          BreathOptix Diagnostic Clinic collects personal health information only to provide
          respiratory diagnostic services, manage CPAP therapy, and fulfil supply orders.
        </p>
        <p>
          Health records are stored securely and shared only with your referring physician, your
          care team, or where required by Alberta health legislation.
        </p>
        <p>
          Appointment request and order details submitted through this website are used solely to
          contact you about your booking or order. We never sell patient information.
        </p>
        <p>
          To request a copy of your records or ask a privacy question, email info@breathoptix.ca.
        </p>
      </div>
    </main>
  );
}
