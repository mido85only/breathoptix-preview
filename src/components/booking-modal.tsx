import { useEffect, useState, type FormEvent } from "react";
import { X } from "lucide-react";
import { useShop } from "./shop-store";
import { serviceOptions } from "@/lib/clinic-data";

const field =
  "mt-1.5 w-full rounded-xl border border-black/5 bg-ice px-4 py-2.5 text-sm outline-none focus:border-brand";

export function BookingModal() {
  const { bookingService, closeBooking } = useShop();
  const [service, setService] = useState<string>(serviceOptions[0] ?? "");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (bookingService !== null) {
      setSubmitted(false);
      setService(bookingService || serviceOptions[0] || "");
    }
  }, [bookingService]);

  if (bookingService === null) return null;

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 grid place-items-center overflow-y-auto p-4">
      <div className="absolute inset-0 bg-ink/40 backdrop-blur-sm" onClick={closeBooking} />
      <div className="animate-modal-in relative my-8 w-full max-w-lg rounded-3xl border border-white/60 frost-strong p-7 shadow-2xl shadow-ink/20">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="font-display text-xl font-extrabold">Request an Appointment</h3>
          <button onClick={closeBooking} aria-label="Close" className="text-ink/50 hover:text-brand">
            <X className="size-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-6 text-center">
            <p className="font-display text-lg font-bold">Request received</p>
            <p className="mt-2 text-sm text-ink/65">
              Thanks — our intake team will confirm your {service.toLowerCase()} booking by email
              within one business day.
            </p>
            <button
              onClick={closeBooking}
              className="mt-6 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-brand-deep"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={submit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-medium">
                Full Name
                <input required type="text" placeholder="Jordan Ellis" className={field} />
              </label>
              <label className="text-sm font-medium">
                Email
                <input required type="email" placeholder="you@email.ca" className={field} />
              </label>
              <label className="text-sm font-medium">
                Phone
                <input required type="tel" placeholder="(780) 555-0142" className={field} />
              </label>
              <label className="text-sm font-medium">
                Preferred Date
                <input required type="date" className={field} />
              </label>
              <label className="text-sm font-medium sm:col-span-2">
                Requested Service
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className={field}
                >
                  {serviceOptions.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </label>
              <label className="text-sm font-medium sm:col-span-2">
                Referral Status
                <select className={field}>
                  <option>Self-referral</option>
                  <option>Physician referral</option>
                </select>
              </label>
              <label className="text-sm font-medium sm:col-span-2">
                Notes
                <textarea
                  rows={3}
                  placeholder="Tell us about your symptoms or any prior testing…"
                  className={`${field} resize-none`}
                />
              </label>
            </div>
            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-brand py-3.5 font-semibold text-primary-foreground transition hover:bg-brand-deep"
            >
              Submit Request
            </button>
            <p className="mt-3 text-center text-[11px] text-ink/50">
              We'll confirm your booking by email within one business day.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
