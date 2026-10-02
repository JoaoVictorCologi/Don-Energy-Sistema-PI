import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";

export function PainelLayout() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />
      <main className="flex-1 min-w-0 bg-bg px-6 py-9 md:px-10 md:py-9 md:pb-14">
        <Outlet />
      </main>
    </div>
  );
}
