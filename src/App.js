import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  AdminDashboard,
  Home,
  AdminConfig,
  AdminSubUnit,
  AdminUsers,
} from "./screens";
import HopDashboard from "./screens/HopDashboard";
import PdoDashboard from "./screens/PdoDashboard";
import PdoNewProjectList from "./screens/PdoNewProjectList";

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
          <Route path="/hop/dashboard" exact element={<HopDashboard />} />
          <Route path="/pdo/dashboard" exact element={<PdoDashboard />} />
          <Route
            path="/pdo/newprojectlist"
            exact
            element={<PdoNewProjectList />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
