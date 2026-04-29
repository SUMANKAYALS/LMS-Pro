"use client";

import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    Tooltip,
    CartesianGrid,
} from "recharts";

interface LoanChartProps {
    data?: any[];
}

const monthNames = [
    "",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

export default function LoanChart({
    data = [],
}: LoanChartProps) {
    /**
     * 📊 Format Data
     */
    const formattedData = data.map(
        (item) => ({
            month:
                monthNames[
                item?._id?.month
                ] || "N/A",

            loans:
                item?.totalAmount || 0,
        })
    );

    return (
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
            {/* Heading */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold">
                    Loan Analytics
                </h2>

                <p className="text-gray-400 mt-1">
                    Monthly loan growth
                    overview
                </p>
            </div>

            {/* Empty State */}
            {formattedData.length ===
                0 ? (
                <div className="h-[350px] flex items-center justify-center text-gray-400">
                    No analytics data
                    available
                </div>
            ) : (
                <div className="h-[350px]">
                    <ResponsiveContainer
                        width="100%"
                        height="100%"
                    >
                        <AreaChart
                            data={
                                formattedData
                            }
                        >
                            {/* Gradient */}
                            <defs>
                                <linearGradient
                                    id="loanGradient"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                >
                                    <stop
                                        offset="5%"
                                        stopColor="#06b6d4"
                                        stopOpacity={
                                            0.8
                                        }
                                    />

                                    <stop
                                        offset="95%"
                                        stopColor="#06b6d4"
                                        stopOpacity={
                                            0
                                        }
                                    />
                                </linearGradient>
                            </defs>

                            {/* Grid */}
                            <CartesianGrid
                                strokeDasharray="3 3"
                                stroke="#1f2937"
                            />

                            {/* X Axis */}
                            <XAxis
                                dataKey="month"
                                stroke="#9CA3AF"
                            />

                            {/* Tooltip */}
                            <Tooltip
                                contentStyle={{
                                    background:
                                        "#111827",

                                    border:
                                        "1px solid rgba(255,255,255,0.1)",

                                    borderRadius:
                                        "16px",

                                    color:
                                        "white",
                                }}
                            />

                            {/* Area */}
                            <Area
                                type="monotone"
                                dataKey="loans"
                                stroke="#06b6d4"
                                strokeWidth={
                                    3
                                }
                                fillOpacity={
                                    1
                                }
                                fill="url(#loanGradient)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            )}
        </div>
    );
}