const Button = (props) => {

  return (
    <a href="/" className="botoncito">
      Agregar
      {
        props.iconitoButton && 
        <img src={ props.iconitoButton } width="20px" alt="carrito" />
      }
    </a>
  )
}
export default Button