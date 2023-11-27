import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { FaLocationArrow } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { MdWork } from "react-icons/md";

import { Link, useNavigate } from "react-router-dom";
const AllJob = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);

  const token = Cookies.get("token");
  const getAllJobs = async () => {
    const response = await axios.get("/api/v1/jobs", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setJobs(response.data.data);
    // console.log(response.data);
  };

  useEffect(() => {
    getAllJobs();
  }, []);

  const deleteJob = async (id) => {
    const response = await axios.delete(`/api/v1/jobs/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(response.data.Meta.code);

    // navigate("/dashboard/all-job");
    // if (response.data.Meta.code === 200) {
    //   return navigate("/dashboard/all-job");
    // }
  };

  return (
    <div className="grid gap-y-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
      {jobs.map((job) => {
        return (
          <div key={job.id} className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex items-center gap-x-5 border-b p-1">
                <div className="bg-blue-500 px-5 py-3 rounded text-xl text-white font-semibold">
                  {job.company[0]}
                </div>
                <div>
                  <h2 className="card-title">{job.position}</h2>
                  <h3 className="">{job.company}</h3>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-y-2.5 gap-x-5">
                <div className="flex items-center gap-x-2.5">
                  <FaLocationArrow className="text-[20px]" />
                  <span className="font-medium">{job.job_location}</span>
                </div>
                <div className="flex items-center gap-x-2.5">
                  <FaCalendarAlt className="text-[20px]" />
                  <span className="font-medium">Jul 7th, 2023</span>
                </div>
                <div className="flex items-center gap-x-2.5">
                  <MdWork className="text-[20px]" />
                  <span className="font-medium">{job.job_type}</span>
                </div>
                <div>
                  <span
                    className={`text-white rounded px-2.5 py-2 font-medium ${
                      job.status == "declined" ? "bg-red-500" : "bg-blue-500"
                    }`}
                  >
                    {job.status}
                  </span>
                </div>
              </div>
              <div className="mt-5 flex items-start gap-x-5">
                <Link
                  to={`/dashboard/edit-job/${job.id}`}
                  className="px-2 py-1 rounded bg-blue-500 text-white  font-medium"
                >
                  Edit
                </Link>
                <button
                  to={"/dashboard/edit"}
                  className="px-2 py-1 rounded bg-blue-500 text-white  font-medium hover:bg-red-500"
                  onClick={() => deleteJob(job.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default AllJob;
