# BreathOptix Health Hub

Build a modern, high-converting website and web application for "BreathOptix", a specialized respiratory diagnostic and sleep clinic based in Edmonton, Alberta, Canada. 

The site must consist of two core integrated areas: a comprehensive clinical Landing Page and a dedicated E-Commerce Supplies Store, accessible via a shared global navigation.

### 1. Global Header & Navigation
- Logo / Brand Name: BreathOptix
- Navigation links: Home, Services, Shop Supplies, About, Contact
- Prominent Primary CTA: "Book an Appointment"
- Interactive Shopping Cart icon displaying live item count and opening a slide-over Cart Drawer

### 2. Landing Page Requirements
Create a professional landing page containing the following functional sections:

- **Hero Section:**
  - Clear clinical value proposition highlighting respiratory health diagnostics, lung function testing, and sleep apnea care.
  - Dual CTAs: Primary "Book Diagnostic Test" and Secondary "Explore CPAP Supplies".
  - Quick credibility badges (e.g., Physician Referrals Welcome, Certified Respirology Care, Serving Edmonton & Northern Alberta).

- **Clinical Services Section:**
  Showcase the core medical services offered by the clinic:
  1. Full Pulmonary Function Testing (PFT) - comprehensive assessment of lung volumes and gas exchange.
  2. Spirometry - pre and post bronchodilator airflow evaluation.
  3. Comprehensive Respiratory Assessment - specialized evaluation by respiratory therapists.
  4. Respirologist Consultation - specialized physician consultation and diagnosis.
  5. Sleep Apnea Diagnostic & CPAP Therapy - overnight sleep evaluation and ongoing pressure therapy management.
  - Each service should have a brief clinical description and a "Book This Service" action.

- **Physician & Patient Referral Information:**
  - A concise section explaining how doctors can send referral forms, and how patients can prepare for their tests.

- **Featured CPAP & Respiratory Supplies Preview:**
  - A preview grid showing 4 featured top-selling replacement accessories leading into the full Shop.

- **Appointment Request Modal / Form:**
  - An interactive booking request dialog that triggers from the "Book an Appointment" buttons.
  - Fields: Full Name, Email, Phone, Requested Service (dropdown of clinic services), Preferred Date, Referral Status (Self-referral vs Physician referral), and Notes.

- **Footer:**
  - Accurate clinic information:
    * Location: 8130 82 Ave NW, Edmonton, AB, Canada
    * Email: info@breathoptix.ca
    * Hours: Monday – Friday: 8:30 AM – 4:30 PM | Saturday: By Appointment
    * Quick links, Patient resources, and Privacy Policy / Terms.
    * Copyright notice: "© BreathOptix Diagnostic Clinic".

### 3. E-Commerce Store (Supplies & Accessories)
A dedicated shop page accessible from the menu:

- **Catalog Scope & Business Rules:**
  - Products for sale are strictly replacement supplies and maintenance items (NO prescription medications, and NO direct online purchase of prescription CPAP machines).
  - For CPAP machines, display a special banner or product card with a "Book CPAP Fitting & Prescription Consultation" button instead of direct purchase.
- **Product Categories (Filterable):**
  - CPAP Masks & Replacement Cushions
  - Filters & Tubing (Standard & Heated)
  - Humidification Chambers & Water Tubs
  - Sanitization, Cleaning Wipes & Accessories
- **Product Card Features:**
  - High-quality placeholder imagery
  - Product title, category badge, and concise description
  - Price in Canadian Dollars (CAD, e.g., $45.00 CAD)
  - In-stock indicator
  - "Add to Cart" button with instant feedback
- **Interactive Shopping Experience:**
  - Sliding Cart Drawer showing selected items, quantity increment/decrement, subtotal calculation, and a simulated checkout flow.

Ensure smooth navigation between the Landing Page, Service Details, and the Shop, with full responsive support for mobile and desktop screens.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/db71bcac-911b-4497-a083-4390367f27dc).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
