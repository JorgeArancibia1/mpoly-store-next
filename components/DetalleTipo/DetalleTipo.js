import { Loader } from "semantic-ui-react"
import Card from "../Card/Card"
import { size, map } from 'lodash'

// import Soporte from "../Soporte/Soporte"

const iconcitoLink = 'https://res.cloudinary.com/initial-cloud/image/upload/v1620870788/carrito_zs5b0x.png'


const DetalleTipo = ({ titulo="PRODUCTOS", productos}) => {
  // console.log("detalleTipo",productos)
  return (
    <div>
        <section className="container-titulo-tipo container-flex-center">
          <h2 className="title" > {titulo} </h2>
        </section>

      <section className="tipo-imagenes">
        <div className="tipo-ropa-ordenada" >
          {!productos && <Loader active>Cargando productos</Loader>}
          {productos && size(productos) === 0 && (
					<div>
						<h3>No hay productos para mostrar.</h3>
					</div>
				)}
      
          {
            size(productos) > 0 && map(productos,(producto) => {
              return <Card key={producto.id} imagen={producto.imagen} iconito={iconcitoLink} idProduct={producto.id}/>
            })
          }
        </div>
      </section>

      {/* <section className="soporte">
        <Soporte />
      </section> */}

    </div>

  )
}

export default DetalleTipo;