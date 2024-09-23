import React from 'react';
import { Paper, Typography, Box, Button } from '@mui/material';

function ActivityFeed() {
  return (
    <Paper sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 4 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>Recently Activity</Typography>
      <Box sx={{ bgcolor: '#5932EA', color: 'white', p: 2, borderRadius: 2, mb: 2 }}>
        <Typography variant="body2" sx={{ mb: 1 }}>10:40 AM, Fri 10 Sept 2021</Typography>
        <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}>You Posted a New Job</Typography>
        <Typography variant="body2">Kindly check the requirements and terms of work and make sure everything is right.</Typography>
      </Box>
      <Typography variant="body2" sx={{ mb: 2 }}>Today you makes 12 Activity</Typography>
      <Button variant="contained" color="primary" sx={{ alignSelf: 'flex-start' }}>
        See All Activity
      </Button>
    </Paper>
  );
}

export default ActivityFeed;