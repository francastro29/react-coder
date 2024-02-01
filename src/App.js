import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
    return (
    <div className="App">
        <NavBar />
        <ItemListContainer greeting="¡Bienvenido a Castro BIKESHOP!" /> 
    </div>
    );
}

export default App;