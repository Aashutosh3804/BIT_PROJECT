import React, { createContext, useReducer } from "react";

const AuthContext = createContext();
const initialState = {
  isLoggedIn: false,
  user: null,
  token: localStorage.getItem("token"),
  loading: true,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "User_Loaded":
      return {
        ...state,
        user: action.payload.user,
        loading: false,
        isLoggedIn: true,
      };
    case "Login_Start":
      return { ...state, loading: true };
    case "Login":
    case "SignUp":
      localStorage.setItem("token", action.payload.token);

      return {
        ...state,
        isLoggedIn: true,
        loading: false,
      };
    case "LogOut":
    case "LOGIN_FAIL":
      localStorage.removeItem("token");

      return {
        ...state,
        isLoggedIn: false,
        user: null,
        token: null,
        loading: false,
      };

    default:
      return state;
  }
};

const Auth = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};
export { AuthContext, Auth };
