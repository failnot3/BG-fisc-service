import * as React from "react";

import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { Typography } from "@mui/material";
const companyProperties = [
  "Пешо Драгичев ЕТ",
  "гр.Петрич",
  "бул. Ян. Хунияди 43",
  "111222333",
  "Пешо Кирилов Драгичев",
  "BG111222333",
];

const CompanyInfoComponent = () => {
  return (
    <>
      <Grid justifyContent='center' container spacing={2}>
        <Grid item xs={12}>
          <Paper elevation={2}>
            <Box padding={3} sx={{ textAlign: "center" }}>
              <Typography variant='h6' component='h4'>
                Данни за сервизната фирма
              </Typography>
              <Box padding={3}>
                <Typography>
                  <TextField
                    multiline={true}
                    rows={2}
                    label={companyProperties[0]}
                    placeholder='ИМЕ НА ФИРМАТА ТУК'
                    autoComplete='off'
                    variant='outlined'
                  />
                </Typography>
              </Box>
              <Box padding={3}>
                <Typography>
                  <TextField
                    multiline={true}
                    rows={2}
                    label={companyProperties[1]}
                    placeholder='ГРАД ТУК'
                    autoComplete='off'
                    variant='outlined'
                  />
                </Typography>
              </Box>
              <Box padding={3}>
                <Typography>
                  <TextField
                    multiline={true}
                    rows={3}
                    label={companyProperties[2]}
                    placeholder='УЛИЦА, НОМЕР НА УЛИЦА, БЛОК И ТН.'
                    autoComplete='off'
                    variant='outlined'
                  />
                </Typography>
              </Box>
              <Box padding={3}>
                <Typography>
                  <TextField
                    multiline={true}
                    rows={1}
                    label={companyProperties[3]}
                    placeholder='ЕИК на ФИРМАТА'
                    autoComplete='off'
                    variant='outlined'
                  />
                </Typography>
              </Box>
              <Box padding={3}>
                <Typography>
                  <TextField
                    multiline={true}
                    rows={1}
                    label={companyProperties[4]}
                    placeholder='МОЛ на ФИРМАТА'
                    autoComplete='off'
                    variant='outlined'
                  />
                </Typography>
              </Box>
              <Box padding={3}>
                <Typography>
                  <TextField
                    multiline={true}
                    rows={1}
                    label={companyProperties[5]}
                    placeholder='ЗДДС НОМЕР'
                    autoComplete='off'
                    variant='outlined'
                  />
                </Typography>
              </Box>
              <Box padding={3}>
                <Typography>
                  <Button variant='contained'>Запази данните</Button>
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default CompanyInfoComponent;
