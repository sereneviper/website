import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="flex">
      <div className="flex-grow">
        <Outlet />
      </div>
      <Sidebar />
    </div>
  );
}
