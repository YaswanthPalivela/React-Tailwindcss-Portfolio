import React, { useState } from "react";
import { motion } from "motion/react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  return (
    <section
      id="Contact"
      className="flex flex-col h-full w-full my-6 md:flex-row md:items-center md:justify-center"
    >
      <div className="text-white flex flex-col p-10 leading-5 gap-5 md:ml-44 ">
        <h1 className="text-7xl font-sans font-semibold text-white">
          Let's <span className=" text-[120px] text-blue-500">Work</span>{" "}
          Together
        </h1>
        <div className="ml-2">
          <h2 className=" text-white font-semibold text-2xl ">Email</h2>
          <span className=" text-slate-400 text-xl font-sans font-semibold">
            yaswanthnani998@gmail.com
          </span>
        </div>
        <div className="ml-2">
          <h2 className="text-white font-semibold text-2xl ">Address</h2>
          <span className=" text-slate-400 text-xl font-sans font-semibold">
            Pithapuram 533450
          </span>
        </div>
        <div className="ml-2">
          <h2 className="text-white font-semibold text-2xl ">Phone</h2>
          <span className=" text-slate-400 text-xl font-sans font-semibold">
            +91 7777777
          </span>
        </div>
      </div>
      <div className="flex flex-col p-10 w-full md:w-[50%] md:mr-44">
        <form className="flex flex-col gap-5 m-3">
          <input
            type="text"
            required
            placeholder="Name"
            className="p-5 bg-transparent border-2 text-white border-blue-500 rounded-lg shadow-xl cursor-pointer hover:shadow-blue-500 duration-300"
          />
          <input
            type="Email"
            required
            placeholder="Email"
            className=" p-5 bg-transparent border-2 text-white border-blue-500 rounded-lg shadow-xl cursor-pointer hover:shadow-blue-500 duration-300 "
          />
          <textarea
            rows={8}
            placeholder="Message"
            className=" p-5 bg-transparent border-2 text-white border-blue-500 rounded-lg shadow-xl cursor-pointer hover:shadow-blue-500 duration-300"
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-xl bg-blue-500 p-3 rounded-xl text-white font-semibold shadow-lg hover:shadow-blue-500 duration-300  "
          >
            Submit
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
