import React from "react";
import go from "../assets/icons/arrow.png";
import google from "../assets/icons/google.png";
import { motion } from "framer-motion";

const SignUp = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden">
        <div className=" top-0 left-0 w-full h-full flex items-center justify-center ">
          <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ x: 0, y: 50 }}
            animate={{ x: 0, y: -60 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {/* glassback section start */}
            <div className="glassback2 relative">
              <h1 className="text-gray-300 font-MuktaVaani text-5xl my-10">
                Create an account
              </h1>
              <div className=" flex flex-col gap-14">
                <div className="">
                  <p className="text-stone-200 text-2xl font-light font-['Mukta Vaani'] pb-1 z-50">
                    Email address
                  </p>
                  <input className="inputbox " type="email" name="u_email" />
                </div>
                <div className="">
                  <p className="text-stone-200 text-2xl font-light font-['Mukta Vaani'] pb-1">
                    Password
                  </p>
                  <input className="inputbox " type="password" name="u_pass" />
                </div>
              </div>

              <div className="flex px-2  py-1 justify-center items-center gap-2 mt-1">
                <h4 className="text-stone-200 text-xl font-normal font-['Source Sans Pro']">
                  Already have an account?
                  {
                    <a href="#" className="hover:underline">
                      LOGIN
                    </a>
                  }
                </h4>
                <a href="#">
                  <img src={go} alt="next" />
                </a>
              </div>
            </div>
            {/* glassback section end */}
            <p className="text-2xl text-white">OR</p>
            <a
              href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?access_type&client_id=539603982008.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fwww.hackerrank.com%2Fhackers%2Fauth%2Fgoogle_oauth2%2Fcallback&response_type=code&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&state=121877c141f0831ff024403298fcecbc80b6e41fc25e9a19&service=lso&o2v=1&theme=glif&flowName=GeneralOAuthFlow"
              className="flex gap-5 items-center justify-center w-[23rem] h-16 bg-neutral-300  bg-opacity-10 rounded-[48px] border border-white border-opacity-30 backdrop-blur-[34px]"
            >
              <img className="size-6" src={google} alt="google" />
              <p className="text-stone-200 text-2xl font-medium font-['Satoshi Variable']">
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
