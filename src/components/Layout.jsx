import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="flex w-full h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white">
        <Sidebar />
      </aside>

      {/* Main section */}
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 bg-gray-50">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
