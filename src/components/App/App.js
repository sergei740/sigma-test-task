import React, { useState } from 'react';
import users from '../../initialState';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import HomePage from "../HomePage/HomePage";

function App() {
  const [flag, setFlag] = useState(localStorage.flag ? JSON.parse(localStorage.flag) : false);
  const [usersList, filterUsersList] = useState(localStorage.users ? [...JSON.parse(localStorage.users)] : users);
  const [userFriendsList, filterUserFriendsListByUser] = useState(
    localStorage.friendsList ?
      [...JSON.parse(localStorage.friendsList)]
      :
      users
  );

  return (
    <Router>
      <Route
        exact
        path="/"
        render={ () => flag ?
          <Redirect to='/homePage'/>
          :
          <LoginPage
            users={ users }
            setFlag={ setFlag }
            filterUsersList={ filterUsersList }
            filterUserFriendsListByUser={ filterUserFriendsListByUser }/>
        }
      />
      <Route
        exact
        path="/homePage"
        render={ () => flag ?
          <HomePage allUsers={ usersList } setFlag={ setFlag } userFriendsList={ userFriendsList }/>
          :
          <Redirect to='/'/>
        }
      />
    </Router>
  );
}

export default App;
