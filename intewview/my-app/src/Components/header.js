// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Avatar, Box } from '@mui/material';
import { Search, Notifications,Settings, Message} from '@mui/icons-material';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#1e1e1e' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
        <IconButton color="inherit">
          <Search />
        </IconButton>
        </Box>
        
        <IconButton color="inherit">
        <Message/>
          
        </IconButton>
         <IconButton color="inherit">
        <Settings/>
          
        </IconButton>
         <IconButton color="inherit">
         <Notifications />
          
        </IconButton>
        <IconButton color="inherit">
          <Avatar src="/static/images/avatar/1.jpg" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
