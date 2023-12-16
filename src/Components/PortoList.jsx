import React from "react";
import { motion } from "framer-motion";
import { ImLink, ImGithub } from "react-icons/im";
import NetflixCloneImage from "../assets/netflixClone.svg";
import LandingPageImage from "../assets/landingPage.svg";
import NoteAppImage from "../assets/noteApp.svg";
import SimpleEcommerceImage from "../assets/simpleEcommerce.svg";
import ReactIcon from "../assets/react.svg";
import RouterIcon from "../assets/react-router-dom.svg";
import TailwindIcon from "../assets/tailwindcss.svg";
import ReduxIcon from "../assets/react-redux.svg";
import ChakraIcon from "../assets/chakra.svg";

const portofolio = [
  {
    id: 1,
    title: "Netflix Clone",
    description:
      "I created a website using React js + Vite for the CSS framework I used tailwindcss, and I also used react-router-dom to make it easier for me to move from another page, here for the API I used TMDB. The features are: Search Movie, Search Film, Movie Details, Movie Details, Select a film or films based on the categories I have created.",
    image: NetflixCloneImage,
    advance: true,
    tech: [ReactIcon, TailwindIcon, RouterIcon],
    linkWeb: "https://netflix-clone-iqbal.vercel.app/",
    linkGithub: "https://github.com/Ibaliqbal/netflix-clone-app-react",
  },
  {
    id: 2,
    title: "Landing Page",
    description:
      "I made this website using React js + Vite for the CSS framework, I used Tailwindcss and used Chakra UI as a React Js Component library. The website is like other landing page websites, but for the landing page I use the add to cart feature, and all the data on the website is only dummy data (data created by myself).",
    image: LandingPageImage,
    advance: false,
    tech: [ReactIcon, TailwindIcon, ChakraIcon],
    linkWeb: "https://restaurant-landing-page-iqbal.vercel.app/",
    linkGithub: "https://github.com/Ibaliqbal/restaurant-landing-page",
  },
  {
    id: 3,
    title: "Simple E-Commerce website",
    description:
      "I made this website using React js + Vite for the CSS framework I used Tailwindcss then used Chakra UI as a React Js Component library and for state management I used redux/toolkit. The website is like a normal e-commerce website, but this is simpler, and the features include searching for products based on the title, filtering data based on categories, sorting items based on the most expensive-cheapest prices and vice versa and I created a checkout feature via WhatsApp.",
    image: SimpleEcommerceImage,
    advance: true,
    tech: [ReactIcon, TailwindIcon, ChakraIcon, ReduxIcon],
    linkWeb: "https://ray-ecommerce-iqbal.vercel.app/",
    linkGithub: "https://github.com/Ibaliqbal/ray-ecommerce-iqbal",
  },
  {
    id: 4,
    title: "Simple NoteApplications",
    description:
      "I made this website using React js + Vite for the CSS framework, I used Tailwindcss then used Chakra UI as a React Js Component library. The website was created to train me to understand what CRUD (Create Read Update Delete) is. The features include adding notes, then editing notes and finally deleting notes.",
    image: NoteAppImage,
    advance: false,
    tech: [ReactIcon, TailwindIcon, RouterIcon],
    linkWeb: "https://noteapp-react-iqbal.vercel.app/",
    linkGithub: "https://github.com/Ibaliqbal/noteapp-react",
  },
];
function PortoList() {
  return portofolio.map((porto, i) => {
    return (
      <motion.article
        className="w-full bg-slate-200 shadow-2xl grid gap-4 pb-3 rounded-md group overflow-hidden"
        key={porto.id}
        initial={{ opacity: 0, y: -200, x: -50 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 1, delay: i * 0.3 }}
      >
        <div className="">
          <img
            src={porto.image}
            alt={porto.title}
            className="group-hover:scale-105 transition-all duration-300 w-full object-contain"
          />
        </div>
        <section className="w-full px-3 grid gap-4">
          <div className="grid gap-2">
            <h1 className="text-xl font-bold">{porto.title}</h1>
            <p className="text-lg h-[150px]">{porto.description}</p>
          </div>
          <div className="flex gap-4 mb-3">
            {porto.tech.map((list, i) => {
              return (
                <img
                  key={i}
                  src={list}
                  alt="Icon"
                  width={"40px"}
                  height={"40px"}
                  className="hover:animate-bounce cursor-pointer grayscale opacity-60 hover:grayscale-0 hover:opacity-100"
                />
              );
            })}
          </div>
          <div className="flex gap-3 text-2xl">
            <a href={porto.linkGithub} target="_blank">
              <ImGithub aria-label="Link github" />
            </a>
            <a href={porto.linkWeb} target="_blank">
              <ImLink aria-label="Link website" />
            </a>
          </div>
        </section>
      </motion.article>
    );
  });
}

export default PortoList;
