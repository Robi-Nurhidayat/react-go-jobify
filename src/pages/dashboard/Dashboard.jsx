import { useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [openSidebar, setOpenSidebar] = useState(true);
  return (
    <div className="grid grid-cols-12 grid-rows-[auto,1fr] h-screen ">
      <Navbar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      {openSidebar ? <Sidebar /> : null}
      <main
        className={`content bg-[#B4BDFF]  ${
          openSidebar ? "col-start-2" : "col-start-1"
        } col-span-full row-start-2 px-10 py-5`}
      >
        <Outlet />
      </main>
    </div>
  );
};
export default Dashboard;
