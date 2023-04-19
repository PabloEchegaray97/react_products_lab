const Producto = (props) => {
    return (
        <div className="producto">
        <img className="producto-imagen" src={props.img} alt="" />
        <div className="producto-contenido">
            <h2 className="producto-titulo">{props.nombre}</h2>
            <p className="producto-descripcion">Descripcion: {props.descripcion}</p>
            <p className="producto-precio">${props.precio}</p>
        </div>
        </div>
        
    )
}
export default Producto