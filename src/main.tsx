// main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import TabComponent from "./components/tab";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; // Adjust this if Navbar is also in a folder

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <div>
        <Navbar /> {/* Move Navbar outside of the Routes */}
        <TabComponent />
        {/* Define routes. This is IMPORTANT, otherwise the pages will not be read and will not be redirected. */}
        <Routes>
          {/* Add your route definitions here */}
          {/* <Route path="/register" element={<Register />} /> */}
        </Routes>
      </div>
    </Router>
  </React.StrictMode>
);
