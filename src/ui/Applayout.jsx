import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import ConfirmModal from "./ConfirmModal";

function Applayout() {
  return (
    <div className="max-w-7xl mx-auto ">
      <ConfirmModal />
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
