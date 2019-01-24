import React, { Component } from 'react';
import { Input, Menu, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './Navbar.css';

/*
Navbar containing the different links 
Links: home, leaderboard, friends list, profile, and sign out 
*/

class MenuExampleSecondary extends Component {
  render() {
    return (
        <Menu secondary className="nav-container">
            <Menu.Item className="navleft" name='Home' as={Link} to="/Home"/>
            <Menu.Item className="navleft" name='Leaderboard' as={Link} to="/Leaderboard"  />
            <Menu.Item className="navleft" name='Friends' as={Link} to="/Friends" />
            <Menu.Menu position='right'>
            <Menu.Item>
                <Input icon='search' placeholder='Search...' />
            </Menu.Item>
            <Menu.Item>
                <Dropdown button className='circular icon' icon='user outline'> 
                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} to="/Profile">Profile</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/">Sign Out</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
  }
}

export default MenuExampleSecondary;