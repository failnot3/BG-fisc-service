import React from "react";
import { BrowserRouter as Router, Route, Navigate, Routes } from "react-router-dom";

import MainNavigation from "./components/sharedComponents/Navigation/MainNavigation";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Demo from "./pages/Demo";
import CompanyDetails from "./pages/CompanyDetails";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route exact path='/Login' element={<Login />} />
          <Route exact path='/demo' element={<Demo />} />
          <Route exact path='/companyDetails' element={<CompanyDetails />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
