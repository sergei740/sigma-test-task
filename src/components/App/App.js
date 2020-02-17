import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import LoginPage from "../LoginPage/LoginPage";
import HomePage from "../HomePage/HomePage";

function App() {
  const [authorizedUserId, setAuthorizedUserId] = useState(localStorage.authorizedUserId || '');

  return (
    <Router>
      <Route
        exact
        path="/"
        render={ () => authorizedUserId
          ? <Redirect to='/homePage'/>
          : <LoginPage setAuthorizedUserId={ setAuthorizedUserId }/>
        }
      />
      <Route
        exact
        path="/homePage"
        render={ () => authorizedUserId
          ? <HomePage authorizedUserId={ authorizedUserId } setAuthorizedUserId={ setAuthorizedUserId }/>
          : <Redirect to='/'/>
        }
      />
    </Router>
  );
}

export default App;
