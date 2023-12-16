import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);
  return (
    <header className="w-full bg-transparent shadow-lg h-[10vh]">
      <section className="container">
        <div className="w-full flex items-center justify-between px-2 py-6">
          <div className="logo">
            <Link className="text-sky-700 font-semibold text-xl lg:text-3xl" to={"/"}>
              Iqbal Muthahhary
            </Link>
          </div>
          <button
            className="flex flex-col items-center gap-1 lg:hidden"
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Hamburger"
          >
            <span
              className={`bg-black h-[3px] origin-top-left transition-all duration-300 ${
                isOpen ? " w-[21px] rotate-45" : "w-6"
              }`}
            ></span>
            <span
              className={`w-6 bg-black h-[3px] transition-all duration-300 ${
                isOpen ? "scale-0" : null
              }`}
            ></span>
            <span
              className={`bg-black h-[3px] origin-bottom-left transition-all duration-300 ${
                isOpen ? "w-[21px] -rotate-45" : "w-6"
              }`}
            ></span>
          </button>
          <nav
            className={`${
              isOpen
                ? "absolute top-12 block z-10 w-40 rounded-lg py-3  right-16 bg-white shadow-xl"
                : "hidden"
            } lg:block`}
          >
            <ul
              className={`flex items-center ${
                isOpen ? "flex-col" : null
              } gap-4 navbar`}
            >
              <li className="inline-block">
                <NavLink to={"/"} className="transition-all duration-300 ease-in-out">Home</NavLink>
              </li>
              <li className="inline-block">
                <NavLink to={"/about"} className="transition-all duration-300 ease-in-out">About</NavLink>
              </li>
              <li className="inline-block">
                <NavLink to={"portofolio"} className="transition-all duration-300 ease-in-out">Portofolio</NavLink>
              </li>
              <li className="inline-block">
                <NavLink to={"/contact"} className="transition-all duration-300 ease-in-out">Contact</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </header>
  );
};

export default Navbar;
