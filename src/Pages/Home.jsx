import React from "react";
import { Link } from "react-scroll";
import { motion } from "motion/react";
import Button from "../Components/Button";
import Navbar from "./Navbar.jsx";

const Home = () => {
  return (
    <div className="w-full h-screen mb-6 pb-6" id="Home">
      <div>
        <Navbar />
      </div>
      <section className=" p-5 h-full  flex justify-center items-center m-5">
        <main className="w-full space-y-6 p-4 mb-8">
          <div className=" space-y-2">
            <h1 className="text-3xl text-center md:text-5xl lg:text-8xl">
              Hi<span className=" text-blue-500">!</span> i
              <span className=" text-blue-500">'</span>m{" "}
              <span className=" text-blue-500">Yaswanth</span> Palivela
            </h1>
            <h2 className="text-2xl text-center md:text-4xl lg:text-6xl">
              Full <span className="text-blue-500">Stack</span> Developer
            </h2>
          </div>
          <div className="space-x-5 text-center">
            <Link to={"About"} smooth={true} duration={500}>
              <Button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="About Me"
                className=" bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 md:text-xl md:h-[58px] md:w-52 "
              />
            </Link>
            <Link to={"Contact"} smooth={true} duration={800}>
              <Button
                title={`Contact Me `}
                className="hover:border-blue-500 hover:text-blue-500 duration-300 shadow-lg md:text-xl md:h-[58px] md:w-52 "
              />
            </Link>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Home;
