# 🦷 OralCare Premium Dental Clinic - Maintenance & Engineering Guide

Welcome to your premium dental practice website. This site is architected for high performance, SEO optimization, and visual elegance.

---

## 🏗️ Architecture Overview

The website is currently a **Headless-Lite** architecture.
- **Content Storage:** All text, data, and image links are located in `constants.tsx`.
- **Structure:** Logic is in `App.tsx` and `Layout.tsx`.
- **Styling:** Design tokens (colors/fonts) and external assets are in `index.html`.

---

## 📝 Content Management (Editing Text & Images)

To update the website's content without touching the core code, follow these steps:

### 1. How to Edit Text
All text (titles, descriptions, quotes, clinical bios) is stored in `constants.tsx`.
- Open `constants.tsx`.
- Find the variable you want to change (e.g., `FOUNDER_BIO`, `SERVICES_DATA`, or `BLOG_POSTS`).
- Edit the text inside the quotes. 
- **Tip:** For blog posts, the `content` field uses HTML strings. You can use tags like `<h3>`, `<p>`, and `<img>` to format your story.

### 2. How to Replace Images
- Upload your new image to a hosting provider (like Imgur, Cloudinary, or your own server).
- Copy the **Direct Image URL** (should end in .jpg, .png, or .webp).
- In `constants.tsx`, find the `image` field for the respective item and paste your new URL.
- **Visual Consistency:** For best results, use images with similar aspect ratios (e.g., 4:5 for portraits, 16:9 for banners).

### 3. Managing CRO Elements (New)
Key conversion elements are hardcoded for performance but easy to update:
- **Trust Bar (Stars & Reviews):** Found in `pages/Home.tsx` (Ctrl+F "Trust Bar"). You can manually update "4.9/5" and "200+ Patients" there.
- **Meet Dr. Siva Card:** This uses the `FOUNDER_BIO.image` from `constants.tsx`.
- **Google Map:** The embed code is in `pages/Contact.tsx`. To change the location, go to Google Maps -> Share -> Embed a map -> Copy HTML -> Replace the `<iframe>` in `Contact.tsx`.

---

## 🎨 Brand Identity (Colors & Typography)

To change the "feel" of the site or perform a rebrand, navigate to `index.html`.

### 1. How to Replace Fonts
The site uses Google Fonts. To swap them:
- Visit [fonts.google.com](https://fonts.google.com) and select your desired fonts.
- Copy the `<link>` tag and replace the existing one in the `<head>` section of `index.html`.
- Update the Tailwind configuration inside the `<script>` tag in `index.html`:
  ```javascript
  fontFamily: {
    sans: ['Your New Sans Font', 'sans-serif'],
    serif: ['Your New Serif Font', 'serif'],
  },
  ```

### 2. How to Change Colors
In the same `tailwind.config` section in `index.html`, update the hex codes:
- **Primary:** The main brand color (used for buttons and headers).
- **Accent:** The highlight color (used for icons and subtle details).
- **Highlight:** The selection and light background tint.

---

## 🚀 Step-by-Step Backend Integration Guide

To move from static data to a fully dynamic, $50,000-grade production system, follow this senior-level integration roadmap.

### Step 1: Selection of Tech Stack
For a premium clinic, we recommend a **BaaS (Backend as a Service)** like Supabase or a **Headless CMS** like Sanity.io.
- **Database:** PostgreSQL (via Supabase).
- **Authentication:** JWT-based (for admin dashboard).
- **Email Engine:** Resend or SendGrid (for appointment notifications).

### Step 2: Database Schema Modeling
Create the following tables:
1. **`services`**: id, title, short_desc, description, image_url, benefits (JSON), process (JSON).
2. **`team`**: id, name, role, bio, image_url, specialties (JSON).
3. **`blog_posts`**: id, title, slug, content (Rich Text), image_url, author_id, created_at.
4. **`appointments`**: id, patient_name, phone, treatment_type, status, created_at.

### Step 3: API Endpoint Integration
1. Create a file `src/services/api.ts`.
2. Implement fetch logic:
   ```typescript
   export const fetchServices = async () => {
     const response = await fetch(`${process.env.API_URL}/services`);
     return response.json();
   };
   ```
3. Use the `useEffect` hook in your pages to replace static data with live data.

### Step 4: Connecting the Lead Capture Form
In `pages/Contact.tsx`, update the `onSubmit` handler to `POST` the form data to your `/appointments` endpoint and trigger a success notification via a service like Zapier or Make.

---

*Need technical support? Contact your senior frontend architect.*