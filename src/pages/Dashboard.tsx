import {
  BookOpen,
  CalendarDays,
  CreditCard,
  Users,
  type LucideIcon,
} from "lucide-react";
import KpiCard from "../components/KpiCard";
import StudentGrowthChart from "../components/StudentGrowthChart";
import RevenueChart from "../components/RevenueChart";
import ScheduleCard from "../components/ScheduleCard";
import ActivityFeed from "../components/ActivityFeed";

interface KpiData {
  icon: LucideIcon;
  label: string;
  value: string;
  trend: string;
  direction: "up" | "down" | "neutral";
  iconBg: string;
  iconColor: string;
}

const kpiData: KpiData[] = [
  {
    icon: Users,
    label: "Total Students",
    value: "1,240",
    trend: "+12%",
    direction: "up",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: BookOpen,
    label: "Active Courses",
    value: "12",
    trend: "+2%",
    direction: "up",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: CalendarDays,
    label: "Upcoming Exams",
    value: "4",
    trend: "0%",
    direction: "neutral",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    icon: CreditCard,
    label: "Pending Payments",
    value: "$1,200",
    trend: "-5%",
    direction: "down",
    iconBg: "bg-rose-50",
    iconColor: "text-rose-600",
  },
];

export default function Dashboard() {
  return (
    <div className="p-8 space-y-8">
      {/* KPI Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi) => (
          <KpiCard key={kpi.label} {...kpi} />
        ))}
      </div>

      {/* Middle Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Charts */}
        <div className="lg:col-span-2 space-y-8">
          <StudentGrowthChart />
          <RevenueChart />
        </div>

        {/* Right: Schedule & Activity */}
        <div className="space-y-8">
          <ScheduleCard />
          <ActivityFeed />
        </div>
      </div>
    </div>
  );
}
