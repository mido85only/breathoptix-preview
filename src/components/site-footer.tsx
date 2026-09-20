import { Activity, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { clinic } from "@/lib/clinic-data";

export function SiteFooter() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Clinic Brand & Address */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-500 to-cyan-400 text-white font-black shadow-lg shadow-sky-500/20">
                <Activity className="size-5" />
              </div>
              <span className="font-display text-2xl font-black tracking-tight text-white">
                Breath<span className="text-sky-400">Optix</span>
              </span>
            </div>

            <p className="text-sm leading-relaxed text-slate-400">
              Accredited Respiratory Diagnostic Clinic &amp; Sleep Laboratory serving Edmonton and Northern Alberta. Full pulmonary function testing, spirometry, and genuine CPAP supplies.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <p className="flex items-center gap-2">
                <MapPin className="size-4 text-sky-400 shrink-0" />
                <span>8130 82 Ave NW, Edmonton, AB, Canada</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="size-4 text-sky-400 shrink-0" />
                <a href={`mailto:${clinic.email}`} className="text-sky-400 hover:underline">
                  {clinic.email}
                </a>
              </p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 sm:col-span-4">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-400">
              <li>
                <Link to="/" hash="services" className="hover:text-sky-400 transition">
                  Clinical Services
                </Link>
              </li>
              <li>
                <Link to="/" hash="how-it-works" className="hover:text-sky-400 transition">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-sky-400 transition">
                  CPAP Supplies Store
                </Link>
              </li>
              <li>
                <Link to="/" hash="referrals" className="hover:text-sky-400 transition">
                  Physician Referrals
                </Link>
              </li>
              <li>
                <Link to="/" hash="location" className="hover:text-sky-400 transition">
                  Clinic Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Diagnostic Services */}
          <div className="lg:col-span-3 sm:col-span-4">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Diagnostics
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-400">
              <li>Pulmonary Function (PFT)</li>
              <li>Pre/Post Spirometry</li>
              <li>Respiratory Assessment</li>
              <li>Respirologist Consult</li>
              <li>Sleep Apnea Diagnostics</li>
              <li>CPAP Machine Fitting</li>
            </ul>
          </div>

          {/* Clinic Hours & Compliance */}
          <div className="lg:col-span-3 sm:col-span-4">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Hours &amp; Compliance
            </h4>
            <div className="mt-4 space-y-2 text-xs text-slate-400">
              <p>{clinic.hours[0]}</p>
              <p>{clinic.hours[1]}</p>
              <p className="text-amber-300 font-semibold pt-1">Sunday: Closed</p>
            </div>

            <div className="mt-6 rounded-2xl bg-slate-900 border border-slate-800 p-3.5 text-xs text-slate-400 flex items-start gap-2.5">
              <ShieldCheck className="size-5 text-emerald-400 shrink-0 mt-0.5" />
              <span>Compliant with the Alberta Health Information Act (HIA) and PIPEDA.</span>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} BreathOptix Diagnostic Clinic. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-400">Terms of Service</a>
            <span>Edmonton, Alberta</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
