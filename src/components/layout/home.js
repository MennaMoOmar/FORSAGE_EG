import React from "react";

import Nabvar from "../shared/navbar";
import HeroSection from "../home/herosection";
import Brands from "../home/brands";
import RandomProducts from "../home/randomproducts";
import Footer from "../shared/footer";

const Home = () => {
  
  return (
    <React.Fragment>
      <div className="home">
        <Nabvar></Nabvar>
        <HeroSection></HeroSection>
        <Brands></Brands>
        <RandomProducts></RandomProducts>
        <Footer></Footer>
      </div>
    </React.Fragment>
  );
};


export default Home;
