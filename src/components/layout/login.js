import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: '25ch',
		},
	},
}));

const Login = () => {
	const classes = useStyles();
	return (
		<React.Fragment>
			<div className="login">
      <img src="/images/logo.png" alt=""></img>
				<form className={classes.root} noValidate autoComplete="off">
					<TextField id="standard-basic" label="اسم المستخدم" className="login__inputform" />
					<TextField
						id="standard-password-input"
						label="كلمة المرور"
						type="password"
						autoComplete="current-password"
            className="login__inputform"
					/>
					<button className="button mainbtn">تسجيل الدخول</button>
				</form>
			</div>
		</React.Fragment>
	);
};

export default Login;
