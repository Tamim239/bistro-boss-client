import { Outlet } from "react-router-dom";
import { Navbar } from "../Shared/Navbar";
import { Footer } from "../Shared/Footer";

export const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
