import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem from '@mui/material/ListItem';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import profile from './profile.svg';
import employee from './employee.svg';
import project from './project.svg';
import dashboard from './Dashboard.svg';
import './sidebar.css';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
   
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const menuItems = [
		{
			text: "Dashboard",
			icon: dashboard,
			link: "/App/Dashboard"
		},
		{
			text: "Profile",
			icon: profile,
			link: "/App/Profile"
		},
    {
			text: "Employee",
			icon: employee,
			link: "/App/Employee"
		},
    {
			text: "Project",
			icon: project,
			link: "/App/Project"
		},
		
	];
  
  return (
    
    <Drawer className="sidebar" variant="permanent" open={open}  PaperProps={{
      elevation: 8,
      sx: {
        width: 240,
        color: "rgba(225,249,27,1)",
        backgroundColor: "rgba(30, 139, 195, 0.8)",
      }
    }}>
      <span>.</span>
      <span>.</span>
      <span>.</span>
      <DrawerHeader className='sidebar-container'>
          {open===true?
          <IconButton 
          onClick={handleDrawerClose}
          sx={{
            color:'white',
          }}
          >
          <ChevronLeftIcon />
          </IconButton>
          :
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"

            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 1.7,
              height:25,
              ...(open && { display: 'none' }),
              color:'white'
            }}
          >
            <MenuIcon/>
          </IconButton>
          }
        </DrawerHeader>
        <Divider />
        <List>
          {menuItems.map(({text, icon, link}) => (
            <ListItem key={text} disablePadding sx={{display:'block'}}>
              <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                color:'white',
              }}
              href={link}
              >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                  height:30,
                }}
              >
                <img src={icon} alt={text} title={text} srcset=""/>
              </ListItemIcon>
              {open && <div className='sidebar-container'>{text}</div>}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
    </Drawer>
    
  );
}
