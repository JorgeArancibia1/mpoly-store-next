
const Avatar = (
  {
    configClass = 'img-avatar',
    img = 'https://res.cloudinary.com/dacsggoox/image/upload/v1620600640/avatar_rkcnm2.png',
    alt = "imagen",
    width = '20',
    height = '20'
  }
) => {

  return (
    <img className={configClass} src={img} alt={alt} width={width} height={height} />
  )
}

export default Avatar