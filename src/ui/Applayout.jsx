import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

function Applayout() {
  return (
    <div className="max-w-8xl mx-auto ">
      <section>
        <Header />
        <Sidebar />
      </section>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Applayout;
