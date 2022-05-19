import * as React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Divider from "@mui/material/Divider";

const Dashboard = () => {
  return (
    <>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >
        <ListItem>
          <ListItemButton component='a' href='#simple-list'>
            <ListItemText primary='Данни за фирмата' />
          </ListItemButton>
        </ListItem>
        <Divider variant='inset' component='li' />
        <ListItem>
          <ListItemButton component='a' href='#simple-list'>
            <ListItemText primary='Стоки' />
          </ListItemButton>
        </ListItem>
        <Divider variant='inset' component='li' />
        <ListItem>
          <ListItemButton component='a' href='#simple-list'>
            <ListItemText primary='Партньори' />
          </ListItemButton>
        </ListItem>
        <Divider variant='inset' component='li' />
        <ListItem>
          <ListItemButton component='a' href='#simple-list'>
            <ListItemText primary='Документи' />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component='a' href='#simple-list'>
            <ListItemText primary='Потребители' />
          </ListItemButton>
        </ListItem>
        <Divider variant='inset' component='li' />
        <ListItem>
          <ListItemButton component='a' href='#simple-list'>
            <ListItemText primary='Продажби' />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component='a' href='#simple-list'>
            <ListItemText primary='Доставки' />
          </ListItemButton>
        </ListItem>
        <Divider variant='inset' component='li' />
        <ListItem>
          <ListItemButton component='a' href='#simple-list'>
            <ListItemText primary='Ревизия' />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component='a' href='#simple-list'>
            <ListItemText primary='Бракуване' />
          </ListItemButton>
        </ListItem>
        <Divider variant='inset' component='li' />
        <ListItem>
          <ListItemButton component='a' href='#simple-list'>
            <ListItemText primary='Рекламация от клиент / сторно' />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component='a' href='#simple-list'>
            <ListItemText primary='Обекти' />
          </ListItemButton>
        </ListItem>
        <Divider variant='inset' component='li' />
        <ListItem>
          <ListItemButton component='a' href='#simple-list'>
            <ListItemText primary='Справка стоки' />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component='a' href='#simple-list'>
            <ListItemText primary='Справка партньори' />
          </ListItemButton>
        </ListItem>
        <Divider variant='inset' component='li' />
        <ListItem>
          <ListItemButton component='a' href='#simple-list'>
            <ListItemText primary='Справка продажби' />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
};

export default Dashboard;
