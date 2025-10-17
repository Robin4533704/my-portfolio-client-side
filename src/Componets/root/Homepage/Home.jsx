import React from 'react';
import Banner from './banner page/Banner';
import AboutMe from '../pages/AboutMe';
import Skills from '../pages/Skills';
import Projects from '../pages/Projects';
import Experience from '../pages/Experience';
import Contact from '../pages/Contract';
import IndustryServed from '../pages/IndustryServed';


const Home = () => {
    return (
        <div>
           <Banner/> 
           <AboutMe/>
           <Skills/>
           <Projects/>
            <IndustryServed/>
           <Experience/>
           <Contact/>
          
        </div>
    );
};

export default Home;