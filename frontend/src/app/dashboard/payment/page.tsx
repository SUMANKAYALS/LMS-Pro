// "use client";

// import { useEffect, useState } from "react";

// import toast from "react-hot-toast";

// import { getMyLoans } from "@/services/loan.service";

// import { makePayment } from "@/services/payment.service";

// import { Loan } from "@/types/loan";

// import StatusBadge from "@/components/dashboard/StatusBadge";

// export default function PaymentPage() {
//     const [loading, setLoading] = useState(false);

//     const [loans, setLoans] = useState<Loan[]>(
//         []
//     );

//     const [selectedLoan, setSelectedLoan] =
//         useState("");

//     const [amount, setAmount] = useState("");

//     const [utrNumber, setUtrNumber] =
//         useState("");

//     /**
//      * Fetch Loans
//      */
//     useEffect(() => {
//         const fetchLoans = async () => {
//             try {
//                 const response = await getMyLoans();

//                 // only disbursed loans
//                 const disbursedLoans =
//                     response.loans.filter(
//                         (loan: Loan) =>
//                             loan.status === "DISBURSED"
//                     );

//                 setLoans(disbursedLoans);
//             } catch (error: any) {
//                 toast.error(
//                     error.response?.data?.message ||
//                     "Failed to fetch loans"
//                 );
//             }
//         };

//         fetchLoans();
//     }, []);

//     /**
//      * Submit Payment
//      */
//     const handlePayment = async (
//         e: React.FormEvent
//     ) => {
//         e.preventDefault();

//         try {
//             setLoading(true);

//             const response = await makePayment(
//                 selectedLoan,
//                 {
//                     amount,
//                     utrNumber,
//                 }
//             );

//             toast.success(response.message);

//             setAmount("");

//             setUtrNumber("");

//             console.log(response);
//         } catch (error: any) {
//             toast.error(
//                 error.response?.data?.message ||
//                 "Payment failed"
//             );
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <main>
//             {/* Heading */}
//             <div className="mb-10">
//                 <h1 className="text-4xl font-bold">
//                     Loan Payment
//                 </h1>

//                 <p className="text-gray-400 mt-2">
//                     Pay EMI and manage repayments
//                 </p>
//             </div>

//             {/* Layout */}
//             <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
//                 {/* Payment Form */}
//                 <div className="xl:col-span-1 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
//                     <h2 className="text-2xl font-bold mb-6">
//                         Make Payment
//                     </h2>

//                     <form
//                         onSubmit={handlePayment}
//                         className="space-y-5"
//                     >
//                         {/* Select Loan */}
//                         <div>
//                             <label className="block mb-2 text-gray-300">
//                                 Select Loan
//                             </label>

//                             <select
//                                 value={selectedLoan}
//                                 onChange={(e) =>
//                                     setSelectedLoan(
//                                         e.target.value
//                                     )
//                                 }
//                                 className="w-full bg-black/30 border border-white/10 p-4 rounded-xl outline-none focus:border-cyan-400"
//                             >
//                                 <option value="">
//                                     Select Loan
//                                 </option>

//                                 {loans.map((loan) => (
//                                     <option
//                                         key={loan._id}
//                                         value={loan._id}
//                                     >
//                                         ₹{loan.amount} -{" "}
//                                         {loan.purpose}
//                                     </option>
//                                 ))}
//                             </select>
//                         </div>

//                         {/* Amount */}
//                         <div>
//                             <label className="block mb-2 text-gray-300">
//                                 Payment Amount
//                             </label>

//                             <input
//                                 type="number"
//                                 placeholder="10000"
//                                 value={amount}
//                                 onChange={(e) =>
//                                     setAmount(e.target.value)
//                                 }
//                                 className="w-full bg-black/30 border border-white/10 p-4 rounded-xl outline-none focus:border-cyan-400"
//                             />
//                         </div>

//                         {/* UTR */}
//                         <div>
//                             <label className="block mb-2 text-gray-300">
//                                 UTR Number
//                             </label>

//                             <input
//                                 type="text"
//                                 placeholder="UTR123456789"
//                                 value={utrNumber}
//                                 onChange={(e) =>
//                                     setUtrNumber(
//                                         e.target.value
//                                     )
//                                 }
//                                 className="w-full bg-black/30 border border-white/10 p-4 rounded-xl outline-none focus:border-cyan-400"
//                             />
//                         </div>

//                         {/* Submit */}
//                         <button
//                             type="submit"
//                             disabled={loading}
//                             className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:opacity-90 text-white font-semibold p-4 rounded-xl transition"
//                         >
//                             {loading
//                                 ? "Processing..."
//                                 : "Pay Now"}
//                         </button>
//                     </form>
//                 </div>

