# LMS Pro Frontend

A modern fintech-style Loan Management System frontend built using Next.js, TypeScript, Tailwind CSS, Axios, and Recharts.

This frontend provides:
- Authentication UI
- Protected Dashboard
- Loan Management Interface
- Payment System
- Analytics Dashboard
- PDF Report Download
- Modern SaaS Design

Built with scalable architecture and industry-level UI/UX.

---

# 🚀 Features

## 🔐 Authentication System
- User Login
- User Registration
- JWT Authentication
- Protected Routes
- Persistent Sessions

---

## 🏦 Loan Management
- Apply for Loan
- Loan History
- Loan Status Tracking
- Loan Lifecycle Management
- Loan Report Download

---

## 💳 Payment System
- EMI Payment UI
- Payment History
- Transaction Tracking
- Repayment Management

---

## 📊 Analytics Dashboard
Interactive fintech dashboard with:
- Analytics Cards
- Loan Statistics
- Dynamic Graphs
- Real-time Dashboard Data
- Monthly Loan Analytics

---

## 📄 PDF Reports
Users can:
- Download Loan Reports
- Export Loan Details
- Print Loan Statements

---

## 🎨 Modern Fintech UI
- Dark Theme
- Glassmorphism
- Gradient Design
- Responsive Layout
- Animated Cards
- Professional Dashboard

---

# 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 15 | Frontend Framework |
| React.js | UI Library |
| TypeScript | Type Safety |
| Tailwind CSS | Styling |
| Axios | API Requests |
| Recharts | Analytics Graphs |
| React Hot Toast | Notifications |
| Lucide React | Icons |

---

# 📁 Project Structure

```bash
src/
│
├── app/
│   ├── login/
│   ├── register/
│   ├── dashboard/
│   │   ├── apply-loan/
│   │   ├── my-loans/
│   │   ├── payment/
│   │   └── admin/
│
├── components/
│   ├── dashboard/
│   │   ├── Sidebar.tsx
│   │   ├── Navbar.tsx
│   │   ├── AnalyticsCard.tsx
│   │   ├── LoanChart.tsx
│   │   └── StatusBadge.tsx
│
├── services/
│   ├── api.ts
│   ├── auth.service.ts
│   ├── loan.service.ts
│   ├── payment.service.ts
│   ├── analytics.service.ts
│   └── report.service.ts
│
├── types/
│   └── loan.ts
│
└── middleware.ts
```

---

# ⚙️ Installation

## 1️⃣ Clone Repository

```bash
git clone <repository-url>
```

---

## 2️⃣ Move to Frontend Directory

```bash
cd frontend
```

---

## 3️⃣ Install Dependencies

```bash
npm install
```

---

# 🔑 Environment Variables

Create `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

---

# ▶️ Run Development Server

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:3000
```

---

# 🔐 Authentication Pages

---

## Login Page

```bash
/login
```

Features:
- JWT Login
- Secure Authentication
- Toast Notifications
- Modern UI

---

## Register Page

```bash
/register
```

Features:
- User Registration
- Role Selection
- Validation
- Responsive Form

---

# 📊 Dashboard

```bash
/dashboard
```

Dashboard includes:
- Analytics Cards
- Dynamic Loan Graphs
- Recent Activities
- Real-time Statistics

---

# 🏦 Loan Pages

---

## Apply Loan

```bash
/dashboard/apply-loan
```

Features:
- Loan Application Form
- BRE Validation
- Interest Calculation
- Loan Submission

---

## My Loans

```bash
/dashboard/my-loans
```

Features:
- Loan Table
- Loan Status
- Download PDF Reports
- Loan History

---

## Admin Panel

```bash
/dashboard/admin
```

Features:
- View All Loans
- Approve Loans
- Reject Loans
- Update Loan Status

---

# 💳 Payment Page

```bash
/dashboard/payment
```

Features:
- EMI Payments
- Repayment Tracking
- Payment Submission
- Transaction Management

---

# 📈 Analytics Dashboard

Analytics built using:
- Recharts
- Dynamic MongoDB Data
- Real-time Dashboard APIs

Charts include:
- Monthly Loan Analytics
- Payment Overview
- Loan Growth

---

# 🔗 API Integration

Axios used for:
- Authentication APIs
- Loan APIs
- Payment APIs
- Analytics APIs
- Report APIs

---

# 🧠 Frontend Architecture

Architecture follows:
- Component-based Design
- Service Layer Pattern
- Scalable Folder Structure
- Reusable UI Components
- API Separation

---

# 🎨 UI/UX Design

Design inspired by:
- Stripe
- Razorpay
- Banking Dashboards
- SaaS Platforms

Features:
- Glassmorphism
- Gradient UI
- Dark Theme
- Responsive Layout
- Fintech Dashboard Style

---

# 📱 Responsive Design

Fully responsive for:
- Desktop
- Tablet
- Mobile Devices

---

# 📄 PDF Download System

Users can:
- Download Loan Reports
- Export Statements
- Print Reports

Powered by:
- Backend PDFKit APIs
- Blob Downloads

---

# 🚀 Future Improvements

- Notification System
- Dark/Light Theme Toggle
- Razorpay Integration
- Real-time Updates
- Chat Support
- AI Loan Assistant
- Mobile App
- PWA Support

---

# 👨‍💻 Author

## Suman Kayal

Full Stack MERN Developer

Specialized in:
- Frontend Development
- Fintech UI
- Dashboard Systems
- SaaS Applications
- Next.js Architecture

---

# 📜 License

This project is for educational and portfolio purposes.