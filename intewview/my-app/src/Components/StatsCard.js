import React from 'react';
import { Box, Card, CardContent, Typography, Grid, CircularProgress, Avatar, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { ShoppingCart, CheckCircle, Cancel, AttachMoney, EmojiEvents, Restaurant, MenuBook } from '@mui/icons-material';
import ActivityChart from './ActivityChart';

const StatsCard = () => {
  return (
    <Box sx={{ width: '100%', minHeight: '100vh', padding: 2, backgroundColor: '#303030' }}>
      <Grid container spacing={2}>
        {/* Cards Section */}
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ backgroundColor: '#1e1e1e', color: 'white' }}>
                <CardContent>
                  <Box display="flex" alignItems="center">
                    <ShoppingCart sx={{ fontSize: 40, color: '#00bcd4' }} />
                    <Box ml={2}>
                      <Typography variant="h6">Total Orders</Typography>
                      <Typography variant="h4">75</Typography>
                      <Typography variant="body2" sx={{ color: 'green' }}>↑ 3%</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ backgroundColor: '#1e1e1e', color: 'white' }}>
                <CardContent>
                  <Box display="flex" alignItems="center">
                    <CheckCircle sx={{ fontSize: 40, color: '#4caf50' }} />
                    <Box ml={2}>
                      <Typography variant="h6">Total Delivered</Typography>
                      <Typography variant="h4">70</Typography>
                      <Typography variant="body2" sx={{ color: 'red' }}>↓ 3%</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ backgroundColor: '#1e1e1e', color: 'white' }}>
                <CardContent>
                  <Box display="flex" alignItems="center">
                    <Cancel sx={{ fontSize: 40, color: '#f44336' }} />
                    <Box ml={2}>
                      <Typography variant="h6">Total Cancelled</Typography>
                      <Typography variant="h4">05</Typography>
                      <Typography variant="body2" sx={{ color: 'green' }}>↑ 3%</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ backgroundColor: '#1e1e1e', color: 'white' }}>
                <CardContent>
                  <Box display="flex" alignItems="center">
                    <AttachMoney sx={{ fontSize: 40, color: '#e91e63' }} />
                    <Box ml={2}>
                      <Typography variant="h6">Total Revenue</Typography>
                      <Typography variant="h4">$12k</Typography>
                      <Typography variant="body2" sx={{ color: 'red' }}>↓ 3%</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        {/* Net Profit */}
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#1e1e1e', color: 'white', height: '80%' }}>
            <CardContent>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box textAlign="center">
                  <Typography variant="h6">Net Profit</Typography>
                  <Typography variant="h5">$6759.25</Typography>
                  <Typography variant="body2" sx={{ color: 'green' }}>↑ 3%</Typography>
                </Box>
                <Box display="flex" alignItems="center" flexDirection="column" mt={2}>
                  <CircularProgress variant="determinate" value={70} sx={{ color: '#00bcd4' }} />
                  <Typography variant="h6" sx={{ mt: 1 }}>70%</Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>*Values rounded off.</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Activity Chart */}
        <Grid item xs={12} md={8}>
          <Box sx={{ backgroundColor: 'grey', padding: 2, borderRadius: 2 }}>
            <Typography variant="h6" color="white" sx={{ marginBottom: 2 }}>Activity</Typography>
            <Box sx={{ backgroundColor: '#1c1c1c', borderRadius: 2, padding: 2,height:"30vh" }}>
              <ActivityChart />
            </Box>
          </Box>
        </Grid>

        {/* Goals, Popular Dishes, Menus */}
        <Grid item xs={12} md={4}>
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
        </Grid>

        {/* Recent Orders */}
        <Grid item xs={12} md={8}>
          <Card sx={{ backgroundColor: '#1e1e1e', color: 'white' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>Recent Orders</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography>Wade Warren</Typography>
                    <Typography>15478256</Typography>
                    <Typography>$124.00</Typography>
                    <Typography sx={{ color: 'green' }}>Delivered</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography>ABD</Typography>
                    <Typography>1547485</Typography>
                    <Typography>$154.00</Typography>
                    <Typography sx={{ color: 'red' }}>Pending</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography>Linkan</Typography>
                    <Typography>15412356</Typography>
                    <Typography>$180.00</Typography>
                    <Typography sx={{ color: 'green' }}>Delivered</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography>Mask</Typography>
                    <Typography>15472046</Typography>
                    <Typography>$100.00</Typography>
                    <Typography sx={{ color: 'red' }}>Canceled</Typography>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Customer's Feedback */}
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#1e1e1e', color: 'white' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>Customer's Feedback</Typography>
              <Box display="flex" alignItems="center" marginBottom={2}>
                <Avatar sx={{ marginRight: 2 }}>J</Avatar>
                <Box>
                  <Typography variant="body1">Jenny Wilson</Typography>
                  <Typography variant="body2" color="grey">
                    The food was excellent and so was the service.
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" alignItems="center" marginBottom={2}>
                <Avatar sx={{ marginRight: 2 }}>J</Avatar>
                <Box>
                  <Typography variant="body1">Rock</Typography>
                  <Typography variant="body2" color="grey">
                    The food was excellent and so was the service.
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" alignItems="center" marginBottom={2}>
                <Avatar sx={{ marginRight: 2 }}>J</Avatar>
                <Box>
                  <Typography variant="body1">John</Typography>
                  <Typography variant="body2" color="grey">
                    The food was excellent and so was the service.
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" alignItems="center" marginBottom={2}>
                <Avatar sx={{ marginRight: 2 }}>J</Avatar>
                <Box>
                  <Typography variant="body1">Anath</Typography>
                  <Typography variant="body2" color="grey">
                    The food was excellent and so was the service.
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StatsCard;
