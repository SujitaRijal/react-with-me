import React from "react";
import { Route, Routes } from "react-router-dom";

import Registration from "./components/Registration/Registration";
import Register from "./components/Registration/Register";
import Login from "./components/Login/Login";
import Reg from "./components/Registration/Reg";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/register" element={<Reg />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
