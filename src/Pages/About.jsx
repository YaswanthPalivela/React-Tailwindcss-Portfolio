import React from "react";
import { motion } from "motion/react";
import { Technologies } from "../Constants";

const BentoGrid = () => {
  return (
    <section id="About" className="min-h-screen p-4">
      <h1 className="text-white text-2xl font-semibold ml-3 mb-5 lg:text-3xl">
        Introduction
      </h1>

      <div className="h-auto grid gap-4 lg:grid-cols-2">
        {/* About Me Section */}
        <div className="bg-slate-700 text-wrap rounded-2xl p-5 space-y-5">
          <h1 className="text-xl lg:text-2xl">About Me</h1>
          <p className="text-lg leading-8 lg:text-xl">
            👋 Hey there! I'm a full-stack developer by day and a bug-squashing
            superhero by night! I spend my time crafting sleek front-ends with
            just the right amount of sass and back-ends that pack a punch harder
            than a double shot of espresso. When I'm not busy making the web a
            better place one line of code at a time, you can find me debugging
            like a detective on a caffeine rush, or pretending that writing
            tests is my idea of a good time (spoiler: it actually is!). Whether
            it's React, Node.js, or some obscure API that nobody's heard of,
            I've got the skills to make it all work together in perfect
            harmony—or at least, in a way that doesn't break everything. So, if
            you're looking for someone who can turn your wildest web dreams into
            reality with a sprinkle of humor and a dash of twerk-worthy code,
            you've found your dev!
          </p>
        </div>

        {/* Technologies and Skills Section */}
        <div className="flex flex-col gap-4">
          {/* Technologies Section */}
          <div className="bg-slate-700 rounded-2xl p-5 space-y-5">
            <h1 className="text-xl lg:text-2xl">Technologies</h1>
            <div className="flex flex-wrap justify-center gap-4">
              {Technologies.map((item) => (
                <motion.img
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  key={item.id}
                  src={item.url}
                  alt={`Technology ${item.id}`}
                  className="h-12 w-12 sm:h-16 sm:w-16 object-cover shadow-xl bg-black p-1 rounded-lg m-1 border-2 border-blue-500 
                          hover:shadow-blue-500 hover:cursor-pointer"
                />
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="bg-slate-700 rounded-2xl p-5">
            <h1 className="text-xl lg:text-2xl mb-4">Skills</h1>
            <div className="text-center">
              <h1 className="text-lg">Soft Skills</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
