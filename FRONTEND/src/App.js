import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUsPage from "./Pages/aboutUsPage/AboutUsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AboutUsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
