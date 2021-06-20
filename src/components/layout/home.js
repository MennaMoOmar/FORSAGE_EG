import React from "react";

import Nabvar from "../shared/navbar";
import HeroSection from "../home/herosection";
import Footer from "../shared/footer";

const Home = () => {
  
  return (
    <React.Fragment>
      <div className="home">
        <Nabvar></Nabvar>
        <HeroSection></HeroSection>
        <Footer></Footer>
      </div>
    </React.Fragment>
  );
};


export default Home;
