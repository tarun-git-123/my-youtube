import React from "react";
import "../App.css";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";

function Shimmer() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const n = 816;
  // early return pattern
  const videoClass = !isMenuOpen
    ? "w-[23.7%] mx-2 mb-10"
    : "w-[23.5%] mx-2 mb-10";
  return (
    <>
      <div className="flex flex-wrap">
        {
          // Or something else
          [...Array(n)].map((e, i) => (
            <div className={videoClass} key={i}>
              <div className="w-11/12 mb-10">
                <div className="flex bg-gray-200 h-[180px] w-[300px] rounded-xl"></div>
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gray-200 mt-4 absolute"></div>
                  <div className="absolute left-12 top-0">
                    <p className=" bg-gray-200 h-5 mt-3 w-[230px]"></p>
                    <p className=" bg-gray-200 h-5 mt-3 w-[190px]"></p>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  );
}
export default Shimmer;
