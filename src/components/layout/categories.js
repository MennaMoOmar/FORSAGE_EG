import React from "react";

import Nabvar from "../shared/navbar";
import Footer from "../shared/footer";
import Header from "../categories/header";
import CategoryAccordion from "../categories/accordion";

const Categories = () => {
  
  return (
    <React.Fragment>
      <div className="allproduct">
        <Nabvar></Nabvar>
        <Header></Header>
        <CategoryAccordion></CategoryAccordion>
        <CategoryAccordion></CategoryAccordion>
        <CategoryAccordion></CategoryAccordion>
        <CategoryAccordion></CategoryAccordion>
        <Footer></Footer>
      </div>
    </React.Fragment>
  );
};


export default Categories;
