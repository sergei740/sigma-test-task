import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
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

const LoginPage = ({ users, setFlag, filterUsersList, filterUserFriendsListByUser }) => {
  const classes = useStyles();
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const loginHandler = ({ target: { value } }) => setLoginValue(value);
  const passwordHandler = ({ target: { value } }) => setPasswordValue(value);

  const toStorage = (itemName, item) => localStorage.setItem(itemName, JSON.stringify(item));

  const clearFormInputs = () => {
    setLoginValue('');
    setPasswordValue('');
  };

  const createFriendsList = (filteredUsersListById, userFriendsIdList) => {
    const friendsList = userFriendsIdList.reduce((acc, user) => {
      return [...acc, ...filteredUsersListById.filter(item => {
        if (item.id === user) {
          item.friendStatus = !item.friendStatus;
          return item;
        }
      })]
    }, []);
    toStorage('friendsList', friendsList);
    filterUserFriendsListByUser(friendsList);
  };

  const validation = (login, password) => {
    const filterUsersByLogin = users.filter(user => user.login === login);
    if (filterUsersByLogin.length) {
      const filteredUsersListByPassword = filterUsersByLogin.filter(user => user.password === password);
      const [user] = filteredUsersListByPassword;
      const filteredUsersListById = users.filter(item => item.id !== user.id);
      createFriendsList(filteredUsersListById, user.friendsList);
      toStorage('users', filteredUsersListById);
      filterUsersList(filteredUsersListById);
      return filteredUsersListByPassword.length ? true : null;
    }
    return false;
  };

  const submit = e => {
    e.preventDefault();
    setFlag(() => {
      if (validation(loginValue, passwordValue)) {
        toStorage('flag', true);
        return true;
      }
    });
    clearFormInputs();
  };

  return (
    <div className={ classes.container }>
      <form className={ classes.form } onSubmit={ submit }>
        <TextField value={ loginValue }
                   className={ classes.textField }
                   onChange={ loginHandler }
                   label="Login"
        />
        <TextField value={ passwordValue }
                   className={ classes.textField }
                   onChange={ passwordHandler }
                   label="Password"
                   type="password"
        />
        <Button className={ classes.button }
                variant="contained"
                color="primary"
                type="submit"
        >
          Log In
        </Button>
      </form>
    </div>
  )
};

export default LoginPage;

