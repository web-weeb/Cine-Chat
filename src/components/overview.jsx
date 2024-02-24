import React from "react";
import backgroundVideo from "../assets/videos/overview.mp4";
import signup from "../assets/icons/signup.png";
import go from "../assets/icons/arrow.png";
const Overview = () => {
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
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          {/* glassback section start */}
          <div className="glassback">
            <h1
              className="font-SatoshiVariable text-9xl font-bold text-center pt-8"
              style={textStyle}
            >
              CineChat
            </h1>
            <p className="text-gray-300 font-MuktaVaani text-[1.78rem] font-medium text-center mb-[8.5rem]">
              What's Your Movie Mood Today?
            </p>
            <a
              href="#"
              className="flex w-44  py-4 justify-center items-center rounded-full border border-white bg-opacity-10 backdrop-blur backdrop-filter cursor-pointer gap-4 mb-1"
            >
              <h4 className="text-gray-300 font-SatoshiVariable text-xl font-medium text-center">
                SIGNUP
              </h4>
              <img src={signup} alt="signup" />
            </a>

            <div className="flex px-2  py-1 justify-center items-center gap-2">
              <h4 className="text-gray-300 font-source-sans-pro text-base font-normal">
                Already have an account?{" "}
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
      </div>
    </>
  );

  const nextSlide = () => {};
};

export default Overview;