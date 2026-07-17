import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { Aplicaciones } from "../pages/Aplicaciones/Aplicaciones";
import { Sistemas } from "../pages/Sistemas/Sistemas";

export const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/aplicaciones" element={<Aplicaciones />} />
      <Route path="/sistemas" element={<Sistemas />} />
    </Routes>
  );
};
