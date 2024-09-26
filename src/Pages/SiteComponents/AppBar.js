import React, { useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Assignment as AssignmentIcon,
  Person as PersonIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../Context/UserContext";

const CustomAppBar = () => {
  const { updateUser } = useUser();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleUserMenuOpen = (event) => {
    // If the menu is already open, close it
    if (anchorEl) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget); // Open the menu
    }
  };

  const handleUserMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {
    navigate("/profile");
    handleUserMenuClose();
  };

  const handleTeamsClick = () => {
    navigate("/teams");
    handleUserMenuClose();
  };

  const handleSettingsClick = () => {
    navigate("/settings");
    handleUserMenuClose();
  };

  const handleLogoutClick = () => {
    // Add logout logic here
    updateUser(null);
    navigate("/");
    handleUserMenuClose();
  };

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  const list = () => (
    <List sx={{ paddingTop: "4rem" }}>
      <ListItem button onClick={() => navigate("/dashboard")}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button onClick={() => navigate("/projects")}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Projects" />
      </ListItem>
      <ListItem button onClick={handleProfileClick}>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItem>
      <ListItem button onClick={handleTeamsClick}>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="Teams" />
      </ListItem>
      <ListItem button onClick={handleSettingsClick}>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem>
      <ListItem button onClick={handleLogoutClick}>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItem>
    </List>
  );

  // Close the drawer and menu if screen size changes
  useEffect(() => {
    if (isSmallScreen) {
      setDrawerOpen(false);
    } else {
      setAnchorEl(null);
    }
  }, [isSmallScreen]);

  return (
    <AppBar position="fixed" sx={{ zIndex: 100000 }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Dashboard
        </Typography>

        {/* Icon Buttons for larger screens */}
        {!isSmallScreen ? (
          <>
            <IconButton color="inherit" onClick={() => navigate("/dashboard")}>
              <HomeIcon />
              <Typography variant="body2" style={{ marginLeft: 4 }}>
                Home
              </Typography>
            </IconButton>
            <IconButton color="inherit" onClick={() => navigate("/projects")}>
              <AssignmentIcon />
              <Typography variant="body2" style={{ marginLeft: 4 }}>
                Projects
              </Typography>
            </IconButton>
            <IconButton color="inherit" onClick={handleUserMenuOpen}>
              <PersonIcon />
              <Typography variant="body2" style={{ marginLeft: 4 }}>
                User
              </Typography>
            </IconButton>
          </>
        ) : (
          <IconButton color="inherit" onClick={() => toggleDrawer(!drawerOpen)}>
            <MenuIcon />
          </IconButton>
        )}

        {/* User Menu */}
        {!isSmallScreen && (
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleUserMenuClose}
          >
            <MenuItem
              sx={{ marginTop: "0.75rem" }}
              onClick={handleProfileClick}
            >
              Profile
            </MenuItem>
            <MenuItem onClick={handleTeamsClick}>Teams</MenuItem>
            <MenuItem onClick={handleSettingsClick}>Settings</MenuItem>
            <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
          </Menu>
        )}

        {/* Drawer for small screens */}
        {isSmallScreen && (
          <Drawer
            anchor="top"
            open={drawerOpen}
            onClose={() => toggleDrawer(false)}
          >
            <div role="presentation" onKeyDown={() => toggleDrawer(false)}>
              {list()}
            </div>
          </Drawer>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
