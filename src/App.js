import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
