import * as React from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

//customComponents
import GridItem from "../components/sharedComponents/UIelement/gridItems";

const Dash = () => {
  return (
    <>
      <Container>
        <Grid container spacing={5}>
          <GridItem />
        </Grid>
      </Container>
    </>
  );
};

export default Dash;
