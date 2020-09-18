import React, { createContext,useReducer } from "react";

const AuthContext = createContext();
const initialState = {
  isLoggedIn: false,
  user: null,
  token: null,
  loading:false,

};
const reducer = (state, action) => {
  switch (action.type) {
    
    case "Login_Start":
      return{...state,loading:true}
    case "Login":
    case "SignUp":

      return { ...state, isLoggedIn: true, user: action.payload.user ,loading:false};
    case "LogOut":
    case "LOGIN_FAIL":
      return { ...state, isLoggedIn: false, user: null, token: null ,loading:false};
    

    default:
      return state;
  }
};

const Auth = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{state, dispatch}}>
      {props.children}
    </AuthContext.Provider>
  );
};
export  {AuthContext,Auth};
