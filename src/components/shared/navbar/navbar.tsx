import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Container, Box, Button, Typography } from '@material-ui/core';
import './navbar.css';

const NavigationBarComponent: React.FC = () => {
return (
<AppBar className="navbar" position="static">
  <Container maxWidth="md">
    <Box justifyContent="space-between"  display="flex" flexWrap flexDirection="row" p={1} m={1}>
      <Box flexGrow={2} p={1} style={{ fontWeight: 'bold', color: 'black' }}>
        <Typography variant="h6">Insurance</Typography>
        
      </Box>
      <Box flexGrow={1} display="flex" flexDirection="row">
        <Button className="nav__item">
          Products
        </Button>
        <Button>
          Developers
        </Button>
        <Button>
          Company
        </Button>
        <Button>
          Pricing
        </Button>
      </Box>

      <Box display="flex" flexDirection="row">
        <Button>
          Request Demo
        </Button>
        <Button>
          Sign In
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
            <path d="M9 3L7.94 4.06l4.19 4.19H3v1.5h9.13l-4.19 4.19L9 15l6-6z" />
          </svg>
        </Button>
      </Box>
    </Box>
  </Container>
</AppBar>
);
}
export default NavigationBarComponent;