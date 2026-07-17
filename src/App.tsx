import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar/Navbar";
import { Sidebar } from "./components/layout/Sidebar/Sidebar";
import { MyRoutes } from "./routes/Routes";
import { useRecentPagesTracker } from "./components/UI/QuickAccess/QuickAccess";

const AppContent = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useRecentPagesTracker();

  return (
    <div className="flex h-screen overflow-hidden bg-[#F8F9FB] font-sans transition-colors duration-300 dark:bg-slate-950">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <Navbar onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-[#F8F9FB] p-3 transition-colors duration-300 dark:bg-slate-950 sm:p-4 lg:p-6">
          <MyRoutes />
        </main>
      </div>
    </div>
  );
};

export const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};