import React from 'react';

const Nav = () => (
  <ul style={styles.NavStyles}>
    <li>I&#39;m New Here</li>
    <li>Connect</li>
    <li>Messages</li>
    <li>Give</li>
    <li>Events</li>
  </ul>
);

const styles = {
  NavStyles: {
    listStyleType: 'none',
    color: 'white',
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    background: 'black',
    padding: 20,
  },
};

export default Nav;
