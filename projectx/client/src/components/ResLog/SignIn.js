import React, { useContext, useEffect, } from "react";
import { useFormik } from "formik";
import { AuthContext } from "../../context/Auth/auth";
import { Spinner } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from "react-router";
const SignIn = (props) => {
  const initialValues = {
    password: "",
    usn: "",
  };
  const { state, Login } = useContext(AuthContext);

  const onSubmit = (values)=>{
    Login(values)
  }
  let err_jsx;
  if (state.error.length > 0) {

    err_jsx = state.error.map((er) => {
      return (
        <h4 style={{ color: "red" }} key='sd'>
          {er.message}
        </h4>
      );
    });
  }

  const validate = (values) => {
    let errors = {};
    if (!values.usn) {
      // console.log('hello')
      errors.usn = "Required";
    }
    if (!values.password) {
      errors.password = "Required";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues,
    validate,

    onSubmit,
  });

  useEffect(() => {
    formik.resetForm();
  }, [props, state]);
  let jsx = !state.loading ? (
    <form onSubmit={formik.handleSubmit}>
      <h1>Sign in</h1>
      {err_jsx}

      <span>or use your account</span>
      <input
        type='text'
        placeholder={
          !(formik.touched.usn && formik.errors.usn) ? "USN" : formik.errors.usn
        }
        name='usn'
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.usn}
        className={formik.touched.usn && formik.errors.usn ? "error" : null}
      />
      <input
        type='password'
        onBlur={formik.handleBlur}
        placeholder={
          !(formik.touched.password && formik.errors.password)
            ? "Password"
            : formik.errors.password
        }
        name='password'
        onChange={formik.handleChange}
        value={formik.values.password}
        className={
          formik.touched.password && formik.errors.password ? "error" : null
        }
      />
      <a href='/'>Forgot your password?</a>
      <button type='submit'>Sign In</button>
      <button id='new' onClick={props.onMobAniSignUp} type='button'>
        SignUp
      </button>
    </form>
  ) : (
    <div style={{ position: "relative", left: "45%", top: "40%" }}>
      <Spinner animation='border' variant='primary' size='ml' />
    </div>
  );

  if (state.isLoggedIn) {
    jsx = <Redirect to='/' />;
  }

  return <>{jsx}</>;
};
export default SignIn;
