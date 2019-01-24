import React from 'react'
<<<<<<< Updated upstream
import { Button, Image, Table, Header } from 'semantic-ui-react'
import './FriendsPage.css'

/*
Friends page component 
displays a table of friends with respective view profile buttons next to each friend
*/

const ListOfFriends = () => (
  <div>
    <Header as='h2' block inverted color="blue">
      Friends List
    </Header>

    <Table unstackable className="friends-list">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Profile</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell><Image avatar src='https://react.semantic-ui.com/images/avatar/small/mark.png' />John</Table.Cell>
          <Table.Cell><Button>View</Button></Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell><Image avatar src='https://react.semantic-ui.com/images/avatar/small/molly.png' />Jamie</Table.Cell>
          <Table.Cell><Button>View</Button></Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell><Image avatar src='https://react.semantic-ui.com/images/avatar/small/mark.png' />Jillian</Table.Cell>
          <Table.Cell><Button>View</Button></Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell><Image avatar src='https://react.semantic-ui.com/images/avatar/small/molly.png' />Cindy</Table.Cell>
          <Table.Cell><Button>View</Button></Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </div>
=======
import { Button, Image, List } from 'semantic-ui-react'
import './FriendsPage.css'

const ListOfFriends = () => (
  <List className="friends-list">
    <List.Item>
      <List.Content floated='right'>
        <Button>Add</Button>
      </List.Content>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/lena.png' />
      <List.Content>Lena</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <Button>Add</Button>
      </List.Content>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/lindsay.png' />
      <List.Content>Lindsay</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <Button>Add</Button>
      </List.Content>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/mark.png' />
      <List.Content>Mark</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <Button>Add</Button>
      </List.Content>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/molly.png' />
      <List.Content>Molly</List.Content>
    </List.Item>
  </List>
>>>>>>> Stashed changes
)

export default ListOfFriends;