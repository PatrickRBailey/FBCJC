import React from 'react';
import { Image } from 'react-bootstrap';
import logo from '../../images/logo.png';

const Logo = () => (
  <Image style={styles.LogoStyle} src={logo} responsive />
);

const styles = {
  LogoStyle: {
    margin: 10,
    marginLeft: 40,
    padding: 10,
  },
};

export default Logo;
