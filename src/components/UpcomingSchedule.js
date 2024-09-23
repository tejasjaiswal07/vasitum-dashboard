import React from 'react';
import { Paper, Typography, Box, List, ListItem, ListItemText, IconButton } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const scheduleItems = [
  { title: 'Review candidate applications', time: 'Today - 11:30 AM', priority: 'Priority' },
  { title: 'Interview with candidates', time: 'Today - 10:30 AM', priority: 'Other' },
  { title: 'Short meeting with product designer from IT Department', time: 'Today - 09:15 AM', priority: 'Other' },
];

function UpcomingSchedule() {
  return (
    <Paper sx={{ p: 2, height: '100%', borderRadius: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6">Upcoming Schedule</Typography>
        <Typography variant="body2" color="text.secondary">Today, 13 Sep 2021</Typography>
      </Box>
      <List>
        {scheduleItems.map((item, index) => (
          <ListItem key={index} sx={{ px: 0, py: 1, borderBottom: index !== scheduleItems.length - 1 ? '1px solid #E0E0E0' : 'none' }}>
            <ListItemText
              primary={item.title}
              secondary={item.time}
              primaryTypographyProps={{ variant: 'body1', fontWeight: 'medium' }}
              secondaryTypographyProps={{ variant: 'body2' }}
            />
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {item.priority === 'Priority' && (
                <Typography variant="body2" color="error" sx={{ mr: 1 }}>Priority</Typography>
              )}
              <IconButton size="small">
                <MoreHorizIcon />
              </IconButton>
            </Box>
          </ListItem>
        ))}
      </List>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
        <Typography variant="body2" color="primary" sx={{ cursor: 'pointer' }}>Create a New Schedule</Typography>
      </Box>
    </Paper>
  );
}

export default UpcomingSchedule;