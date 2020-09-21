import React, { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import ResStyle from "./ResLog.module.css";

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

  var MobAniSlide = ResStyle.overlay_mobile;
  if (MobAniSignIn) {
    MobAniSlide = ResStyle.overlay_mobile + " " + ResStyle.slide1;
  } else if (MobAniSignUp) {
    MobAniSlide = ResStyle.overlay_mobile + " " + ResStyle.slide;
  }

  return (
    <div className={ResStyle.maincontainer}>
      <div
        className={
          !WebAni
            ? ResStyle.containerone
            : ResStyle.containerone + " " + ResStyle.right_panel_active
        }
        id={ResStyle.containerone}
      >
        <div
          className={
            !MobAniSignUp
              ? ResStyle.form_container + " " + ResStyle.sign_up_container
              : ResStyle.form_container +
                " " +
                ResStyle.sign_up_container +
                " " +
                ResStyle.fadein
          }
        >
          <SignUp onMobAniSignIn={onMobAniSignIn}></SignUp>
        </div>
        <div
          className={
            !MobAniSignIn
              ? ResStyle.form_container + " " + ResStyle.sign_in_container
              : ResStyle.form_container +
                " " +
                ResStyle.sign_in_container +
                " " +
                ResStyle.fadein1
          }
        >
          <SignIn onMobAniSignUp={onMobAniSignUp}></SignIn>
        </div>
        <div className={ResStyle.overlay_container}>
          <div className={ResStyle.overlay}>
            <div
              className={ResStyle.overlay_panel + " " + ResStyle.overlay_left}
            >
              <h1 className={ResStyle.h1}>Welcome Back!</h1>
              <p className={ResStyle.p}>
                To keep connected with us please login with your personal info
              </p>
              <button
                className={ResStyle.Button + " " + ResStyle.ghost}
                id={ResStyle.signIn}
                onClick={onWebAni}
              >
                Sign In
              </button>
            </div>
            <div
              className={ResStyle.overlay_panel + " " + ResStyle.overlay_right}
            >
              <h1 className={ResStyle.h1}>Hello, Friend!</h1>
              <p className={ResStyle.p}>
                Enter your personal details and start journey with us
              </p>
              <button
                className={ResStyle.Button + " " + ResStyle.ghost}
                id={ResStyle.signIn}
                onClick={onWebAni}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <div className={MobAniSlide}>
          <div className={ResStyle.overlay}></div>
        </div>
      </div>
    </div>
  );
}
