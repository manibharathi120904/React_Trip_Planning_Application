import React, { useState } from 'react';
import './SideBar1.css';
import { Link } from 'react-router-dom';
import { IconButton, List, ListItem, ListItemIcon, ListItemText, Drawer, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HotelIcon from '@mui/icons-material/Hotel';

const SideBar1 = () => {
  const [isSideNavOpen, setSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setSideNavOpen(!isSideNavOpen);
  };

  const closeSideNav = () => {
    setSideNavOpen(false);
  };

  return (
    <div className={`side ${isSideNavOpen ? 'open' : ''}`}>
      <IconButton className="nav-toggle" onClick={toggleSideNav} style={{ color: "white" }}>
        <MenuIcon />
      </IconButton>
      <span className="brand" style={{ paddingTop: "7px", display: "flex", flexDirection: "column" }}>Explore</span>

      <Drawer anchor="left" open={isSideNavOpen} onClose={closeSideNav} classes={{ paper: 'drawer-paper' }}>
        <div className="drawer-container">
          <List>
            <ListItem button component={Link} to="/" onClick={closeSideNav}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>

            <ListItem button component={Link} to="/visit/touristspots" onClick={closeSideNav}>
              <ListItemIcon>
                <LocationOnIcon />
              </ListItemIcon>
              <ListItemText primary="Tourist Spot" />
            </ListItem>

            <ListItem button component={Link} to="/visit/stay" onClick={closeSideNav}>
              <ListItemIcon>
                <HotelIcon />
              </ListItemIcon>
              <ListItemText primary="Stay" />
            </ListItem>
          </List>
          <Divider />
        </div>
      </Drawer>
    </div>
  );
}

export default SideBar1;
