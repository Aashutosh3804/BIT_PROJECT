import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import ResLog from "./components/ResLog/ResLog";
import TimeTable from "./components/TimeTable/TimeTable";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={ResLog} />
        <Route path="/timetable" exact component={TimeTable} />
      </BrowserRouter>
    </div>
  );
}

export default App;
