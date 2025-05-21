import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Home, User, Settings, Menu } from "lucide-react";
import { cn } from "lib/utils/cn";

const menuItems = [
  { name: "Inicio", icon: <Home size={20} />, path: "/" },
  { name: "Perfil", icon: <User size={20} />, path: "/profile" },
  { name: "Ajustes", icon: <Settings size={20} />, path: "/settings" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const { pathname } = useLocation();

  return (
    <div
      className={cn(
        "bg-gray-800",
        "text-white",
        "h-full",
        "p-4",
        "flex",
        "flex-col",
        "transition-width",
        "duration-300",
        isOpen ? "w-72" : "w-17"
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between",
          "transition-[width] duration-300"
        )}
      >
        <div
          className={cn(
            "flex items-center overflow-hidden whitespace-nowrap",
            "transition-all duration-300 ease-in-out",
            isOpen ? "max-w-[200px] opacity-100" : "max-w-0 opacity-0"
          )}
        >
          <div className="bg-white rounded-full w-8 h-8 flex-shrink-0" />
          <span className="pl-2 text-xl font-bold flex-shrink-0">
            Echoes of Value
          </span>
        </div>
        <div
          className={cn(
            "w-20",
            "flex",
            isOpen ? "justify-end" : "justify-center",
            "flex-1"
          )}
        >
          <button
            onClick={() => setIsOpen((o) => !o)}
            className="focus:outline-none"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      <nav className={"flex-1 mt-8"}>
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const active = pathname === item.path;
            return (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={cn(
                    "flex",
                    "px-2",
                    "py-3",
                    "rounded-md",
                    "hover:bg-gray-700 ",
                    "transition-colors",
                    active ? "bg-gray-700" : ""
                  )}
                >
                  <div className="flex flex-row items-center">
                    <div>{item.icon}</div>
                    <div className="flex-1 pl-2">
                      {isOpen && <span>{item.name}</span>}
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-auto">
        {isOpen ? (
          <p className="text-sm">Energía: 87/100</p>
        ) : (
          <span className="text-xs rotate-90">Energía: 87/100</span>
        )}
      </div>
    </div>
  );
}
