import React from 'react';
import './SignIn.css';
import './LogInPage.css';
import SignIn from './SignIn';
import SignUp from './SignUp';
function LogInPage() {
  return (
    <div className="container" id="container" >
      <SignIn/>
      <SignUp/>
    </div>
    );
}

export default LogInPage;
