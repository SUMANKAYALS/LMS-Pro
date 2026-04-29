# LMS Pro Backend

A modern and scalable Loan Management System backend built using Node.js, Express.js, TypeScript, and MongoDB.

This backend powers:
- Authentication System
- Loan Application Workflow
- Payment Management
- Analytics Dashboard
- Role Based Access Control (RBAC)
- PDF Report Generation

Designed with industry-level architecture and scalable folder structure.

---

# 🚀 Features

## 🔐 Authentication & Authorization
- User Registration
- User Login
- JWT Authentication
- Cookie-based Authentication
- Protected Routes
- Role Based Access Control (RBAC)

---

## 👤 User Roles
Supports multiple user roles:

- ADMIN
- BORROWER

Admins can:
- View all loans
- Update loan status
- Access analytics dashboard

Borrowers can:
- Apply for loans
- View loan history
- Make payments
- Download reports

---

## 🏦 Loan Management
- Apply for Loan
- Business Rule Engine (BRE)
- Loan Eligibility Validation
- Loan Approval/Rejection
- Loan Status Tracking
- Interest Calculation
- Repayment Calculation

---

## 💳 Payment System
- Loan EMI Payment
- Payment History
- Transaction Tracking
- Payment Analytics

---

## 📊 Analytics Dashboard
Real-time analytics using MongoDB aggregation:

- Total Loans
- Total Users
- Total Payments
- Monthly Loan Analytics
- Loan Growth Reports

---

## 📄 PDF Report Generation
Generate downloadable loan reports using PDFKit.

Reports include:
- Customer Details
- Loan Amount
- Interest
- Repayment Amount
- Loan Status
- Employment Details

---

# 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | Runtime |
| Express.js | Backend Framework |
| TypeScript | Type Safety |
| MongoDB | Database |
| Mongoose | ODM |
| JWT | Authentication |
| bcrypt | Password Hashing |
| PDFKit | PDF Generation |
| Cookie Parser | Cookie Handling |
| CORS | Cross-Origin Requests |

---

# 📁 Project Structure

```bash
src/
│
├── config/
│   ├── db.ts
│   └── env.ts
│
├── constants/
│   ├── employmentType.ts
│   ├── loanLimits.ts
│   ├── loanStatus.ts
│   ├── regex.ts
│   └── roles.ts
│
├── controller/
│   ├── auth.controller.ts
│   ├── loan.controller.ts
│   ├── payment.controller.ts
│   ├── analytics.controller.ts
│   └── report.controller.ts
│
├── middleware/
│   ├── auth.middleware.ts
│   └── authorize.middleware.ts
│
├── model/
│   ├── user.model.ts
│   ├── loan.model.ts
│   └── payment.model.ts
│
├── routes/
│   ├── auth.route.ts
│   ├── loan.route.ts
│   ├── payment.route.ts
│   ├── analytics.route.ts
│   └── report.route.ts
│
├── utils/
│   ├── jwt.ts
│   ├── bre.ts
│   ├── calculateLoan.ts
│   └── cookie.ts
│
├── app.ts
└── server.ts
```

---

# ⚙️ Installation

## 1️⃣ Clone Repository

```bash
git clone <repository-url>
```

---

## 2️⃣ Move to Backend Directory

```bash
cd backend
```

---

## 3️⃣ Install Dependencies

```bash
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file in backend root:

```env
PORT=5000

MONGO_URI=your_mongodb_connection

JWT_SECRET=your_secret_key
```

---

# ▶️ Run Development Server

```bash
npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

---

# 🔐 Authentication Flow

## Register User

```http
POST /api/auth/register
```

### Request Body

```json
{
  "name": "Sky",
  "email": "sky@gmail.com",
  "password": "123456",
  "role": "BORROWER"
}
```

---

## Login User

```http
POST /api/auth/login
```

### Request Body

```json
{
  "email": "sky@gmail.com",
  "password": "123456"
}
```

---

## Protected Route

```http
GET /api/auth/me
```

### Authorization Header

```bash
Authorization: Bearer <token>
```

---

# 🏦 Loan APIs

---

## Apply Loan

```http
POST /api/loan/apply
```

### Request Body

```json
{
  "fullName": "Sky",
  "amount": 50000,
  "tenureDays": 90,
  "annualIncome": 600000,
  "employmentType": "SALARIED",
  "panNumber": "ABCDE1234F",
  "aadhaarNumber": "123456789012",
  "purpose": "Business"
}
```

---

## Get My Loans

```http
GET /api/loan/my-loans
```

---

## Get All Loans (Admin)

```http
GET /api/loan/all
```

---

## Update Loan Status

```http
PATCH /api/loan/status/:loanId
```

### Request Body

```json
{
  "status": "APPROVED"
}
```

---

# 💳 Payment APIs

---

## Make Payment

```http
POST /api/payment/pay
```

### Request Body

```json
{
  "loanId": "loan_id",
  "amount": 5000
}
```

---

## Payment History

```http
GET /api/payment/history
```

---

# 📊 Analytics APIs

---

## Dashboard Analytics

```http
GET /api/analytics/dashboard
```

### Response Includes

- Total Loans
- Total Users
- Total Payments
- Monthly Loan Analytics

---

# 📄 Report APIs

---

## Download Loan Report

```http
GET /api/report/loan/:loanId
```

Returns:
- PDF Loan Report

---

# 🧠 Business Rule Engine (BRE)

Loan applications are validated using BRE rules:

### Checks:
- Minimum Income
- Loan Limit
- PAN Validation
- Aadhaar Validation
- Employment Type Validation

---

# 🔒 Security Features

- JWT Authentication
- Password Hashing using bcrypt
- Protected APIs
- RBAC Authorization
- Secure Cookies
- Input Validation

---

# 📈 Analytics System

MongoDB Aggregation used for:
- Loan Analytics
- Monthly Reports
- Payment Statistics
- User Statistics

---

# 📄 PDF Generation

PDF reports generated dynamically using PDFKit.

Features:
- Downloadable Reports
- Printable Statements
- Loan Summary

---

# 🚀 Future Improvements

- Real-time Notifications
- Razorpay Integration
- Refresh Tokens
- Email Service
- SMS OTP Verification
- Docker Deployment
- AWS Deployment
- Unit Testing
- WebSockets

---

# 👨‍💻 Author

## Suman Kayal

Full Stack MERN Developer

Specialized in:
- Backend Development
- Fintech Systems
- TypeScript Architecture
- Scalable APIs
- SaaS Platforms

---

# 📜 License

This project is for educational and portfolio purposes.