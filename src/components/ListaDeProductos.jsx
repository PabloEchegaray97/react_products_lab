import { useState, useEffect } from "react";
import articulos from '../assets/products.json'
import Producto from './Producto'
const ListaDeProductos = () => {
    const obtenerProductos = () => {
        return Promise.resolve(articulos);
    }
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        obtenerProductos().then((lista) => setProductos(lista))
        
    }, []);
    console.log(productos)
    return (
        <div>
            <h1>Lista de productos:</h1>
            <ul className="lista-productos">
                {productos.map((producto) => (
                    <Producto key= {producto.id} nombre = {producto.nombre} precio = {producto.precio} descripcion = {producto.descripcion} img = {producto.img}></Producto>
                ))}
            </ul>
        </div>
    )
}
export default ListaDeProductos;