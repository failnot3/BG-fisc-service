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
        <Paper elevation={2}>
          <Box padding={3} sx={{ textAlign: "center" }}>
            <Typography variant='h6' component='h4'>
              Списък с всички фискални устройства
              <Button variant='contained' onClick={myFunction1}>
                Всички Фискални Устройства
              </Button>
            </Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper elevation={2}>
          <Box padding={3} sx={{ textAlign: "center" }}>
            <Typography variant='h6' component='h4'>
              Справки за конкретно фискално устройство
              <Button variant='contained' onClick={myFunction}>
                Справки Фискални Устройства
              </Button>
            </Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper elevation={2}>
          <Box padding={3} sx={{ textAlign: "center" }}>
            <Typography variant='h6' component='h4'>
              Справки за изтичащи договори
              <Button variant='contained'>Изтичащи договори</Button>
            </Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper elevation={2}>
          <Box padding={3} sx={{ textAlign: "center", alignItems: "center" }}>
            <Typography variant='h6' component='h4'>
              ...
            </Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper elevation={2}>
          <Box padding={3} sx={{ textAlign: "center" }}>
            <Typography variant='h6' component='h4'>
              <Button variant='contained'>Данни за нов обект</Button>
            </Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper elevation={2}>
          <Box padding={3} sx={{ textAlign: "center" }}>
            <Typography variant='h6' component='h4'>
              ...
            </Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper elevation={2}>
          <Box padding={3} sx={{ textAlign: "center" }}>
            <Typography variant='h6' component='h4'>
              ..
            </Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper elevation={2}>
          <Box padding={3} sx={{ textAlign: "center" }}>
            <Typography variant='h6' component='h4'>
              ..
            </Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper elevation={2}>
          <Box padding={3} sx={{ textAlign: "center" }}>
            <Typography variant='h6' component='h4'>
              ..
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </>
  );
};

export default GridItem;
