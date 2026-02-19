export default function Header() {
    return (
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-10">
            {/* Search */}
            <div className="flex items-center gap-4 flex-1 max-w-xl">
                <div className="relative w-full">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
                        search
                    </span>
                    <input
                        className="w-full bg-gray-100 border-none rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20"
                        placeholder="Search students, courses, or reports..."
                        type="text"
                    />
                </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-6">
                <button className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all">
                    <span className="material-symbols-outlined text-lg">add</span>
                    Create
                </button>

                <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
                    <span className="material-symbols-outlined">notifications</span>
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>

                <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                    <div className="text-right">
                        <p className="text-sm font-bold text-gray-900 leading-none">
                            Prof. Anderson
                        </p>
                        <p className="text-xs text-gray-500 mt-1">Senior Educator</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border border-gray-100">
                        <img
                            alt="Profile avatar"
                            className="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuATPOjLs32V7kMeN18BAtLeZePqEKi6fhruTn8rO5dZxcQe-_ecUM-tx8u76bpKhsiPazL3e8Rqs11ta2VI0yQh6HZUfrngorCcwbfD8Lj4pVkgbLY1JrS2CZardTIu5vCxjnWXLhtObuhl7Bj3v72di0EVRgnNbaT3HyTUGHipN9sWFe9_h5xHwnjkPAyBYLoiHvOd9KB8t0LoWF5D_38odr_vAebsMXEEXJYUJrDi4wIP5nM_uPPvUxYVPcGTtGoepJ5UM237Ae6x"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
