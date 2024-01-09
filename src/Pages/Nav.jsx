import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import "./header.css";
import logo from "./images/logo.webp";

const Header = () => {
  
  const [mobileOpen, setMobileOpen] = useState(false);
  // hndle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      ></Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <NavLink to={"/about"}>ABOUT US</NavLink>
        </li>
        <li>
          <NavLink to={"/accomodations"}>ACCOMODATIONS</NavLink>
        </li>
        <li>
          <NavLink  to={"/retreat"}>
            RETREATS
          </NavLink>
        </li>
        <li>
          <NavLink to={"/activity"}>ACTIVITIES</NavLink>
        </li>
        <li>
          <NavLink to={"/gallery"}>GALLERY</NavLink>
        </li>
        <li>
          <NavLink to={"/blog"}>BLOG</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>CONTACT US</NavLink>
        </li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar
          component={"nav"}
          style={{
            background: "#ffffff",
            display: "flex",
            alignContent: "center",
            alignItems: "center",
          }}
          className="nav"
        >
          <Toolbar>
            <IconButton
              color="white"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <NavLink to="/">
              <img src={logo} alt="logo" />
            </NavLink>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink to={"/about"}>ABOUT US</NavLink>
                </li>
                <li>
                  <NavLink to={"/accomodations"}>ACCOMODATIONS</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to={"/retreat"}>
                    RETREATS
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/activity"}>ACTIVITIES</NavLink>
                </li>
                <li>
                  <NavLink to={"/gallery"}>GALLERY</NavLink>
                </li>
                <li>
                  <NavLink to={"/blog"}>BLOG</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>CONTACT US</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "200px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;