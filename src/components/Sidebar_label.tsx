import Image from "next/image";
import React from "react";
interface prop {
  name: String;
}
const Sidebar_label = ({ name }: prop) => {
  return (
    <div
      className={`py-[15px] px-[16px]  ${
        name == "Class"
          ? "bg-primary text-white cursor-pointer"
          : "text-[#30323D]"
      } tracking-[0.02em]   rounded-[8px] `}
    >
      <div className="flex items-center space-x-[16px]">
        <div className="h-[1rem] w-[1rem]  object-contain relative ">
          <Image src="/icon.png" alt="icon" fill />
        </div>
        <h3 className=" text-[1rem] font-urbanist leading-[140%] font-[400]">
          {name}
        </h3>
      </div>
    </div>
  );
};

export default Sidebar_label;
