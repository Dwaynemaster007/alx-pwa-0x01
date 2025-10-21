# 🎬 Cine Seek PWA: Mastering Progressive Web Apps

Transform your movie browsing experience with **Cine Seek**, a Next.js Progressive Web App (PWA) powered by `next-pwa`. Enjoy offline access, lightning-fast performance, and native app-like installability, all while exploring your favorite movies. Built for the **ALX ProDev Frontend** curriculum, this project showcases modern PWA fundamentals.

[![Next.js](https://img.shields.io/badge/Next.js-13+-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18+-61DAFB?style=flat&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![PWA](https://img.shields.io/badge/PWA-next--pwa-0070F3?style=flat&logo=progressive-web-app)](https://github.com/DucAnh2912/next-pwa)
[![Vercel](https://img.shields.io/badge/Vercel-Deploy-000000?style=flat&logo=vercel)](https://vercel.com/)

<div align="center">

### 🌟 Offline. Installable. Unstoppable. 🌟

*Discover movies anytime, anywhere with Cine Seek's PWA magic!*

[Features](#-key-features) • [Quick Start](#-quick-start) • [Usage](#-usage-guide) • [Structure](#-project-structure)

</div>

---

## 📋 Project Overview

**Cine Seek PWA** transforms the existing Cine Seek movie browsing application into a Progressive Web App using Next.js and the `next-pwa` package. This project, part of the **ALX ProDev Frontend** curriculum, demonstrates how to implement offline capabilities, installability, and optimized performance through service workers and a web app manifest, delivering a native app-like experience.

### 🎯 Why PWA?

- ✅ **Offline Access**: Browse cached movie details without internet.
- ✅ **Installable**: Add to your home screen like a native app.
- ✅ **Fast Performance**: Service workers cache assets for quick loads.
- ✅ **Cross-Platform**: Works seamlessly on mobile and desktop.
- ✅ **Discoverable**: Ready for app stores and search engines.

---

## 🌟 Key Features

### 📴 Offline Movie Browsing
- Access previously viewed movie details offline.
- Service worker caching for critical assets.
- Seamless experience in low/no connectivity.

### 📱 Installable App
- Web app manifest for home screen installation.
- Supports multiple icon sizes for various devices.
- Standalone display mode for app-like feel.

### ⚡ Performance Optimization
- Efficient caching strategies with `next-pwa`.
- Reduced load times for subsequent visits.
- Optimized asset delivery via service workers.

### 🎨 Responsive UI
- Inherits Cine Seek’s responsive design.
- Tailwind CSS for consistent, modern styling.
- Smooth animations and intuitive navigation.

---

## 📁 Project Structure

```
alx-pwa-0x01/
├── alx-movie-app/
│   ├── components/
│   │   └── common/
│   │       └── MovieCard.tsx         # Reusable movie card component
│   ├── graphql/
│   │   ├── apolloClient.ts          # Apollo Client configuration
│   │   └── queries.ts               # GraphQL query definitions
│   ├── interfaces/
│   │   └── index.ts                 # TypeScript type definitions
│   ├── pages/
│   │   ├── _app.tsx                 # App wrapper with ApolloProvider
│   │   ├── _document.tsx            # Custom document with manifest link
│   │   └── index.tsx                # Main page with movie list
│   ├── public/
│   │   ├── icons/
│   │   │   ├── android-chrome-192x192.png  # PWA icon (192x192)
│   │   │   ├── apple-icon-152x152.png     # PWA icon (152x152)
│   │   │   └── ms-icon-310x310.png        # PWA icon (310x310)
│   │   └── manifest.json                  # Web app manifest
│   ├── styles/
│   │   └── globals.css              # Global styles with Tailwind
│   ├── next.config.mjs              # Next.js configuration with PWA
│   ├── tsconfig.json                # TypeScript configuration
│   ├── tailwind.config.js           # Tailwind CSS configuration
│   ├── package.json                 # Dependencies and scripts
│   └── README.md                    # Project documentation
```

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v16 or later)
- **npm** or **yarn**
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Basic understanding of Next.js and TypeScript

### Installation

```bash
# 1️⃣ Clone the repository
git clone https://github.com/Dwaynemaster007/alx-pwa-0x01.git
cd alx-pwa-0x01/alx-movie-app

# 2️⃣ Install dependencies
npm install

# 3️⃣ Install PWA dependencies
npm install @ducanh2912/next-pwa
npm install --save-dev webpack

# 4️⃣ Run development server
npm run dev
```

### Access the Application

Open your browser and navigate to:
```
http://localhost:3000
```

---

## 📖 Usage Guide

### Browsing Movies Offline

1. Visit `http://localhost:3000` to load movie data.
2. Cached movie details remain accessible offline.
3. Service workers ensure fast reloads on subsequent visits.

### Installing the PWA

1. On mobile or desktop, click the browser’s “Add to Home Screen” prompt.
2. Install Cine Seek as a standalone app.
3. Launch from your home screen for an app-like experience.

### Verifying PWA Features

1. Open Chrome DevTools → **Application** tab.
2. Check **Service Workers** for registration status.
3. Verify **Manifest** for correct icon and metadata loading.

### Deploying to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy the app
vercel
```

Follow prompts to deploy and test PWA features on the live URL.

---

## 🛠️ Implementation Details

### Task 0: Install PWA Dependencies

**File:** `package.json`

```json
{
  "dependencies": {
    "@ducanh2912/next-pwa": "^10.2.9",
    "next": "^13.x",
    "react": "^18.x",
    "typescript": "^5.x"
  },
  "devDependencies": {
    "webpack": "^5.94.0"
  }
}
```

**Key Features:**
- Installs `@ducanh2912/next-pwa` for PWA functionality.
- Includes Webpack for service worker bundling.
- Verified via `package.json` dependencies.

---

### Task 1: Configure PWA in Next.js

**File:** `next.config.mjs`

```javascript
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["m.media-amazon.com"],
  },
};

export default withPWA({
  ...nextConfig,
});
```

**Key Features:**
- Integrates `next-pwa` for service worker generation.
- Outputs service worker files to `public` directory.
- Maintains existing Next.js configuration.

---

### Task 2: Web App Manifest

**File:** `public/manifest.json`

```json
{
  "name": "Cine Seek",
  "short_name": "CineSeek",
  "icons": [
    {
      "src": "/icons/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icons/apple-icon-152x152.png",
      "sizes": "152x152",
      "type": "image/png"
    },
    {
      "src": "/icons/ms-icon-310x310.png",
      "sizes": "310x310",
      "type": "image/png"
    }
  ],
  "theme_color": "#FFFFFF",
  "background_color": "#FFFFFF",
  "start_url": "/",
  "display": "standalone",
  "orientation": "portrait"
}
```

**Key Features:**
- Defines app metadata for installability.
- Includes icons in multiple sizes for cross-device support.
- Configures standalone display mode for native app feel.

---

### Task 3: Link Manifest in Document

**File:** `pages/_document.tsx`

```typescript
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0070f3" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
```

**Key Features:**
- Links `manifest.json` for PWA metadata.
- Sets theme color for browser UI consistency.
- Ensures compatibility with existing Next.js setup.

---

### Task 4: Test and Deploy

- **Local Testing**: Run `npm run dev` and verify service worker and manifest in Chrome DevTools.
- **Deployment**: Use Vercel CLI (`vercel`) for production deployment.
- **PWA Validation**: Test installability on mobile devices and check offline functionality.

---

## 🧪 Testing Checklist

### PWA Functionality
- [ ] Service worker registers correctly.
- [ ] Manifest loads with proper icons and metadata.
- [ ] App is installable on mobile and desktop.
- [ ] Offline mode displays cached movie data.

### Performance
- [ ] Assets load quickly on subsequent visits.
- [ ] Service worker caches critical resources.
- [ ] No performance degradation from PWA setup.

### UI/UX
- [ ] Responsive design remains intact.
- [ ] Install prompt appears on supported browsers.
- [ ] Standalone mode provides app-like experience.

### Deployment
- [ ] App deploys successfully to Vercel.
- [ ] PWA features work on live URL.
- [ ] No errors in production environment.

---

## 🎨 UI/UX Design

### Color Scheme

```css
Primary Gradient: from-[#1E3A8A] to-[#3B82F6] /* Blue tones for cinematic feel */
Theme Color: #0070f3
Background: #FFFFFF
Buttons: bg-blue-600 (hover: bg-blue-700)
```

### Responsive Layout

```css
grid-cols-1          /* Mobile */
sm:grid-cols-2       /* Small tablets */
md:grid-cols-3       /* Tablets */
lg:grid-cols-4       /* Desktop */
```

### Animations

- **Hover Effects**: `transform hover:scale-105`
- **Transition Duration**: `duration-200`
- **Loading States**: Smooth fade-ins for cached content.

---

## 🐛 Troubleshooting

### Service Worker Not Registering
```bash
# Check service worker in Chrome DevTools > Application
# Ensure next.config.mjs is correctly configured
npx next build
```

### Manifest Not Loading
- Verify `manifest.json` is in `public/` directory.
- Check `<link rel="manifest" href="/manifest.json" />` in `_document.tsx`.
- Ensure icon paths match file locations.

### Offline Mode Issues
- Clear browser cache and reload.
- Test with Chrome DevTools’ “Offline” mode.
- Confirm service worker caches assets correctly.

---

## 🔮 Future Enhancements

- 🔍 **Search Offline**: Cache search results for offline use.
- 🔔 **Push Notifications**: Notify users of new movies.
- 🎨 **Custom Themes**: Allow users to switch color schemes.
- 📊 **Analytics**: Track PWA usage and performance.
- 🔒 **Authentication**: Secure user-specific movie lists.

---

## 📚 Learning Resources

- [Progressive Web Apps (MDN)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
- [Next.js PWA Documentation](https://github.com/DucAnh2912/next-pwa)
- [Web App Manifest (MDN)](https://developer.mozilla.org/en-US/docs/Web/Manifest)
- [Service Workers (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
- [Vercel Deployment Guide](https://vercel.com/docs)

---

## 📄 License

This project is part of the **ALX ProDev Frontend Curriculum**.

© 2025 ALX Africa. All rights reserved.

---

## 👨‍💻 Author

**Thubelihle Dlamini (Dwaynemaster007)**  
- GitHub: [@Dwaynemaster007](https://github.com/Dwaynemaster007)

---

<div align="center">

### 💜 Built with PWA Passion by [Dwaynemaster007](https://github.com/Dwaynemaster007) 💜

*Movies at your fingertips, online or off!* ✨

[![GitHub](https://img.shields.io/badge/GitHub-Dwaynemaster007-181717?style=for-the-badge&logo=github)](https://github.com/Dwaynemaster007)
[![Next.js](https://img.shields.io/badge/Next.js-Master-000000?style=for-the-badge&logo=next.js)](https://nextjs.org/)

---

**Tags:** `pwa` · `nextjs` · `progressive-web-app` · `service-workers` · `web-manifest` · `typescript` · `alx-frontend` · `movie-app` · `offline-first`

</div>