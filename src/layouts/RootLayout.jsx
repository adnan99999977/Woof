import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <>
      <div className="flex flex-col w-full  bg-gradient-to-br from-blue-200 via-blue-50 to-blue-100  px-3 lg:px-0 min-h-screen">
    
         <Navbar  />

        <main className="flex-1 lg:w-full  bg-gradient-to-br from-blue-200 via-blue-50 to-blue-100">
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default RootLayout;
