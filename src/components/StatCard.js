import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

function StatCard({ title, value, subtitle, color, increase }) {
  return (
    <Paper 
      sx={{ 
        p: 2, 
        borderRadius: 4, 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between',
        bgcolor: color,
        color: 'white',
        boxShadow: 'none',
      }}
    >
      <Typography variant="body2" sx={{ mb: 1, opacity: 0.7 }}>{title}</Typography>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>{value}</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="body2" sx={{ opacity: 0.7 }}>{subtitle}</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: 'rgba(255,255,255,0.2)', borderRadius: 1, px: 1, py: 0.5 }}>
          <TrendingUpIcon sx={{ fontSize: 14, mr: 0.5 }} />
          <Typography variant="caption">{increase}</Typography>
        </Box>
      </Box>
    </Paper>
  );
}

export default StatCard;