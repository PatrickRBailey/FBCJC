import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Navigation = () => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav style={styles.NavStyles}>
        <NavItem eventKey={1} href="#">
          I&#39;m New Here
        </NavItem>
        <NavItem eventKey={2} href="#">
          Connect
        </NavItem>
        <NavItem eventKey={3} href="#">
          Messages
        </NavItem>
        <NavItem eventKey={4} href="#">
          Give
        </NavItem>
        <NavItem eventKey={5} href="#">
          Events
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

const styles = {
  NavStyles: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
};

export default Navigation;
