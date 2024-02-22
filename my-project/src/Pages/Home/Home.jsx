import React, { useState } from 'react'
import MobileNav from '../../Components/MobileNav/MobileNav';
import Nav from '../../Components/Nav/Nav';
import Hero from '../../Components/Hero/Hero';
import ParticlesComp from '../../Components/Particles/Particles';
import PackageSection from '../../Components/PackageIntroSection/PackageSection';
import SectionTwo from '../../Components/SectionTwo/SectionTwo';
import SectionThree from '../../Components/SectionThree/SectionThree';
import WeSpecialize from '../../Components/WeSpecialize/WeSpecialize'
import AboutCmp from '../../Components/AboutCmp/AboutCmp';

const Home = () => {
    
    return (
        <div className="overflow-x-hidden">
            <div>
                {/* NAVBAR ===> */}
                
                {/* HERO ===> */}
                {/* <ParticlesComp /> */}
                <Hero />
                <div className="relative z-[30]" >
                    <SectionTwo />
                    <PackageSection />
                    <SectionThree />
                    <WeSpecialize />
                    <AboutCmp />
                    {/* <Services /> */}
                    {/* <Skills /> */}
                </div>
            </div>
        </div>
    );
}

export default Home