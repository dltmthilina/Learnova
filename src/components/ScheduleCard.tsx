interface ScheduleItemData {
    time: string;
    period: string;
    title: string;
    subtitle: string;
    colorBg: string;
    colorText: string;
}

const scheduleItems: ScheduleItemData[] = [
    {
        time: "09:30",
        period: "AM",
        title: "Advanced Calculus",
        subtitle: "Room 402 • 45 Students",
        colorBg: "bg-blue-50",
        colorText: "text-blue-600",
    },
    {
        time: "11:15",
        period: "AM",
        title: "Matrix Theory Lab",
        subtitle: "Computer Lab B • 22 Students",
        colorBg: "bg-indigo-50",
        colorText: "text-indigo-600",
    },
    {
        time: "02:00",
        period: "PM",
        title: "Teacher's Sync",
        subtitle: "Main Hall • Dept meeting",
        colorBg: "bg-amber-50",
        colorText: "text-amber-600",
    },
];

interface ScheduleItemProps {
    time: string;
    period: string;
    title: string;
    subtitle: string;
    colorBg: string;
    colorText: string;
}

function ScheduleItem({ time, period, title, subtitle, colorBg, colorText }: ScheduleItemProps) {
    return (
        <div className="flex gap-4">
            <div
                className={`flex flex-col items-center justify-center w-14 h-14 ${colorBg} ${colorText} rounded-xl shrink-0`}
            >
                <span className="text-sm font-bold">{time}</span>
                <span className="text-[10px] font-medium uppercase">{period}</span>
            </div>
            <div className="flex-1">
                <p className="text-sm font-bold text-gray-900">{title}</p>
                <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
            </div>
            <span className="material-symbols-outlined text-gray-300">
                chevron_right
            </span>
        </div>
    );
}

export default function ScheduleCard() {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-50 flex items-center justify-between">
                <h3 className="font-bold text-gray-900">Today&apos;s Schedule</h3>
                <button className="text-primary text-xs font-bold hover:underline">
                    View All
                </button>
            </div>
            <div className="p-6 space-y-6">
                {scheduleItems.map((item) => (
                    <ScheduleItem key={item.title} {...item} />
                ))}
            </div>
        </div>
    );
}
