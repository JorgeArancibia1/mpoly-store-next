// import { Container } from "semantic-ui-react"
import Header from "../../components/Header"
// import Navbar from "../../components/Navbar/Navbar"

const BasicLayout = ({children}) => {
  return (
    <div className="basic-layout">
      <Header />
      {/* <Navbar /> */}
      <div className="container-children">
        { children }
      </div>
    </div>
  )
}

export default BasicLayout