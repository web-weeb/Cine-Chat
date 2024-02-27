import React, { useState } from "react";
import {motion} from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowForward, IoMdAdd } from "react-icons/io";
import { NameTagline } from "../constants";
import Sidebar from "./sidebar";
import voiceRecirder from "../assets/icons/voice-recorder.png"
import { AnimatePresence } from "framer-motion";
const Home = () => {
  const textStyle = {
    background:
      "var(--CineChat-Scheme, linear-gradient(267deg, #FA8417 25.9%, #C200FB 99.05%))",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };
  const [hideSideBar, sethideSideBar] = useState(true);
  const [showSideBar, setshowSideBar] = useState(false);
  const toggleSideBar = () => {
    sethideSideBar(!hideSideBar);
    setshowSideBar(!showSideBar);
  };
  return (
    <>
      <div className="relative bgbody top-0 left-0 w-full h-full flex items-center justify-center">
        {/* sidebar start */}
        <AnimatePresence>
          {showSideBar && <Sidebar toggleSideBar={toggleSideBar} />}
        </AnimatePresence>
        <AnimatePresence>
          {hideSideBar && (
            <motion.div
              className="absolute z-50 w-12 h-full top-0 left-0 px-2 py-7 bg-neutral-800 bg-opacity-90 rounded-tr-3xl rounded-br-3xl border-r-[0.02rem] border-gray-500 flex flex-col items-center gap-16"
              initial={{ x: 0, y: 0, opacity: 0 }}
              exit={{ x: 0, y: 0, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <GiHamburgerMenu
                className="cursor-pointer"
                color="#F68D00"
                size={24}
                // onclick
                onClick={toggleSideBar}
              />
              <div className="w-8 h-8 bg-neutral-700 rounded-full flex items-center justify-center cursor-pointer">
                <IoMdAdd color="#F68D00" size={24} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* sidebar end */}
        <div className="">
          {/* name-tagline start */}
          <div className="flex flex-col items-start mb-20">
            <h1
              className="font-SatoshiVariable text-6xl font-bold text-center pt-8"
              style={textStyle}
            >
              CineChat.
            </h1>
            <p className="text-gray-300 font-MuktaVaani text-2xl font-medium text-center ">
              What's Your Movie Mood Today?
            </p>
          </div>
          {/* name-tagline end */}
          {/* recommended-tiles start */}
          <div className=" flex gap-8 mb-40">
            {NameTagline.map((item, index) => {
              return (
                <>
                  <div className="relative w-44 h-[10rem] text-white p-4 bg-neutral-700 rounded-3xl flex flex-col ">
                    <p className="text-sm">{item.text}</p>
                    <a className="absolute bottom-4 right-4" href={item.url}>
                      <div className="w-8 rounded-full bg-orange-500 h-8 flex items-center justify-center">
                        <IoIosArrowForward color="black" size={24} />
                      </div>
                    </a>
                  </div>
                </>
              );
            })}
          </div>
          {/* recommended-tiles end */}
          <div className="relative">
            <input
              className="glass container "
              type="text"
              name="search_data"
              placeholder="Chat here..."
            />
            <img className="absolute right-5 w-4 top-4" src={voiceRecirder} alt="voice" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
