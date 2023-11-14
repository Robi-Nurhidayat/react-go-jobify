const Landing = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-[auto,1fr] h-screen">
      <div className="bg-blue-500 px-5 py-5 col-span-full">header</div>
      <div className="bg-red-500 ">content left</div>
      <div className="bg-green-500 ">
        <img src="/svg/job_hero.svg" alt="hero image" />
      </div>
    </div>
  );
};
export default Landing;
