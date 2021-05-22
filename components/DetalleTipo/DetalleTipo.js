import Card from "../Card/Card"
// import Soporte from "../Soporte/Soporte"

const iconcitoLink = 'https://res.cloudinary.com/initial-cloud/image/upload/v1620870788/carrito_zs5b0x.png'
const productos = [
  {
    id: 1,
    img: 'https://res.cloudinary.com/initial-cloud/image/upload/v1620870405/shirt_kbryht.png',
    nombre: 'polera',
    talla: 'L',
    estado: "disponible",
    color: "gris",
    precio: "9990",
    tipo: "Hombre",
    categoria: "hombres"
  },
  {
    id: 2,
    img: 'https://res.cloudinary.com/initial-cloud/image/upload/v1620870405/shirt_kbryht.png',
    nombre: 'pantalon',
    talla: 'S',
    estado: "disponible",
    color: "negro",
    precio: "5990",
    tipo: "Hombre",
    categoria: "hombres"
  },
  {
    id: 3,
    img: 'https://res.cloudinary.com/initial-cloud/image/upload/v1620870405/shirt_kbryht.png',
    nombre: 'polera',
    talla: 'L',
    estado: "disponible",
    color: "gris",
    precio: "9990",
    tipo: "Hombre",
    categoria: "hombres"
  },
  {
    id: 4,
    img: 'https://res.cloudinary.com/initial-cloud/image/upload/v1620870405/shirt_kbryht.png',
    nombre: 'polera',
    talla: 'L',
    estado: "disponible",
    color: "gris",
    precio: "9990",
    tipo: "Hombre",
    categoria: "hombres"
  },
  {
    id: 5,
    img: 'https://res.cloudinary.com/initial-cloud/image/upload/v1620870405/shirt_kbryht.png',
    nombre: 'polera',
    talla: 'L',
    estado: "disponible",
    color: "gris",
    precio: "9990",
    tipo: "Hombre",
    categoria: "hombres"
  },
  {
    id: 6,
    img: 'https://res.cloudinary.com/initial-cloud/image/upload/v1620870405/shirt_kbryht.png',
    nombre: 'polera',
    talla: 'L',
    estado: "disponible",
    color: "gris",
    precio: "9990",
    tipo: "Hombre",
    categoria: "hombres"
  },
  {
    id: 7,
    img: 'https://res.cloudinary.com/initial-cloud/image/upload/v1620870405/shirt_kbryht.png',
    nombre: 'polera',
    talla: 'L',
    estado: "disponible",
    color: "gris",
    precio: "9990",
    tipo: "Hombre",
    categoria: "hombres"
  },
  {
    id: 8,
    img: 'https://res.cloudinary.com/initial-cloud/image/upload/v1620870405/shirt_kbryht.png',
    nombre: 'polera',
    talla: 'L',
    estado: "disponible",
    color: "gris",
    precio: "9990",
    tipo: "Hombre",
    categoria: "hombres"
  },
  {
    id: 9,
    img: 'https://res.cloudinary.com/initial-cloud/image/upload/v1620870405/shirt_kbryht.png',
    nombre: 'polera',
    talla: 'L',
    estado: "disponible",
    color: "gris",
    precio: "9990",
    tipo: "Hombre",
    categoria: "hombres"
  },
  {
    id: 8,
    img: 'https://res.cloudinary.com/initial-cloud/image/upload/v1620870405/shirt_kbryht.png',
    nombre: 'polera',
    talla: 'L',
    estado: "disponible",
    color: "gris",
    precio: "9990",
    tipo: "Hombre",
    categoria: "hombres"
  },
  {
    id: 8,
    img: 'https://res.cloudinary.com/initial-cloud/image/upload/v1620870405/shirt_kbryht.png',
    nombre: 'polera',
    talla: 'L',
    estado: "disponible",
    color: "gris",
    precio: "9990",
    tipo: "Hombre",
    categoria: "hombres"
  },
  {
    id: 8,
    img: 'https://res.cloudinary.com/initial-cloud/image/upload/v1620870405/shirt_kbryht.png',
    nombre: 'polera',
    talla: 'L',
    estado: "disponible",
    color: "gris",
    precio: "9990",
    tipo: "Hombre",
    categoria: "hombres"
  },
  {
    id: 8,
    img: 'https://res.cloudinary.com/initial-cloud/image/upload/v1620870405/shirt_kbryht.png',
    nombre: 'polera',
    talla: 'L',
    estado: "disponible",
    color: "gris",
    precio: "9990",
    tipo: "Hombre",
    categoria: "hombres"
  },
  {
    id: 8,
    img: 'https://res.cloudinary.com/initial-cloud/image/upload/v1620870405/shirt_kbryht.png',
    nombre: 'polera',
    talla: 'L',
    estado: "disponible",
    color: "gris",
    precio: "9990",
    tipo: "Hombre",
    categoria: "hombres"
  },
  {
    id: 8,
    img: 'https://res.cloudinary.com/initial-cloud/image/upload/v1620870405/shirt_kbryht.png',
    nombre: 'polera',
    talla: 'L',
    estado: "disponible",
    color: "gris",
    precio: "9990",
    tipo: "Hombre",
    categoria: "hombres"
  },
  {
    id: 8,
    img: 'https://res.cloudinary.com/initial-cloud/image/upload/v1620870405/shirt_kbryht.png',
    nombre: 'polera',
    talla: 'L',
    estado: "disponible",
    color: "gris",
    precio: "9990",
    tipo: "Hombre",
    categoria: "hombres"
  },
  {
    id: 8,
    img: 'https://res.cloudinary.com/initial-cloud/image/upload/v1620870405/shirt_kbryht.png',
    nombre: 'polera',
    talla: 'L',
    estado: "disponible",
    color: "gris",
    precio: "9990",
    tipo: "Hombre",
    categoria: "hombres"
  },
  {
    id: 8,
    img: 'https://res.cloudinary.com/initial-cloud/image/upload/v1620870405/shirt_kbryht.png',
    nombre: 'polera',
    talla: 'L',
    estado: "disponible",
    color: "gris",
    precio: "9990",
    tipo: "Hombre",
    categoria: "hombres"
  },
  {
    id: 8,
    img: 'https://res.cloudinary.com/initial-cloud/image/upload/v1620870405/shirt_kbryht.png',
    nombre: 'polera',
    talla: 'L',
    estado: "disponible",
    color: "gris",
    precio: "9990",
    tipo: "Hombre",
    categoria: "hombres"
  },


]

const DetalleTipo = ({titulo="TITULO"}) => {
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