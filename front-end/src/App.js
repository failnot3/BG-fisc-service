import React from "react";
import { BrowserRouter as Router, Route, Navigate, Routes } from "react-router-dom";

import MainNavigation from "./components/sharedComponents/Navigation/MainNavigation";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

import CompanyDetails from "./pages/CompanyDetails";
import Dash from "./pages/Dash";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route exact path='/' element={<Dash />} />
          <Route exact path='/Login' element={<Login />} />
          <Route exact path='/companyDetails' element={<CompanyDetails />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
