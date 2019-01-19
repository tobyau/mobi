import React, { Component } from 'react';
import { Input, Menu, Dropdown } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

class MenuExampleSecondary extends Component {
  render() {
    return (
        <Menu secondary className="nav-container">
            <Menu.Item className="navleft" name='Home' as={NavLink} to="/"/>
            <Menu.Item className="navleft" name='Leaderboard' as={NavLink} to="/Leaderboard"  />
            <Menu.Item className="navleft" name='Friends' as={NavLink} to="/Friends" />
            <Menu.Menu position='right'>
            <Menu.Item>
                <Input icon='search' placeholder='Search...' />
            </Menu.Item>
            <Menu.Item>
                <Dropdown button className='circular icon' icon='user outline'> 
                    <Dropdown.Menu>
                        <Dropdown.Item as={NavLink} to="/Profile">Profile</Dropdown.Item>
                        <Dropdown.Item as={NavLink} to="/Sign-In">Sign In</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
  }
}

export default MenuExampleSecondary;