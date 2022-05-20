import * as React from "react";

import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";

import { Typography } from "@mui/material";

const GridItem = () => {
  return (
    <>
      <Grid item xs={4}>
        <Paper elevation={2}>
          <Box padding={3} sx={{ textAlign: "center" }}>
            <Typography variant='h6' component='h4'>
              Всички ФУ
            </Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper elevation={2}>
          <Box padding={3} sx={{ textAlign: "center" }}>
            <Typography variant='h6' component='h4'>
              Справки ФУ
            </Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper elevation={2}>
          <Box padding={3} sx={{ textAlign: "center" }}>
            <Typography variant='h6' component='h4'>
              Изтичащи договори
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
              Данни нов обект
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
