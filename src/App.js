import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { CarritoWidget } from './components/CarritoWidget/CarritoWidget';
import { CarritoComponentContext } from './context/ContextoCarrito';
import { Router } from './Router/Router';

import './App.css';


const App = props => {

  return (
    <div className="App">
        <CarritoComponentContext>
          <BrowserRouter>
            <Navbar />
            <Router />
            <CarritoWidget />
          </BrowserRouter>
        </CarritoComponentContext>
    </div>
  )
}

export default App;