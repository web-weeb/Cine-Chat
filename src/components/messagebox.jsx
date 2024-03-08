import { React } from "react";
import triangle from "../assets/icons/triangle.png";

const MessageBox = ({ displayValues, setDisplayValues }) => {
  return (
    <>
      <div className=" w-full h-[37rem]  py-3 ">
        {/* right move on click side bar */}
        <div className=" w-full px-[22.9rem] h-full overflow-scroll flex flex-col items-end py-2 ">
          {displayValues.map((value, index) => (
            <div
              className="relative w-fit max-w-96 text-white px-5 py-1 my-4 bg-[#333537] rounded-2xl"
              key={index}
            >
              <img
                className="absolute w-6 top-0 -right-[0.2rem] "
                src={triangle}
                alt="div"
              />
              {value}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MessageBox;
