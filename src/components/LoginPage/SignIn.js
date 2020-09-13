import React from 'react';
import './SignIn.css';

function SignIn() {
    // useEffect(
    // ()=>{const container = document.getElementById('container');
    //     const signInButton = document.getElementById('signIn');
    //     signInButton.addEventListener('click', () => {
    //     container.classList.remove("right-panel-active");},[]);
// });
const clickHua=()=>{
                const container = document.getElementById('container');
                const signInPage = document.querySelector(".form-container");
                const overlay = document.querySelector(".overlay-container");
                const signUp = document.querySelector(".sign-up-container");
                signInPage.classList.toggle("opaque");
                container.classList.add("right-panel-active");
                overlay.style.display = "none";
                signUp.style.opacity=1;
                signUp.style.width = "100%";


            }
const clickH=()=>{
                const container = document.getElementById('container');
                const signInPage = document.querySelector(".form-container");

                signInPage.classList.toggle("opaque");
                container.classList.remove("right-panel-active");
            }
return (
            <div>
                <div className="form-container sign-in-container">
                        <form action="" method="post">
                            <h1>Sign in</h1>
                            <span>or use your account</span>
                            <input type="email" placeholder="Email" name="email" />
                            <input type="password" placeholder="Password" name="password" />
                            <a href="#">Forgot your password?</a>
                            <button >Sign In</button>
                        </form>
                </div>
                <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                <button className="ghost" onClick={clickH} id="signIn">Sign In</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <button className="ghost" onClick={clickHua} id="signUp">Sign Up</button>
                            </div>
                        </div>
                </div>
            </div>
            );
}

export default SignIn;
