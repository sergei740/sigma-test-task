import React, { useState } from "react";
import Users from "./UserPageComponents/Users/Users";
import Friends from "./UserPageComponents/Friends/Friends";
import { Tabs as MuiTabs, Tab, Button, Paper, Grid } from '@material-ui/core';

const Tabs = {
  USERS: 'USERS',
  FRIENDS: 'FRIENDS'
};

const tabsIndex = {
  0: 'USERS',
  1: 'FRIENDS'
};

export default function HomePage({ allUsers, setFlag, userFriendsList }) {
  const [tab, setTab] = useState(Tabs.USERS);
  const [highlightedTabIndex, setHighlightedTabIndex] = useState(0);

  const handleChange = (_, newTabIndex) => {
    setTab(tabsIndex[newTabIndex]);
    setHighlightedTabIndex(newTabIndex);
  };

  const exit = () => {
    localStorage.clear();
    localStorage.setItem('flag', JSON.stringify(false));
    setFlag(false);
  };

  return (
    <>
      <Grid container justify="space-between">
        <Paper style={ { width: '92%' } }>
          <MuiTabs
            value={ highlightedTabIndex }
            indicatorColor="primary"
            textColor="primary"
            onChange={ handleChange }
            aria-label="disabled tabs example"
          >
            <Tab label="Users"/>
            <Tab label="Friends"/>
          </MuiTabs>
        </Paper>
        <Button variant="contained" color="secondary" onClick={ exit }>Log Out</Button>
      </Grid>
      { tab === Tabs.USERS && (<Users users={ allUsers }/>) }
      { tab === Tabs.FRIENDS && <Friends users={ userFriendsList }/> }
    </>
  );
}

