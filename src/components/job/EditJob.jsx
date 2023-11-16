const EditJob = () => {
  return (
    <div className="bg-white w-full h-full rounded">
      <div className="px-10 py-5">
        <h1 className="text-2xl font-semibold">Edit Job</h1>
        <form className="grid grid-cols-3 gap-3">
          <div className="flex flex-col justify-start items-start ">
            <label htmlFor="company" className="text-md font-medium">
              Company
            </label>
            <input
              type="text"
              className="w-full border rounded px-2 py-1"
              id="company"
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
            />
          </div>
          <div className="flex flex-col justify-start items-start ">
            <label htmlFor="status" className="text-md font-medium">
              Status
            </label>
            <select id="status" className="w-full border rounded px-2 py-1">
              <option value="">------------</option>
              <option value="pending">Pending</option>
              <option value="Accept">Accept</option>
              <option value="declined">Declined</option>
            </select>
          </div>

          <div className="flex flex-col justify-start items-start ">
            <label htmlFor="jobType" className="text-md font-medium">
              Job Type
            </label>
            <select id="jobType" className="w-full border rounded px-2 py-1">
              <option value="">------------</option>
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
