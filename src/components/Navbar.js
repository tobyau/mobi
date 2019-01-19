import React, { Component } from 'react';
import { Input, Menu, Dropdown } from 'semantic-ui-react';

const ProfileDropDown = () => (
    <Dropdown button className='circular icon' icon='user outline'> 
        <Dropdown.Menu>
            <Dropdown.Item>Account</Dropdown.Item>
            <Dropdown.Item>Logout</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
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
              <ProfileDropDown />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default MenuExampleSecondary;