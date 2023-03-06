import Image, { StaticImageData } from "next/image";
import React from "react";
interface prop {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  profile: StaticImageData;
  grade: String;
}
const Gradepage = ({ setShow, profile, grade }: prop) => {
  return (
    <div className="bg-white min-h-screen w-[75%] rounded-xl font-urbanist">
      <div className="flex items-center justify-between px-[32px] py-[18px] border-b border-b-gray-300 ">
        <p className="text-[16px] font-semibold ">Student Submission</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-8 h-8 cursor-pointer"
          onClick={() => setShow(false)}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div className="p-[24px] flex flex-col gap-y-[24px]">
        <div className="flex items-center space-x-[16px]">
          <Image src={profile} alt="profile" height="64" width="64" />
          <div className="flex flex-col gap-y-[4px]">
            <h3 className="text-[16px] font-[600]">Savannah Nguyen</h3>
            <p className="text-[12px] font-[400] text-gray-400">
              October 25, 2019
            </p>
            <p className="text-[12px] text-green-500">on time</p>
          </div>
        </div>
        {/* submitted file section  */}
        <div className="flex flex-col gap-y-[8px]">
          <h3 className="text-[14px] text-gray-400 tracking-[5%] font-[600] leading-[20px]">
            Submitted Files
          </h3>
          <div className="p-[0.5rem] flex items-start space-x-5 w-[350px] shadow-lg">
            <Image
              src="/powerpoint.png"
              alt="powerpoint"
              height="30"
              width="30"
            />
            <div className="flex flex-col">
              <p className="text-[14px] leading-[19px]">
                Evolution Chapter Notes
              </p>
              <p className="text-[12px] text-gray-400">32.5MB</p>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 ml-[2rem]  "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* student comment section */}
        <div className="flex flex-col gap-y-[8px]">
          <p className="text-[14px] text-gray-400 tracking-[3%] font-[600] leading-[25px]">
            Student Comments
          </p>
          <p className="text-[14px] font-[400] leading-[20px] tracking-[3%]">
            Lorem ipsum dolor sit amet consectetur. Pulvinar auctor sed proin at
            sem. Diam nisl in morbi id diam felis. Lectus eget sit tristique sit
            magnis pretium nec. Mus fermentum consequat nisl volutpat viverra ut
            at. Lorem tristique dolor cursus euismod mus duis. Etiam aliquam
            ultrices tristique in ipsum congue. Nisl aenean netus lobortis ut
            amet. Lacus eleifend urna turpis amet mattis lacus. Dui elementum ac
            vitae quam ullamcorper nunc.
          </p>
        </div>
        {/* grade update */}
        <div className="flex flex-col gap-y-[8px]">
          <p className="text-[14px] text-gray-400 tracking-[3%] font-[600] leading-[25px]">
            Grade Obtained:{" "}
          </p>
          <div className="flex items-center space-x-[16px]">
            <input
              type="text"
              className="p-[24px] border-b-2 border-b-black outline-none placeholder:text-[16px] placeholder:text-gray-400 placholder:leading-[20px] placholder:font-[400] placholder:tracking-[3%] text-[20px] "
              placeholder="Enter Grade Here"
              value={`${grade === "yes" ? "08" : ""}`}
            />
            <div className="flex items-center justify-center p-[24px] bg-[#9A9A9A]/10">
              <p className="text-[16px] font-[600] leading-[20px] tracking-[2%]">
                out of 10
              </p>
            </div>
          </div>
        </div>
        {/* comment section  */}
        <textarea
          placeholder="Enter your suggestion or comment here "
          className="px-[16px] py-[16px] outline-none bg-[#9A9A9A]/10 placeholder:font-[400] placholder:text-[16px] placeholder:text-gray-400 rounded-[8px]"
        />
      </div>
    </div>
  );
};

export default Gradepage;
