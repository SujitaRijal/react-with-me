import { useFormik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const Login = () => {
  const [RememberMe, setRememberMe] = useState(false);
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        Email: "",
        Password: "",
      },
      validationSchema: Yup.object({
        Email: Yup.string()
          .email("Invalid email format")
          .required("Email is required"),
        Password: Yup.string().required("Password is required"),
      }),
      onSubmit: (values, action) => {
        console.log("logging in...", values);
        alert("Login Successful");
        action.resetForm();
      },
    });
  return (
    <div className="flex flex-col h-screen md:flex-row">
      <div className="hidden w-full md:block md:w-1/2 ">
        <img
          src="https://plus.unsplash.com/premium_photo-1661573510102-0d40d0fa822c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Login Page"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex items-center justify-center w-full p-8 bg-gray-200 md:w-1/2">
        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          <h2 className="mb-2 text-3xl font-bold text-left text-blue-700">
            Welcome Back
          </h2>
          <p className="mb-2 text-sm text-gray-600">
            Please enter your details
          </p>

          <label htmlFor="Email">Email</label>
          <input
            type="email"
            name="Email"
            id="Email"
            placeholder="Email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.Email}
            className="block w-full p-2 mb-3 rounded"
          />
          {touched.Email && errors.Email && (
            <div className="mb-2 text-sm text-red-500">{errors.Email}</div>
          )}
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            name="Password"
            id="Password"
            placeholder="Password"
            onChange={handleSubmit}
            onBlur={handleBlur}
            value={values.Password}
            className="block w-full p-2 mb-3 rounded"
          />
          {touched.Password && errors.Password && (
            <div className="mb-2 text-sm text-red-500">{errors.Password}</div>
          )}

          <div className="flex flex-col items-center justify-between mb-4 md:flex-row">
            <label className="text-sm ">
              <input
                type="checkbox"
                className="mr-2"
                checked={RememberMe}
                onChange={() => setRememberMe(!RememberMe)}
              />
              Remember Me
            </label>
            <Link
              to="/forgetPassword"
              className="text-blue-600 font-sm hover:underline"
            >
              Forget Password
            </Link>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 rounded-lg text white hover:bg-blue-700"
          >
            Sign In
          </button>
          <p className="mt-4 text-sm text-center">
            Dont have an account? {""}
            <Link
              to="/register"
              className="font-medium text-blue-600 hover:underline"
            >
              SignUp
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
