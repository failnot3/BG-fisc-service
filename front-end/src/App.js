import React from "react";
import { BrowserRouter as Router, Route, Navigate, Routes } from "react-router-dom";

import MainNavigation from "./components/sharedComponents/Navigation/MainNavigation";

import AllFiscalDevices from "./pages/AllFiscalDevices";

import CompanyDetails from "./pages/CompanyDetails";
import Dash from "./pages/Dash";
import AdminDash from "./pages/Admin";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route exact path='/' element={<Dash />} />
          <Route exact path='/admin' element={<AdminDash />} />
          <Route exact path='/companyDetails' element={<CompanyDetails />} />
          <Route exact path='/AllFiscalDevices' element={<AllFiscalDevices />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
