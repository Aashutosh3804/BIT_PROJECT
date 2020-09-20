import React, { useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import Axios from "axios";
import { AuthContext } from "../../context/auth";

const SignUp = (props) => {
  const { state, dispatch } = useContext(AuthContext);
  const [err, setError] = useState([]);

  const onSubmit = async (values) => {
    try {
      const res = await Axios.post(
        "/getSignup",
        JSON.stringify({ ...values, usn: values.usn.toLowerCase() }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch({
        type: "SignUp",
        payload: {
          user: res.data.token,
        },
      });
    } catch (error) {
      dispatch({
        type: "LOGIN_FAIL",
      });
      setError(error.response.data.errors);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      usn: "",
      batch: "",
      year: "",
      section: "",
      confirm: "",
    },
    onSubmit,
    validateOnChange: true,

    validate: (values) => {
      let errors = {};
      if (!values.usn) {
        errors.usn = "* USN Required";
      }
      if (!values.password) {
        errors.password = "* Password Required";
      }
      if (!values.name) {
        errors.name = "*Name Required";
      }
      if (!values.year) {
        errors.year = "*Year Required";
      }
      if (!values.email) {
        errors.email = "*Email Required";
      }
      // else if(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)){
      //   errors.email='Invalid email format'
      // }
      if (!values.batch) {
        errors.batch = "Batch Required";
      }
      if (!values.section) {
        errors.section = "*Section Required";
      }
      if (!values.confirm || values.confirm !== values.password) {
        errors.confirm = "Not Mathching Password";
      }

      return errors;
    },
  });
  useEffect(() => {
    formik.resetForm();
  }, [props, state]);
  let err_jsx;
  if (err.length > 0) {
    err_jsx = err.map((er) => {
      return (
        <h4 style={{ color: "red" }} key='sd'>
          {er.message}
        </h4>
      );
    });
    err.forEach((er) => setTimeout(() => setError(err.splice(1)), 4000));
  }
  return (
    <form onSubmit={formik.handleSubmit}>
      <h1>Create Account</h1>

      <span>or use your email for registration</span>
      <div>{err_jsx}</div>

      <input
        onBlur={formik.handleBlur}
        type='text'
        placeholder={
          !(formik.touched.name && formik.errors.name)
            ? "Name"
            : formik.errors.name
        }
        name='name'
        onChange={formik.handleChange}
        value={formik.values.name}
        className={formik.touched.name && formik.errors.name ? "error" : null}
      />

      <input
        onBlur={formik.handleBlur}
        type='email'
        placeholder={
          !(formik.touched.email && formik.errors.email)
            ? "Email"
            : formik.errors.email
        }
        name='email'
        onChange={formik.handleChange}
        value={formik.values.email}
        className={formik.touched.email && formik.errors.email ? "error" : null}
      />

      <input
        onBlur={formik.handleBlur}
        type='text'
        placeholder={
          !(formik.touched.usn && formik.errors.usn) ? "USN" : formik.errors.usn
        }
        name='usn'
        onChange={formik.handleChange}
        value={formik.values.usn}
        className={formik.touched.usn && formik.errors.usn ? "error" : null}
      />

      <input
        onBlur={formik.handleBlur}
        type='text'
        placeholder={
          !(formik.touched.batch && formik.errors.batch)
            ? "batch"
            : formik.errors.batch
        }
        name='batch'
        onChange={formik.handleChange}
        value={formik.values.batch}
        className={formik.touched.batch && formik.errors.batch ? "error" : null}
      />

      <input
        onBlur={formik.handleBlur}
        type='text'
        placeholder={
          !(formik.touched.year && formik.errors.year)
            ? "Year"
            : formik.errors.year
        }
        name='year'
        onChange={formik.handleChange}
        value={formik.values.year}
        className={formik.touched.year && formik.errors.year ? "error" : null}
      />

      <input
        onBlur={formik.handleBlur}
        type='text'
        placeholder={
          !(formik.touched.section && formik.errors.section)
            ? "Section"
            : formik.errors.section
        }
        name='section'
        onChange={formik.handleChange}
        value={formik.values.section}
        className={
          formik.touched.section && formik.errors.section ? "error" : null
        }
      />

      <input
        onBlur={formik.handleBlur}
        type='password'
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

      <input
        onBlur={formik.handleBlur}
        type='password'
        placeholder={
          !(formik.touched.confirm && formik.errors.confirm)
            ? "ConfirmPasssword"
            : formik.errors.confirm
        }
        name='confirm'
        onChange={formik.handleChange}
        value={formik.values.confirm}
        className={
          formik.touched.confirm && formik.errors.confirm ? "error" : null
        }
      />
      {formik.touched.confirm && formik.errors.confirm ? (
        <h4 style={{ color: "red" }}>Password Dont Match</h4>
      ) : null}

      <button type='submit'>Sign Up</button>
      <button
        id='new1'
        onClick={() => {
          props.onMobAniSignIn();
        }}
        type='button'
      >
        signIn
      </button>
    </form>
  );
};
export default SignUp;
