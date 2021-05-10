import { Container } from "semantic-ui-react"

const BasicLayout = ({children}) => {
  return (
    <Container fuild className="basic-layout">
      <Container className="container-children">
        { children }
      </Container>
    </Container>
  )
}

export default BasicLayout