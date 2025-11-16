import React from 'react';
import Banner from './banner page/Banner';
import AboutMe from '../pages/AboutMe';
import Skills from '../pages/Skills';
import Projects from '../pages/Projects';
import Contact from '../pages/Contract';
import IndustryServed from '../pages/ExperienceEducation ';
import PortfolioGallery from '../pages/PortfolioGallery';



const Home = () => {
    return (
        <div>
           <Banner/> 
           <AboutMe/>
           <Skills/>
           {/* <Projects/> */}
           <PortfolioGallery/>
            <IndustryServed/>
           <Contact/>
          
        </div>
    );
};

export default Home;