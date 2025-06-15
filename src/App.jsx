import ScrollToTop from "./Components/ScrollToTop";
import Projects from "./Components/Projects";
import ScrollToTopArrow from './Components/ScrollToTopArrow';
import Header from './Components/Header';
import { useState } from "react";
import Services from "./Components/Services";
import Navbar from "./Components/Navbar.jsx";
import Testimonials from "./Components/Testimonials.jsx";
import Footer from "./Components/Footer.jsx";

const App = () => {
  return (
    <ScrollToTop>
      <div className="App">
        <ScrollToTopArrow />
        <div className="sections">
          <Navbar />
          <Header />
          <Projects />
          <Services />
          <Testimonials />
          <Footer />
        </div>
      </div>
    </ScrollToTop>
  )
}

export default App