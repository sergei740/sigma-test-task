import React, { useState } from "react";
import {
  Button,
  Grid,
  Paper,
  Tab,
  Tabs as MuiTabs,
  makeStyles,
  Dialog,
  DialogActions,
  DialogTitle
} from '@material-ui/core';

import users from '../../initialState';
import Users from "./UserPageComponents/Users/Users";
import Friends from "./UserPageComponents/Friends/Friends";


const useStyles = makeStyles(() => ({
  paperStyle: {
    width: '100%'
  },
  logOutBtn: {
    position: 'absolute',
    right: 0,
    height: '48px'
  }
}));

const Tabs = {
  USERS: 'USERS',
  FRIENDS: 'FRIENDS'
};

const tabsIndex = {
  0: 'USERS',
  1: 'FRIENDS'
};

const HomePage = ({ setAuthorizedUserId, authorizedUserId }) => {
  const classes = useStyles();

  const [tab, setTab] = useState(Tabs.USERS);
  const [highlightedTabIndex, setHighlightedTabIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (_, newTabIndex) => {
    setTab(tabsIndex[newTabIndex]);
    setHighlightedTabIndex(newTabIndex);
  };

  const exit = () => {
    localStorage.clear();
    setAuthorizedUserId('');
  };

  return (
    <Grid>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">{"Do you really want to left?"}</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined">
            Disagree
          </Button>
          <Button onClick={exit} color="primary" variant='contained' autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      <Grid container justify="space-between">
        <Paper className={classes.paperStyle}>
          <MuiTabs
            value={highlightedTabIndex}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example"
          >
            <Tab label="Users"/>
            <Tab label="Friends"/>
          </MuiTabs>
        </Paper>
        <Button className={classes.logOutBtn} variant="outlined" color="secondary" onClick={handleClickOpen}>Log
          Out</Button>
      </Grid>
      {tab === Tabs.USERS && (
        <Users users={users} authorizedUserId={authorizedUserId}/>
      )}
      {tab === Tabs.FRIENDS && (
        <Friends users={users} authorizedUserId={authorizedUserId}/>
      )}
    </Grid>
  );
};

export default HomePage;

