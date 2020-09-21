import React, { useEffect, useState } from "react";
import "./Faculty.css";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
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
          <a className='header'>Publications:&nbsp;&nbsp;&nbsp;</a>
          <a className='header'>{p}</a>
          <br />
        </>
      );
    }
  };

  if (!teachers) {
    return (
      <div>
        <Spinner style={{ color: "black" }} />
      </div>
    );
  } else {
    return teachers.map((teacher) => {
      return (
        <div
          style={{
            boxShadow: "3px 3px 3px",
            marginTop: "100px",
            padding: "50px",
            height: "100%",
            width: "100%",
          }}
        >
          <img
            src={teacher.img}
            style={{
              height: "100px",
              marginLeft: "20%",
              width: "100px",
              borderRadius: "100px",
              float: "left",
            }}
          />
          <div style={{ marginLeft: "30%" }}>
            <h5>{teacher.name}</h5>

            <h5>{teacher.qualification}</h5>
            <h5>{teacher.designation}</h5>
            <h5>Experience:&nbsp;&nbsp;{teacher.experience}</h5>
            <h5>Area of Interest:&nbsp;&nbsp;{teacher.area_of_interest}</h5>

            <a className='header'>Emailid:&nbsp;{teacher.emailid}</a>
            <h5>{publications(teacher.publications)}</h5>
          </div>
        </div>
      );
    });
  }
}
