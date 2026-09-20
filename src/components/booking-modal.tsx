import { useEffect, useState, type FormEvent } from "react";
import { X, Calendar, CheckCircle2, ShieldCheck, Clock, User, Mail, Phone, FileText } from "lucide-react";
import { useShop } from "./shop-store";
import { serviceOptions } from "@/lib/clinic-data";

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

  const inputStyle =
    "mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/15";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={closeBooking}
      />

      {/* Dialog Box */}
      <div className="animate-modal-in relative z-10 w-full max-w-xl rounded-3xl bg-white p-7 sm:p-9 shadow-2xl border border-slate-100">
        {/* Close Button */}
        <button
          onClick={closeBooking}
          aria-label="Close"
          className="absolute right-5 top-5 flex size-9 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition"
        >
          <X className="size-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <CheckCircle2 className="size-9" />
            </div>
            <h3 className="mt-4 font-display text-2xl font-extrabold text-slate-900">
              Appointment Request Received!
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-slate-600">
              Thank you! Our clinical intake coordinator will review your request for{" "}
              <strong className="text-slate-900">{service}</strong> and reach out to you within one business day with appointment confirmation and pre-test instructions.
            </p>

            <div className="mt-6 rounded-2xl bg-sky-50 p-4 text-xs font-semibold text-sky-800 text-left space-y-1.5">
              <div className="flex items-center gap-2">
                <Clock className="size-4 text-sky-600" />
                <span>Response Time: Within 24 hours (Mon-Fri)</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-sky-600" />
                <span>Clinic Location: 8130 82 Ave NW, Edmonton, AB</span>
              </div>
            </div>

            <button
              onClick={closeBooking}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-3.5 text-sm font-bold text-white transition hover:bg-sky-600 shadow-md"
            >
              Back to Website
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex size-10 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                <Calendar className="size-5" />
              </div>
              <div>
                <h3 className="font-display text-xl font-extrabold text-slate-900">
                  Request an Appointment
                </h3>
                <p className="text-xs text-slate-500">
                  BreathOptix Respiratory &amp; Sleep Diagnostic Lab · Edmonton
                </p>
              </div>
            </div>

            <form onSubmit={submit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <User className="size-3.5 text-slate-400" /> Full Name
                  </label>
                  <input required type="text" placeholder="e.g. Jordan Ellis" className={inputStyle} />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Phone className="size-3.5 text-slate-400" /> Phone Number
                  </label>
                  <input required type="tel" placeholder="(780) 555-0142" className={inputStyle} />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Mail className="size-3.5 text-slate-400" /> Email Address
                  </label>
                  <input required type="email" placeholder="you@email.ca" className={inputStyle} />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Calendar className="size-3.5 text-slate-400" /> Preferred Date
                  </label>
                  <input required type="date" className={inputStyle} />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700">Requested Diagnostic Service</label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className={inputStyle}
                >
                  {serviceOptions.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-bold text-slate-700">Referral Type</label>
                  <select className={inputStyle}>
                    <option>Physician Referral (Doctor requested test)</option>
                    <option>Self-Referral (Direct inquiry)</option>
                    <option>CPAP Machine Fitting / Replacement</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700">Health Card / PHN (Optional)</label>
                  <input type="text" placeholder="Alberta Health Care #" className={inputStyle} />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                  <FileText className="size-3.5 text-slate-400" /> Symptoms or Clinical Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Describe your symptoms (e.g. chronic cough, shortness of breath, snoring, sleep apnea)..."
                  className={`${inputStyle} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-600 to-cyan-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-500/25 transition hover:from-sky-700 hover:to-cyan-700 active:scale-[0.99]"
              >
                <span>Submit Appointment Request</span>
              </button>

              <p className="text-center text-[11px] text-slate-400">
                🔒 Your health information is handled securely according to Alberta HIA standards.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
