import Breadcrumb from "./Breadcrumb";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div className=" h-[100dvh] bg-gray-200">
      <div className="flex flex-col items-center gap-8 ">
        <h1 className=" text-4xl text-[#2E4053 ] mt-20">
          My Breadcrumb Component 🍞
        </h1>
        <Breadcrumb />
        <Outlet />
      </div>
    </div>
  );
}
