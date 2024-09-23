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
  { text: 'Dashboard', icon: <DashboardIcon />, active: true },
  { text: 'Recruitment', icon: <PeopleIcon /> },
  { text: 'Schedule', icon: <ScheduleIcon /> },
  { text: 'Employee', icon: <PeopleIcon /> },
  { text: 'Department', icon: <BusinessIcon /> },
];

const otherItems = [
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
      <Box sx={{ p: 2, borderBottom: '1px solid #E0E0E0' }}>
        <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
          Vasitum
        </Typography>
      </Box>
      <Box sx={{ p: 2 }}>
        <Typography variant="subtitle2" sx={{ color: 'text.secondary', mb: 1 }}>
          MAIN MENU
        </Typography>
        <List>
          {menuItems.map((item) => (
            <ListItem 
              button 
              key={item.text}
              sx={{ 
                borderRadius: 1,
                mb: 0.5,
                bgcolor: item.active ? 'primary.main' : 'transparent',
                '&:hover': {
                  bgcolor: item.active ? 'primary.main' : 'action.hover',
                },
              }}
            >
              <ListItemIcon sx={{ color: item.active ? 'common.white' : 'text.secondary' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text} 
                sx={{ 
                  '& .MuiListItemText-primary': {
                    color: item.active ? 'common.white' : 'text.primary',
                    fontWeight: item.active ? 'bold' : 'normal',
                  }
                }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box sx={{ p: 2, mt: 'auto' }}>
        <Typography variant="subtitle2" sx={{ color: 'text.secondary', mb: 1 }}>
          OTHER
        </Typography>
        <List>
          {otherItems.map((item) => (
            <ListItem button key={item.text}>
              <ListItemIcon sx={{ color: 'text.secondary' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

export default Sidebar;