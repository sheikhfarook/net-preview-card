import React from "react";
import equilibrium from "../assets/images/image-equilibrium.jpg";
import ethereum from "../assets/images/icon-ethereum.svg";
import clock from "../assets/images/icon-clock.svg";
import avater from "../assets/images/image-avatar.png";
import { ReactComponent as ViewIcon } from "../assets/images/icon-view.svg";
const NetCard = () => {
  return (
    <div className="w-[23rem] h-[40rem] m-auto bg-[#14253D] rounded-2xl my-16 justify-center content-center">
      <div className="w-[21rem] pt-6 m-auto ">
        <div className="group relative h-[20rem] hover:cursor-pointer">
          <img
            className="h-[20rem] m-auto rounded-xl shadow-2xl"
            src={equilibrium}
            alt=""
          />
          <div className="invisible absolute inset-0 flex items-center justify-center bg-opacity-0 bg-cyan-300 rounded-xl group-hover: group-hover:bg-opacity-40 group-hover:visible transition-all duration-300">
            <ViewIcon className=" opacity-0 group-hover:opacity-70 duration-300" />
          </div>
        </div>
        {/* second */}
        <div className="mt-6 font-sansserif ml-2">
          <h2
            className=" hover:text-[#00FFF7] hover:cursor-pointer
          font-[700] text-[#FFFFFF] text-[24px]">
            Equilibrium #3429
          </h2>

          <p className="mt-4 font-[400] text-[20px] text-[#8BACDA] leading-[28px]">
            Our Equilibrium collection promotes balance and calm
          </p>
          <div className="flex mt-4 font-[300]">
            <h3 className="flex  ">
              <img className="w-3 h-5 m-auto" src={ethereum} alt="" />
              <p className="ml-2 font-[700] text-[#00FFF7] text-[18px]">
                0.041 ETH
              </p>
            </h3>
            <div className="flex justify-end m-auto flex-1">
              <img className="w-5 h-5 my-auto" src={clock} alt="" />
              <p className="ml-[7px] text-[17px] text-[#8BACDA] font-[700] mr-3">
                {" "}
                3 days left
              </p>
            </div>
          </div>
          <hr className="my-6 m-auto w-[95%]" />
          <div className="flex ">
            <img
              className="w-10 border-[1px] rounded-full border-white"
              src={avater}
            />
            <p className="my-auto ml-5 text-lg text-[#8BACDA]">
              Creation of
              <span className="text-[#ffffff] hover:text-[#00FFF7] hover:cursor-pointer ">
                Jules Wyvern
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetCard;
