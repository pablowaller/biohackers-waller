import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ChicaVR from './../../img/chicavr.gif';
import { NavbarStyles } from './NavbarStyles'
import { makeStyles } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles((theme) => NavbarStyles(theme));

export default function Navbar() {

    const classes = useStyles();

    const tangibles = 'tangibles';
    const intangibles = 'intangibles';

    const [anchorEl, setAnchorEl] = useState(false);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(false);
    };

    return <header>
            <nav className={classes.navbar}>
                <div className={classes.brandingStyle}>
                    <Link to={`/#`}><img src={ChicaVR} className={classes.logo} alt='' /></Link>
                    <div className={classes.tituloysubtitulo}>
                        <h1 className={classes.titulo}>BIOHACKERS</h1>
                        <h2 className={classes.subtitulo}>E-COMMERCE TRANSHUMANISTA</h2>
                    </div>
                </div>
                <ul className={classes.menu}>
                    <Link to={`/#`}><li className={classes.navItem}>HOME</li></Link>
                    <li className={classes.navItem} onClick={handleClick}>PRODUCTOS</li>
                    <Menu className={classes.dropdown} anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                        <MenuItem className={classes.navItem2} onClick={handleClose}><Link to={`/category/${tangibles}`} className={classes.navItem2}>TANGIBLES</Link></MenuItem>
                        <MenuItem className={classes.navItem2} onClick={handleClose}><Link to={`/category/${intangibles}`} className={classes.navItem2}>INTANGIBLES</Link></MenuItem>
                    </Menu>
                    <Link to={`/carrito`}><li className={classes.navItem}>CARRITO</li></Link>
                </ul>
            </nav>
        </header>
}

