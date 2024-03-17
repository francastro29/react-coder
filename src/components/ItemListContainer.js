import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
let { id } = useParams();

useEffect(() => {
    // Lógica para cargar productos basada en el id
    console.log('Cargar productos para la categoría:', id);
}, [id]);

return (
    <div className="container">
      {/* Contenido del contenedor */}
    </div>
);
}

export default ItemListContainer;