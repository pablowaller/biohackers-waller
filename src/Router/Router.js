import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ItemListContainer } from '../screens/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from '../screens/ItemDetailContainer/ItemDetailContainer';
import { Carrito } from './../screens/Carrito/Carrito'
import { NotFoundComponent } from '../components/NotFoundComponent/NotFoundComponent';


export const Router = () => {
    return <Switch>
        <Route exact path="/biohackers-waller">
            <ItemListContainer />
        </Route>
        <Route path="/category/:category">
            <ItemListContainer />
        </Route>
        <Route path="/product/:id">
            <ItemDetailContainer />
        </Route>
        <Route path="/carrito">
            <Carrito />
        </Route>
        <Route path="/*">
            <NotFoundComponent />
        </Route>
    </Switch>
}
