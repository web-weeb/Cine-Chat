import React, { useState } from "react";
import { motion } from "framer-motion";
import message from "../assets/icons/message.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdAdd } from "react-icons/io";
const Sidebar = () => {
  const [isClickedDarkMode, setIsClickedDarkMode] = useState(false);
  const handleClick = () => {
    setIsClickedDarkMode(!isClickedDarkMode);
  };
  return (
    <div>
      <motion.div
        className=" fixed p-5 max-w-xs w-full flex flex-col items-start gap-6 top-0 bottom-0 left-0 z-50 space-y-8 bg-neutral-600 bg-opacity-10 rounded-tr-3xl rounded-br-3xl border-r-[0.02rem] border-gray-500  text-white"
        initial={{ x: -280, y: 0 }}
        animate={{ x: 0, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <GiHamburgerMenu
          className="cursor-pointer "
          color="#F68D00"
          size={24}
        />
        <div className="flex justify-center w-32 text-white py-2 bg-neutral-800 rounded-3xl cursor-pointer">
          <IoMdAdd color="#F68D00" size={24} />
          <h4 className=" ml-2 font-normal text-stone-300">New Chat</h4>
        </div>
        <div className="">
          <p>Recents</p>
          <div className="mt-1 w-72 h-[0.04rem]  bg-slate-300 opacity-25 mb-2"></div>
          <div className="h-80 w-[18.7rem] flex flex-col overflow-scroll">
            {/* chat histry */}
            <div className="flex items-center">
              <img src={message} className="h-4" alt="msg-img" />
              <div className="text-stone-300 ml-2">
                Welcome to our CinChat...
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="">Dark Mode</div>
          <div
            className={`h-4 w-7 bg-orange-500 flex items-center ${
              isClickedDarkMode ? "justify-start" : "justify-end "
            } rounded-full px-[0.15rem] cursor-pointer`}
            onClick={handleClick}
          >
            <div className="h-3 w-3 rounded-full  bg-black "></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Sidebar;
