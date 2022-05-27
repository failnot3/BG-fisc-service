import React from "react";
import { BrowserRouter as Router, Route, Navigate, Routes } from "react-router-dom";

//           <MainNavigation /> - import MainNavigation from "./components/sharedComponents/Navigation/MainNavigation";

import AllFiscalDevices from "./pages/AllFiscalDevices";

import Dashboard from "./pages/Dashboard";

import CompanyDetails from "./pages/CompanyDetails";
import Dash from "./pages/Dash";
import AdminDash from "./pages/Admin";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";

import ResponsiveAppBar from "./components/sharedComponents/Navigation/ResponsiveAppBar";

const themeLight = createTheme({
  palette: {
    background: {
      default: "#73b5de",
    },
  },
});

const themeDark = createTheme({
  palette: {
    background: {
      default: "#222222",
    },
    text: {
      primary: "#ffffff",
    },
  },
});

function App() {
  const [light, setLight] = React.useState(true);
  return (
    <>
      <ThemeProvider theme={light ? themeLight : themeDark}>
        <CssBaseline />

        <Router>
          <ResponsiveAppBar />
          <main>
            <Routes>
              <Route exact path='/' element={<Dash />} />
              <Route exact path='/admin' element={<AdminDash />} />
              <Route exact path='/companyDetails' element={<CompanyDetails />} />
              <Route exact path='/AllFiscalDevices' element={<AllFiscalDevices />} />
              <Route exact path='/DemoDash' element={<Dashboard />} />
            </Routes>
          </main>
        </Router>
        <Button onClick={() => setLight((prev) => !prev)}>Toggle Theme</Button>
      </ThemeProvider>
    </>
  );
}

export default App;
