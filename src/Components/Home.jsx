import React from "react";
import transition from "../transition";
import ProfileImage from "../assets/profile.svg";
import { motion } from "framer-motion";
import TypingAnimator from "react-typing-animator"

const Home = () => {
  const textTitle = ["My Name is Iqbal Muthahhary", "And you can call me Iqbal"]
  return (
    <main className="w-full md:h-[90vh]">
      <section className="container h-full">
        <div className="w-full h-full flex items-center flex-col md:flex-row px-2 gap-6 pt-10">
          <motion.div
            className="md
            :w-1/2 w-full md:px-5 title relative"
            initial={{ opacity: 0, x: -50, y: -50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 2 }}
          >
            <h1 className="lg:text-6xl text-4xl font-bold lg:mb-4 mb-24">
              Hi Everyone 🙌,
              <span className="block mt-2">
                <TypingAnimator
                  textArray={textTitle}
                  loop
                  cursorColor="#0369a1"
                  textColor="#0369a1"
                  typingSpeed={60}
                  delaySpeed={1000}
                  backspace
                  fontSize="3rem"
                />
              </span>
            </h1>
            <p className="mb-8 text-xl lg:text-2xl font-semibold">
              I am a front end developer, and I am a student at Pamulang
              University majoring in Computer Science{" "}
            </p>
            <a
              href="https://wa.me/087782433528?text=Halo saya ingin dengan Iqbal Muthahhary"
              className="bg-sky-500 font-bold lg:text-xl text-md px-6 py-3 rounded-lg"
            >
              CONTACT ME
            </a>
          </motion.div>
          <div className="md:w-1/2 w-full grid place-items-center mb-5">
            <motion.div
              className="relative bg-black lg:w-[500px] rounded-xl lg:h-[500px] md:w-[300px] md:h-[300px] w-[250px] h-[250px]"
              initial={{ opacity: 0, x: 50, y: -50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 2 }}
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
