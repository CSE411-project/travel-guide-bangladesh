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
import Destination from "./components/Destination/Destination";
import DestinationList from "./components/DestinationList/DestinationList";
import Navbar from "./components/Shared/Navbar";
import Footer from "./components/Shared/Footer";
import Bookmark from "./components/Bookmark/Bookmark";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [groupList, setGroupList] = useState([]);
  const [destinationList, setDestinationList] = useState([]);
  const [loadGroup, setLoadGroup] = useState(false);
  const [loadDestination, setLoadDestination] = useState(false);

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo") || "{}";
    const data = JSON.parse(userInfo);
    setLoggedInUser(data);
  }, []);

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
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser, groupList, setGroupList, destinationList, setDestinationList, setLoadGroup, setLoadDestination }}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <PrivateRoute path="/admin">
            <AdminPanel />
          </PrivateRoute>

          <Route path="/travelGroupList">
            <TravelGroupList />
          </Route>

          <Route path="/bookmarks">
            <Bookmark />
          </Route>

          <Route path="/destinationList">
            <DestinationList />
          </Route>

          <Route path="/destination/:destinationId">
            <Destination />
          </Route>
          
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
