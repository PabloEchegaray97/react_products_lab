const Producto = (props) => {
    return(
        <div>
            <h3>{props.nombre}</h3>
           <img src={props.img} alt="" />
            <p>Descripcion: {props.descripcion}</p>
            <span>Precio: {props.precio}</span>
        </div>
    )
}
export default Producto