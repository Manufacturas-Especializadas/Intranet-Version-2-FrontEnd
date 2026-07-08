import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard/Dashboard";

export const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};
