import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import ResLog from "./components/ResLog/ResLog";
import { AuthContext } from "./context/Auth/auth";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import setHeader from "./util/setHeader";
import AttendanceDiv from "./components/Attendence/AttendanceDiv";
import Header from "./components/Home/Header";
import { TimeContext } from "./context/context";
import TimeTable from "./components/TimeTable/TimeTable";
import Faculty from "./components/Faculty/Faculty";

if (localStorage.token) {
  setHeader(localStorage.token);
}

function App() {
  const { state, loadUser } = useContext(AuthContext);
  useEffect(() => {
    console.log("called");

    loadUser();
  }, []);

  return (
    <Router>
      <TimeContext>
        {!state.loading ? (
          <>
            <Route path="/login" component={ResLog} />

            <Header />
            <Switch>
              <Route path="/" exact component={HomePage} />

              <Route path="/attendance" exact component={AttendanceDiv} />
              <Route path="/timetable" exact component={TimeTable} />
              <Route path="/faculty" exact component={Faculty} />
            </Switch>
          </>
        ) : (
          <></>
        )}
      </TimeContext>
    </Router>
  );
}

export default App;
