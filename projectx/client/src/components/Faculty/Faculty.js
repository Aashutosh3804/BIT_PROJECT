import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Faculty.css";
import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Home/bgvideo.css";
export default function Faculty() {
  const [teachers, setteachers] = useState();
  useEffect(() => {
    const res = async () => {
      const response = await axios.get("/teacherInfo");

      setteachers(response.data);

      //console.log(response.data);
    };
    res();
  }, []);
  console.log(teachers);

  const publications = (p) => {
    if (p === "null") {
      return <div></div>;
    } else {
      return (
        <>
          <a>Publications:&nbsp;&nbsp;&nbsp;</a>
          <a>{p}</a>
          <br />
        </>
      );
    }
  };
  const Fac = () => {
    return teachers.map((teacher) => {
      return (
        <div className="teacher1">
          <div className="facimage">
            {/* <img
              src={teacher.img}
              style={
                {
                  height: "100px",
                  marginLeft: "20%",
                  marginRight: "10%",
                  width: "100px",
                  borderRadius: "100px",
                  float: "left",
                }
              }
            /> */}
          </div>
          <div className="facdetails">
            <h5>{teacher.name}</h5>

            <h5>{teacher.qualification}</h5>
            <h5>{teacher.designation}</h5>
            <h5 className="experience">
              Experience:&nbsp;&nbsp;{teacher.experience}
            </h5>
            <h5 className="interest">
              Area of Interest:&nbsp;&nbsp;{teacher.area_of_interest}
            </h5>

            <a style={{ color: "blue" }} className="interest">
              Emailid:&nbsp;{teacher.emailid}
            </a>
            <h5 style={{ color: "blue" }} className="interest">
              {publications(teacher.publications)}
            </h5>
          </div>
        </div>
      );
    });
  };
  const myfaculty = () => {
    return teachers.map((teacher) => {
      return (
        <div className="teacher1">
          <div className="up">
            <div className="facimage">
              <img className="teacherimage" src={teacher.img} />
            </div>
            <div className="facdetails">
              <h2 style={{ color: "white" }}>{teacher.name}</h2>
            </div>
            <br />
          </div>
          <div className="dacdetails1">
            <h5 style={{ color: "white" }}>
              {teacher.qualification}
              <br />
              {teacher.designation}
              <br />
              {teacher.experience}
            </h5>
          </div>
          <br />
          <div className="anotherdiv" style={{ wordWrap: "break-word" }}>
            <h5 style={{ color: "white" }}>
              Experience:&nbsp;&nbsp;{teacher.experience}
              <br />
              Area of Interest:&nbsp;&nbsp;{teacher.area_of_interest}
              <br />
              {publications(teacher.publications)}
              Email {teacher.emailid}
            </h5>
          </div>
        </div>
      );
    });
  };
  if (!teachers) {
    return (
      <div>
        <Spinner style={{ color: "black" }} />
      </div>
    );
  } else {
    return (
      <>
        <div style={{ width: "100vw" }}>
          <video
            className="routineVideoOthers"
            preload="auto"
            loop
            muted
            autoPlay
          >
            <source src="/NebulaRed.mp4" type="video/webm" />
          </video>
        </div>
        <div className="all-container">
          <div className="teachercontainer">{myfaculty()}</div>
        </div>
      </>
    );
  }
}
