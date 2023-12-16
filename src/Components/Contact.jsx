import React from "react";
import transition from "../transition";
import { motion } from "framer-motion";
import ContactImage from "../assets/contact.svg";
import { FaWhatsapp, FaInstagram, FaMailBulk } from "react-icons/fa";

const Contact = () => {
  return (
    <main className="w-full md:h-[90vh] mb-10">
      <section className="container h-full">
        <h1 className="text-sky-700 font-bold text-center md:text-4xl text-2xl">
          CONTACT ME
        </h1>
        <p className="text-lg text-center mt-5">
          If you have a project that requires a front end developer, you can
          contact me
        </p>
        <div className="w-full h-full flex items-center flex-col md:flex-row-reverse px-2 gap-6 pt-10">
          <div className="md:w-1/2 w-full grid place-items-center mb-10">
            <motion.div
              className="lg:w-[500px] rounded-xl lg:h-[500px] md:w-[300px] md:h-[300px] w-[250px] h-[250px]"
              initial={{ opacity: 0, x: 50, y: -50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <img src={ContactImage} alt="Profile" className="w-full h-full" />
            </motion.div>
          </div>
          <div className="md:w-1/2 w-full md:px-5 flex flex-col gap-10">
            <motion.a
              className="bg-green-400 px-3 py-6 w-full md:text-3xl flex items-center justify-center gap-4 rounded-lg"
              initial={{ opacity: 0, x: -50, y: -50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <FaWhatsapp /> WhatsApp
            </motion.a>
            <motion.a
              className="bg-red-500 px-3 py-6 w-full md:text-3xl flex items-center justify-center gap-4 rounded-lg"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <FaMailBulk /> Email
            </motion.a>
            <motion.a
              className="bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-6 w-full md:text-3xl flex items-center justify-center gap-4 rounded-lg"
              initial={{ opacity: 0, x: -100, y: 100 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <FaInstagram /> Instagram
            </motion.a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default transition(Contact);
