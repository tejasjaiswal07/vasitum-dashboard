import React from 'react';
import { Paper, Typography, Box, List, ListItem, ListItemText, IconButton } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const announcements = [
  { title: 'Outing schedule for every department', time: '5 Minutes ago' },
  { title: 'Meeting HR Department', time: 'Yesterday, 12:30 PM' },
  { title: 'IT Department need two more talents for UX/UI Designer position', time: 'Yesterday, 09:15 AM' },
];

function Announcements() {
  return (
    <Paper sx={{ p: 2, height: '100%', borderRadius: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6">Announcement</Typography>
        <Typography variant="body2" color="text.secondary">Today, 13 Sep 2021</Typography>
      </Box>
      <List>
        {announcements.map((item, index) => (
          <ListItem key={index} sx={{ px: 0, py: 1, borderBottom: index !== announcements.length - 1 ? '1px solid #E0E0E0' : 'none' }}>
            <ListItemText
              primary={item.title}
              secondary={item.time}
              primaryTypographyProps={{ variant: 'body1', fontWeight: 'medium' }}
              secondaryTypographyProps={{ variant: 'body2' }}
            />
            <IconButton size="small">
              <MoreHorizIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
        <Typography variant="body2" color="primary" sx={{ cursor: 'pointer' }}>See All Announcements</Typography>
      </Box>
    </Paper>
  );
}

export default Announcements;