//                 {/* Loan List */}
//                 <div className="xl:col-span-2 bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl">
//                     <div className="p-8 border-b border-white/10">
//                         <h2 className="text-2xl font-bold">
//                             Active Loans
//                         </h2>
//                     </div>

//                     <div className="overflow-x-auto">
//                         <table className="w-full">
//                             {/* Head */}
//                             <thead className="bg-white/5 border-b border-white/10">
//                                 <tr>
//                                     <th className="text-left p-5">
//                                         Amount
//                                     </th>

//                                     <th className="text-left p-5">
//                                         Interest
//                                     </th>

//                                     <th className="text-left p-5">
//                                         Repayment
//                                     </th>

//                                     <th className="text-left p-5">
//                                         Status
//                                     </th>
//                                 </tr>
//                             </thead>

//                             {/* Body */}
//                             <tbody>
//                                 {loans.length > 0 ? (
//                                     loans.map((loan) => (
//                                         <tr
//                                             key={loan._id}
//                                             className="border-b border-white/5"
//                                         >
//                                             <td className="p-5 font-semibold">
//                                                 ₹
//                                                 {loan.amount.toLocaleString()}
//                                             </td>

//                                             <td className="p-5">
//                                                 ₹
//                                                 {loan.interestAmount.toLocaleString()}
//                                             </td>

//                                             <td className="p-5">
//                                                 ₹
//                                                 {loan.totalRepayment.toLocaleString()}
//                                             </td>

//                                             <td className="p-5">
//                                                 <StatusBadge
//                                                     status={loan.status}
//                                                 />
//                                             </td>
//                                         </tr>
//                                     ))
//                                 ) : (
//                                     <tr>
//                                         <td
//                                             colSpan={4}
//                                             className="p-10 text-center text-gray-400"
//                                         >
//                                             No disbursed loans found
//                                         </td>
//                                     </tr>
//                                 )}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </main>
//     );
// }


"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getMyLoans } from "@/services/loan.service";
import { makePayment } from "@/services/payment.service";
import { Loan } from "@/types/loan";
import StatusBadge from "@/components/dashboard/StatusBadge";

