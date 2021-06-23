import { Button } from "@material-ui/core";

const Detalle = (
  {
    titulo="Descripción del Producto",
    nombre="polera",
    talla="XL",
    tipo="Hombre",
    precio="5.990",
    marca="Sin marca",
    agregar,
    id="" 
  }
) => {
  return (
    <section className="container-detalle fdc fdsi ">
      <div className=" w-100">
        <h2 className="titulo-detalle">{titulo}</h2>
      </div>
      <div className=" w-100 my-3">
        <p className="nombre-detalle my-3">{nombre}</p>
      </div>
      <div className=" w-100 mb-3">
        <p className="talla-detalle mb-3">{talla}</p>
      </div>
      <div className=" w-100 mb-3">
        <p className="tipo-detalle mb-3">{tipo}</p>
      </div>
      <div className=" w-100 mb-5">
        <p className="precio-detalle mb-5">${precio}</p>
      </div>
      <div className=" w-100 w-100 mt-3">
        <Button onClick={() => agregar(id)} variant="outlined" size="small">
          Agregar producto al carrito
        </Button>
      </div>
    </section>
  );
};

export default Detalle;