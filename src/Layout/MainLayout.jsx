import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "../Shared/Navbar";
import { Footer } from "../Shared/Footer";

export const MainLayout = () => {

  const location = useLocation();
  const noHeaderFooter = location.pathname.includes('/login') || location.pathname.includes('/signUp')

  return (
    <div>
     { noHeaderFooter || <Navbar />}
      <div>
        <Outlet />
      </div>
      {noHeaderFooter || <Footer />}
    </div>
  );
};
