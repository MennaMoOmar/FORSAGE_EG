import React, { useEffect, useState } from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";

import logoImg from "../../assets/Logo.png";
import { getProductByCode, logout } from "../../actions";

const Navbar = ({
  isAdmin: { isAdmin, admin },
  logout,
  getProductByCode,
  searchproduct,
}) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const [searchValue, setSearchValue] = useState("");
  const history = useHistory();

  const handleKeyPress = async (e) => {
    if (e.key === "Enter") {
      // remove enter charachter
      setSearchValue(searchValue.replace(/^\s+|\s+$/g, ""));
      await getProductByCode(searchValue);
      console.log(searchproduct);
    }
  };

  useEffect(() => {
    if (searchproduct) {
      history.push(`/productdetails/${searchproduct._id}`);
    }
  }, [searchproduct,history]);

  return (
    <>
      <nav className="navBar navbar navbar-expand-lg">
        <div className="container">
          <button
            className="custom-toggler navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample09"
            aria-controls="navbarsExample09"
            aria-expanded={!isNavCollapsed ? true : false}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon">
              <i className="fas fa-bars"></i>
            </span>
          </button>
          <div
            className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          >
            {isAdmin && (
              <div className="navBar__logout" onClick={() => logout()}>
                <i className="fas fa-sign-out-alt"></i>
                <span>تسجيل الخروج</span>
              </div>
            )}
            <ul className="navBar__list navbar-nav" id="navbarsExample09">
              <li className="navBar__list__item nav-item">
                {isAdmin && (
                  <NavLink
                    className="navBar__list__item__link nav-link"
                    to="/admin"
                  >
                    اضافة منتج
                  </NavLink>
                )}
              </li>
              <li className="navBar__list__item nav-item">
                <NavLink
                  className="navBar__list__item__link nav-link"
                  to="/categories"
                >
                  الماركات
                </NavLink>
              </li>
              <li className="navBar__list__item nav-item">
                <NavLink
                  className="navBar__list__item__link nav-link"
                  to="/about"
                >
                  عن الموقع
                </NavLink>
              </li>
              <li className="navBar__list__item nav-item">
                <NavLink
                  className="navBar__list__item__link navBar__list__item__link--active nav-link"
                  aria-current="page"
                  to="/home"
                >
                  الصفحة الرئيسية
                </NavLink>
              </li>
            </ul>
          </div>

          <input
            className="navBar__search"
            type="search"
            placeholder="...البحث"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyPress={(e) => handleKeyPress(e)}
          ></input>
          <Link className="navbar-brand" to="/">
            <img className="navBar__image" src={logoImg} alt="logo"></img>
          </Link>
        </div>
      </nav>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isAdmin: state.userReducer,
    searchproduct: state.productReducer.searchproduct,
  };
};

export default connect(mapStateToProps, { logout, getProductByCode })(Navbar);
