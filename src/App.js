import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar";
import {} from "./screens";
import {
  ApprovedProjects,
  ClosedProjects,
  NewProjects,
  PendingProjects,
  TerminatedProjects,
  TotalProjects,
  AdminDashboard,
  Home,
  AdminConfig,
  AdminSubUnit,
  AdminUsers,
  FrontDeskDashboard,
  FrontDeskNewProject,
  FrontDeskConfirmedProject,
  FrontDeskPendingProject,
  FrontDeskRejectedProject,
} from "./screens";
import Dashboard from "./screens/Dashboard";

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
          <Route
            path="/app/frontdesk/dashboard"
            exact
            element={<FrontDeskDashboard />}
          />
          <Route
            path="/app/frontdesk/newproject"
            exact
            element={<FrontDeskNewProject />}
          />
          <Route
            path="/app/frontdesk/confirmedproject"
            exact
            element={<FrontDeskConfirmedProject />}
          />
          <Route
            path="/app/frontdesk/pendingproject"
            exact
            element={<FrontDeskPendingProject />}
          />
          <Route
            path="/app/frontdesk/rejectedproject"
            exact
            element={<FrontDeskRejectedProject />}
          />

          <Route path="/hop/dashboard" exact element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
