import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Grid from "./Page/Section2/Grid";
import ImageSection from "./Page/Section1/ImageSection";
import Scrollcard from "./Page/Section3/Scrollcard";
import OurWork from "./Page/Section4/OurWork";
import Curious from "./Page/Section5/Curious";
import Footer from "./Page/Section6/Footer";
import OurWorkMobile from "./Page/Section4/OurWorkMobo";
import Nav from "./layout/Nav";
import About from "./Page/About/About";
function App() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <>
      <Nav />
      <ImageSection />
      <About />
      <Grid />
      <Scrollcard />
      {isMobile ? <OurWorkMobile /> : <OurWork />}
      <Curious />
      <Footer />
    </>
  );
}

export default App;
