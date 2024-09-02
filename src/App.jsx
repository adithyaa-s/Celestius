import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
