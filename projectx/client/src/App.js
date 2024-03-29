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
import NotesDiv from "./components/Notes/NotesDiv";

if (localStorage.token) {
  setHeader(localStorage.token);
}

function App() {
  const { state, loadUser } = useContext(AuthContext);
  useEffect(() => {
    loadUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className='App'>
      <div style={{ width: "100vw", position: "fixed" }}>
        <video className='routineisVideo' preload='auto' loop muted autoPlay>
          <source src='/production.mp4' type='video/webm' />
        </video>
      </div>

      <Router>
        <TimeContext>
          {!state.loading ? (
            <>
              <Route path='/login' component={ResLog} />

              {state.isLoggedIn ? <Header /> : null}

              <Switch>
                <ProtectedRoute
                  isLoggedin={state.isLoggedIn}
                  path='/'
                  exact
                  component={HomePage}
                />

                <ProtectedRoute
                  isLoggedin={state.isLoggedIn}
                  path='/attendance'
                  exact
                  component={AttendanceDiv}
                />
                <ProtectedRoute
                  isLoggedin={state.isLoggedIn}
                  path='/timetable'
                  exact
                  component={TimeTable}
                />
                <ProtectedRoute
                  isLoggedin={state.isLoggedIn}
                  path='/faculty'
                  exact
                  component={Faculty}
                />

                <ProtectedRoute
                  isLoggedin={state.isLoggedIn}
                  path='/marks'
                  exact
                  component={MarksDiv}
                />
                <ProtectedRoute
                  isLoggedin={state.isLoggedIn}
                  path='/notes'
                  exact
                  component={NotesDiv}
                />
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
