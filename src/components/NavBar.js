import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
        <Link className="navbar-brand" to="/">Brand</Link> {/* Cambia el <a> por <Link> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/category/1">Categoría 1</Link> {/* Cambia los enlaces <a> por <Link> */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/2">Categoría 2</Link> {/* Cambia los enlaces <a> por <Link> */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/3">Categoría 3</Link> {/* Cambia los enlaces <a> por <Link> */}
            </li>
        </ul>
        </div>
        <CartWidget />
    </div>
    </nav>
);
}

export default NavBar;