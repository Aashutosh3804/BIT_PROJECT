import React, { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import ResLog from "./components/ResLog/ResLog";
import TimeTable from "./components/TimeTable/TimeTable";
import Mycontext from "./Global/context";
import axios from "axios";
import HomePage from "./components/Home/HomePage";

function App() {
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
    <div>
      <BrowserRouter>
        <Mycontext.Provider value={timetable}>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" exact component={ResLog} />
          <Route path="/timetable" exact component={TimeTable} />
        </Mycontext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
