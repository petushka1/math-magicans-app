import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Math Magicans</h1>
        <nav className={styles.nav}>
            <Link to='/'>Home</Link>
            |
            <Link to='/calculator'>Calculator</Link>
            |
            <Link to='/quote'>Quote</Link>
        </nav>
    </header>
  );
}

export default Header;
