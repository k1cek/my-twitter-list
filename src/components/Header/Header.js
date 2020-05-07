import React from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/images/logo.svg';
import HeaderNavigation from './HeaderNavigation';
import Button from '../Button/Button';

const Header = ({ open }) => (
    <div className={styles.wrapper}>
        <img src={logo} alt="Logo navigation" />
        <HeaderNavigation />
        <Button onClick={open} secendary>new item</Button>
    </div>
)

export default Header;