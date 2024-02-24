import React from "react";
import { motion } from "framer-motion";

const Demo = () => {
  return (
    <motion.div
      className="h-20 w-16 bg-red-800"
      initial={{ x: 900, y: 600 }}
      animate={{ x: 900, y: 400 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      hello
    </motion.div>
  );
};

export default Demo;
