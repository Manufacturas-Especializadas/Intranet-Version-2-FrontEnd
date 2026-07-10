import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { Aplicaciones } from "../pages/Aplicaciones/Aplicaciones";

export const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/aplicaciones" element={<Aplicaciones />} />
    </Routes>
  );
};
