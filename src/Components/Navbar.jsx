import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="w-full bg-transparent shadow-lg h-[10vh]">
      <section className="container">
        <div className="w-full flex items-center justify-between px-4 py-6">
          <div className="logo">
            <Link className="text-sky-500 font-semibold" to={"/"}>
              Iqbal Muthahhary
            </Link>
          </div>
          <nav>
            <ul className="flex items-center gap-4 navbar">
              <li><NavLink to={"/"}>Home</NavLink></li>
              <li><NavLink to={"/about"}>About</NavLink></li>
              <li><NavLink to={"portofolio"}>Portofolio</NavLink></li>
              <li><NavLink to={"skill"}>Skill</NavLink></li>
              <li><NavLink to={"/contact"}>Contact</NavLink></li>
            </ul>
          </nav>
        </div>
      </section>
    </header>
  );
};

export default Navbar;
