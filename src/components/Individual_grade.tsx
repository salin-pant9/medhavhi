import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import Gradepage from "./Gradepage";
interface prop {
  grade: String;
  profile: StaticImageData;
  submitted: String;
}
const Individual_grade = ({ grade, profile, submitted }: prop) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div>
      <div className="flex items-center justify-between px-[16px] py-[8px]">
        <div className="flex items-start space-x-[16px]">
          <Image src={profile} alt="profile" height="64" width="64" />
          <div className="flex flex-col gap-y-[4px]">
            <h3 className="text-[16px]">Savannah Nguyen</h3>
            <p className="text-[12px] font-[400] text-gray-400">
              October 25, 2019
            </p>
            <p
              className={`text-[12px] ${
                submitted === "on time" ? "text-green-500" : "text-red-500"
              } `}
            >
              {submitted}
            </p>
          </div>
        </div>
        {grade === "yes" ? (
          <div className="flex items-center justify-center px-[24px] py-[12px] rounded-xl text-white bg-green-500 cursor-pointer">
            <div className="flex flex-col" onClick={() => setShow(true)}>
              <p className="text-[14px]">Grade</p>
              <p className="text-[18px]">8/10</p>
            </div>
          </div>
        ) : (
          <div
            className="flex items-center justify-center px-[40px] py-[12px] rounded-full text-white bg-primary cursor-pointer"
            onClick={() => setShow(true)}
          >
            <p className="text-[14px]">Grade</p>
          </div>
        )}
      </div>
      {show === true ? (
        <div className="fixed top-0 inset-0 bg-black bg-opacity-30  flex items-center justify-center z-50 ">
          <Gradepage setShow={setShow} profile={profile} grade={grade} />
        </div>
      ) : null}
    </div>
  );
};

export default Individual_grade;
