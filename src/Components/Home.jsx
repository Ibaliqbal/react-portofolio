import React from "react";
import transition from "../transition";
import ProfileImage from "../assets/profile.svg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <main className="w-full h-[90vh]">
      <section className="container h-full">
        <div className="w-full h-full flex items-center flex-col lg:flex-row px-4 gap-6 pt-10">
          <motion.div
            className="w-1/2"
            initial={{ opacity: 0, x: -50, y: -50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="lg:text-6xl text-4xl font-bold mb-4">
              Hi, I'm <span className="text-sky-500">Iqbal Muthahhary</span>
            </h1>
            <p className="mb-8 text-xl lg:text-2xl">
              I am a front end developer, and I am a student at Pamulang
              University majoring in Computer Science{" "}
            </p>
          </motion.div>
          <div className="w-1/2 grid place-items-center  ">
            <motion.div
              className="relative bg-black lg:w-[500px] rounded-xl lg:h-[500px] w-[250px] h-[250px]"
              initial={{ opacity: 0, x: 50, y: -50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1 }}
            >
              <img
                src={ProfileImage}
                alt="Profile"
                className="absolute w-full h-full top-10 right-10 rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default transition(Home);
