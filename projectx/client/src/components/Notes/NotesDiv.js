import React from "react";
import NotesCardComponent from "./NotesComponent";
import "../Home/bgvideo.css";
export default function NotesDiv() {
  return (
    <>
      {/* <div style={{ width: "100vw" }}>
        <video className="routineVideo" preload="auto" loop muted autoPlay>
          <source src="/Nebula.mp4" type="video/webm" />
        </video>
      </div> */}
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
        <div
          id="notesDivParent"
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <NotesCardComponent
            subjectName={"Data Structures"}
            imgurl={"https://wallpaperaccess.com/full/1398385.jpg"}
          />

          <NotesCardComponent
            subjectName={"Computer Organisation"}
            imgurl={
              "https://i.pinimg.com/originals/39/4a/c0/394ac05a99e73438361f45b08c7b6208.jpg"
            }
          />

          <NotesCardComponent
            subjectName={"Software Engineering"}
            imgurl={
              "https://media.istockphoto.com/videos/digital-blue-abstract-footage-looped-hd-1080-video-id507768900?s=640x640"
            }
          />

          <NotesCardComponent
            subjectName={"Analog and Digital Electronics"}
            imgurl={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQtBzxGGM7VvNQqcf57J1jLNtHCq8CjzlnHdQ&usqp=CAU"
            }
          />

          <NotesCardComponent
            subjectName={"Mathematics"}
            imgurl={
              "https://img-a.udemycdn.com/course/750x422/1713894_9b86.jpg"
            }
          />

          <NotesCardComponent
            subjectName={"Discrete Mathematical Structures"}
            imgurl={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT22ouJBOXtfAH_PQQtLsXTgYHqLrqhHXiilA&usqp=CAU"
            }
          />
        </div>
      </div>
    </>
  );
}
