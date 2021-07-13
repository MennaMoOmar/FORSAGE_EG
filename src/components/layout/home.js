import React, { useState } from "react";

import Nabvar from "../shared/navbar";
import HeroSection from "../home/herosection";
import Brands from "../home/brands";
import RandomProducts from "../home/randomproducts";
import BrandsSlider from "../home/sliderBrands";
import FactoryModal from "../home/factoryModal";
import Footer from "../shared/footer";

const Home = () => {
  const [status, setStatus] = useState(true);

  return (
    <React.Fragment>
      <div className="home">
        {status && (
          <FactoryModal closeModal={() => setStatus(false)}></FactoryModal>
        )}
        <Nabvar></Nabvar>
        <HeroSection></HeroSection>
        <BrandsSlider></BrandsSlider>
        <Brands></Brands>
        <RandomProducts
          categoryId={"60d3708fecfe8724e45abe74"}
        ></RandomProducts>
        {/* <CarouselSlider></CarouselSlider>  */}
        <Footer></Footer>
      </div>
    </React.Fragment>
  );
};

export default Home;
