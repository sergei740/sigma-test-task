import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import UserCard from "../UserCard/UserCard";

const useStyles = makeStyles(() => ({
  typo: {
    width: '100%',
    paddingLeft: '30px',
    textAlign: 'left',
    margin: '30px auto',
  }
}));

const Friends = ({ users }) => {
  const classes = useStyles();
  return (
    <Grid container direction="column" justify="space-between">
      <Grid className={ classes.typo }>
        <Typography variant="h3" gutterBottom>Friends</Typography>
      </Grid>
      <Grid>
        { users.map((user) => <UserCard key={ user.id } user={ user }/>) }
      </Grid>
    </Grid>
  )
};

export default Friends;