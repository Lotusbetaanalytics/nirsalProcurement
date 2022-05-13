import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
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
          <Route path="/app/frontdesk/dashboard" exact element={<FrontDeskDashboard />} />
          <Route path="/app/frontdesk/newproject" exact element={<FrontDeskNewProject />} />
          <Route path="/app/frontdesk/confirmedproject" exact element={<FrontDeskConfirmedProject />} />
          <Route path="/app/frontdesk/pendingproject" exact element={<FrontDeskPendingProject />} />
          <Route path="/app/frontdesk/rejectedproject" exact element={<FrontDeskRejectedProject />} />
        </Routes>
      </Router>
     
    </>
  );
}

export default App;
