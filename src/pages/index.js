import React from 'react';
import Hero from '../components/Hero';
import MeInfo from '../components/MeInfo';
import ProjectList from '../components/ProjectList';
import Skills from '../components/Skills';

const Home = () => {
   return (
      <>
         <Hero />
         <MeInfo />
         <Skills />
         <ProjectList />
      </>
   );
};

export default Home;
