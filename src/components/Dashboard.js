import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import StatCard from './StatCard';
import ActivityFeed from './ActivityFeed';
import UpcomingSchedule from './UpcomingSchedule';
import Announcements from './Announcements';
import EmployeeChart from './EmployeeChart';
import TalentRequestChart from './TalentRequestChart';

function Dashboard() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>Dashboard</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard 
            title="Available Position" 
            value="24" 
            subtitle="4 Urgently needed" 
            color="#5932EA"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard 
            title="Job Open" 
            value="10" 
            subtitle="4 Active hiring" 
            color="#4BA3F5"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard 
            title="New Employees" 
            value="24" 
            subtitle="4 Department" 
            color="#DB54FD"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ActivityFeed />
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Total Employes</Typography>
            <EmployeeChart />
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="body2">120 Men</Typography>
              <Typography variant="body2">96 Women</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Talent Request</Typography>
            <TalentRequestChart />
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="body2">6 Men</Typography>
              <Typography variant="body2">10 Women</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <UpcomingSchedule />
        </Grid>
        <Grid item xs={12} md={6}>
          <Announcements />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;