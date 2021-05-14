export const Header = () => {
  return (
    <section className="barra-title">
      <div className="principal-title">
        <a href="/">
          <h1 className="title-header">MPoly Store</h1>
        </a>
      </div>
      <div className="container-right-head">
        <img className="img-avatar" src="https://res.cloudinary.com/dacsggoox/image/upload/v1620600640/avatar_rkcnm2.png" alt="avatar" width="40" height="40" />
        <h3 className="name">Jorge Arancibia</h3>
        <a href="./login.html">
          <img className="img-cerrar-sesion" src="https://res.cloudinary.com/initial-cloud/image/upload/v1620877235/cerrar-sesion_m9zayq.png" width="50" alt="Cerrar-sesion" />
        </a>
      </div>
    </section>
  )
}