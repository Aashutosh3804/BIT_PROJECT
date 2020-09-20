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
import setHeader from "./util/setHeader";
import AttendanceDiv from "./components/Attendence/AttendanceDiv";
import Header from "./components/Home/Header";

if (localStorage.token) {
  setHeader(localStorage.token);
}

function App() {
  const { state, dispatch } = useContext(AuthContext);
  useEffect(() => {
    const res = async () => {
      try {
        const result = await axios.get("/getUser");
        console.log(result);
        dispatch({
          type: "User_Loaded",
          payload: {
            user: result.data[0],
          },
        });
      } catch (err) {
        dispatch({
          type: "LOGIN_FAIL",
        });
      }
    };
    res();
  }, []);
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
      {!state.loading ? (
        <Mycontext.Provider value={timetable}>
          <Route path='/login' component={ResLog} />

          {state.isLoggedIn ? (
            <>
              <Header />
              <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/attendance' exact component={AttendanceDiv} />
              </Switch>
            </>
          ) : (
            <Redirect to='/login' />
          )}
        </Mycontext.Provider>
      ) : (
        <></>
      )}
    </Router>
  );
}

export default App;
