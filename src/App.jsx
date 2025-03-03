import Head from "./components/Head";
import Header from "./components/Header";

import Hero from "./components/Hero";
import About from "./components/About";
import Facts from "./components/Facts";
// import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Resume from "./components/Resume";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import PreloaderAndBackToTop from './components/PreloaderAndBackToTop';

// import { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// useEffect(() => {
//   AOS.init({
//     duration: 1000, // Animation duration in ms
//     once: true, // Whether animation should happen only once
//   });
// }, []);


function App() {
  return (
    <>
      <Head />
      <Header />
      <Hero />
      <About/>
      <Facts />
      {/* <Projects /> */}
      <Skills />
      <Resume />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <PreloaderAndBackToTop />
    </>
  );
}
export default App;