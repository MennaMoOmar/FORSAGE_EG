import { useState } from "react";
import { Link } from "react-router-dom";

const AdminNav = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
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
            <div
              className="custom__Navbar"
              style={{
                display: "flex",
              }}
            >
              
            </div>
          </div>
          <Link className="navbar-brand" to="/">
            <img
              className="navBar__image"
              src="/images/logo.png"
              alt="logo"
            ></img>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default AdminNav;
