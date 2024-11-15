import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayouts = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen"> 
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;