interface NavItemProps {
    icon: string;
    label: string;
    active?: boolean;
}

interface NavItemData {
    icon: string;
    label: string;
    active?: boolean;
}

const navItems: NavItemData[] = [
    { icon: "dashboard", label: "Dashboard", active: true },
    { icon: "group", label: "Students" },
    { icon: "menu_book", label: "Lessons" },
    { icon: "assignment", label: "Exams" },
    { icon: "analytics", label: "Results" },
    { icon: "payments", label: "Payments" },
];

function NavItem({ icon, label, active = false }: NavItemProps) {
    return (
        <a
            href="#"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${active
                    ? "sidebar-item-active text-white"
                    : "text-indigo-200 hover:bg-white/10 hover:text-white"
                }`}
        >
            <span className="material-symbols-outlined">{icon}</span>
            <span className="font-medium text-sm">{label}</span>
        </a>
    );
}

export default function Sidebar() {
    return (
        <aside className="w-64 bg-indigo-sidebar text-white flex flex-col shrink-0">
            {/* Logo */}
            <div className="p-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-white">school</span>
                </div>
                <div>
                    <h1 className="font-bold text-lg leading-tight">Learnova</h1>
                    <p className="text-indigo-200 text-xs uppercase tracking-widest font-semibold">
                        Teacher Portal
                    </p>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 mt-4 space-y-1">
                {navItems.map((item) => (
                    <NavItem key={item.label} {...item} />
                ))}
            </nav>

            {/* Settings */}
            <div className="p-4 border-t border-white/10">
                <NavItem icon="settings" label="Settings" />
            </div>
        </aside>
    );
}
