import * as React from "react";

import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

//customComponents
import GridItem from "../components/sharedComponents/UIelement/gridItems";

const Demo = () => {
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

export default Demo;
