import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
const EditJob = () => {
  const { id } = useParams();
  const token = Cookies.get("token");
  const navigate = useNavigate();
  console.log(typeof id);

  const [values, setValues] = useState({
    company: "",
    position: "",
    status: "",
    jobType: "",
    jobLocation: "",
  });

  const getJobById = async () => {
    const response = await axios.get(
      `http://localhost:8080/api/v1/jobs/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(response.data.data.company);
    setValues({
      ...values,
      company: response.data.data.company,
      position: response.data.data.position,
      status: response.data.data.status,
      jobType: response.data.data.job_type,
      jobLocation: response.data.data.job_location,
    });
  };

  useEffect(() => {
    getJobById();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `/api/v1/jobs/${id}`,
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
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response);
    } catch (error) {
      console.log(error);
    }

    console.log(values);
  };
  return (
    <div className="bg-white w-full h-full rounded">
      <div className="px-10 py-5">
        <h1 className="text-2xl font-semibold">Edit Job</h1>
        <form onSubmit={onSubmit} className="grid grid-cols-3 gap-3">
          <div className="flex flex-col justify-start items-start ">
            <label htmlFor="company" className="text-md font-medium">
              Company
            </label>
            <input
              type="text"
              className="w-full border rounded px-2 py-1"
              id="company"
              required
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
              required
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
              required
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
export default EditJob;
