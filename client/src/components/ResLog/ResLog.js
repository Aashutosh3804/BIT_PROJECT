import React, { useState } from "react";
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
        className={!WebAni ? "container" : "container right-panel-active"}
        id="container"
      >
        <div
          className={
            !MobAniSignUp
              ? "form-container sign-up-container"
              : "form-container sign-up-container fadein"
          }
        >
          <form action="#">
            <h1>Create Account</h1>

            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Password" />

            <button>Sign Up</button>
            <button id="new1" onClick={onMobAniSignIn}>
              signIn
            </button>
          </form>
        </div>
        <div
          className={
            !MobAniSignIn
              ? "form-container sign-in-container"
              : "form-container sign-in-container fadein1"
          }
        >
          <form action="#">
            <h1>Sign in</h1>

            <span>or use your account</span>
            <input type="text" placeholder="USN" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
            <button id="new" onClick={onMobAniSignUp}>
              SignUp
            </button>
          </form>
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
