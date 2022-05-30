import * as React from "react";

import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import { Typography } from "@mui/material";

function myFunction() {
  alert("I am an alert box!");
}
function myFunction1() {
  window.open("http://localhost:3000/AllFiscalDevices", "_self");
}

const GridItem = () => {
  return (
    <>
      <Grid item xs={4}>
        <Box padding={3} sx={{ textAlign: "center" }}>
          <Typography variant='h6' component='h4'>
            <Button variant='contained' onClick={myFunction1}>
              Всички Фискални Устройства
            </Button>
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Box padding={3} sx={{ textAlign: "center" }}>
          <Typography variant='h6' component='h4'>
            <Button variant='contained' onClick={myFunction}>
              Справки Фискални Устройства
            </Button>
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Box padding={3} sx={{ textAlign: "center" }}>
          <Typography variant='h6' component='h4'>
            <Button variant='contained'>Изтичащи договори</Button>
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Box padding={3} sx={{ textAlign: "center" }}>
          <Typography variant='h6' component='h4'>
            <Button variant='contained'>Заявка нова фирма</Button>
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Box padding={4} sx={{ textAlign: "center" }}>
          <Typography variant='h6' component='h4'>
            <Button variant='contained'>Промяна по текуща фирма</Button>
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Box padding={4} sx={{ textAlign: "center" }}>
          <Typography variant='h6' component='h4'>
            <Button variant='contained'>...</Button>
          </Typography>
        </Box>
      </Grid>
    </>
  );
};

export default GridItem;
