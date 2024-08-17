/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import HowToRegIcon from '@mui/icons-material/HowToReg';


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Know More",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Vote",
      icon: <HowToVoteIcon/>,
    },
    {
      text: "Register Now",
      icon: <HowToRegIcon />,
    },
  ];
  return (
    <nav>
      <div className="nav-logo-container">
        <img className="logo" src="images/Logo.png" alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Know More</a>
        <a href="">Contact</a>
        <button style={{marginRight:"10px"}} className="primary-button">Vote Now</button>
        <button className="primary-button">Register Now</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
