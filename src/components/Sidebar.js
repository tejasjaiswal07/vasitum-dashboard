import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Box } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import ScheduleIcon from '@mui/icons-material/Schedule';
import BusinessIcon from '@mui/icons-material/Business';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';

const drawerWidth = 240;

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon /> },
  { text: 'Recruitment', icon: <PeopleIcon /> },
  { text: 'Schedule', icon: <ScheduleIcon /> },
  { text: 'Employee', icon: <PeopleIcon /> },
  { text: 'Department', icon: <BusinessIcon /> },
  { text: 'Support', icon: <HelpIcon /> },
  { text: 'Settings', icon: <SettingsIcon /> },
];

function Sidebar() {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          borderRight: 'none',
          bgcolor: 'background.paper',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
          Vasitum
        </Typography>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem button key={item.text}>
            <ListItemIcon sx={{ color: item.text === 'Dashboard' ? 'primary.main' : 'text.secondary' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText 
              primary={item.text} 
              sx={{ 
                '& .MuiListItemText-primary': {
                  color: item.text === 'Dashboard' ? 'primary.main' : 'text.primary',
                  fontWeight: item.text === 'Dashboard' ? 'bold' : 'normal',
                }
              }}
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;