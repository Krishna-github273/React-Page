// src/App.js
import React from 'react';
import { Box, CssBaseline, Container, Grid, Paper, Typography } from '@mui/material';
import Header from './Components/header';
import Sidebar from './Components/Sidebar';

import StatsCard from './Components/StatsCard';
import DashboardLayout from './Components/DashboardLayout';
import { SpatialTracking } from '@mui/icons-material';
// import ActivityChart from './components/ActivityChart';
// import RecentOrders from './components/RecentOrders';
// import CustomerFeedback from './components/CustomerFeedback';


function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Sidebar />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) => theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
          color: 'white',
        }}
      >
        <Header />
        <Grid sx={{backgroundColor:"grey",padding: 2 } }>
        <Typography variant='h4' >Dashboard</Typography>
        </Grid>
        <StatsCard/>
        
       
      
      </Box>
    </Box>
  );
}

export default App;
