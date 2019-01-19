import React, { Component } from 'react';
import { Input, Menu, Icon, Button } from 'semantic-ui-react';

const ProfileButton = () => (
    <Button circular icon>
        <Icon name='user outline' size="large" />
    </Button>
)

class MenuExampleSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item
          name='Leaderboard'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='friends'
          active={activeItem === 'friends'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item>
              <ProfileButton />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default MenuExampleSecondary;