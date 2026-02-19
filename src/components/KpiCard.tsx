type TrendDirection = "up" | "down" | "neutral";

interface KpiCardProps {
    icon: string;
    label: string;
    value: string;
    trend: string;
    direction?: TrendDirection;
    iconBg?: string;
    iconColor?: string;
}

export default function KpiCard({
    icon,
    label,
    value,
    trend,
    direction = "neutral",
    iconBg = "bg-blue-50",
    iconColor = "text-blue-600",
}: KpiCardProps) {
    const trendStyles: Record<TrendDirection, string> = {
        up: "text-teal-accent bg-teal-50",
        down: "text-rose-600 bg-rose-50",
        neutral: "text-gray-400 bg-gray-50",
    };

    const trendIcons: Record<TrendDirection, string | null> = {
        up: "trending_up",
        down: "trending_down",
        neutral: null,
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col">
            <div className="flex items-center justify-between mb-4">
                <div
                    className={`w-12 h-12 ${iconBg} ${iconColor} rounded-lg flex items-center justify-center`}
                >
                    <span className="material-symbols-outlined">{icon}</span>
                </div>
                <span
                    className={`text-sm font-bold flex items-center px-2 py-1 rounded-full ${trendStyles[direction]}`}
                >
                    {trendIcons[direction] && (
                        <span className="material-symbols-outlined text-sm mr-1">
                            {trendIcons[direction]}
                        </span>
                    )}
                    {trend}
                </span>
            </div>
            <p className="text-gray-500 text-sm font-medium">{label}</p>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
    );
}
