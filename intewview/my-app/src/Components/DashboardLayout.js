import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { EmojiEvents, Restaurant, MenuBook } from '@mui/icons-material';

const DashboardLayout = () => {
  return (
    <Box display="flex" sx={{ width: '100%', height: '100vh' }}>
      {/* Left Container - 60% width */}
      <Box sx={{ width: '60%', backgroundColor: '#2c2c2c', padding: 2 }}>
        <Typography variant="h6" color="white" sx={{ marginBottom: 2 }}>Activity</Typography>
        {/* Placeholder for the chart */}
        <Box sx={{ backgroundColor: '#1c1c1c', height: '80%', borderRadius: 2, padding: 2 }}>
          {/* Chart component should be placed here */}
        </Box>
      </Box>

      {/* Right Container - 40% width */}
      <Box sx={{ width: '40%', backgroundColor: '#1e1e1e', padding: 2 }}>
        <List>
          <ListItem sx={{ backgroundColor: '#3c3c3c', borderRadius: 2, marginBottom: 1, padding: 2 }}>
            <ListItemIcon>
              <EmojiEvents sx={{ color: '#ff6f61' }} />
            </ListItemIcon>
            <ListItemText primary="Goals" primaryTypographyProps={{ color: 'white' }} />
          </ListItem>
          <ListItem sx={{ backgroundColor: '#3c3c3c', borderRadius: 2, marginBottom: 1, padding: 2 }}>
            <ListItemIcon>
              <Restaurant sx={{ color: '#5c6bc0' }} />
            </ListItemIcon>
            <ListItemText primary="Popular Dishes" primaryTypographyProps={{ color: 'white' }} />
          </ListItem>
          <ListItem sx={{ backgroundColor: '#3c3c3c', borderRadius: 2, padding: 2 }}>
            <ListItemIcon>
              <MenuBook sx={{ color: '#26a69a' }} />
            </ListItemIcon>
            <ListItemText primary="Menus" primaryTypographyProps={{ color: 'white' }} />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
