import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Dashboard = () => {
  const navigate = useNavigate();
  const [openSidebar, setOpenSidebar] = useState(true);

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      navigate("/login");
    }
  }, []);
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
