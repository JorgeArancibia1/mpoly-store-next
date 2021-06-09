import DetalleTipo from "../../components/DetalleTipo/DetalleTipo";
import BasicLayout from "../../layouts/BasicLayout/BasicLayout";
import { useRouter } from "next/router";

const Tipo = () => {

  const { query } = useRouter();

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
      id: 10,
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
      id: 11,
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
      id: 12,
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
      id: 13,
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
      id: 14,
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
      id: 15,
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
      id: 16,
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
      id: 17,
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
      id: 18,
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
      id: 19,
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

	return (
		<BasicLayout>
			<div className="100vh">
				<DetalleTipo titulo={query.Tipo} productos={productos} />
			</div>
		</BasicLayout>
	);
};

export default Tipo;
