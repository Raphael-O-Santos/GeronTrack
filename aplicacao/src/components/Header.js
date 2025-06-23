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
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

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
  const leftDrawerContent = (
    <>
      <List>
        {["Início", "Produtos", "Serviços", "Contato"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Sobre", "FAQ"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
  const rightDrawerContent = (
    <>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Meu Perfil" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Mensagens" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Configurações" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>{" "}
            <ListItemText primary="Sair" />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );

  return (
    <header
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#CAF0F8",
        padding: "0 1em 1em 1em",
        borderRadius: "1em 1em 0 0",
      }}
    >
      <ConfigurableDrawer
        anchor="left"
        buttonIcon={<MenuIcon sx={{ fontSize: "2.5em" }} />}
        drawerContent={leftDrawerContent}
      />
      <h1 style={{ color: "#0077B6" }}>Residentes</h1>
      <ConfigurableDrawer
        anchor="right"
        buttonIcon={<AccountCircleIcon sx={{ fontSize: "2.5em" }} />}
        drawerContent={rightDrawerContent}
      />
    </header>
  );
};

export default Header;
