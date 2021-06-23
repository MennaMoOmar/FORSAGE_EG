import React from "react";
import { getProductsByCategory } from "../../actions/productAction";

const Header = ({ imageSrc }) => {
  return (
    <React.Fragment>
      <div className="allproductheader">
        <img src={`data:image/png;base64, ${imageSrc}`} alt="brand"></img>
      </div>
    </React.Fragment>
  );
};

export default Header;
