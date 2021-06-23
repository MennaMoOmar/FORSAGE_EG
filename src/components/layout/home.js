import React from "react";

import Nabvar from "../shared/navbar";
import HeroSection from "../home/herosection";
import Brands from "../home/brands";
import RandomProducts from "../home/randomproducts";
// import CarouselSlider from "../shared/carousel";
import Footer from "../shared/footer";

const Home = () => {
  return (
    <React.Fragment>
      <div className="home">
        <Nabvar></Nabvar>
        <HeroSection></HeroSection>
        <Brands></Brands>
        <RandomProducts brand={"Partner"}></RandomProducts>
        {/* <RandomProducts brand={"FORSAGE"}></RandomProducts>
        <CarouselSlider></CarouselSlider> */}
        <Footer></Footer>
      </div>
    </React.Fragment>
  );
};

export default Home;
