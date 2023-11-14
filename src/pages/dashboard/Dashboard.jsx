import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12 grid-rows-[auto,1fr] h-screen">
      <Navbar />
      <Sidebar />
      <main className="content bg-slate-500 col-start-2 col-span-full row-start-2">
        Content
      </main>
    </div>
  );
};
export default Dashboard;
