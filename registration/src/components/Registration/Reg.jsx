import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { UserCircle } from "lucide-react";

const Reg = () => {
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
        alert("Form submitted successfully!");
        action.resetForm();
      },
    });

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-[#6C63FF] via-[#00C9A7] to-[#FF6584]">
      {/* Form Section */}
      <div className="flex flex-col items-center justify-center p-10 bg-white shadow-lg md:w-1/2 bg-opacity-90 rounded-tr-3xl rounded-br-3xl">
        <UserCircle className="h-16 w-16 text-[#6C63FF] mb-6" />
        <h2 className="text-4xl font-poppins font-bold mb-6 text-[#6C63FF] text-center">
          Welcome to SkillShare!
        </h2>
        <form
          className="w-full max-w-md"
          onSubmit={handleSubmit}
          noValidate
          autoComplete="off"
        >
          <label
            className="block text-[#6B7280] font-semibold mb-1"
            htmlFor="Username"
          >
            Username
          </label>
          <input
            type="text"
            id="Username"
            name="Username"
            placeholder="Enter your username"
            value={values.Username}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full mb-3 p-3 rounded-lg border ${
              touched.Username && errors.Username
                ? "border-red-500"
                : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-[#6C63FF]`}
          />
          {touched.Username && errors.Username && (
            <p className="mb-3 text-sm text-red-500">{errors.Username}</p>
          )}

          <label
            className="block text-[#6B7280] font-semibold mb-1"
            htmlFor="Email"
          >
            Email
          </label>
          <input
            type="email"
            id="Email"
            name="Email"
            placeholder="Enter your email"
            value={values.Email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full mb-3 p-3 rounded-lg border ${
              touched.Email && errors.Email
                ? "border-red-500"
                : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-[#6C63FF]`}
          />
          {touched.Email && errors.Email && (
            <p className="mb-3 text-sm text-red-500">{errors.Email}</p>
          )}

          <label
            className="block text-[#6B7280] font-semibold mb-1"
            htmlFor="Password"
          >
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="Password"
            name="Password"
            placeholder="Enter your password"
            value={values.Password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full mb-3 p-3 rounded-lg border ${
              touched.Password && errors.Password
                ? "border-red-500"
                : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-[#6C63FF]`}
          />
          {touched.Password && errors.Password && (
            <p className="mb-3 text-sm text-red-500">{errors.Password}</p>
          )}

          <label
            className="block text-[#6B7280] font-semibold mb-1"
            htmlFor="confirm_password"
          >
            Confirm Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="confirm_password"
            name="confirm_password"
            placeholder="Confirm your password"
            value={values.confirm_password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full mb-3 p-3 rounded-lg border ${
              touched.confirm_password && errors.confirm_password
                ? "border-red-500"
                : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-[#6C63FF]`}
          />
          {touched.confirm_password && errors.confirm_password && (
            <p className="mb-3 text-sm text-red-500">
              {errors.confirm_password}
            </p>
          )}

          <label className="inline-flex items-center mb-6 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
              className="form-checkbox text-[#6C63FF] mr-2"
            />
            <span className="text-[#6B7280] text-sm">Show Password</span>
          </label>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#6C63FF] via-[#00C9A7] to-[#FF6584] text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            Sign Up
          </button>

          <p className="mt-5 text-center text-[#6B7280] text-sm">
            Already registered?{" "}
            <Link
              to="/login"
              className="text-[#6C63FF] font-semibold hover:underline"
            >
              Login now
            </Link>
          </p>
        </form>
      </div>

      {/* Image Section */}
      <div className="items-center justify-center hidden p-10 bg-white md:flex md:w-1/2 bg-opacity-90 rounded-tl-3xl rounded-bl-3xl">
        <img
          src=""
          alt="Skills illustration"
          className="max-w-full max-h-[450px]"
        />
      </div>
    </div>
  );
};

export default Reg;

// https://images.unsplash.com/photo-1487611459768-bd414656ea10?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
