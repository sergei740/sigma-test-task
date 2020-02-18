import React, { useState } from "react";
import { TextField, Button, makeStyles, Snackbar } from '@material-ui/core/';
import MuiAlert from '@material-ui/lab/Alert';

import users from '../../initialState';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(() => ({
  container: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    margin: 0,
    width: 300,
    flexDirection: 'column',
  },
  textField: {
    marginBottom: '25px',
  },
  button: {
    width: '200px',
    margin: '40px auto 0',
  }
}));

const LoginPage = ({ setAuthorizedUserId }) => {
  const classes = useStyles();
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const loginHandler = ({ target: { value } }) => setLoginValue(value);
  const passwordHandler = ({ target: { value } }) => setPasswordValue(value);

  const clearFormInputs = () => {
    setLoginValue('');
    setPasswordValue('');
  };

  const validate = (login, password) => {
    const filteredUsersListByLogin = users.filter(user => user.login === login);
    if (filteredUsersListByLogin.length) {
      const passwordCheck = filteredUsersListByLogin.filter(user => user.password === password);
      if (passwordCheck.length) {
        const [user] = passwordCheck;
        sessionStorage.setItem('authorizedUserId', user.id);
        localStorage.setItem('currentUserFriendsList', JSON.stringify(user.friendsList));
        setAuthorizedUserId(user.id);
        clearFormInputs();
        return true;
      }
    }
    return false;
  };

  const submit = e => {
    e.preventDefault();
    if (!validate(loginValue, passwordValue)) setOpen(true)
  };

  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={submit}>
        <TextField value={loginValue}
                   className={classes.textField}
                   onChange={loginHandler}
                   label="Login"
        />
        <TextField value={passwordValue}
                   className={classes.textField}
                   onChange={passwordHandler}
                   label="Password"
                   type="password"
        />
        <Button className={classes.button}
                variant="contained"
                color="primary"
                type="submit"
                disabled={!loginValue || !passwordValue}
        >
          Log In
        </Button>
      </form>
      <Snackbar open={open} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Wrong login or password! Please try again.
        </Alert>
      </Snackbar>
    </div>
  )
};

export default LoginPage;

