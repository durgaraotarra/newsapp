import React from 'react';
import HeaderTop from './HeaderTop';
import Logo from './Logo';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header>
        <HeaderTop />
        <Logo />
        <Navbar />
    </header>
  );
}

export default Header;
