import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import TabComponent from "./components/tab";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import LogIn from "./components/login";
import Title from "./components/title";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <div className="app-bg">
        <Navbar />
        <Title />
        <TabComponent />
        <Routes>
          {/* Define routes. This is IMPORTANT, otherwise the pages will not be read and will not be redirected. */}
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </div>
    </Router>
  </React.StrictMode>
);
