import React from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

const SemanticSidebar = () => (
  <Sidebar.Pushable as={Segment}>
    <Sidebar
      as={Menu}
      animation='overlay'
      icon='labeled'
      inverted
      vertical
      visible
      width='thin'
    >
      <Menu.Item as='a'>
        {/* <Icon name='home' /> */}
        Home
      </Menu.Item>
      <Menu.Item as='a'>
        {/* <Icon name='gamepad' /> */}
        Games
      </Menu.Item>
      <Menu.Item as='a'>
        {/* <Icon name='camera' /> */}
        Channels
      </Menu.Item>
    </Sidebar>

    <Sidebar.Pusher>
      <Segment basic>
        <Header as='h3'>Menu de opciones</Header>
      </Segment>
    </Sidebar.Pusher>
  </Sidebar.Pushable>
)

export default SemanticSidebar