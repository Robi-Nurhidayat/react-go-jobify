import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className=" row-span-full col-span-1 bg-white shadow-lg">
      <div>Logo</div>

      <div className="flex justify-center mt-24">
        <ul>
          <li>
            <Link to={"/dashboard/add-job"}>Add job</Link>
          </li>
          <li>
            <Link to={"/dashboard/edit-job"}>Edit job</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
