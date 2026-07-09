import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar/Navbar";
import { Sidebar } from "./components/layout/Sidebar/Sidebar";
import { useRecentPagesTracker } from "./components/UI/QuickAccess/QuickAccess";
import { MyRoutes } from "./routes/Routes";

const AppContent = () => {
  useRecentPagesTracker();

  return (
    <div className="flex h-screen bg-[#F8F9FB] overflow-hidden font-sans">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-[#F8F9FB] p-6">
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