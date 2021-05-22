import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';

const Soporte = () => {
  return (
    <section className="soporte">
      <div className="soporte1" >
        <HeadsetMicIcon style={{ fontSize: 30 }}/>
        <div className="soporte-completo ml-2">
          <h1 className="soporte-numero">+56973560302</h1>
          <h1 className="soporte-correo">Soporte@mpolystore.cl</h1>
        </div>
      </div>
    </section>
  )
}

export default Soporte