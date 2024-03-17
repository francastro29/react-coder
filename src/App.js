import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Checkout from './components/Checkout';

function App() {
    return (
    <div className="App">
        <NavBar />
        <ItemListContainer greeting="¡Bienvenido a Castro BIKESHOP!" /> 
    </div>
    );
}

function App() {
    return (
    <BrowserRouter>
        <div className="App">
        <NavBar />
        <Switch>
        <Route path="/" exact component={ItemListContainer} />
        <Route path="/category/:id" component={ItemListContainer} />
        <Route path="/item/:id" component={ItemDetailContainer} />
        <Route exact path="/checkout" component={Checkout} />
        </Switch>
        </div>
    </BrowserRouter>
    );
}


export default App;