import React,{useState,createContext} from "react";

const Mycontext = createContext();



const TimeContext=props=>{
    const [timetable, settimetable] = useState({ })
    return (
        <Mycontext.Provider value={{ timetable, settimetable }}>
          {props.children}
        </Mycontext.Provider>
      );
};
export {Mycontext,TimeContext};
