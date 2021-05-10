// import { Button, Icon } from "semantic-ui-react";
import BasicLayout from "../layouts/BasicLayout";

export default function Home() {
  return (
    <div className="Home">
      {/* <h1>Estamos en Next.js</h1>
      <Button primary>Primary</Button>
      <Button secondary>Secondary</Button>
      <Icon name="home" /> */}
      <BasicLayout>
        <h2>Estamos dentro de la home</h2>
      </BasicLayout>
    </div>
  )
}
