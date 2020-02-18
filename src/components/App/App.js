import React, { useState } from 'react';
import { HashRouter, Route, Redirect } from "react-router-dom";

import LoginPage from "../LoginPage/LoginPage";
import HomePage from "../HomePage/HomePage";

function App() {
  const [authorizedUserId, setAuthorizedUserId] = useState(sessionStorage.authorizedUserId || '');

  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Route
        exact
        path="/"
        render={() => authorizedUserId
          ? <Redirect to='/homePage'/>
          : <LoginPage setAuthorizedUserId={setAuthorizedUserId}/>
        }
      />
      <Route
        exact
        path="/homePage"
        render={() => authorizedUserId
          ? <HomePage authorizedUserId={authorizedUserId} setAuthorizedUserId={setAuthorizedUserId}/>
          : <Redirect to='/'/>
        }
      />
    </HashRouter>
  );
}

export default App;
