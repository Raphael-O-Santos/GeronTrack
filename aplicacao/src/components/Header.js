import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
// Icons
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import TimelineIcon from "@mui/icons-material/Timeline";
import FeedIcon from "@mui/icons-material/Feed";
import EmailIcon from "@mui/icons-material/Email";
import LogoutIcon from "@mui/icons-material/Logout";
// Navigation
import { useState } from "react";
// Styles
import styles from "./Header.module.css";

const Header = () => {
  function ConfigurableDrawer({ anchor, buttonIcon, drawerContent }) {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => (event) => {
      if (
        event &&
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }
      setOpen(newOpen);
    };
    return (
      <React.Fragment>
        <Button
          onClick={toggleDrawer(true)}
          disableRipple
          sx={{
            background: "none",
            "&:hover": {
              background: "none",
            },
          }}
        >
          {buttonIcon}
        </Button>
        <SwipeableDrawer
          anchor={anchor}
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <Box
            sx={{
              width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            {drawerContent}
          </Box>
        </SwipeableDrawer>
      </React.Fragment>
    );
  }
  const menu1 = [
    { text: "Indicadores", icon: <TimelineIcon /> },
    { text: "Relatório", icon: <FeedIcon /> },
  ];
  const menu2 = [
    { text: "Gerenciar conta", icon: <ManageAccountsIcon /> },
    { text: "Contato", icon: <EmailIcon /> },
    { text: "Sair", icon: <LogoutIcon /> },
  ];
  const leftDrawerContent = (
    <>
      <List>
        {menu1.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {menu2.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );

  const [pagina] = useState(window.location.pathname);

  return (
    <div className={styles.header}>
      <ConfigurableDrawer
        anchor="left"
        buttonIcon={<MenuIcon sx={{ fontSize: "2.5em" }} />}
        drawerContent={leftDrawerContent}
      />
      <h1 style={{ color: "#0077B6", textAlign: "center" }}>
        {pagina === "/Profissionais" && window.innerWidth > 600
          ? "Equipe Multiprofissional"
          : pagina === "/Usuarios"
          ? "Usuários"
          : pagina.substring(1)}
      </h1>
    </div>
  );
};

export default Header;
