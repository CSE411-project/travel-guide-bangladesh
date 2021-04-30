import React, { createContext, useEffect, useState } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import AdminPanel from "./components/AdminPanel/AdminPanel";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [groupList, setGroupList] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loadGroup, setLoadGroup] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/groupList')
    .then(res => res.json())
    .then(data => setGroupList(data))
  }, [loadGroup]);

  return (
    <UserContext.Provider value={{loggedInUser, setLoggedInUser, groupList, setGroupList, setLoadGroup, isAdmin, setIsAdmin}}>
      <Router>
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/admin">
            <AdminPanel />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
