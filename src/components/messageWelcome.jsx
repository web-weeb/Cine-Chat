import { React } from "react";
import { NameTagline } from "../constants";
import { IoIosArrowForward } from "react-icons/io";
const MessageWelcome = () => {
  const textStyle = {
    background:
      "var(--CineChat-Scheme, linear-gradient(267deg, #FA8417 25.9%, #C200FB 99.05%))",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };
  return (
    <>
      {/* name-tagline start */}
      <div className=" flex flex-col justify-center h-[37rem]">
        <div className="flex flex-col items-start mb-20">
          <h1
            className="font-SatoshiVariable text-6xl font-bold text-center"
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
        <div className=" flex gap-8 mb-24">
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
      </div>
    </>
  );
};

export default MessageWelcome;
