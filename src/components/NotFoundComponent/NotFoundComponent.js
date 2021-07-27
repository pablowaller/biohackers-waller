import React from 'react';
import { useHistory } from 'react-router-dom';
import RobotOnMars from './../../img/robotonmars.gif';
import { makeStyles } from '@material-ui/core';
import { NotFoundComponentStyles } from './NotFoundComponentStyles';

const useStyles = makeStyles((theme) => NotFoundComponentStyles(theme));

export const NotFoundComponent = ({ titulo = 'ERROR 404 - PAGE NOT FOUND', alt = 'ROBOT PERDIDO EN MARTE', etiquetaBoton = 'VOLVER AL INICIO' }) => {

    const classes = useStyles()
    const history = useHistory();

    const commonAction = () => {
        history.push(`/biohackers-waller`);
      };
      
    return (
        <div className={classes.container}>
                <h1 className={classes.error}>{titulo}</h1>
                <img src={RobotOnMars} className={classes.robotOnMars} title={alt} alt={alt}/>
            <br></br>
            <button className={classes.volver} onClick={commonAction}><p className={classes.letras}>{etiquetaBoton}</p></button>
        </div>
    );
}