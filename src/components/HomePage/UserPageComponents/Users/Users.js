import React, { useEffect, useState } from "react";
import { makeStyles, TextField, Grid } from '@material-ui/core';
import UserCard from "../UserCard/UserCard";

const useStyles = makeStyles(() => ({
  textField: {
    margin: '20px 0 20px 40px',
    width: 500,
  }
}));

const Users = ({ users: usersProp }) => {
  const classes = useStyles();
  const [users, updateUsers] = useState(usersProp);
  const [filterQuery, updateFilterQuery] = useState('');

  useEffect(() => {
    const filteredUsersList = usersProp.filter(({ name }) => name.toLowerCase().includes(filterQuery.toLowerCase().trim()));
    updateUsers(filteredUsersList);
  }, [filterQuery]);

  const inputHandler = ({ target: { value } }) => {
    if (value !== filterQuery) {
      updateFilterQuery(value)
    }
  };

  return (
    <Grid>
      <TextField
        className={ classes.textField }
        onChange={ inputHandler }
        label="Search user"
        type="search"
        variant="outlined"
      />
      { users.map((user) => <UserCard key={ user.id } user={ user }/>) }
    </Grid>
  )
};

export default Users;