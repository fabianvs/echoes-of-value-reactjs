import Sidebar from "features/sidebar/view/sidebar";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 h-svh relative">
      <aside className="absolute inset-y-0 left-0 z-1">
        <Sidebar />
      </aside>
      <main className="flex flex-1 ml-17">
        <section className="flex-1">
          <Outlet />
        </section>
      </main>
      <footer className="bg-gray-800 text-white p-4">
        &copy; 2025 My Company
      </footer>
    </div>
  );
}
