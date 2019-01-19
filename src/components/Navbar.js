import React, { Component } from 'react';
import { Input, Menu, Dropdown } from 'semantic-ui-react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

class MenuExampleSecondary extends Component {
  render() {
    return (
        <Router>
            <Menu secondary>
                <Menu.Item name='Home' as={NavLink} to="/"/>
                <Menu.Item name='Leaderboard' as={NavLink} to="/Leaderboard"  />
                <Menu.Item name='Friends' as={NavLink} to="/Friends" />
                <Menu.Menu position='right'>
                <Menu.Item>
                    <Input icon='search' placeholder='Search...' />
                </Menu.Item>
                <Menu.Item>
                    <Dropdown button className='circular icon' icon='user outline'> 
                        <Dropdown.Menu>
                            <Dropdown.Item as={NavLink} to="/Account">Account</Dropdown.Item>
                            <Dropdown.Item as={NavLink} to="/Sign-In">Sign In</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
                </Menu.Menu>
            </Menu>
        </Router>
    )
  }
}

export default MenuExampleSecondary;