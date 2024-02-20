import React, { useState } from 'react'
import MobileNav from '../../Components/MobileNav/MobileNav';
import Nav from '../../Components/Nav/Nav';
import Hero from '../../Components/Hero/Hero';
import ParticlesComp from '../../Components/Particles/Particles';

const Home = () => {
    const [nav, setNav] = useState(false);
    const openNav = () => setNav(true);
    const closeNav = () => setNav(false);
    return (
        <div className="overflow-x-hidden">
            <div>
                {/* NAVBAR ===> */}
                <MobileNav nav={nav} closeNav={closeNav} />
                <Nav openNav={openNav} />
                {/* HERO ===> */}
                {/* <ParticlesComp /> */}
                <Hero />
                <div className="relative z-[30]" >
                    {/* <About /> */}
                    {/* <Services /> */}
                    {/* <Skills /> */}
                </div>
            </div>
        </div>
    );
}

export default Home