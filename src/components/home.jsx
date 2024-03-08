import React, { useState } from "react";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdAdd } from "react-icons/io";
import Sidebar from "./sidebar";
import MessageBox from "./messagebox";
import MessageWelcome from "./messageWelcome";

import voiceRecorder from "../assets/icons/voice-recorder.png";
import { AnimatePresence } from "framer-motion";
const Home = () => {
  // cinchat logo background

  // sidebar
  const [hideSideBar, sethideSideBar] = useState(true);
  const [showSideBar, setshowSideBar] = useState(false);
  const toggleSideBar = () => {
    sethideSideBar(!hideSideBar);
    setshowSideBar(!showSideBar);
  };

  //animate welcome messagebox onclick sidebar
  const animateProps = showSideBar ? { x: 90, y: 0 } : { x: 0, y: 0 };
  const exitProps = showSideBar ? { x: 0, y: 0 } : { x: -90, y: 0 };

  // message on input value from input section
  const [inputValue, setInputValue] = useState("");
  const [displayValues, setDisplayValues] = useState([]);
  const [messageInInput, setMessageInInput] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = () => {
    if (inputValue != "") setDisplayValues([...displayValues, inputValue]);
    setInputValue("");
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter" && inputValue != "") {
      handleSubmit();
      setMessageInInput(true);
    }
  };

  return (
    <>
      <div className="relative bgbody top-0 left-0 w-full h-full flex flex-col overflow-hidden">
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
              <div className=" w-8 h-8 bg-neutral-700 rounded-full flex items-center justify-center cursor-pointer">
                <IoMdAdd color="#F68D00" size={24} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* sidebar end */}
        <AnimatePresence>
          <motion.div
            className="flex flex-col items-center w-full "
            initial={{ x: 0, y: 0 }}
            exit={exitProps}
            animate={animateProps}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {/* messageWelcome or messageBox section */}
            {messageInInput ? (
              <MessageBox
                displayValues={displayValues}
                setDisplayValues={setDisplayValues}
              />
            ) : (
              <MessageWelcome />
            )}
            {/* input box start */}
            <div className=" relative bottom-0">
              <input
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                className="glass container "
                type="text"
                name="search_data"
                placeholder="Chat here..."
              />
              <img
                className="absolute right-5 w-4 top-4 cursor-pointer"
                src={voiceRecorder}
                onClick={handleSubmit}
                alt="voice"
              />
            </div>
            {/* input box end */}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default Home;
