import React, { useContext, useEffect } from "react";
import "./App.css";
import ResLog from "./components/ResLog/ResLog";
import { AuthContext } from "./context/Auth/auth";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import setHeader from "./util/setHeader";
import AttendanceDiv from "./components/Attendence/AttendanceDiv";
import Header from "./components/Home/Header";
import { TimeContext } from "./context/context";
import TimeTable from "./components/TimeTable/TimeTable";
import Faculty from "./components/Faculty/Faculty";
import AttendanceGraph from "./components/Home/AttendanceGraph";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Footer from "./components/Home/Footer";
import MarksDiv from "./components/Marks/MarksDiv";
import Particles from "react-particles-js";

if (localStorage.token) {
  setHeader(localStorage.token);
}

const x = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};

function App() {
  const { state, loadUser } = useContext(AuthContext);
  useEffect(() => {
    loadUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="App">
      <Particles className="particles" params={x} />
      <Router>
        <TimeContext>
          {!state.loading ? (
            <>
              <Route path="/login" component={ResLog} />

              {state.isLoggedIn ? <Header /> : null}

              <Switch>
                <div style={{ position: "absolute", top: "14.5%" }}>
                  <ProtectedRoute
                    isLoggedin={state.isLoggedIn}
                    path="/"
                    exact
                    component={HomePage}
                  />

                  <ProtectedRoute
                    isLoggedin={state.isLoggedIn}
                    path="/attendance"
                    exact
                    component={AttendanceDiv}
                  />
                  <ProtectedRoute
                    isLoggedin={state.isLoggedIn}
                    path="/timetable"
                    exact
                    component={TimeTable}
                  />
                  <ProtectedRoute
                    isLoggedin={state.isLoggedIn}
                    path="/faculty"
                    exact
                    component={Faculty}
                  />

                  <ProtectedRoute
                    isLoggedin={state.isLoggedIn}
                    path="/marks"
                    exact
                    component={MarksDiv}
                  />
                </div>
              </Switch>
            </>
          ) : (
            <></>
          )}
        </TimeContext>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
