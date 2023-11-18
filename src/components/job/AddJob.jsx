import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Cookies from "js-cookie";
const AddJob = () => {
  const [values, setValues] = useState({
    company: "",
    position: "",
    status: "pending",
    jobType: "onsite",
    jobLocation: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(JSON.stringify(values));

    const token = Cookies.get("token");
    try {
      await axios.post(
        "/api/v1/job",
        {
          company: values.company,
          position: values.position,
          status: values.status,
          job_type: values.jobType,
          job_location: values.jobLocation,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(response.data.Meta.message);
    } catch (error) {
      toast.error(error.response.data.Meta.message);
    }
  };

  return (
    <div className="bg-white w-full h-full rounded">
      <div className="px-10 py-5">
        <h1 className="text-2xl font-semibold">Add Job</h1>
        <form className="grid grid-cols-3 gap-3" onSubmit={handleSubmit}>
          <div className="flex flex-col justify-start items-start ">
            <label htmlFor="company" className="text-md font-medium">
              Company
            </label>
            <input
              type="text"
              className="w-full border rounded px-2 py-1"
              id="company"
              value={values.company}
              onChange={(e) =>
                setValues({ ...values, company: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col justify-start items-start ">
            <label htmlFor="position" className="text-md font-medium">
              Position
            </label>
            <input
              type="text"
              className="w-full border rounded px-2 py-1"
              id="position"
              value={values.position}
              onChange={(e) =>
                setValues({ ...values, position: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col justify-start items-start ">
            <label htmlFor="status" className="text-md font-medium">
              Status
            </label>
            <select
              id="status"
              className="w-full border rounded px-2 py-1"
              required
              value={values.status}
              onChange={(e) => setValues({ ...values, status: e.target.value })}
            >
              <option value="pending">Pending</option>
              <option value="Accept">Accept</option>
              <option value="declined">Declined</option>
            </select>
          </div>

          <div className="flex flex-col justify-start items-start ">
            <label htmlFor="jobType" className="text-md font-medium">
              Job Type
            </label>
            <select
              id="jobType"
              className="w-full border rounded px-2 py-1"
              required
              value={values.jobType}
              onChange={(e) =>
                setValues({ ...values, jobType: e.target.value })
              }
            >
              <option value="remote">Remote</option>
              <option value="onsite">Onsite</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>
          <div className="flex flex-col justify-start items-start ">
            <label htmlFor="jobLocation" className="text-md font-medium">
              Job Location
            </label>
            <input
              type="text"
              className="w-full border rounded px-2 py-1"
              id="jobLocation"
              value={values.jobLocation}
              onChange={(e) =>
                setValues({ ...values, jobLocation: e.target.value })
              }
            />
          </div>
          <div className=" flex items-end">
            <button
              type="submit"
              className="w-full px-2 py-1 bg-blue-500 rounded text-md font-medium text-white"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddJob;
