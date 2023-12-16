import {Routes, Route, useLocation} from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Portofolio from "./Components/Portofolio"
import Contact from './Components/Contact'

function App() {
  const location = useLocation()

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portofolio" element={<Portofolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App
