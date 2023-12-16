import React from "react";
import transition from "../transition";
import { motion } from "framer-motion";
import AboutImage from "../assets/about.svg"
import ReactIcon from "../assets/react.svg";
import TailwindcssIcon from "../assets/tailwindcss.svg";
import ReduxIcon from "../assets/react-redux.svg";
import RouteIcon from "../assets/react-router-dom.svg";
import ChakraIcon from "../assets/chakra.svg";
import HtmlIcon from "../assets/html.svg";
import CssIcon from "../assets/css.svg";
import JsIcon from "../assets/javascript.svg";
import PhpIcon from "../assets/php.svg";
import { FaLinkedin, FaInstagram, FaGithubAlt } from "react-icons/fa";

const skills = [
  HtmlIcon,
  CssIcon,
  JsIcon,
  TailwindcssIcon,
  PhpIcon,
  ReactIcon,
  RouteIcon,
  ReduxIcon,
  ChakraIcon,
];

const sosials = [
  {
    name: "Github",
    link: "https://github.com/Ibaliqbal",
    icon: FaGithubAlt,
  },
  {
    name: "Instagram",
    link: "https://www.linkedin.com/in/iqbal-muthahhary-muthahhary-5120b6278",
    icon: FaInstagram,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/iqbal-muthahhary-muthahhary-5120b6278",
    icon: FaLinkedin,
  },
];

const About = () => {
  return (
    <main className="w-full md:h-[80vh] mb-10">
      <section className="container h-full pt-6">
        <h1 className="text-sky-700 font-bold text-center md:text-4xl text-2xl">
          ABOUT ME
        </h1>
        <div className="w-full h-full flex items-center flex-col md:flex-row-reverse px-2 gap-6 pt-10">
          <div className="md:w-1/2 w-full grid place-items-center mb-10">
            <motion.div
              className="relative bg-black lg:w-[500px] rounded-xl lg:h-[500px] md:w-[300px] md:h-[300px] w-[250px] h-[250px]"
              initial={{ opacity: 0, x: 50, y: -50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 2 }}
            >
              <img
                src={AboutImage}
                alt="Profile"
                className="absolute w-full h-full top-10 right-10 rounded-xl"
              />
            </motion.div>
          </div>
          <motion.div
            className="md
            :w-1/2 w-full md:px-5"
            initial={{ opacity: 0, x: -50, y: -50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 2 }}
          >
            <h1 className="lg:text-6xl text-4xl font-bold mb-4">
              Hi, I'm <span className="text-sky-500">Iqbal Muthahhary</span>
            </h1>
            <p className="mb-8 text-xl lg:text-2xl">
              I am a front end web developer who is usually called Iqbal,
              currently I am still a student at the Pamulang University campus
              majoring in computer science semester 1. I have a little
              experience in creating a visual web.
            </p>
            <div>
              <h2 className="text-lg font-semibold text-sky-500 mb-2">Skill</h2>
              <ul className="flex gap-2 items-center mb-2">
                {skills.map((skill, i) => {
                  return (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, y: 100 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.5 }}
                    >
                      <img
                        src={skill}
                        alt="skill"
                        width={"40px"}
                        height={"40px"}
                      />
                    </motion.li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h2 className="text-sky-500 text-lg font-semibold">Sosial</h2>
              <ul className="flex gap-2 items-center mb-6">
                {sosials.map((sosial, i) => {
                  return (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, y: -100 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.5 }}
                    >
                      <a
                        href={sosial.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xl"
                      >
                        <sosial.icon aria-label={sosial.name} />
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
            <a
              href="#"
              className="lg:text-xl text- px-6 py-3 bg-sky-400 rounded-lg"
            >
              Download My Resume
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default transition(About);
