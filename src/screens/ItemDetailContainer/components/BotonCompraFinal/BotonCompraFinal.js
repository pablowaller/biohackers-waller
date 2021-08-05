import React from 'react';
import { BotonCompraFinalStyles } from './BotonCompraFinalStyles';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => BotonCompraFinalStyles(theme));

export const BotonCompraFinal = props => {

    const classes = useStyles();

    const { clickCancelar } = props;
    const history = useHistory();

    return (
        <div>
            <button className={classes.cancelar} onClick={() => clickCancelar(false)}><h3 className={classes.letrasBoton}>CANCELAR COMPRA</h3></button>
            <button className={classes.finalizar} onClick={() => history.push(`/carrito`)}><h3 className={classes.letrasBoton}>FINALIZAR COMPRA</h3></button>
        </div>
    );
}