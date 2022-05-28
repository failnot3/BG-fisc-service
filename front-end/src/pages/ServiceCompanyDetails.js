import * as React from "react";

import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { Typography } from "@mui/material";
import CompanyInfoComponent from "./pagesComponents/ServiceCompanyDetailsComponent";

const ServiceCompanyDetails = () => {
  return (
    <>
      <Paper variant='outlined' style={{ margin: "auto" }}>
        <CompanyInfoComponent />
      </Paper>
    </>
  );
};

export default ServiceCompanyDetails;
