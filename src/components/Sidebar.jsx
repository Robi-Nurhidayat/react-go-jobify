import { Link } from "react-router-dom";
import { PiGoodreadsLogoFill } from "react-icons/pi";
import links from "../utils";

const Sidebar = () => {
  return (
    <div className=" row-span-full col-span-1 bg-white shadow-lg">
      <div className="py-4  text-[50px] flex justify-center items-center">
        <PiGoodreadsLogoFill />
      </div>

      <div className="flex justify-center mt-3">
        <ul className="border w-full flex flex-col gap-y-2 ">
          {links.map((link) => {
            return (
              <li
                key={link.id}
                className="hover:bg-blue-500 cursor-pointer pl-2"
              >
                <Link to={link.path} className="flex items-center gap-x-3">
                  <span className="text-[20px]">{link.icon}</span>
                  <span className="text-[14px] font-medium">{link.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
