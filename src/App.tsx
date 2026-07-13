import { useCallback, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar/Navbar";
import { Sidebar } from "./components/layout/Sidebar/Sidebar";
import { useRecentPagesTracker } from "./components/UI/QuickAccess/QuickAccess";
import { MyRoutes } from "./routes/Routes";

const AppContent = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useRecentPagesTracker();

  const openSidebar = useCallback(() => {
    setSidebarOpen(true);
  }, []);

  const closeSidebar = useCallback(() => {
    setSidebarOpen(false);
  }, []);

  return (
    <div
      className="
        flex h-dvh min-h-0
        overflow-hidden
        bg-[#F8F9FB]
        font-sans
      "
    >
      <Sidebar
        isOpen={sidebarOpen}
        onClose={closeSidebar}
      />

      <div
        className="
          flex min-w-0 flex-1
          flex-col overflow-hidden
        "
      >
        <Navbar onMenuClick={openSidebar} />

        <main
          className="
            min-h-0 min-w-0 flex-1
            overflow-x-hidden
            overflow-y-auto
            bg-[#F8F9FB]
            p-2
            sm:p-3
            lg:p-4
          "
        >
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