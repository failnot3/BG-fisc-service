import * as React from "react";

import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";

import { Typography } from "@mui/material";

const GridItem = () => {
  return (
    <>
      <Grid item xs={3}>
        <Paper elevation={2}>
          <Box padding={3} sx={{ textAlign: "center" }}>
            <Typography variant='h6' component='h4'>
              Фирмени данни
            </Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper elevation={2}>
          <Box padding={3} sx={{ textAlign: "center" }}>
            <Typography variant='h6' component='h4'>
              Стоки / Продукти
            </Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper elevation={2}>
          <Box padding={3} sx={{ textAlign: "center" }}>
            <Typography variant='h6' component='h4'>
              Партньори
            </Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper elevation={2}>
          <Box padding={3} sx={{ textAlign: "center", alignItems: "center" }}>
            <Typography variant='h6' component='h4'>
              Издаване на фактура
            </Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper elevation={2}>
          <Box padding={3} sx={{ textAlign: "center" }}>
            <Typography variant='h6' component='h4'>
              Потребители
            </Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper elevation={2}>
          <Box padding={3} sx={{ textAlign: "center" }}>
            <Typography variant='h6' component='h4'>
              Продажби
            </Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper elevation={2}>
          <Box padding={3} sx={{ textAlign: "center" }}>
            <Typography variant='h6' component='h4'>
              Доставки
            </Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper elevation={2}>
          <Box padding={3} sx={{ textAlign: "center" }}>
            <Typography variant='h6' component='h4'>
              Ревизия
            </Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper elevation={2}>
          <Box padding={3} sx={{ textAlign: "center" }}>
            <Typography variant='h6' component='h4'>
              Бракуване
            </Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper elevation={2}>
          <Box padding={3} sx={{ textAlign: "center" }}>
            <Typography variant='h6' component='h4'>
              Сторно
            </Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper elevation={2}>
          <Box padding={3} sx={{ textAlign: "center" }}>
            <Typography variant='h6' component='h4'>
              Обекти
            </Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper elevation={2}>
          <Box padding={3} sx={{ textAlign: "center" }}>
            <Typography variant='h6' component='h4'>
              Справки
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </>
  );
};

export default GridItem;
