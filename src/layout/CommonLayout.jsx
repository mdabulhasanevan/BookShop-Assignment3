import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";

export default function CommonLayout() {
  return (
    <span className="mx-auto w-3/4 bg-red-300">
      
      <Outlet />
     
    </span>
  );
}