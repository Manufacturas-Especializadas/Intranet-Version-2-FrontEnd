import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
};
