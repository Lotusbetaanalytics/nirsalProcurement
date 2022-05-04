import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar";
import { LandingPage } from "./screens";

function App() {
  return (
    <>
      <Router>
        <Routes> <Route path="/sidebar" exact element={<Sidebar />} /> </Routes>
          {/* <Route path="/" exact element={<Home />} /> */}

          <Route path="/" element={<LandingPage />} />
      </Router>
    </>
  );
}

export default App;
