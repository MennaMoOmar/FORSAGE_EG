import React from "react";

const Header = ({ category, logoImageSrc }) => {
  console.log(category);
  return (
    <React.Fragment>
      <div className="productdetailsheader container">
        <h4>
          {category} قائمة أدوات <i class="fas fa-chevron-left"></i>
        </h4>
        <img src="/images/brands/brand1.png" alt="logo"></img>
      </div>
    </React.Fragment>
  );
};

export default Header;
