import Hero from "./Components/Hero/Hero";
import MobileNav from "./Components/MobileNav/MobileNav";
import Nav from "./Components/Nav/Nav";
import './App.css'
// import Services from "@/Components/Services";
// import Skills from "@/Components/Skills";
import React from "react";

const App = () => {
  const [nav, setNav] = React.useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);
  return (
    <div className="overflow-x-hidden">
      <div>
        {/* NAVBAR ===> */}
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav} />
        {/* HERO ===> */}
        <Hero />
        <div className="relative z-[30]" >
          {/* <About /> */}
          {/* <Services /> */}
          {/* <Skills /> */}
        </div>
      </div>
    </div>
  );
};

export default App;