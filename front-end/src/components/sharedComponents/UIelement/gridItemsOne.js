import * as React from "react";

import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";

import { Typography } from "@mui/material";

const GridItemAdmin = () => {
  return (
    <>
      <Grid item xs={4}>
        <Paper elevation={2}>
          <Box padding={3} sx={{ textAlign: "center" }}>
            <Typography variant='h6' component='h4'>
              Добавяне на нов модел ФУ
            </Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper elevation={2}>
          <Box padding={3} sx={{ textAlign: "center" }}>
            <Typography variant='h6' component='h4'>
              Добавяне на нова фирма
            </Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper elevation={2}>
          <Box padding={3} sx={{ textAlign: "center" }}>
            <Typography variant='h6' component='h4'>
              Редакция на бланки
            </Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper elevation={2}>
          <Box padding={3} sx={{ textAlign: "center" }}>
            <Typography variant='h6' component='h4'>
              Данни за сервизна фирма
            </Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper elevation={2}>
          <Box padding={3} sx={{ textAlign: "center" }}>
            <Typography variant='h6' component='h4'>
              Доставки
            </Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper elevation={2}>
          <Box padding={3} sx={{ textAlign: "center" }}>
            <Typography variant='h6' component='h4'>
              Доставки
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </>
  );
};

export default GridItemAdmin;
