import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <Button color="inherit" component={NavLink} to="/" sx={{ mr: 2 }}>
        Main
      </Button>
      <Button color="inherit" component={NavLink} to="/about" sx={{ mr: 2 }}>
        About
      </Button>
      <Button color="inherit" component={NavLink} to="/hotels">
        Hotels
      </Button>
    </Toolbar>
  </AppBar>
);

export default Header;
