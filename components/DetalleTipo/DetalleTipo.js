import Card from "../Card/Card"
// import Soporte from "../Soporte/Soporte"

const iconcitoLink = 'https://res.cloudinary.com/initial-cloud/image/upload/v1620870788/carrito_zs5b0x.png'


const DetalleTipo = ({ titulo="TITULO", productos}) => {
  return (
    <div>
        <section className="container-titulo-tipo container-flex-center">
          <h2 className="title" > {titulo} </h2>
        </section>

      <section className="tipo-imagenes">
        <div className="tipo-ropa-ordenada" >
          {
            productos.map((producto) => {
              return <Card key={producto.id} imagen={producto.img} iconito={iconcitoLink}/>
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