import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { setAlert } from "../../actions/alert";
import { login } from "../../actions/userAction";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { AdminLoaded } from "../../actions/userAction";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Login = ({
  setAlert,
  login,
  isAdmin: { isAdmin, admin, token },
  AdminLoaded,
}) => {
  const classes = useStyles();
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
        <img src="/images/logo.png" alt=""></img>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            dir="rtl"
            id="standard-basic"
            label="اسم المستخدم"
            className="login__inputform"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
            dir="rtl"
            id="standard-password-input"
            label="كلمة المرور"
            type="password"
            autoComplete="current-password"
            className="login__inputform"
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
