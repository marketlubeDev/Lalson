import { useState } from "react";

import Grid from "./Page/Section2/Grid";
import ImageSection from "./Page/Section1/ImageSection";
import Scrollcard from "./Page/Section3/Scrollcard";
import OurWork from "./Page/Section4/OurWork";
import Curious from "./Page/Section5/Curious";
import Footer from "./Page/Section6/Footer";
import Nav from "./layout/Nav";

function App() {
  return (
    <>
      <Nav />
      <ImageSection />
      <Grid />
      <Scrollcard />
      <OurWork />
      <Curious />
      <Footer />
    </>
  );
}

export default App;
