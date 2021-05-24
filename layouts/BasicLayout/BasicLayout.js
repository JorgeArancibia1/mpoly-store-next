// import { Container } from "semantic-ui-react"
import Header from "../../components/Header"

const BasicLayout = ({children}) => {
  return (
    <div className="basic-layout">
      <Header/>
      <div className="container-children">
        { children }
      </div>
    </div>
  )
}

export default BasicLayout