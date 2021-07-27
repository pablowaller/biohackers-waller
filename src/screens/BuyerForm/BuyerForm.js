import React, { useState, useEffect } from 'react';
import { BuyerFormStyles } from './BuyerFormStyles'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => BuyerFormStyles(theme));

class BuyerInfo {
    constructor(nombre, apellido, email) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
    }
}

const formInitialState = new BuyerInfo('', '', '');

const errorInitialState = { ...new BuyerInfo(false, false, false), confirmacionEmail: false };

const expresionesRegulares = new BuyerInfo(
    /^[a-zA-ZáéíóúÁÉÍÓÚ][a-zA-ZáéíóúÁÉÍÓÚ \s]*$/,
    /^[a-zA-ZáéíóúÁÉÍÓÚ][a-zA-ZáéíóúÁÉÍÓÚ \s]*$/,
    /^[^\s@]+@[^\s@]+$/
);

export const BuyerForm = props => {

    const classes = useStyles();
    const { ended, addOrden, totalPrice } = props;
    const [inputErrors, setInputErrors] = useState(errorInitialState);
    const [dataDelComprador, setDataDelComprador] = useState(formInitialState);
    const [formError, setFormError] = useState(false);

    const validarCampos = e => {
        const { name, value } = e.target;
        const regExp = expresionesRegulares[name];
        if (!regExp.test(value)) {
            setInputErrors({ ...inputErrors, [name]: true });
        } else {
            setInputErrors({ ...inputErrors, [name]: false });
            setDataDelComprador({
                ...dataDelComprador,
                [name]: value
            });
        }
    }

    const confirmarCorreo = e => {
        const { name, value } = e.target;
        if (dataDelComprador['email'].localeCompare(value) !== 0) {
            setInputErrors({ ...inputErrors, [name]: true });
        } else {
            setInputErrors({ ...inputErrors, [name]: false });
        }
    }

    const submitOrder = e => {
        e.preventDefault();
        let formValidation = true;
        for (const prop in dataDelComprador) {
            let regExp = expresionesRegulares[prop];
            if (!regExp.test(dataDelComprador[prop])) {
                formValidation = false;
                break;
            }
        }
        if (formValidation) {
            setFormError(false);
            addOrden(dataDelComprador);
        } else {
            setFormError(true);
        }
    }

    useEffect(() => {
        if (ended) {
            setInputErrors(errorInitialState);
            setDataDelComprador(formInitialState);
        }
    }, [ended]);

    return (
        <form onSubmit={submitOrder}>
            <h3 className={classes.titulo}>RELLENE LOS CAMPOS</h3>
            <input className={classes.input} placeholder="Ingresa tu nombre." name="nombre" label="Nombre" required onChange={validarCampos} />
            <br></br>
            {inputErrors['nombre'] ? <div className={classes.margin}><b className={classes.advertencia}>
                El nombre solo debe estar compuesto por letras
            </b></div> : <></>}
            <br></br>
            <input className={classes.input} placeholder="Ingresa tu apellido" name="apellido" label="Apellido" required onChange={validarCampos} />
            <br></br>
            {inputErrors['apellido'] ? <div className={classes.margin}><b className={classes.advertencia}>
                El apellido solo debe estar compuesto por letras
            </b></div> : <></>}
            <br></br>
            <input className={classes.input} placeholder="Introducí tu email." name="email" label="Email" required onChange={validarCampos} />
            <br></br>
            {inputErrors['email'] ? <div className={classes.margin}><b className={classes.advertencia}>
                Ingrese un correo electronico valido
            </b></div> : <></>}
            <br></br>
            <input className={classes.input} placeholder="Confirmar Email." name="confirmacionEmail" required onChange={confirmarCorreo} />
            <br></br>
            {inputErrors['confirmacionEmail'] ? <div className={classes.margin}>
                <b className={classes.advertencia}>
                    Los dos correos deben coincidir
                </b></div> : <></>}
            <div className={classes.column}>
                <h4 className={classes.total}>Total: ${totalPrice}</h4>
                <button className={classes.confirmar} type='submit'>
                    <p className={classes.letrasBoton}>CONFIRMAR PAGO</p>
                </button>
            </div>
            {formError ? <div className={classes.margin}><b className={classes.advertencia}>Revise los datos del formulario.</b></div> : <></>}
        </form>
    );
}
