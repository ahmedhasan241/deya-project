import React from "react";
import { FaRegCreditCard } from "react-icons/fa6";

const HomePage = () => {
  const stats = [
    { name: "Total Individual", value: 100, color: "#F79400" },
    { name: "Total Individual", value: 5, color: "#F79400" },
    { name: "Total Users", value: 105, color: "#00B4F7" },
  ];
  return (
    <>
      <div className="pt-16">
        <div className="px-72 flex justify-around">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="w-[224px]  py-5  my-3 text-white rounded-2xl flex flex-col items-center"
              style={{ backgroundColor: stat.color }}
            >
              <h3 className="text-[19px] text-center">{stat.name}</h3>
              <p className="text-center mt-2 p-6 border-2 border-white rounded-full w-16 h-16 flex items-center justify-center">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 px-64">
          <div>
            <h2 className="text-[26px] text-white mx-3 mb-3">
              Users Last Edit
            </h2>
            <div className="flex flex-col gap-3 w-full">
              <div className="bg-[#F79400] text-black ps-4 pe-16 py-5 rounded-2xl flex flex-row justify-start w-3/4">
                <FaRegCreditCard size={24} />
                <span className="text-[18px] ml-2">Mohammed Ahmed Salah</span>
              </div>
              <div className="bg-[#F79400] text-black ps-4 pe-16 py-5 rounded-2xl flex flex-row justify-start w-3/4">
                <FaRegCreditCard size={24} />
                <span className="text-[18px] ml-2">Mohammed Ahmed Salah</span>
              </div>
              <div className="bg-[#F79400] text-black ps-4 pe-16 py-5 rounded-2xl flex flex-row justify-start w-3/4">
                <FaRegCreditCard size={24} />
                <span className="text-[18px] ml-2">Mohammed Ahmed Salah</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-[26px] text-white mx-3">Most Users Hits</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
