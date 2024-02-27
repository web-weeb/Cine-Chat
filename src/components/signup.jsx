import React from "react";
import go from "../assets/icons/arrow.png";
import google from "../assets/icons/google.png";
import { motion } from "framer-motion";

const SignUp = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden">
        <div className=" top-0 left-0 w-full h-full flex items-center justify-center bg-gradient-to-b from-black/30 to-black/60">
          <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ x: 0, y: 50 }}
            animate={{ x: 0, y: -60 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {/* glassback2 section start */}
            <div className="glassback2 relative">
              <h1 className="text-gray-300 text-3xl mt-9 mb-6">
                Create an account
              </h1>
              <div className=" flex flex-col gap-8">
                <div className="">
                  <p className="text-stone-200  font-light pb-1 z-50">
                    Email address
                  </p>
                  <input className="inputbox " type="email" name="u_email" />
                </div>
                <div className="">
                  <p className="text-stone-200 font-light pb-1">Password</p>
                  <input className="inputbox " type="password" name="u_pass" />
                </div>
              </div>

              <div className="flex px-2  py-1 justify-center items-center gap-2 mt-1">
                <h4 className="text-stone-200 font-normal text-xs">
                  Already have an account?
                  {
                    <a href="#" className="hover:underline">
                      LOGIN
                    </a>
                  }
                </h4>
                <a href="#">
                  <img className="w-4" src={go} alt="next" />
                </a>
              </div>
            </div>
            {/* glassback2 section end */}
            <p className="text-lg text-white">OR</p>
            <a
              href="#"
              className="flex gap-4 items-center justify-center w-[15.5rem] h-12 bg-neutral-300  bg-opacity-10 rounded-[48px] border border-white border-opacity-30 backdrop-blur-[34px]"
            >
              <img className="size-5" src={google} alt="google" />
              <p className="text-stone-200 font-medium ">
                Continue with Google
              </p>
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
