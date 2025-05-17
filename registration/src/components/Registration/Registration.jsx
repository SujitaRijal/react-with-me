import React, { useState } from "react";

const Registration = () => {
  const [formData, setFormData] = useState({
    Username: "",
    Email: "",
    Password: "",
    confirm_password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); //clear on change
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.Username.trim()) newErrors.Username = "Username is required";
    if (!formData.Email.trim()) newErrors.Email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.Email))
      newErrors.Email = "Invalid email format";
    if (!formData.Password) newErrors.Password = "Password is required";
    else if (formData.Password.length < 6)
      newErrors.Password = "Password must be at least 6 characters";

    if (!formData.confirm_password)
      newErrors.confirm_password = "Please confirm your password";
    else if (formData.Password !== formData.confirm_password)
      newErrors.confirm_password = "Password do not match";
    return newErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    console.log("Form submitted successfully", formData);
    alert("Form submitted");
  };

  return (
    <div>
      <form className="max-w-md p-4 mx-auto " onSubmit={handleSubmit}>
        <h2 className="text-2xl text-center">Registration form</h2>
        <label htmlFor="Username">Username</label>
        <input
          type="text"
          name="Username"
          id="Username"
          placeholder="Username"
          value={formData.Username}
          onChange={handleChange}
          className="block w-full p-2 mb-3 border rounded"
        />
        {errors.Username && (
          <p className="mb-2 text-sm text-red-500">{errors.Username}</p>
        )}
        <label htmlFor="Email">Email</label>
        <input
          type="Email"
          name="Email"
          id="Email"
          placeholder="Email"
          value={formData.Email}
          onChange={handleChange}
          className="block w-full p-2 mb-3 border rounded"
        />
        {errors.Email && (
          <p className="mb-2 text-sm text-red-500">{errors.Email}</p>
        )}
        <label htmlFor="Password">Password</label>
        <input
          type={showPassword ? "text" : "password"}
          name="Password"
          id="Password"
          placeholder="Password"
          value={formData.Password}
          onChange={handleChange}
          className="block w-full p-2 mb-3 border rounded"
        />
        {errors.Password && (
          <p className="mb-2 text-sm text-red-500">{errors.Password}</p>
        )}
        <label htmlFor=" confirm_password">Confirm Password</label>
        <input
          type={showPassword ? "text" : "password"}
          name="confirm_password"
          id="confirm_password"
          placeholder="confirm Password"
          value={formData.confirm_password}
          onChange={handleChange}
          className="block w-full p-2 mb-3 border rounded"
        />
        {errors.confirm_password && (
          <p className="mb-2 text-sm text-red-500">{errors.confirm_password}</p>
        )}
        <label className="block mb-4 text-sm">
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
          className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Register Now
        </button>
      </form>
    </div>
  );
};

export default Registration;
