import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar";
import {
  ApprovedProjects,
  ClosedProjects,
  LandingPage,
  NewProjects,
  PendingProjects,
  TerminatedProjects,
  TotalProjects,
} from "./screens";
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
          <Route path="/" exact element={<Home />} />
          {/* <Route path="/" element={<LandingPage />} /> */}
          <Route path="/" exact element={<Home />} />
          <Route path="/app/dashboard" exact element={<AdminDashboard />} />
          <Route path="/app/config" exact element={<AdminConfig />} />
          <Route path="/app/config/subunit" exact element={<AdminSubUnit />} />
          <Route path="/app/config/users" exact element={<AdminUsers />} />

          {/* HOP */}
          <Route path="/hop/projects/total" exact element={<TotalProjects />} />
          <Route
            path="/hop/projects/pending"
            exact
            element={<PendingProjects />}
          />
          <Route path="/hop/projects/new" exact element={<NewProjects />} />
          <Route
            path="/hop/projects/closed"
            exact
            element={<ClosedProjects />}
          />
          <Route
            path="/hop/projects/approved"
            exact
            element={<ApprovedProjects />}
          />
          <Route
            path="/hop/projects/terminated"
            exact
            element={<TerminatedProjects />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
