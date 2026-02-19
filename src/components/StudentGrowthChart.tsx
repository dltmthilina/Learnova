export default function StudentGrowthChart() {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="font-bold text-gray-900">Student Growth</h3>
                    <p className="text-xs text-gray-500">Monthly enrollment analytics</p>
                </div>
                <select className="text-xs border-gray-200 rounded-lg focus:ring-primary focus:border-primary">
                    <option>Last 6 Months</option>
                    <option>Last Year</option>
                </select>
            </div>

            <div className="h-64 relative flex flex-col justify-end">
                <svg
                    className="w-full h-48"
                    preserveAspectRatio="none"
                    viewBox="0 0 478 150"
                >
                    <defs>
                        <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="#1349ec" stopOpacity={0.2} />
                            <stop offset="100%" stopColor="#1349ec" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    {/* Filled area */}
                    <path
                        d="M0 109C18.1 109 18.1 21 36.3 21C54.4 21 54.4 41 72.6 41C90.7 41 90.7 93 108.9 93C127 93 127 33 145.2 33C163.3 33 163.3 101 181.5 101C199.6 101 199.6 61 217.8 61C236 61 236 45 254.1 45C272.3 45 272.3 121 290.4 121C308.6 121 308.6 149 326.7 149C344.9 149 344.9 1 363 1C381.2 1 381.2 81 399.3 81C417.5 81 417.5 129 435.6 129C453.8 129 453.8 25 472 25V150H0V109Z"
                        fill="url(#chartGradient)"
                    />
                    {/* Line */}
                    <path
                        d="M0 109C18.1 109 18.1 21 36.3 21C54.4 21 54.4 41 72.6 41C90.7 41 90.7 93 108.9 93C127 93 127 33 145.2 33C163.3 33 163.3 101 181.5 101C199.6 101 199.6 61 217.8 61C236 61 236 45 254.1 45C272.3 45 272.3 121 290.4 121C308.6 121 308.6 149 326.7 149C344.9 149 344.9 1 363 1C381.2 1 381.2 81 399.3 81C417.5 81 417.5 129 435.6 129C453.8 129 453.8 25 472 25"
                        fill="none"
                        stroke="#1349ec"
                        strokeLinecap="round"
                        strokeWidth={3}
                    />
                </svg>

                <div className="flex justify-between mt-4 border-t border-gray-50 pt-3">
                    {["JAN", "FEB", "MAR", "APR", "MAY", "JUN"].map((month) => (
                        <span key={month} className="text-[10px] font-bold text-gray-400">
                            {month}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
