import { Outlet } from "react-router-dom";
import NavbarUser from "../Components/Navbar/NavbarUser";
import Footer from "../Components/Footer/Footer";


const MainLayout = () => {
  return (
    <div className="container mx-auto">
      <NavbarUser></NavbarUser>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;