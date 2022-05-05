import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./screens";
import Dashboard from "./screens/Dashboard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" exact element={<Home />} /> */}

          <Route path="/" element={<LandingPage />} />
          <Route path="/hop/dashboard" exact element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
