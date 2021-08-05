import React, { useEffect, useState } from 'react';
import { ItemDetail } from './components/ItemDetail/ItemDetail'
import { database } from './../../firebase/Firebase'
import { useParams } from 'react-router-dom';
import { ItemDetailContainerStyles } from './ItemDetailContainerStyles'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ItemDetailContainerStyles(theme));

export const ItemDetailContainer = () => {

  const classes = useStyles();
  const { id } = useParams();

  const [item, setItem] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const productosCollection = database.collection("productos");
    const idProducto = productosCollection.doc(id);

    idProducto.get().then((doc) => {
      if (!doc.exists) {
        setError(true);
      }
      setItem({ id: doc.id, ...doc.data() });
    }).catch(() => {
      setError(true);
    })
  }, [id]);

  return <>
    <div className={classes.containerDetail}>
      {item.length === 0 ? (
        <h1 className={classes.loading}>CARGANDO...</h1>
      ) : (
        <ItemDetail producto={item} />
      )}
    </div>
    {error ? alert('Se agotó el stock') : ''}
  </>
}