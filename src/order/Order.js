import React, { useState, useContext } from 'react';
import 'firebase/firestore';
import { CarritoContext } from "./../context/ContextoCarrito";
import { database, docIdFieldPath } from './../firebase/Firebase'
import { BuyerForm } from './../screens/BuyerForm/BuyerForm';
import { OrderStyles } from './OrderStyles'
import { makeStyles } from '@material-ui/core';
import Waiting from './../img/waiting.gif'
import { Dialog, DialogContent } from '@material-ui/core';

const ordensCollection = database.collection("ordens");
const productosCollection = database.collection("productos");

const useStyles = makeStyles((theme) => OrderStyles(theme));

const addOrdenDocumento = (orden) => {
    return ordensCollection.add(orden);
}

const getProductosByCarritoArray = (items) => {
    return productosCollection.where(docIdFieldPath, 'in', items.map(i => i.item.id)).get();
}

const batch = () => { return database.batch() };


export const Order = props => {

    const classes = useStyles();

    const { totalPrice } = props;
    const { productosCarrito, clear } = useContext(CarritoContext);

    const [openOrdenDialog, setOpenOrdenDialog] = useState(false);
    const [mostrarFormulario, setMostrarFormulario] = useState(true);
    const [ordenFinalizada, setOrdenFinalizada] = useState(false);
    const [ordenError, setOrdenError] = useState(false);

    const [arraySinStock, setArraySinStock] = useState([]);
    const [ordenId, setOrdenId] = useState();


    const handleOpenOrden = () => {
        setOpenOrdenDialog(true);
    };

    const handleCloseOrden = () => {
        if (ordenFinalizada && !ordenError) {
            clear();
        }
        setOpenOrdenDialog(false);
        setMostrarFormulario(true);
        setOrdenFinalizada(false);
        setOrdenError(false);
        setArraySinStock([]);
        setOrdenId();
    };

    const generarOrden = (comprador) => {
        const date = new Date();
        let newProductosCarrito = [];
        productosCarrito.forEach(productoAgregado => {
            let data = {
                id: productoAgregado.item.id,
                title: productoAgregado.item.title,
                price: productoAgregado.item.price,
                quantity: productoAgregado.quantity
            }
            newProductosCarrito.push(data);
        });

        const nuevaOrden = {
            comprador: comprador,
            items: newProductosCarrito,
            date: date,
            total: totalPrice
        }
        return nuevaOrden;
    }

    const addNuevaOrden = (comprador) => {
        const nuevaOrden = generarOrden(comprador);
        try {
            addOrdenDocumento(nuevaOrden).then((docRef) => {
                setOrdenId(docRef.id);
            })

                .catch((error) => {
                    alert("No se pudo agregar el documento: ", error);
                });

        } catch (error) {
            alert("Error al agregar a la base de datos Firebase:", error);
        }
    }


    const addOrdenYActualizarStock = (comprador) => {
        const newBatch = batch();
        setMostrarFormulario(false);
        let outOfStock = [];
        getProductosByCarritoArray(productosCarrito).then((querySnapshot) => {
            querySnapshot.docs.forEach((docSnapshot, index) => {
                const productData = docSnapshot.data();
                const cantidad = productosCarrito[index].quantity;
                if (productData.stock >= cantidad) {
                    newBatch.update(docSnapshot.ref, { 'stock': productData.stock - cantidad });
                } else {
                    outOfStock.push({ id: docSnapshot.id, cantidad: cantidad, ...productData });
                }
            })

            if (outOfStock.length === 0) {
                newBatch.commit().then(() => {
                    addNuevaOrden(comprador);
                });
            } else {
                setArraySinStock(outOfStock);
                setOrdenError(true);
            }
        }).finally(() => {
            setOrdenFinalizada(true);
        });
    }

    return (
        <div>
            <div className={classes.carritoTotal}>
                <h4 className={classes.total}>Total del carrito: ${totalPrice}</h4>
                <button className={classes.cancelar} onClick={clear}><p className={classes.letrasBoton}>Cancelar Compra</p></button>
                <button className={classes.generar} onClick={handleOpenOrden}><p className={classes.letrasBoton}>Generar Orden de Compra</p></button>
            </div>
            <Dialog className={classes.dialog} onClose={handleCloseOrden} open={openOrdenDialog}>
                <DialogContent className={classes.dialogContent}>
                    {
                        mostrarFormulario ? <BuyerForm addOrden={addOrdenYActualizarStock} totalPrice={totalPrice} ended={!mostrarFormulario} /> : <></>
                    }

                    {
                        (ordenFinalizada && ordenError) ? <>
                            <h1 className={classes.letras}>No fue posible ejecutar la compra</h1>
                            <h2 className={classes.letras}>Productos sin el stock pedido: </h2>
                            <ul>
                                {
                                    arraySinStock.map((productoAgregado, i) => {
                                        return (
                                            <li key={i}>{productoAgregado.titulo} pedido por {productoAgregado.cantidad} unidades.</li>
                                        );
                                    })
                                }
                            </ul>
                        </> : (ordenFinalizada && !ordenError) ? <>
                            <div className={classes.header}>
                                <h1 className={classes.letras}>¡TU COMPRA HA SIDO REALIZADA CON EXITO!</h1>
                                <button className={classes.botonClose} onClick={handleCloseOrden}>
                                    <p className={classes.cruz}>X</p>
                                </button>
                            </div>
                            <img src={Waiting} className={classes.espera} alt='' />
                            <h4 className={classes.letras}>AGUARDE LA LLEGADA DEL DRONE CON SU PRODUCTO</h4>
                            <h3 className={classes.letras}>ID de compra: {ordenId}</h3>
                        </> : <></>
                    }
                </DialogContent>
            </Dialog>
        </div>
    );
}