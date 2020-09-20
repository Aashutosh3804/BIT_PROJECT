import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import ResLog from "./components/ResLog/ResLog";
import { AuthContext } from "./context/auth";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import Mycontext from "./context/context";

function App() {
  const { state } = useContext(AuthContext);
  useEffect(() => {
    const res = async () => {
      const response = await axios.get("/timetable");

      settimetable(response.data);
      //console.log(response.data);
    };
    res();
  }, []);
  const [timetable, settimetable] = useState({});

  return (
    <Router>
      <Mycontext.Provider value={timetable}>
        <Route path="/login" component={ResLog} />

        {state.isLoggedIn ? (
          <Switch>
            <Route path="/" exact component={HomePage} />
          </Switch>
        ) : (
          <Redirect to="/login" />
        )}
      </Mycontext.Provider>
    </Router>
  );
}

export default App;
