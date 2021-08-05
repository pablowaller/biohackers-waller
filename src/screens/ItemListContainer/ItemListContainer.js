import React, { useEffect, useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import CamBot1 from './../../img/camrobot1.gif';
import CamBot2 from './../../img/camrobot2.gif';
import { ItemListContainerStyles } from './ItemListContainerStyles'
import { ItemList } from './components/ItemList/ItemList';
import { database } from './../../firebase/Firebase'
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ItemListContainerStyles(theme));


export const ItemListContainer = () => {

    const classes = useStyles();

    const [productosAMostrar, setProductosAMostrar] = useState([]);

    const { category } = useParams();


    useEffect(() => {
        const productosCollection = database.collection("productos");
        let filtroProductos;
        if (category !== undefined && category !== null) {
            filtroProductos = productosCollection.where('category', '==', category).get();
        } else {
            filtroProductos = productosCollection.get();
        }

        filtroProductos.then((response) => {
            let filtrar = [];
            response.forEach((doc) => {
                filtrar.push({ id: doc.id, ...doc.data() });
            });
            setProductosAMostrar(filtrar)
        }).catch(() => <Redirect to={'/error404'}/>)
    }, [category]);

    return (
        <section>
            <div className={classes.row}>
                <img src={CamBot1} className={classes.cambot} alt='Cambot' />
                <h3 className={classes.bienvenida}>BIENVENIDOS A LA PRIMERA TIENDA DE PRODUCTOS BIOTECNOLOGICOS DE ARGENTINA 2045</h3>
                <img src={CamBot2} className={classes.cambot} alt='Cambot' />
            </div>
            <div className={classes.container}>
                {productosAMostrar.length === 0 ? (
                    <h1 className={classes.loading}>CARGANDO...</h1>
                ) : (
                    <div className={classes.items}>
                        <ItemList productos={productosAMostrar} />
                    </div>
                )}
            </div>
        </section>
    );
}