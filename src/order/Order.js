import React, { useState, useContext } from 'react';
import 'firebase/firestore';
import { CarritoContext } from "./../context/ContextoCarrito";
import { database, docIdFieldPath } from './../firebase/Firebase'
import { BuyerForm } from './../screens/BuyerForm/BuyerForm';
import { OrderStyles } from './OrderStyles'
import { makeStyles } from '@material-ui/core';
import Waiting from './../img/waiting.gif'
import { Dialog, DialogContent } from '@material-ui/core';

const ordersCollection = database.collection("orders");
const productosCollection = database.collection("productos");

const useStyles = makeStyles((theme) => OrderStyles(theme));

const addOrderDocument = (order) => {
    return ordersCollection.add(order);
}

const getProductosByCartArray = (items) => {
    return productosCollection.where(docIdFieldPath, 'in', items.map(i => i.item.id)).get();
}

const batch = () => { return database.batch() };


export const Order = props => {

    const classes = useStyles();

    const { totalPrice, addOrderId } = props;
    const { productosCarrito, clear } = useContext(CarritoContext);

    const [openOrderDialog, setOpenOrderDialog] = useState(false);
    const [showForm, setShowForm] = useState(true);
    const [orderFinished, setOrderFinished] = useState(false);
    const [orderError, setOrderError] = useState(false);

    const [outOfStockArray, setOutOfStockArray] = useState([]);
    const [orderId, setOrderId] = useState();


    const handleOpenOrder = () => {
        setOpenOrderDialog(true);
    };

    const handleCloseOrder = () => {
        if (orderFinished && !orderError) {
            clear();
        }
        setOpenOrderDialog(false);
        setShowForm(true);
        setOrderFinished(false);
        setOrderError(false);
        setOutOfStockArray([]);
        setOrderId();
    };

    const generateOrder = (comprador) => {
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

        const newOrder = {
            comprador: comprador,
            items: newProductosCarrito,
            date: date,
            total: totalPrice
        }
        return newOrder;
    }

    const addNewOrder = (comprador) => {
        const newOrder = generateOrder(comprador);
        try {
            addOrderDocument(newOrder).then((docRef) => {
                setOrderId(docRef.id);
                addOrderId(docRef.id);
            })

                .catch((error) => {
                    console.error("Error adding document: ", error);
                });

        } catch (error) {
            console.log("Firebase add doc error:", error);
        }
    }


    const addOrderAndUpdateStock = (comprador) => {
        const newBatch = batch();
        setShowForm(false);
        let outOfStock = [];
        getProductosByCartArray(productosCarrito).then((querySnapshot) => {
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
                    addNewOrder(comprador);
                });
            } else {
                setOutOfStockArray(outOfStock);
                setOrderError(true);
            }
        }).finally(() => {
            setOrderFinished(true);
        });
    }

    return <div>
        <div className={classes.carritoTotal}>
            <h4 className={classes.total}>Total del carrito: ${totalPrice}</h4>
            <button className={classes.finalizar} onClick={handleOpenOrder}><p className={classes.letrasBoton}>Finalizar Compra</p></button>
        </div>
        <Dialog className={classes.dialog} onClose={handleCloseOrder} open={openOrderDialog}>
            <DialogContent className={classes.dialogContent}>
                {
                    showForm ? <BuyerForm addOrder={addOrderAndUpdateStock} totalPrice={totalPrice} ended={!showForm} /> : <></>
                }

                {
                    (orderFinished && orderError) ? <>
                        <h1 className={classes.letras}>No fue posible ejecutar la compra</h1>
                        <h2 className={classes.letras}>Productos sin el stock pedido: </h2>
                        <ul>
                            {
                                outOfStockArray.map((productoAgregado, i) => {
                                    return (
                                        <li key={i}>{productoAgregado.titulo} pedido por {productoAgregado.cantidad} unidades.</li>
                                    );
                                })
                            }
                        </ul>
                    </> : (orderFinished && !orderError) ? <>
                        <div className={classes.row3}>
                            <h1 className={classes.letras}>¡TU COMPRA HA SIDO REALIZADA CON EXITO!</h1>
                            <button className={classes.botonClose} onClick={handleCloseOrder}>
                                <p className={classes.cruz}>X</p>
                            </button>
                        </div>
                        <img src={Waiting} className={classes.espera} alt='' />
                        <h4 className={classes.letras}>AGUARDE LA LLEGADA DEL DRONE CON SU PRODUCTO</h4>
                        <h3 className={classes.letras}>ID de compra: {orderId}</h3>
                    </> : <></>
                }
            </DialogContent>
        </Dialog>
    </div>
}