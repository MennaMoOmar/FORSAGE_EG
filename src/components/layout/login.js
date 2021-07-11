import React, { useEffect, useState } from "react";
import { setAlert } from "../../actions/alert";
import { login } from "../../actions/userAction";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

import { AdminLoaded } from "../../actions/userAction";

const Login = ({
  setAlert,
  login,
  isAdmin: { isAdmin, admin, token },
  AdminLoaded,
}) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (name && password) {
      login({ name, password });
    } else {
      setAlert("All Fields are required", "error");
    }
  };
  useEffect(() => {
    AdminLoaded();
  }, [isAdmin, admin, AdminLoaded, token]);

  if (isAdmin && admin && token) {
    return <Redirect to="/admin" />;
  }

  return (
    <React.Fragment>
      <div className="login">
        <Link to="/">
          <img src="/images/logo.png" alt=""></img>
        </Link>

        <form dir="rtl">
          <input
            className="login__input"
            placeholder=" اسم المستخدم"
            required
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            className="login__input"
            placeholder=" كلمة المرور "
            required
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <button
            className="button mainbtn"
            onClick={(e) => {
              handleLogin(e);
            }}
          >
            تسجيل الدخول
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    isAdmin: state.userReducer,
  };
};

export default connect(mapStateToProps, { setAlert, login, AdminLoaded })(
  Login
);
