import * as React from "react";

import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

//customComponents
import GridItemAdmin from "../components/sharedComponents/UIelement/gridItemsOne";

const AdminDash = () => {
  return (
    <>
      <Container>
        <Grid container spacing={5}>
          <GridItemAdmin />
        </Grid>
      </Container>
    </>
  );
};

export default AdminDash;
