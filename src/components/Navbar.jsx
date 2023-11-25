import { HiMenu } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { BiSolidDownArrow, BiSolidLeftArrow } from "react-icons/bi";
import Cookies from "js-cookie";
const Navbar = ({ openSidebar, setOpenSidebar, currentUser }) => {
  const [open, setOpen] = useState(false);

  const logOut = () => {
    Cookies.remove("token");
  };
  return (
    <div
      className={`bg-white flex justify-between items-center ${
        openSidebar ? "col-start-2" : "col-start-1"
      } col-span-full px-10 py-4`}
    >
      <HiMenu
        onClick={() => setOpenSidebar(!openSidebar)}
        className="text-4xl cursor-pointer"
      />
      <h2 className="text-2xl font-semibold">Dashboard</h2>
      <div className="relative">
        <div
          className="flex items-center justify-between gap-x-3 bg-blue-500 px-2 py-2 rounded text-white cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <FaUser />
          <span className="text-lg font-medium capitalize">
            {currentUser.name}
          </span>
          {open ? <BiSolidDownArrow /> : <BiSolidLeftArrow />}
        </div>
        {open ? (
          <div
            className="z-50 bg-red-500 cursor-pointer px-2 py-2 absolute w-full rounded -bottom-[50px] flex items-end justify-center text-white font-medium text-lg"
            onClick={() => logOut()}
          >
            Logout
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default Navbar;
