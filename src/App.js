import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar";
import { LandingPage } from "./screens";
import {
  AdminDashboard,
  Home,
  AdminConfig,
  AdminSubUnit,
  AdminUsers,
} from "./screens";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/sidebar" exact element={<Sidebar />} />
          {/* <Route path="/" exact element={<Home />} /> */}

          <Route path="/" element={<LandingPage />} />
        </Routes>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/app/dashboard" exact element={<AdminDashboard />} />
          <Route path="/app/config" exact element={<AdminConfig />} />
          <Route path="/app/config/subunit" exact element={<AdminSubUnit />} />
          <Route path="/app/config/users" exact element={<AdminUsers />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
