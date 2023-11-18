import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();
  const [openSidebar, setOpenSidebar] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  const fetchUser = async (token) => {
    try {
      const response = await axios.get("/api/v1/user/fetchUser", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response.data.data);
      setCurrentUser(response.data.data);
    } catch (error) {
      console.error("Error fetching user:", error);
      // Handle the error
    }
  };

  useEffect(() => {
    const token = Cookies.get("token");

    if (!token) {
      navigate("/login");
    } else {
      fetchUser(token);
    }
  }, []);

  if (!currentUser) {
    return <span className="loading loading-ring loading-lg"></span>;
  }
  return (
    <div className="grid grid-cols-12 grid-rows-[auto,1fr] h-screen ">
      <Navbar
        currentUser={currentUser}
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
      />
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
