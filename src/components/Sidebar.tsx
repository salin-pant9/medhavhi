import Image from "next/image";
import React from "react";
import Sidebar_label from "./Sidebar_label";

const Sidebar = () => {
  return (
    <div className="h-[900px] w-[280px] bg-white py-[32px]  flex flex-col justify-between">
      {/* top part */}
      <div className="flex flex-col gap-y-[25px]">
        <div className="flex items-center space-x-[12px] mx-[28px]">
          <div className="h-[2rem] w-[2rem] object-content relative">
            <Image src="/logo.png" alt="logo " fill priority />
          </div>
          <div className="h-[1.5rem] w-[8rem] relative object-contain">
            <Image src="/Medhavhi.png" alt="medhavhi" fill />
          </div>
        </div>
        <div className="flex flex-col  px-[12px]">
          <Sidebar_label name="Dashboard" />
          <Sidebar_label name="Class" />
          <Sidebar_label name="Attendance" />
          <Sidebar_label name="Test" />
          <Sidebar_label name="Report " />
          <Sidebar_label name="Discipline" />
          <Sidebar_label name="Doubts" />
          <Sidebar_label name="Messages" />
          <Sidebar_label name="Schedule" />
          <Sidebar_label name="Notify" />
        </div>
      </div>

      {/* bottom part */}
      <div className="flex flex-col  px-[12px]">
        <Sidebar_label name="Setting" />
        <Sidebar_label name="Logout" />
      </div>
    </div>
  );
};

export default Sidebar;
