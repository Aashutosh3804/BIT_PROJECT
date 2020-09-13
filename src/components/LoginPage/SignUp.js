import React from 'react';
import './SignIn.css';
function SignUp(){
    // to check if the password entered are same or not
    var check =()=>{
        console.log("it came here")
        const message = document.getElementById("message");
        if(document.getElementById("pw").value === document.getElementById("cpw").value){
            message.style.color = "green";
            document.getElementById('message').innerHTML = 'Yay they\'re the same';
        }
        else{
            message.style.color = "red";
            document.getElementById('message').innerHTML = 'Ooh you sure they\'re the same?';
        }
    }
    const clickH=()=>{
                console.log("hallo");
                const container = document.getElementById('container');
                const signInPage = document.querySelector(".form-container");
                const overlay = document.querySelector(".overlay-container");
                const signUp = document.querySelector(".sign-up-container");
                overlay.style.display = "block";
                signUp.style.opacity=0;
                container.classList.remove("right-panel-active");
                signInPage.classList.toggle("opaque");
            }
  return (
    <div className="form-container sign-up-container">
        <form action="" method = "post">
            <h1 >Join us</h1>
            <p className="SignUpPs">what do they call you?</p>
            <input type="text" name ="name"/>
            <p className="SignUpPs">Your email buddy....</p>
            <input type="email" placeholder="" name ="email"/>
            <p className="SignUpPs">What would your password be?</p>
            <input id="pw" type="password"  placeholder="" name ="password"/>
            <p className="SignUpPs">Just making sure you typed it right</p>
            <input id="cpw" type="password" onKeyUp={check} placeholder="" />
            <p id="message"></p>
            <p className="SignUpPs">Dont forget your USN</p>
            <input type="text" placeholder="" name ="usn"/>
            <p className="SignUpPs">What was your batch again?</p>
            <input type="text" placeholder="" name ="batch"/>
            <p className="SignUpPs">Also which year in BIT ?</p>
            <input type="text" placeholder="" name ="year"/>
            <p className="SignUpPs">Finally which section bud?</p>
            <input type="text" placeholder="" name ="section"/>
            <button className="signUp">Sign Up</button>
            <a className="signIn" onClick={clickH} id="signUp"> Sign In </a>
        </form>
    </div>
    );
}

export default SignUp;
