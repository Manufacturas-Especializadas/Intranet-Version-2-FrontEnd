import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar/Navbar";
import { Sidebar } from "./components/layout/Sidebar/Sidebar";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-[#F8F9FB] overflow-hidden font-sans">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-[#F8F9FB] p-6"></main>
        </div>
      </div>
    </BrowserRouter>
  );
};
