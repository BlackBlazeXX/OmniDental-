# 🤖 OmniDental AI: High-Ticket Portfolio Architecture

> **The Future of Structural Dentistry.** This is not just a website; it is an "Awwwards-grade" demo designed to sell premium dental clinic transformations. It features a dark-themed aesthetic, robotic clinical branding, and cinematic GSAP animations.

---

## 🎨 The Aesthetic Philosophy
OmniDental AI follows a **Midnight Blue (#020617)** and **Electric Cyan (#00D1FF)** palette. We’ve moved away from "Generic Clinic" designs and adopted a **Precision Tech** look that commands 5x the price of a standard template.

### Key Features:
- **Cinematic GSAP Reveals**: High-end entrance animations for hero and service elements.
- **Glassmorphism UI**: Translucent, blurred cards for a modern, 2026 feel.
- **Before/After Engine**: Interactive slider for visual patient verification.
- **Futuristic Branding**: Replaced "Dentist" with **Chief Architect** and "Clinic" with **Research Hub Alpha/Beta**.

---

## 🚀 Technical Architecture

| Component | Technology |
|---|---|
| **Core** | React 19 + TypeScript |
| **Styling** | Tailwind CSS (Glassmorphism Utilities) |
| **Motion** | GSAP 3 (ScrollTrigger) + Framer Motion |
| **Icons** | Lucide React |
| **Routing** | React Router 7 (HashRouter) |
| **Deployment** | Vercel (Auto-Sync from GitHub) |

---

## 📂 Project Navigation

```
OmniDental-AI/
├── index.html          ← Tech Config & Global Design Tokens
├── App.tsx             ← Structural Routing
├── Layout.tsx          ← Glassmorphism Navbar & Footer
├── constants-v2.tsx    ← 🛠️ MAIN DATA HUB - Edit all service data/texts here
│
├── pages/
│   ├── Home.tsx        ← Hero Section + Cinematic Timelines
│   ├── Services.tsx    ← Tech Stack Overview
│   ├── Founder.tsx     ← Dr. Xavier Thorne (Chief Architect) Profile
│   └── Blog.tsx        ← Structural Transmissions (Research Lab)
│
└── public/images/      ← Clinical Asset Storage
```

---

## 🛠️ Customization Guide (Agency Mode)

### 1. Updating Clinical Data
All primary clinical text (services, bios, success rates) is stored in **`constants-v2.tsx`**.
To customize for a new client:
- Open `constants-v2.tsx`
- Search for `FOUNDER_BIO` to change the Lead Surgeon's data.
- Search for `SERVICES_DATA` to update robotic procedures.

### 2. Adjusting the "Feel" (GSAP)
Head to `pages/Home.tsx`. Look for the `useEffect` section:
```javascript
// Change duration or ease (Power4.out recommended for high-end feel)
const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.2 } });
```

### 3. Deploying to Vercel (The Sales Hook)
1. Push this repo to your GitHub.
2. Connect it to Vercel.
3. Every client you sell this to gets their own custom URL (e.g., `client-name.omnidental.ai`).

---

## 📈 Selling Strategy (For Freelancers)
This demo is built to be sold as a **"Digital Identity Upgrade."** 
Don't sell "a website." Sell **"Clinical Authority."**
- **Price Anchor**: ₹25,000 - ₹50,000 / $500 - $1,000.
- **Upsell**: Offer the **SEO & GMB Guide** (included in this repo) to help the client rank for "Robotic Implants."

---

*Architected by Antigravity AI for the next generation of digital agencies.*