import React from "react";
import { motion } from "motion/react";

const Button = ({ title, className }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={` h-12 w-28 border-2 rounded-xl text-base font-semibold ${className}`}
    >
      {title}
    </motion.button>
  );
};

export default Button;
