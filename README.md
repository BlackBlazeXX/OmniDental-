# 🦷 OralCare Premium Dental Website — Complete Guide

> This README explains **everything** — how to run the website, how to edit text, how to change images, how to update colors, and how to connect a real backend. Written so anyone can understand it, even without a coding background.

---

## 📁 Project Structure (What Each File Does)

```
dental clinic/
│
├── index.html          ← Entry point. Colors, fonts, and global styles live here
├── App.tsx             ← All page routes (which URL shows which page)
├── Layout.tsx          ← Navbar + Footer (shown on every page)
├── constants.tsx       ← ⭐ MAIN CONTENT FILE — Edit most text/images here
│
├── pages/
│   ├── Home.tsx        ← Homepage
│   ├── About.tsx       ← About page
│   ├── Services.tsx    ← Services listing page
│   ├── ServiceDetail.tsx ← Individual service page
│   ├── Founder.tsx     ← Doctor profile page
│   ├── Testimonials.tsx← Testimonials page
│   ├── Blog.tsx        ← Blog / Success Stories listing
│   ├── BlogDetail.tsx  ← Individual blog post
│   └── Contact.tsx     ← Contact + Booking form
│
├── components/         ← Reusable UI pieces (navbar, cards, animations)
│
└── public/images/      ← All website images are stored here
    ├── hero/           ← Homepage hero background
    ├── about/          ← About page images + clinic video
    ├── team/           ← Team member photos
    ├── services/       ← Service cover images
    ├── gallery/        ← Before/after gallery photos
    ├── blog/           ← Blog post cover images
    ├── moving_images/  ← Scrolling marquee strip images
    └── logo/           ← Clinic logo files
```

---

## 🚀 How to Run the Website Locally

