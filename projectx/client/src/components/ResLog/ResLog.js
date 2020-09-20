import React, { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import "./ResLog.css";

export default function ResLog() {
  const [WebAni, setWebAni] = useState(false);
  const [MobAniSignIn, setMobAniSignIn] = useState(false);
  const [MobAniSignUp, setMobAniSignUp] = useState(false);

  const onWebAni = () => {
    setWebAni(!WebAni);
  };
  const onMobAniSignIn = () => {
    setMobAniSignUp(false);
    setMobAniSignIn(true);
  };
  const onMobAniSignUp = () => {
    setMobAniSignUp(true);
    setMobAniSignIn(false);
  };

  var MobAniSlide = "overlay-mobile";
  if (MobAniSignIn) {
    MobAniSlide += " slide1";
  } else if (MobAniSignUp) {
    MobAniSlide += " slide";
  }

  return (
    <div className="main-container">
      <div
        className={!WebAni ? "containerone" : "container right-panel-active"}
        id="containerone"
      >
        <div
          className={
            !MobAniSignUp
              ? "form-container sign-up-container"
              : "form-container sign-up-container fadein"
          }
        >
          <SignUp onMobAniSignIn={onMobAniSignIn}></SignUp>
        </div>
        <div
          className={
            !MobAniSignIn
              ? "form-container sign-in-container"
              : "form-container sign-in-container fadein1"
          }
        >
          <SignIn onMobAniSignUp={onMobAniSignUp}></SignIn>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" id="signIn" onClick={onWebAni}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp" onClick={onWebAni}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <div className={MobAniSlide}>
          <div className="overlay"></div>
        </div>
      </div>
    </div>
  );
}
