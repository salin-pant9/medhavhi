import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white w-full h-[90px] px-[24px] py-[35px] flex items-center justify-between">
      {/* navabar left */}
      <div className="flex items-center space-x-[20px]">
        {/* arrow */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-gray-500"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
        {/* text */}
        <h3 className="font-urbanist text-[14px] font-[500] tracking-[0.02rem] leading-[125%]">
          Assignments / Lorem ipsum dolor sit
        </h3>
      </div>
      {/* navbar right */}
      <div className="flex items-center space-x-[25px]">
        {/* bell icon  */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6 relative"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
          />
        </svg>

        {/* profile image */}
        <div className="h-[3rem] w-[3rem]  relative object-cover">
          <Image
            src="https://images.pexels.com/photos/10057618/pexels-photo-10057618.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            fill
            className="rounded-full"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
