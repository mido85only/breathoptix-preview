import { Link } from "@tanstack/react-router";
import { clinic } from "@/lib/clinic-data";

export function SiteFooter() {
  return (
    <footer className="mt-8">
      <div className="frost border-t border-white/60">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid size-8 place-items-center rounded-lg bg-brand font-display font-extrabold text-primary-foreground">
                B
              </span>
              <span className="font-display font-extrabold tracking-tight">BreathOptix</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink/60">
              8130 82 Ave NW
              <br />
              Edmonton, AB, Canada
              <br />
              <a href={`mailto:${clinic.email}`} className="text-brand">
                {clinic.email}
              </a>
            </p>
            <p className="mt-4 text-xs text-ink/50">
              {clinic.hours[0]}
              <br />
              {clinic.hours[1]}
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-ink/80">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-ink/60">
              <li><Link to="/" className="hover:text-brand">Home</Link></li>
              <li><Link to="/services" className="hover:text-brand">Services</Link></li>
              <li><Link to="/shop" className="hover:text-brand">Shop Supplies</Link></li>
              <li><Link to="/about" className="hover:text-brand">About</Link></li>
              <li><Link to="/contact" className="hover:text-brand">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-ink/80">
              Patient Resources
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-ink/60">
              <li><Link to="/about" hash="referrals" className="hover:text-brand">Referral Information</Link></li>
              <li><Link to="/about" hash="prepare" className="hover:text-brand">Pre-Test Guide</Link></li>
              <li><Link to="/shop" className="hover:text-brand">CPAP Care Supplies</Link></li>
              <li><Link to="/contact" className="hover:text-brand">Insurance & Billing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-ink/80">
              Legal
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-ink/60">
              <li><Link to="/privacy" className="hover:text-brand">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-brand">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/60">
          <p className="mx-auto max-w-7xl px-6 py-5 text-xs text-ink/50">
            © BreathOptix Diagnostic Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
