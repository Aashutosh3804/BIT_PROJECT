import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Faculty.css";
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
          <a>Publications:&nbsp;&nbsp;&nbsp;</a>
          <a>{p}</a>
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
        <div className="teacher1">
          <img
            src={teacher.img}
            style={{
              height: "100px",
              marginLeft: "20%",
              marginRight: "10%",
              width: "100px",
              borderRadius: "100px",
              float: "left",
            }}
          />
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

        // <div className="teacher1">
      );
    });
  }
}
