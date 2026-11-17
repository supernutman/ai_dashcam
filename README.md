# AI Dashcam Patrol - Next.js Frontend

โปรเจค Frontend สำหรับระบบ **AI Dashcam Patrol** (เฝ้าระวังต้นไม้ใกล้แนวสายไฟด้วยกล้องหน้ารถ AI) พัฒนาด้วย **Next.js (App Router)** แทนที่ React+Vite ตัวเดิม

## 🚀 จุดเด่นของการย้ายมา Next.js
- **Next.js App Router**: จัดการโครงสร้างเส้นทางแบบ File-based routing แบ่ง layout หน้าปกติ `(main)` และหน้าแบบเต็มจอ `(bare)` อย่างเป็นระบบ
- **Next Font Optimization**: ใช้งาน Google Fonts (`Inter`, `Noto Sans Thai`, `Barlow Condensed`) ผ่าน `next/font/google`
- **Responsive Mobile/Desktop First**: หน้าแรก `/` บนเดสก์ท็อปแสดง Hero + Navbar ส่วนบนมือถือแสดงหน้าต้อนรับ (Welcome View) อัตโนมัติแบบไร้รอยต่อ
- **API Rewrites**: ตั้งค่า proxy `/api/*` ไปยัง Go Backend (`http://localhost:8000`) ผ่าน `next.config.mjs`

---

## 📁 โครงสร้างโปรเจค

```
AI-Dashcam-NextJS/
├── public/                     # Static Assets (favicon, pea-logo, phone, world-map)
├── src/
│   ├── app/
│   │   ├── layout.jsx          # Root Layout + Google Fonts + CSS
│   │   ├── page.jsx            # หน้าแรก (/) สลับ Hero / Welcome View อัตโนมัติ
│   │   ├── not-found.jsx       # หน้า 404 (ไม่พบหน้านี้)
│   │   ├── (main)/             # กลุ่มหน้าที่มี Navbar
│   │   │   ├── layout.jsx
│   │   │   ├── live-map/page.jsx
│   │   │   ├── risk-reports/page.jsx
│   │   │   └── how-it-works/page.jsx
│   │   └── (bare)/             # กลุ่มหน้าเต็มจอ ไม่มี Navbar
│   │       ├── layout.jsx
│   │       ├── welcome/page.jsx
│   │       ├── login/page.jsx
│   │       └── reset-password/page.jsx
│   ├── components/
│   │   ├── layout/             # Layout & Navbar
│   │   ├── home/               # Hero & WelcomeView
│   │   └── ui/                 # Reusable UI (AuthShell, TextField, PagePlaceholder)
│   ├── hooks/                  # Custom React Hooks (useMediaQuery)
│   ├── services/               # API client (apiGet, apiPost)
│   └── styles/                 # global.css, auth.css, welcome.css
├── next.config.mjs
├── package.json
└── jsconfig.json
```

---

## 🛠️ วิธีการติดตั้งและรัน

### 1. ติดตั้ง Dependencies
```bash
npm install
```

### 2. รันใน Development Mode
```bash
npm run dev
```
เปิดบราวเซอร์ที่ [http://localhost:3000](http://localhost:3000)

### 3. Build สำหรับ Production
```bash
npm run build
npm start
```
