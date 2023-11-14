import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-[auto,1fr] h-screen">
      <div className="bg-blue-500 px-5 py-5 col-span-full">header</div>
      <div className="px-5 flex flex-col gap-y-2 items-start pt-10">
        <h1>Create Your Own Job</h1>
        <p className="text-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus illo
          cupiditate laboriosam dolorem minima nobis veniam quibusdam voluptatem
          natus nulla? Nisi quis officiis eius magni distinctio fugiat
          voluptatem optio enim.
        </p>
        <Link
          to={"/login"}
          className="px-2 py-2 bg-blue-500 text-white text-xl font-semibold rounded border-none"
        >
          Get Started
        </Link>
      </div>
      <div className=" flex justify-center items-center ">
        <img src="/svg/job_hero.svg" alt="hero image" />
      </div>
    </div>
  );
};
export default Landing;
