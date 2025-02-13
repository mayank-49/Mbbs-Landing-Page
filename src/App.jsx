import React,{useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Header from './Components/Header'
import Hero from './Components/Hero'
import About from './Components/About'
import Benifits from './Components/Benifits'
import Countries from './Components/Countries'
import Steps from './Components/Steps'
import Form from './Components/Form';
import Footer from './Components/Footer';

const App = () => {
  useEffect(() => {
      AOS.init({
        offset: 200,
        duration: 400,
        easing: "ease-in-sine",
        delay: 100,
      });
    }, []);
  return (
    <>
        <Header/>
        <Hero/>
        <About/>
        <Benifits/>
        <Countries/>
        <Steps/>
        <Form/>
        <Footer/>
    </>
  )
}

export default App
