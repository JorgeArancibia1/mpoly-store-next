
const Button = (
  {
    isButton,
    children
  }
) => {

  return (
    <>
      {
        isButton ?
          (
            <button className="botoncito d-flex container-flex-center">
              {children}
            </button>
          ) : (
            <a href="/" className="botoncito d-flex container-flex-center">
              {children}
            </a>
          )
      }
    </>
  )
}

export default Button;