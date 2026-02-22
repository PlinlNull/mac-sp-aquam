import React from "react";

import About from "./components/About";
import Achievements from "./components/Achievements";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Mechanism from "./components/Mechanism";
import Merit from "./components/Merit";
import Point from "./components/Point";
import Product from "./components/Product";
import Service from "./components/Service";
import Vision from "./components/Vision";

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Vision />
        <Mechanism />
        <Point />
        <About />
        <Product />
        <Service />
        <Merit />
        <Achievements />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
