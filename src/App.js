import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar";
import { LandingPage } from "./screens";

function App() {
  return (
    <>
      <Router>
        <Routes> 
          <Route path="/sidebar" exact element={<Sidebar />} /> 
          {/* <Route path="/" exact element={<Home />} /> */}

          <Route path="/" element={<LandingPage />} />
          </Routes>
      </Router>
     
    </>
  );
}

export default App;