export default function PaymentPage() {
    const [loading, setLoading] = useState(false);
    const [loans, setLoans] = useState<Loan[]>([]);
    const [selectedLoan, setSelectedLoan] = useState("");
    const [amount, setAmount] = useState("");
    const [utrNumber, setUtrNumber] = useState("");
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    const activeLoan = loans.find((l) => l._id === selectedLoan);

    useEffect(() => {
        const fetchLoans = async () => {
            try {
                const response = await getMyLoans();
                const disbursedLoans = response.loans.filter(
                    (loan: Loan) => loan.status === "DISBURSED"
                );
                setLoans(disbursedLoans);
                if (disbursedLoans.length > 0) {
                    setSelectedLoan(disbursedLoans[0]._id);
                }
            } catch (error: any) {
                toast.error(
                    error.response?.data?.message || "Failed to fetch loans"
                );
            }
        };
        fetchLoans();
    }, []);

    const handlePayment = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedLoan || !amount || !utrNumber) {
            toast.error("Please fill all fields");
            return;
        }
        try {
            setLoading(true);
            const response = await makePayment(selectedLoan, { amount, utrNumber });
            toast.success(response.message);
            setPaymentSuccess(true);
            setTimeout(() => setPaymentSuccess(false), 3000);
            setAmount("");
            setUtrNumber("");
        } catch (error: any) {
            toast.error(
                error.response?.data?.message || "Payment failed"
            );
        } finally {
            setLoading(false);
        }
    };

    const repaymentProgress = activeLoan
        ? Math.min(
            100,
            Math.round(
                (activeLoan.amount / activeLoan.totalRepayment) * 100
            )
        )
        : 0;

    return (
        <main className="min-h-screen text-white">
            {/* Page Header */}
            <div className="mb-8 flex items-start justify-between">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">
                        Repayments
                    </p>
                    <h1 className="text-4xl font-bold tracking-tight">
                        Loan Payment
                    </h1>
                    <p className="text-gray-400 mt-1 text-sm">
                        Pay EMIs and track your repayment progress
                    </p>
                </div>
                <div className="hidden sm:flex items-center gap-2 bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-gray-300">
                        {loans.length} Active Loan{loans.length !== 1 ? "s" : ""}
                    </span>
                </div>
            </div>

            {/* Summary Strip */}
            {loans.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                    {[
                        {
                            label: "Total Borrowed",
                            value: `₹${loans
                                .reduce((s, l) => s + l.amount, 0)
                                .toLocaleString()}`,
                            color: "text-white",
                        },
                        {
                            label: "Total Interest",
                            value: `₹${loans
                                .reduce((s, l) => s + l.interestAmount, 0)
                                .toLocaleString()}`,
                            color: "text-amber-400",
                        },
                        {
                            label: "Total Repayment",
                            value: `₹${loans
                                .reduce((s, l) => s + l.totalRepayment, 0)
                                .toLocaleString()}`,
                            color: "text-cyan-400",
                        },
                        {
                            label: "Loans Active",
                            value: loans.length.toString(),
                            color: "text-purple-400",
                        },
                    ].map((stat) => (
                        <div
                            key={stat.label}
                            className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4"
                        >
                            <p className="text-xs text-gray-400 mb-1">{stat.label}</p>
                            <p className={`text-xl font-bold ${stat.color}`}>
                                {stat.value}
                            </p>
                        </div>
                    ))}
                </div>
            )}

            {/* Main Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                {/* LEFT — Payment Form */}
                <div className="xl:col-span-1 space-y-5">
                    {/* Loan Selector Cards */}
                    {loans.length > 0 && (
                        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
                            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
                                Select Loan
                            </p>
                            <div className="space-y-2">
                                {loans.map((loan) => (
                                    <button
                                        key={loan._id}
                                        type="button"
                                        onClick={() => setSelectedLoan(loan._id)}
                                        className={`w-full text-left px-4 py-3 rounded-xl border transition-all duration-200 ${selectedLoan === loan._id
                                                ? "bg-cyan-500/10 border-cyan-400/50 text-white"
                                                : "bg-black/20 border-white/10 text-gray-300 hover:border-white/20"
                                            }`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="font-semibold">
                                                ₹{loan.amount.toLocaleString()}
                                            </span>
                                            <span
                                                className={`text-xs px-2 py-0.5 rounded-full ${selectedLoan === loan._id
                                                        ? "bg-cyan-400/20 text-cyan-300"
                                                        : "bg-white/10 text-gray-400"
                                                    }`}
                                            >
                                                {loan.purpose}
                                            </span>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-0.5">
                                            Repayment: ₹{loan.totalRepayment.toLocaleString()}
                                        </p>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Repayment Progress */}
                    {activeLoan && (
                        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
                            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
                                Repayment Progress
                            </p>
                            <div className="flex items-end justify-between mb-2">
                                <span className="text-2xl font-bold text-cyan-400">
                                    {repaymentProgress}%
                                </span>
                                <span className="text-xs text-gray-400">
                                    of ₹{activeLoan.totalRepayment.toLocaleString()}
                                </span>
                            </div>
                            <div className="w-full bg-white/10 rounded-full h-2">
                                <div
                                    className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full transition-all duration-700"
                                    style={{ width: `${repaymentProgress}%` }}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-3 mt-4">
                                <div className="bg-black/20 rounded-xl px-3 py-2.5">
                                    <p className="text-xs text-gray-400">Principal</p>
                                    <p className="font-semibold text-sm mt-0.5">
                                        ₹{activeLoan.amount.toLocaleString()}
                                    </p>
                                </div>
                                <div className="bg-black/20 rounded-xl px-3 py-2.5">
                                    <p className="text-xs text-gray-400">Interest</p>
                                    <p className="font-semibold text-sm mt-0.5 text-amber-400">
                                        ₹{activeLoan.interestAmount.toLocaleString()}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Payment Form */}
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
                        <h2 className="text-lg font-bold mb-5 flex items-center gap-2">
                            <span className="w-7 h-7 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-sm">
                                ₹
                            </span>
                            Make Payment
                        </h2>

                        <form onSubmit={handlePayment} className="space-y-4">
                            {/* Amount */}
                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                                    Payment Amount
                                </label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">
                                        ₹
                                    </span>
                                    <input
                                        type="number"
                                        placeholder="10,000"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                        className="w-full bg-black/30 border border-white/10 pl-9 pr-4 py-3.5 rounded-xl outline-none focus:border-cyan-400 transition-colors placeholder:text-gray-600"
                                    />
                                </div>
                            </div>

                            {/* UTR */}
                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                                    UTR / Reference Number
                                </label>
                                <input
                                    type="text"
                                    placeholder="UTR123456789"
                                    value={utrNumber}
                                    onChange={(e) => setUtrNumber(e.target.value)}
                                    className="w-full bg-black/30 border border-white/10 px-4 py-3.5 rounded-xl outline-none focus:border-cyan-400 transition-colors placeholder:text-gray-600 font-mono text-sm"
                                />
                                <p className="text-xs text-gray-500 mt-1.5">
                                    Enter the UTR from your bank transaction
                                </p>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={loading || !selectedLoan}
                                className={`w-full font-semibold py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 ${paymentSuccess
                                        ? "bg-emerald-500 text-white"
                                        : "bg-gradient-to-r from-cyan-500 to-purple-500 hover:opacity-90 text-white disabled:opacity-40 disabled:cursor-not-allowed"
                                    }`}
                            >
                                {loading ? (
                                    <>
                                        <svg
                                            className="animate-spin w-4 h-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            />
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8v8z"
                                            />
                                        </svg>
                                        Processing...
                                    </>
                                ) : paymentSuccess ? (
                                    "Payment Submitted ✓"
                                ) : (
                                    "Pay Now"
                                )}
                            </button>
                        </form>
                    </div>
                </div>

                {/* RIGHT — Loan Table */}
                <div className="xl:col-span-2 bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl">
                    <div className="px-8 py-6 border-b border-white/10 flex items-center justify-between">
                        <div>
                            <h2 className="text-lg font-bold">Active Loans</h2>
                            <p className="text-xs text-gray-400 mt-0.5">
                                Disbursed loans eligible for repayment
                            </p>
                        </div>
                        {loans.length > 0 && (
                            <span className="text-xs bg-cyan-500/10 text-cyan-400 border border-cyan-400/20 px-3 py-1 rounded-full">
                                {loans.length} loan{loans.length !== 1 ? "s" : ""}
                            </span>
                        )}
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-white/[0.03] border-b border-white/10">
                                <tr>
                                    {["Amount", "Interest", "Total Repayment", "Status", ""].map(
                                        (h) => (
                                            <th
                                                key={h}
                                                className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-400"
                                            >
                                                {h}
                                            </th>
                                        )
                                    )}
                                </tr>
                            </thead>
                            <tbody>
                                {loans.length > 0 ? (
                                    loans.map((loan) => (
                                        <tr
                                            key={loan._id}
                                            onClick={() => setSelectedLoan(loan._id)}
                                            className={`border-b border-white/[0.05] cursor-pointer transition-colors ${selectedLoan === loan._id
                                                    ? "bg-cyan-500/5"
                                                    : "hover:bg-white/[0.03]"
                                                }`}
                                        >
                                            <td className="px-6 py-5">
                                                <p className="font-bold text-base">
                                                    ₹{loan.amount.toLocaleString()}
                                                </p>
                                                <p className="text-xs text-gray-500 mt-0.5">
                                                    {loan.purpose}
                                                </p>
                                            </td>
                                            <td className="px-6 py-5 text-amber-400 font-medium">
                                                ₹{loan.interestAmount.toLocaleString()}
                                            </td>
                                            <td className="px-6 py-5">
                                                <p className="font-semibold text-cyan-300">
                                                    ₹{loan.totalRepayment.toLocaleString()}
                                                </p>
                                            </td>
                                            <td className="px-6 py-5">
                                                <StatusBadge status={loan.status} />
                                            </td>
                                            <td className="px-6 py-5">
                                                <button
                                                    type="button"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setSelectedLoan(loan._id);
                                                        // scroll to form
                                                        window.scrollTo({ top: 0, behavior: "smooth" });
                                                    }}
                                                    className={`text-xs px-3 py-1.5 rounded-lg border transition-colors ${selectedLoan === loan._id
                                                            ? "bg-cyan-500/20 border-cyan-400/30 text-cyan-300"
                                                            : "border-white/10 text-gray-400 hover:border-white/20 hover:text-white"
                                                        }`}
                                                >
                                                    {selectedLoan === loan._id
                                                        ? "Selected"
                                                        : "Select"}
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan={5}
                                            className="px-6 py-20 text-center"
                                        >
                                            <div className="flex flex-col items-center gap-3">
                                                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-2xl">
                                                    🏦
                                                </div>
                                                <p className="text-gray-400 font-medium">
                                                    No disbursed loans found
                                                </p>
                                                <p className="text-gray-600 text-sm">
                                                    Loans will appear here once disbursed
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Footer hint */}
                    {loans.length > 0 && (
                        <div className="px-8 py-4 border-t border-white/5 bg-white/[0.02]">
                            <p className="text-xs text-gray-500">
                                Click any row to select a loan for payment
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}