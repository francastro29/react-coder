import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../api'; // Importa la función para obtener detalles del producto

const ItemDetailContainer = () => {
  const { id } = useParams(); // Obtiene el id del parámetro de la URL
  const [product, setProduct] = useState(null); // Estado para almacenar los detalles del producto

useEffect(() => {
    // Función para obtener los detalles del producto por su id
    const fetchProduct = async () => {
    try {
        const productData = await getProductById(id); // Llama a la función que obtiene los detalles del producto
        setProduct(productData); // Establece los detalles del producto en el estado
    } catch (error) {
        console.error('Error fetching product details:', error);
    }
    };

    fetchProduct(); // Llama a la función para obtener los detalles del producto cuando se monta el componente
}, [id]);

  // Renderiza los detalles del producto
 return (
    <div className="item-detail-container">
    {product ? (
        <>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Precio: ${product.price}</p>
          {/* Agrega más detalles del producto según tus necesidades */}
        </>
) : (
        <p>Cargando detalles del producto...</p>
    )}
    </div>
);
}

export default ItemDetailContainer;