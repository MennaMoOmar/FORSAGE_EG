import React from "react";

import Nabvar from "../shared/navbar";
import HeroSection from "../home/herosection";
import Brands from "../home/brands";
import RandomProducts from "../home/randomproducts";
import BrandsSlider from "../home/sliderBrands";
import Footer from "../shared/footer";

const Home = () => {
  return (
    <React.Fragment>
      <div className="home">
        <Nabvar></Nabvar>
        <HeroSection></HeroSection>
        <BrandsSlider></BrandsSlider>
        <Brands></Brands>
        <RandomProducts
          categoryId={"60d3743940566d2d4881b3fc"}
        ></RandomProducts>
        {/* <CarouselSlider></CarouselSlider>  */}
        <Footer></Footer>
      </div>
    </React.Fragment>
  );
};

export default Home;
