import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <>
      <Router>
        <Routes> <Route path="/sidebar" exact element={<Sidebar />} /> </Routes>
      </Router>
    </>
  );
}

export default App;
