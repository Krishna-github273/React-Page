// src/components/Sidebar.js
import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Dashboard, ShoppingCart, People, BarChart,Home,AccountBalanceWallet } from '@mui/icons-material';

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          backgroundColor: '#2b2b2b',
          color: 'white',
        },
      }}
    >
      <List>
        <ListItem>
          <ListItemIcon color="#fff" >
            <Dashboard />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem>
          <ListItemIcon color="#fff" >
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem>
          <ListItemIcon color="#fff" >
            <AccountBalanceWallet />
          </ListItemIcon>
          <ListItemText primary="Wallet" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ShoppingCart />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItem>
        <ListItem >
          <ListItemIcon>
            <People />
          </ListItemIcon>
          <ListItemText primary="Customers" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <BarChart />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
