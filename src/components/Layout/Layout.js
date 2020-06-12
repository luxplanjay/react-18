import React from 'react';
import AppBar from '../AppBar/AppBar';
import Container from '../Container/Container';

const Layout = ({ children }) => (
  <>
    <AppBar />
    <Container>{children}</Container>
  </>
);

export default Layout;
