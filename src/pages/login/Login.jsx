import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiEyeCloseLine } from "react-icons/ri";
import { MdRemoveRedEye } from "react-icons/md";

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [show, setShow] = useState(false);
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
                value={values.email}
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
              />
            </div>

            <div className="flex flex-col gap-y-1 relative">
              <label htmlFor="password" className="text-lg font-semibold">
                password
              </label>
              <input
                type={show ? "text" : "password"}
                placeholder="Enter your password"
                className="input input-bordered input-sm w-full max-w-lg "
                id="password"
                value={values.password}
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
              />
              <span
                className="text-xl cursor-pointer absolute right-2 top-10"
                onClick={() => setShow(!show)}
              >
                {show ? <MdRemoveRedEye /> : <RiEyeCloseLine />}
              </span>
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
