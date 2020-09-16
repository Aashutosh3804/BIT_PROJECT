import axios from "axios";

export const getTimeTable = () => {
  return async (dispatch) => {
    const res = await axios.get("/timetable");
    dispatch({ type: "GET_TIME_TABLE", payload: res });
    console.log(res);
  };
};
