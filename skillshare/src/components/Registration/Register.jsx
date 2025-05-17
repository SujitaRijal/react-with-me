import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { UserCircle } from "lucide-react";

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
    <div
      className="fixed relative flex items-center justify-center min-h-screen bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1487611459768-bd414656ea10?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/*Overlay with blur*/}
      <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"></div>
      <div className="relative z-10 w-full max-w-md p-10 bg-white shadow-xl bg-opacity-90 rounded-3xl">
        <div className="flex flex-col items-center mb-5">
          <UserCircle className="h-16 w-16 text-[#6C63FF] mb-2" />
          <h2 className="text-3xl font-poppins font-bold text-[#6C63FF] text-center">
            Welcome to SkillShare!
          </h2>
        </div>

        <form
          className="w-full"
          style={{ fontFamily: "'Poppins',sans-serif" }}
          onSubmit={handleSubmit}
        >
          <label
            htmlFor="Username"
            className="block mb-1 text-[#6B7280] font-semibold"
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
            className={`w-full mb-2 p-2 rounded-lg border ${
              touched.Username && errors.Username
                ? "border-red-500"
                : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-[#6C63FF]`}
          />
          {touched.Username && errors.Username && (
            <div className="mb-2 text-sm text-red-500">{errors.Username}</div>
          )}

          <label
            htmlFor="Email"
            className="block mt-3 mb-1 text-[#6B7280] font-semibold"
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
            className={`w-full mb-2 p-2 rounded-lg border ${
              touched.Email && errors.Email
                ? "border-red-500"
                : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-[#6C63FF]`}
          />
          {touched.Email && errors.Email && (
            <div className="mb-2 text-sm text-red-500">{errors.Email}</div>
          )}

          <label
            htmlFor="Password"
            className="block mt-3 mb-1 text-[#6B7280] font-semibold"
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
            className={`w-full mb-2 p-2 rounded-lg border ${
              touched.Password && errors.Password
                ? "border-red-500"
                : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-[#6C63FF]`}
          />
          {touched.Password && errors.Password && (
            <div className="mb-2 text-sm text-red-500">{errors.Password}</div>
          )}
          <label
            htmlFor="confirm_password"
            className="block mt-3 mb-1 text-[#6B7280] font-semibold"
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
            className={`w-full mb-2 p-2 rounded-lg border ${
              touched.confirm_password && errors.confirm_password
                ? "border-red-500"
                : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-[#6C63FF]`}
          />
          {touched.confirm_password && errors.confirm_password && (
            <div className="mb-2 text-sm text-red-500">
              {errors.confirm_password}
            </div>
          )}
          <label className="inline-flex items-center mb-6 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
              className="form-checkbox text-[#6C63FF] mr-2"
            />
            Show Password
          </label>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#6C63FF] via-[#00C9A7] to-[#FF6584] text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            Sign Up
          </button>
          <p className="mt-4 text-sm text-center text-[#6B7280]">
            Already Registered? {""}
            <Link
              to="/login"
              className="font-semibold text-[#6C63FF] hover:underline"
            >
              Login Now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
