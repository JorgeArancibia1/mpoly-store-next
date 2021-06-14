import { Button } from 'semantic-ui-react';
import { borrarProducto } from '../../../api/product'; 
import { toast } from "react-toastify";
import useAuth from '../../../hooks/useAuth';
import { useState } from 'react';
import { useRouter } from 'next/router';


export const MensajeModal = ({
  mensaje="¿Seguro que desea borrar?",
  onCloseDelete,
  row
}) => {
	const { logout } = useAuth();
	const [loading, setLoading] = useState(false);
	const router = useRouter();
  

  const si = async() => {
    console.log(row)
    setLoading(true)
    const response = await borrarProducto(row.id,logout)
    setLoading(false)
    console.log(response)
    if (!response) {
      toast.error("Error al borrar");
    } else if (response.statusCode === 403) {
      toast.error("No tiene los permisos para poder borrar")
    } else {
      toast.success("Producto borrado")
    }
    console.log(row.id)
    router.reload(window.location.pathname)
  }
  return (
    <div className="container-modal">
      <p >{mensaje}</p>
      <Button variant="contained" color="blue" onClick={si} loading={loading}>
        Si
      </Button>
      <Button variant="contained" color="blue" onClick={onCloseDelete}>
        No
      </Button>
    </div>
  )
}

export default MensajeModal;