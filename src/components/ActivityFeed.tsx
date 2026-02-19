import { type ReactNode } from "react";

interface ActivityItemData {
    borderColor: string;
    content: ReactNode;
    time: string;
}

const activities: ActivityItemData[] = [
    {
        borderColor: "border-primary",
        content: (
            <>
                <strong>Sarah Jenkins</strong> submitted Exam 2
            </>
        ),
        time: "12 minutes ago",
    },
    {
        borderColor: "border-teal-accent",
        content: (
            <>
                Grade published for <strong>Applied Physics</strong>
            </>
        ),
        time: "1 hour ago",
    },
    {
        borderColor: "border-indigo-sidebar",
        content: (
            <>
                New student <strong>Liam Vance</strong> enrolled
            </>
        ),
        time: "3 hours ago",
    },
    {
        borderColor: "border-amber-400",
        content: (
            <>
                <strong>System</strong> Backup completed successfully
            </>
        ),
        time: "Yesterday",
    },
];

interface ActivityItemProps {
    borderColor: string;
    content: ReactNode;
    time: string;
}

function ActivityItem({ borderColor, content, time }: ActivityItemProps) {
    return (
        <div className="relative flex gap-4 pl-8">
            <div
                className={`absolute left-0 top-1 w-6 h-6 rounded-full bg-white border-4 ${borderColor} flex items-center justify-center z-10`}
            />
            <div>
                <p className="text-sm text-gray-900">{content}</p>
                <p className="text-xs text-gray-500 mt-1">{time}</p>
            </div>
        </div>
    );
}

export default function ActivityFeed() {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-50">
                <h3 className="font-bold text-gray-900">Recent Activity</h3>
            </div>

            <div className="p-6">
                <div className="relative space-y-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gray-100">
                    {activities.map((item, idx) => (
                        <ActivityItem key={idx} {...item} />
                    ))}
                </div>
            </div>

            <div className="p-4 bg-gray-50 text-center">
                <button className="text-sm font-bold text-gray-600 hover:text-primary transition-colors">
                    Show More History
                </button>
            </div>
        </div>
    );
}
