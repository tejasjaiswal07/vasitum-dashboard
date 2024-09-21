import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function StatCard({ title, value, subtitle, color }) {
  return (
    <Paper sx={{ p: 2, borderRadius: 4, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Typography variant="h6" sx={{ color: 'text.secondary', mb: 1 }}>{title}</Typography>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>{value}</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>{subtitle}</Typography>
        <Box sx={{ bgcolor: color, color: 'white', borderRadius: 1, px: 1, py: 0.5, display: 'flex', alignItems: 'center' }}>
          <ArrowUpwardIcon sx={{ fontSize: 14, mr: 0.5 }} />
          <Typography variant="caption">+14%</Typography>
        </Box>
      </Box>
    </Paper>
  );
}

export default StatCard;