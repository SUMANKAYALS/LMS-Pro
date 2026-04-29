import { ReactNode } from "react";

interface AnalyticsCardProps {
    title: string;
    value: string;
    icon: ReactNode;
    growth?: string;
}

export default function AnalyticsCard({
    title,
    value,
    icon,
    growth,
}: AnalyticsCardProps) {
    return (
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:scale-[1.02] transition duration-300">
            <div className="flex items-center justify-between">
                {/* Left */}
                <div>
                    <p className="text-gray-400">
                        {title}
                    </p>

                    <h2 className="text-4xl font-bold mt-3">
                        {value}
                    </h2>

                    {growth && (
                        <p className="text-green-400 text-sm mt-2">
                            +{growth} this month
                        </p>
                    )}
                </div>

                {/* Icon */}
                <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 p-4 rounded-2xl">
                    {icon}
                </div>
            </div>
        </div>
    );
}