import { combineReducers } from "redux";

const GetTimeTableReducer = (state = {}, action) => {
  if (action.type === "GET_TIME_TABLE") {
    return { ...state, timetable: action.payload };
  } else {
    return state;
  }
};

export default combineReducers({
  timetable: GetTimeTableReducer,
});
