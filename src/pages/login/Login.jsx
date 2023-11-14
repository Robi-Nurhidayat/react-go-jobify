import { useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/dashboard");
  };
  return (
    <div className="bg-blue-500 h-screen w-full flex justify-center items-center">
      <div>
        <div className="card w-96 bg-base-100 shadow-xl border px-5 py-5">
          <form onSubmit={handleSubmit} className="flex flex-col gap-y-2">
            <h1 className="text-[32px] font-medium">Login dahulu</h1>
            <div className="flex flex-col gap-y-1">
              <label htmlFor="email" className="text-lg font-semibold">
                Email
              </label>
              <input
                type="text"
                placeholder="Enter your email"
                className="input input-bordered input-sm w-full max-w-lg"
                id="email"
              />
            </div>

            <div className="flex flex-col gap-y-1">
              <label htmlFor="email" className="text-lg font-semibold">
                password
              </label>
              <input
                type="text"
                placeholder="Enter your password"
                className="input input-bordered input-sm w-full max-w-lg "
                id="email"
              />
            </div>
            <div>
              <button className="px-2 py-1 bg-blue-500 rounded text-lg text-white w-full">
                Login
              </button>
            </div>
          </form>
          <div className="mt-3">
            <p>
              belum punya account ?{" "}
              <Link to={"/register"} className="border-b border-black">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
