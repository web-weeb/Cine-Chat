import React, { useState } from "react";
import backgroundVideo from "../assets/videos/overview.mp4";
import signup from "../assets/icons/signup.png";
import go from "../assets/icons/arrow.png";
import SignUp from "./signup";

const Overview = () => {
  const [isVisibleOverview, setIsVisibleOverview] = useState(true);
  const [isVisibleSignUp, setIsVisibleSignUp] = useState(false);
  const toggleVisibility = () => {
    setIsVisibleOverview(false);
    setIsVisibleSignUp(true);
  };

  const textStyle = {
    background:
      "var(--CineChat-Scheme, linear-gradient(267deg, #FA8417 16.93%, #C200FB 99.05%))",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden">
        {/*background video start*/}
        <video className="object-cover w-full h-full" autoPlay loop muted>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        {/*background video end*/}
        {isVisibleSignUp && <SignUp />}
        {isVisibleOverview && (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gradient-to-b from-black/30 to-black/60">
            {/* glassback section start */}
            <div className="glassback">
              <h1
                className="font-SatoshiVariable text-8xl font-bold text-center pt-5"
                style={textStyle}
              >
                CineChat.
              </h1>
              <p className="text-gray-300 font-MuktaVaani text-2xl font-light text-center mb-20">
                What's Your Movie Mood Today?
              </p>
              <div
                // onclick
                onClick={toggleVisibility}
                className="flex w-36  py-2 justify-center items-center rounded-full border border-opacity-30 border-white bg-opacity-10 backdrop-blur backdrop-filter cursor-pointer gap-4 mb-1"
              >
                <h4 className="text-gray-300 text-lg font-medium text-center">
                  SIGNUP
                </h4>
                <img className="h-5" src={signup} alt="signup" />
              </div>

              <div className="flex px-2  py-1 justify-center items-center gap-2">
                <h4 className="text-gray-300 font-source-sans-pro text-base font-normal">
                  Already have an account?
                  {
                    <a href="#" className="hover:underline">
                      LOGIN
                    </a>
                  }
                </h4>
                <a href="#">
                  <img src={go} alt="signup" />
                </a>
              </div>
            </div>
            {/* glassback section end */}
          </div>
        )}
      </div>
    </>
  );
};

export default Overview;
