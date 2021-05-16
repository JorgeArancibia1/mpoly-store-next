import Button from "../Button"

const Card = (props) => {

  return (
    <div className="card">
      <img className="br" src={ props.imagen } alt="producto" />
      <div className="footer-card">
        <Button iconitoButton={props.iconito} />
      </div>
    </div>
  )
}

export default Card