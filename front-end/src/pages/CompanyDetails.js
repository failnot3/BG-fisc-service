import * as React from "react";

import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

import { Typography } from "@mui/material";
let imeFirma = "Пешо Драгичев ЕТ";

const CompanyDetails = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper elevation={2}>
            <Box padding={3} sx={{ textAlign: "center" }}>
              <Typography variant='h6' component='h4'>
                Фирмени данни
              </Typography>
              <Box padding={3}>
                <Typography>
                  <TextField
                    id='outlined-basic'
                    label={imeFirma}
                    variant='outlined'
                  />
                </Typography>
              </Box>
              <Box padding={3}>
                <Typography>Адрес на фирмата</Typography>
              </Box>
              <Box padding={3}>
                <Typography>ЕИК</Typography>
              </Box>
              <Box padding={3}>
                <Typography>Материално Отговорно Лице</Typography>
              </Box>
              <Box padding={3}>
                <Typography>Регистрация по ЗДДС</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default CompanyDetails;
