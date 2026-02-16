import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

function Applayout() {
  return (
    <div className=" bg-sky-50">
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
