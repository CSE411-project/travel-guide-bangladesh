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
import NotFound from "./components/NotFound/NotFound";
import TravelGroupList from "./components/TravelGroupList/TravelGroupList";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [groupList, setGroupList] = useState([]);
  const [destinationList, setDestinationList] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loadGroup, setLoadGroup] = useState(false);
  const [loadDestination, setLoadDestination] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/groupList')
    .then(res => res.json())
    .then(data => setGroupList(data))
  }, [loadGroup]);

  useEffect(() => {
    fetch('http://localhost:5000/destinationList')
    .then(res => res.json())
    .then(data => setDestinationList(data))
  }, [loadDestination]);

  return (
    <UserContext.Provider value={{loggedInUser, setLoggedInUser, groupList, setGroupList, destinationList, setDestinationList, setLoadGroup, setLoadDestination, isAdmin, setIsAdmin}}>
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

          <Route path="/travelGroupList">
            <TravelGroupList />
          </Route>
          
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
