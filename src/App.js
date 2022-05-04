import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./screens";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" exact element={<Home />} /> */}

          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
