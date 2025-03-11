import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Grid from "./Page/Section2/Grid";
import ImageSection from "./Page/Section1/ImageSection";
import Scrollcard from "./Page/Section3/Scrollcard";
import OurWork from "./Page/Section4/OurWork";
import Curious from "./Page/Section5/Curious";
import Footer from "./Page/Section6/Footer";
import OurWorkMobile from "./Page/Section4/OurWorkMobo";
import Nav from "./layout/Nav";
import About from "./Page/About/About";
import AboutDetail from "./Page/About/AboutDetail";

function App() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <Router>
      <>
        <Nav />
        <Routes>
          <Route path="/about-us" element={<AboutDetail />} />
          <Route
            path="/"
            element={
              <>
                <ImageSection />
                <About />
                <Grid />
                <Scrollcard />
                {isMobile ? <OurWorkMobile /> : <OurWork />}
                <Curious />
                <Footer />
              </>
            }
          />
        </Routes>
      </>
    </Router>
  );
}

export default App;
