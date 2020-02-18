import React, { useEffect, useState } from "react";
import { makeStyles, TextField, Grid } from '@material-ui/core';

import UserCard from "../UserCard/UserCard";
import users from '../../../../initialState';

const useStyles = makeStyles(() => ({
  textField: {
    margin: '20px 0 20px 40px',
    width: '40%',
  },
}));

const Users = ({ authorizedUserId }) => {
  const classes = useStyles();

  const initialUsersList = users.filter(user => user.id !== authorizedUserId);
  const [usersList, updateUsers] = useState(initialUsersList);
  const [filterQuery, updateFilterQuery] = useState('');
  const [currentUserFriendsList, changeCurrentUserFriendsList] = useState([...JSON.parse(localStorage.currentUserFriendsList)]);

  useEffect(() => {
    const filteredUsersList = initialUsersList.filter(({ name }) => name.toLowerCase().includes(filterQuery.toLowerCase().trim()));
    updateUsers(filteredUsersList);
  }, [filterQuery]);

  const inputHandler = ({ target: { value } }) => {
    if (value !== filterQuery) {
      updateFilterQuery(value)
    }
  };

  return (
    <Grid container direction='column'>
      <TextField
        className={classes.textField}
        onChange={inputHandler}
        label="Search user"
        type="search"
        variant="outlined"
      />
      <ul>
        {usersList.map(user => (
          <UserCard
            key={user.id}
            user={user}
            changeCurrentUserFriendsList={changeCurrentUserFriendsList}
            currentUserFriendsList={currentUserFriendsList}
            isFriend={currentUserFriendsList.includes(user.id)}
          />
        ))}
      </ul>
    </Grid>
  )
};

export default Users;