// import React from 'react'
// import { BrowserRouter,Routes,Route } from 'react-router-dom'
// import Header from '../components/Header'
// import Landing from '../components/Landing'
// import Projects from '../components/Project'
// import Footer from '../components/Footer'

// const Home = () => {
//   return (
//     <>
//     <Landing/>
//     <Skills/>
//     <Projects id="projects"/>
//     <Footer id="footer"/>
//     </>
//   )
// }

// export default Home


// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import Landing from '../components/Landing';
// import Projects from '../components/Project';
// import Footer from '../components/Footer';
// import Skills from '../components/Skills';
// import ScrollToTopButton from "../components/ScrollToTopButton";


// const Home = () => {
//   const { hash } = useLocation();

//   useEffect(() => {
//     if (hash) {
//       const element = document.getElementById(hash.substring(1));
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   }, [hash]);

//   return (
//     <>
//       <Landing/>
//       <Skills />
//       <Projects id="projects"/>
//       <Footer id="footer"/>
//       <ScrollToTopButton />
//     </>
//   );
// };

// export default Home;

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Landing from '../components/Landing';
import Projects from '../components/Project';
import Footer from '../components/Footer';
import Skills from '../components/Skills';

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <>
      <Landing />
      <Skills />
      <Projects id="projects" />
      <Footer id="footer" />
    </>
  );
};

export default Home;


