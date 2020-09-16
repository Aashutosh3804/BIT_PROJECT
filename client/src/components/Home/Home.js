import React from "react";
import axios from "axios";

class Home extends React.Component {
  componentDidMount() {
    const res = axios.get("/timetable").then((res) => {
      console.log(res);
    });
  }
  render() {
    return <div>This is HomePage</div>;
  }
}
export default Home;
