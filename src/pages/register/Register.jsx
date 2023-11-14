import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("test");
  };
  return (
    <div className="bg-blue-500 h-screen w-full flex justify-center items-center">
      <div>
        <div className="card w-96 bg-base-100 shadow-xl border px-5 py-5">
          <form onSubmit={handleSubmit} className="flex flex-col gap-y-2">
            <h1 className="text-[32px] font-medium">Register Page</h1>
            <div className="flex flex-col gap-y-1">
              <label htmlFor="name" className="text-lg font-semibold">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered input-sm w-full max-w-lg"
                id="name"
              />
            </div>

            <div className="flex flex-col gap-y-1">
              <label htmlFor="lastname" className="text-lg font-semibold">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered input-sm w-full max-w-lg"
                id="lastname"
              />
            </div>

            <div className="flex flex-col gap-y-1">
              <label htmlFor="email" className="text-lg font-semibold">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered input-sm w-full max-w-lg "
                id="email"
              />
            </div>

            <div className="flex flex-col gap-y-1">
              <label htmlFor="password" className="text-lg font-semibold">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered input-sm w-full max-w-lg"
                id="password"
              />
            </div>

            <div className="flex flex-col gap-y-1">
              <label htmlFor="location" className="text-lg font-semibold">
                Location
              </label>
              <input
                type="text"
                placeholder="Enter your password"
                className="input input-bordered input-sm w-full max-w-lg"
                id="location"
              />
            </div>

            <div>
              <button className="px-2 py-1 bg-blue-500 rounded text-lg text-white w-full">
                Register
              </button>
            </div>
          </form>
          <div className="mt-3">
            <p>
              sudah punya account ?{" "}
              <Link to={"/login"} className="border-b border-black">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
