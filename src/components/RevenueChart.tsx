interface BarData {
    day: string;
    height: string;
    tooltip: string;
    highlighted?: boolean;
}

const bars: BarData[] = [
    { day: "Mon", height: "60%", tooltip: "$2.4k" },
    { day: "Tue", height: "40%", tooltip: "$1.8k" },
    { day: "Wed", height: "90%", tooltip: "$4.1k", highlighted: true },
    { day: "Thu", height: "70%", tooltip: "$3.2k" },
    { day: "Fri", height: "55%", tooltip: "$2.5k" },
    { day: "Sat", height: "80%", tooltip: "$3.6k" },
    { day: "Sun", height: "65%", tooltip: "$2.9k" },
];

export default function RevenueChart() {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="font-bold text-gray-900">Revenue Overview</h3>
                    <p className="text-xs text-gray-500">Weekly earnings breakdown</p>
                </div>
                <div className="flex items-center gap-1 text-teal-accent text-sm font-bold">
                    <span className="material-symbols-outlined text-sm">
                        trending_up
                    </span>
                    +12.5%
                </div>
            </div>

            {/* Bars */}
            <div className="h-48 grid grid-cols-7 gap-4 items-end px-4">
                {bars.map((bar) => (
                    <div
                        key={bar.day}
                        className={`rounded-t w-full relative group transition-all ${bar.highlighted
                                ? "bg-primary hover:bg-primary-dark"
                                : "bg-primary/20 hover:bg-primary"
                            }`}
                        style={{ height: bar.height }}
                    >
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            {bar.tooltip}
                        </div>
                    </div>
                ))}
            </div>

            {/* Labels */}
            <div className="grid grid-cols-7 gap-4 mt-2">
                {bars.map((bar) => (
                    <span
                        key={bar.day}
                        className="text-center text-[10px] font-bold text-gray-400 uppercase"
                    >
                        {bar.day}
                    </span>
                ))}
            </div>
        </div>
    );
}
