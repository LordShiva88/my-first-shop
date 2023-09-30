import { Outlet } from "react-router-dom";
import NavbarUser from "../Components/Navbar/NavbarUser";


const MainLayout = () => {
  return (
    <div className="container mx-auto">
      <NavbarUser></NavbarUser>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;