import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Registration/Register";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />}></Route>
    </Routes>
  );
};

export default App;
