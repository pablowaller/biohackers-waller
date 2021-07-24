import React, { useEffect, useState } from 'react';
import { ItemDetail } from './components/ItemDetail/ItemDetail'
import { database } from './../../firebase/Firebase'
import { useParams, Redirect } from 'react-router-dom';
import { ItemDetailContainerStyles } from './ItemDetailContainerStyles'
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ItemDetailContainerStyles(theme));


export const ItemDetailContainer = () => {

    const classes = useStyles();
    const { id } = useParams();

    const [item, setItem] = useState([])
    const [mostrarDetalle, setMostrarDetalle] = useState(false);
    const [itemNoEncontrado, setItemNoEncontrado] = useState(false);

    const getProducto = () => {

        const productosCollection = database.collection("productos");
        const idProducto = productosCollection.doc(id)

        setMostrarDetalle(false);
        idProducto.get().then((doc) => {
            if (doc.exists) {
                setItem({ id: doc.id, ...doc.data() });
            } else {
                setItemNoEncontrado(true);
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
            setItemNoEncontrado(true);
        }).finally(() => {
            setMostrarDetalle(true);
        }).catch(() => <Redirect to={'/notFound'} />)
    }

    useEffect(getProducto, [id]);

    return <>
        {
            mostrarDetalle ? <>
                {itemNoEncontrado ? <h1>¡Ups! Ese item no se encuentra en nuestro catálogo.</h1> :
                    <div className={classes.containerDetail}>
                        <ItemDetail producto={item} />
                    </div>
                }
            </> :
                <div>
                </div>
        }
    </>
}