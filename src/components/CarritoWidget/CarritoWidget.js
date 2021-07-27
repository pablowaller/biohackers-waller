import React, { useContext } from 'react';
import Drone from './../../img/drone.gif';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/ContextoCarrito';
import { CarritoWidgetStyles } from './CarritoWidgetStyles'
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => CarritoWidgetStyles(theme));

export const CarritoWidget = () => {

    const { productosCarrito, productosQuantity } = useContext(CarritoContext);

    const classes = useStyles();

    const DroneFlotante = () => {

        return <div>
            <Link to={`/carrito`} className={classes.link}>
                <img src={Drone} className={classes.drone} alt='' />
                <h2 className={classes.letras}>TU COMPRA ({productosQuantity})</h2>
            </Link>
        </div>
    }

    return (
        productosCarrito.length !== 0 ?
            <DroneFlotante />
            : <></>
    );
}