**You need:** Node.js installed on your computer. Download from [nodejs.org](https://nodejs.org)

### Steps:
1. Open a terminal (Command Prompt or PowerShell on Windows)
2. Navigate to the project folder:
   ```
   cd "C:\Users\YourName\Downloads\dental clinic"
   ```
3. Install dependencies (first time only):
   ```
   npm install
   ```
4. Start the website:
   ```
   npm run dev
   ```
5. Open your browser and go to: **http://localhost:5173**

To stop: Press `Ctrl + C` in the terminal.

---

## ✏️ PART 1 — How to Edit Text

### Most text is in `constants.tsx`

Open the file `constants.tsx`. This is the main content file. Here's what you'll find inside and how to edit it:

---

### 1.1 — Clinic Name, Phone, Email, Address

Search (`Ctrl + F`) for the text you want to change. For example:

```typescript
// Find this and change the values:
export const CLINIC_INFO = {
  name: "OralCare",
  phone: "+91 98400 12345",      ← Change to real phone number
  email: "hello@oralcare.com",   ← Change to real email
  address1: "No 253, First Floor, Rajiv Gandhi Salai, Perungudi, Chennai.",
  address2: "No 3, 76 A, Second Floor, Radhamohan Street, Velachery, Chennai.",
  hours: "Mon–Sat: 9 AM – 8 PM",
}
```

Replace the text between the quote marks `" "` with your real information.

---

### 1.2 — Doctor Bio

Search for `FOUNDER_BIO` in `constants.tsx`:

```typescript
export const FOUNDER_BIO = {
  name: "Dr. Siva",                 ← Doctor's full name
  title: "BDS, MDS – Prosthodontics", ← Qualifications
  experience: "15+",               ← Years of experience
  tagline: "...",                  ← Short inspiring quote
  bio: "...",                      ← Full biography paragraph
}
```

---

### 1.3 — Services List

Search for `SERVICES_DATA`. Each service looks like this:

```typescript
{
  title: "Dental Implants",
  shortDesc: "Permanent tooth replacement...",
  description: "Full detailed description here...",
  image: "/images/services/implants.jpg",
  benefits: ["Natural looking", "Lifetime solution", "No maintenance"],
  process: [
    { step: "Consultation", desc: "We assess your dental health..." },
    { step: "3D Scan", desc: "Digital planning of your implant..." },
  ]
}
```

To **add a new service**: copy one block, paste it after, and change the values.
To **remove a service**: delete its entire block `{ ... }`.

---

### 1.4 — Blog Posts / Success Stories

Search for `BLOG_POSTS`. Each post looks like:

```typescript
{
  title: "How I Got My Dream Smile",
  slug: "dream-smile",          ← URL-friendly name (no spaces, use hyphens)
  excerpt: "Short summary...",
  content: "<p>Full article HTML here...</p>",
  image: "/images/blog/post1.jpg",
  author: "Dr. Siva",
  date: "Feb 2025",
  tags: ["smile design", "cosmetic"],
}
```

---

### 1.5 — Page Titles, Hero Text, Number Stats

Some text is directly inside the page files (`pages/Home.tsx`, `pages/About.tsx`, etc.).

To find specific text: Open the file → Press `Ctrl + F` → Type a few words from the text you want to change → Edit the text inside the quotes.

**Example — changing hero headline in Home.tsx:**
```tsx
// Find this line:
<h1>World-Class <span>Cosmetic Dentistry</span> in Chennai.</h1>

// Change it to:
<h1>Best <span>Dental Care</span> in Chennai.</h1>
```

**Example — changing stat numbers in Home.tsx:**
Search for `4.9` or `200+` or `15+` to find the stats section and update them.

---

### 1.6 — WhatsApp Button Phone Number

Open `Layout.tsx`. Search for `wa.me`. You'll see:

```tsx
href="https://wa.me/919840012345?text=..."
```

Replace `919840012345` with your real number in this format:
- Country code first (India = 91)
- No spaces, no `+`, no dashes
- Example: `919876543210`

---

### 1.7 — Testimonials

Open `pages/Testimonials.tsx`. Search for `const testimonials`. You'll see an array of testimonial objects:

```typescript
{
  name: 'Priya Ramesh',
  role: 'Software Engineer',
  treatment: 'Smile Design',
  quote: "I came in with severe dental anxiety...",
  image: 'https://randomuser.me/api/portraits/women/44.jpg',
},
```

Replace each entry with your real patient testimonials. For the image, either:
- Use a real photo URL (uploaded to Cloudinary or your server)
- Replace with `/images/team/patient1.jpg` if you store photos locally

---

## 🖼️ PART 2 — How to Replace Images

### Method A — Local Images (Recommended)

1. Take your new photo and rename it clearly (e.g., `dr-siva.jpg`)
2. Copy the photo into the correct folder inside `public/images/`:
   - Doctor photos → `public/images/team/`
   - Service images → `public/images/services/`
   - Before/after → `public/images/gallery/`
   - Hero background → `public/images/hero/`
   - Blog covers → `public/images/blog/`
   - Scrolling strip → `public/images/moving_images/`
3. In the code, update the image path. Example:
   ```tsx
   // Old:
   image: "/images/team/placeholder.jpg"
   
   // New (your file name):
   image: "/images/team/dr-siva-real.jpg"
   ```

---

### Method B — Online Image URL

1. Upload your photo to [Cloudinary](https://cloudinary.com) (free) or [ImgBB](https://imgbb.com) (free)
2. Copy the direct image link (ending in `.jpg` or `.png`)
3. Paste it as the `image` value in the code:
   ```typescript
   image: "https://res.cloudinary.com/yourname/image/upload/v1/dr-siva.jpg"
   ```

---

### Image Size Reference

| Location | Recommended Size | Orientation |
|---|---|---|
| Hero background | 1920×1080 px | Landscape (wide) |
| Doctor profile | 800×1000 px | Portrait (tall) |
| Service cover | 800×600 px | Landscape |
| Team headshot | 400×400 px | Square |
| Blog cover | 1200×630 px | Landscape |
| Gallery/Before-After | 600×800 px | Portrait |
| Logo | 500×500 px | Square |
| Favicon | 32×32 px | Square |

---

### How to Replace the Clinic Tour Video

1. Save your video as an `.mp4` file (recommended: under 50 MB)
2. Rename it `ClinicVedio.mp4` (note: keep this exact name, or update the reference)
3. Copy it to: `public/images/about/`
4. The About page will automatically use it

To change the filename, open `pages/About.tsx` → search for `ClinicVedio.mp4` → update the name.

---

## 🎨 PART 3 — How to Change Colors & Fonts

Open `index.html`. Find the section that says `tailwind.config`. It looks like this:

```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary:     '#76546A',   ← Main brand color (buttons, links, headings)
        accent:      '#10C9DE',   ← Highlight color (icons, badges)
        highlight:   '#E8DEDD',   ← Light background tint
        textPrimary: '#1A1A1A',   ← Main text color
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],  ← Body font
        serif: ['DM Serif Display', 'serif'],       ← Heading font
      },
    }
  }
}
```

**To change a color:** Replace the hex code (e.g., `#76546A`) with your new color.
> 🎨 Find colors at [coolors.co](https://coolors.co) or [colorhunt.co](https://colorhunt.co)

**To change a font:** 
1. Go to [fonts.google.com](https://fonts.google.com)
2. Pick a font → Click "Get font" → "Get embed code"
3. Copy the `<link>` tag and replace the existing font link in `index.html`
4. Update the font name in the config above

---

## 🗺️ PART 4 — How to Update Google Maps

The Contact page shows two Google Maps embeds. To update them with your real clinic locations:

1. Go to [maps.google.com](https://maps.google.com)
2. Search for your clinic address
3. Click **"Share"** → **"Embed a map"** → **"Copy HTML"**
4. You'll get a code that looks like: `<iframe src="https://www.google.com/maps/embed?pb=..."`
5. Open `pages/Contact.tsx`
6. Search for `OralCare Perungudi Branch` (or `Velachery Branch`)
7. Replace the `src="..."` URL inside the `<iframe>` with your new URL

---

## 📬 PART 5 — How to Connect the Contact Form

Currently the contact form doesn't send data anywhere. Here are 3 ways to connect it, from simplest to most advanced:

---

### Option A — Formspree (Easiest, Free, No Coding)

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form → Copy your form endpoint URL (looks like `https://formspree.io/f/xabcdefg`)
3. Open `pages/Contact.tsx`
4. Find the `<form>` tag and update it:
   ```tsx
   // Change this:
   <form onSubmit={(e) => e.preventDefault()}>
   
   // To this:
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
5. Remove the `onSubmit` handler — Formspree handles everything
6. You'll receive an email notification every time someone submits the form

---

### Option B — EmailJS (No Backend Needed)

1. Go to [emailjs.com](https://emailjs.com) and create a free account
2. Connect your Gmail or Outlook
3. Create an email template
4. Install: `npm install @emailjs/browser`
5. Open `pages/Contact.tsx` and update the submit handler:

```typescript
import emailjs from '@emailjs/browser';

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  emailjs.sendForm(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    e.target as HTMLFormElement,
    'YOUR_PUBLIC_KEY'
  ).then(() => {
    alert('Message sent successfully!');
  });
};
```

---

### Option C — Supabase (Full Backend, Stores All Leads)

This option stores every form submission in a database so you can review all leads in a dashboard.

#### Step 1 — Create a Supabase project
1. Go to [supabase.com](https://supabase.com) → Create free account → New project
2. Go to **Table Editor** → Create a new table called `appointments`:
   - `id` (auto-generated)
   - `name` (text)
   - `phone` (text)
   - `treatment` (text)
   - `message` (text)
   - `created_at` (timestamp, auto)

#### Step 2 — Install Supabase
```
npm install @supabase/supabase-js
```

#### Step 3 — Create `src/supabase.ts`
```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://YOUR_PROJECT_REF.supabase.co';
const supabaseKey = 'YOUR_ANON_PUBLIC_KEY';

export const supabase = createClient(supabaseUrl, supabaseKey);
```

#### Step 4 — Update the form submit handler in `Contact.tsx`
```typescript
import { supabase } from '../supabase';

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = e.currentTarget;
  const data = {
    name: (form.elements.namedItem('name') as HTMLInputElement).value,
    phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
    treatment: (form.elements.namedItem('treatment') as HTMLSelectElement).value,
    message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
  };

  const { error } = await supabase.from('appointments').insert([data]);

  if (!error) {
    alert('Appointment request sent! We will call you shortly.');
    form.reset();
  } else {
    alert('Something went wrong. Please try again.');
  }
};
```

#### Step 5 — Add name attributes to form fields in `Contact.tsx`
```tsx
<input name="name" type="text" ... />
<input name="phone" type="tel" ... />
<select name="treatment" ... />
<textarea name="message" ... />
```

#### Step 6 — Update form tag
```tsx
<form onSubmit={handleSubmit}>
```

Now every form submission is saved in your Supabase dashboard. You can also set up email notifications directly from Supabase using their Webhooks feature.

---

## 🌐 PART 6 — How to Deploy / Go Live

The website is deployed on **Vercel** (free hosting, auto-deploys from GitHub).

### To trigger a new deployment:
Every time you push changes to GitHub, Vercel automatically rebuilds and deploys.

```
git add -A
git commit -m "Updated clinic info and photos"
git push origin main
```

Your website will be live within 1–2 minutes at your Vercel URL.

### To connect a custom domain (e.g., www.oralcare.com):
1. Go to [vercel.com](https://vercel.com) → Your project → **Settings → Domains**
2. Add your domain name
3. Copy the DNS records Vercel gives you
4. Go to your domain registrar (GoDaddy, Namecheap, etc.) and add those DNS records
5. Wait 24–48 hours for the domain to activate

---

## 🛠️ Tech Stack (For Technical Handoff)

| Tool | Purpose |
|---|---|
| React 19 + TypeScript | Frontend framework |
| Vite | Build tool and dev server |
| Tailwind CSS | Styling (via CDN config in index.html) |
| Framer Motion | Animations |
| React Router v6 | Page routing (HashRouter) |
| Lucide React | Icons |
| Vercel | Hosting and deployment |
| GitHub | Version control |

---

## 🆘 Common Problems & Fixes

| Problem | Solution |
|---|---|
| White screen on open | Run `npm install` then `npm run dev` |
| Image not showing | Check the file path is correct and file exists in `public/images/` |
| Changes not showing | Hard refresh the browser: `Ctrl + Shift + R` |
| Form not sending | Make sure you've connected Formspree or EmailJS (see Part 5) |
| Website not updating on Vercel | Run `git push origin main` to trigger a new deploy |
| Can't find a piece of text | Use `Ctrl + Shift + F` in VS Code to search across all files |

---

*Need help? Contact your developer. Keep this README safe — it is your website's manual.*