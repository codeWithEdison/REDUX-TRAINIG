import React from 'react';
import { useSelector } from 'react-redux';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          {user ? `Welcome, ${user.user.names}` : 'Please log in'}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
