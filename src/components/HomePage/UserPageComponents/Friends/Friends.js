import React, { useEffect, useState } from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";

import UserCard from "../UserCard/UserCard";

const useStyles = makeStyles(() => ({
  typo: {
    padding: '0 30px',
    textAlign: 'left',
    margin: '30px 0',
  }
}));

const Friends = ({ users, authorizedUserId }) => {
  const classes = useStyles();

  const [currentUserFriendsList, changeCurrentUserFriendsList] = useState(
    [...JSON.parse(localStorage.currentUserFriendsList)]
  );

  const usersList = users.filter(user => user.id !== authorizedUserId);
  const friendsList = usersList.filter(({ id }) => currentUserFriendsList.includes(id));

  const [friends, deleteFriend] = useState(friendsList);

  useEffect(() => {
    deleteFriend(friends.filter(({ id }) => currentUserFriendsList.includes(id)));
  }, [currentUserFriendsList]);

  return (
    <Grid container direction="column" justify="space-between">
      <Grid className={classes.typo}>
        <Typography variant="h3" gutterBottom>Friends</Typography>
      </Grid>
      <ul>
        {friends.length
          ? friends.map(user => (
            <UserCard
              key={user.id}
              currentUserFriendsList={currentUserFriendsList}
              changeCurrentUserFriendsList={changeCurrentUserFriendsList}
              user={user} isFriend={currentUserFriendsList.includes(user.id)}
            />
          ))
          : <Typography align='center' variant="h4" gutterBottom>You haven't friends</Typography>}
      </ul>
    </Grid>
  )
};

export default Friends;