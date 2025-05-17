import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        Username: "",
        Email: "",
        Password: "",
        confirm_password: "",
      },
      validationSchema: Yup.object({
        Username: Yup.string().required("Username is required"),

        Email: Yup.string()
          .email("Invalid email format")
          .required("Email is required"),

        Password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .required("Password is required"),

        confirm_password: Yup.string()
          .oneOf([Yup.ref("Password")], "Passwords must match")
          .required("Confirm password is required"),
      }),
      onSubmit: (values, action) => {
        console.log("Form submitted", values);
        alert("form submitted successfully!!");
        action.resetForm();
      },
    });

  return (
    <div className="flex flex-col min-h-screen md:flex-row font-['Inter'] bg-gradient-to-r from-[#F2F6FF] to -[#ffffff]">
      <div className="flex items-center justify-center w-full p-8 md:w-1/2">
        <form
          className="w-full max-w-md p-8 bg-white rounded-2xl backdrop-blur-md"
          style={{ fontFamily: "'Poppins',sans-serif" }}
          onSubmit={handleSubmit}
        >
          <h2 className="mb-6 text-3xl font-bold text-center text-['Poppins'] text-[#6C63FF]">
            Welcome
          </h2>
          <label
            htmlFor="Username"
            className="block mb-1 text-sm font-semibold"
          >
            Username
          </label>
          <input
            type="text"
            name="Username"
            id="Username"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.Username}
            placeholder="Username"
            className=" w-full px-4 py-2 mb-2 text-sm bg-[#F2F6FF] border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
          />
          {touched.Username && errors.Username && (
            <div className="mb-2 text-xs text-red-500">{errors.Username}</div>
          )}

          <label
            htmlFor="Email"
            className="block mt-3 mb-1 text-sm font-semibold"
          >
            Email
          </label>
          <input
            type="email"
            name="Email"
            id="Email"
            placeholder="Email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.Email}
            className=" w-full px-4 py-2 mb-2 text-sm bg-[#F2F6FF] border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
          />
          {touched.Email && errors.Email && (
            <div className="mb-2 text-xs text-red-500">{errors.Email}</div>
          )}

          <label
            htmlFor="Password"
            className="block mt-3 mb-1 text-sm font-semibold"
          >
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="Password"
            id="Password"
            placeholder="Password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.Password}
            className=" w-full px-4 py-2 mb-2 text-sm bg-[#F2F6FF] border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
          />
          {touched.Password && errors.Password && (
            <div className="mb-2 text-xs text-red-500">{errors.Password}</div>
          )}
          <label
            htmlFor="confirm_password"
            className="block mt-3 mb-1 text-sm font-semibold"
          >
            Confirm Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="confirm_password"
            id="confirm_password"
            placeholder="Confirm Password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.confirm_password}
            className=" w-full px-4 py-2 mb-2 text-sm bg-[#F2F6FF] border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
          />
          {touched.confirm_password && errors.confirm_password && (
            <div className="mb-2 text-xs text-red-500">
              {errors.confirm_password}
            </div>
          )}
          <label className="block mt-3 mb-4 text-sm">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
              className="mr-2"
            />
            Show Password
          </label>
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white transition duration-300 bg-pink-500 rounded-lg bg-gradient-to-r from-purple-500 to hover:to-purple-500"
          >
            Sign Up
          </button>
          <p className="mt-4 text-sm text-center text-[#6B7280]">
            Already Registered? {""}
            <Link
              to="/login"
              className="font-medium text-[#6C63FF] hover:underline"
            >
              Login Now
            </Link>
          </p>
        </form>
      </div>

      {/* image */}
      <div className="hidden w-full md:w-1/2 md:block">
        <img
          src="https://images.unsplash.com/photo-1487611459768-bd414656ea10?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Registration visual"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Register;
