import React from 'react';
import { Advertisement, List, Image } from 'semantic-ui-react';
import './Leaderboard.css';

const Leaderboard = () => (
  <List relaxed='very'>
    <List.Item>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' />
      <List.Content>
        <List.Header as='a'>Daniel Louise</List.Header>
        <List.Description>
          Last seen watching{' '}
          <div>
            <b>Arrested Development</b>
          </div>{' '}
          just now.
        </List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/stevie.jpg' />
      <List.Content>
        <List.Header as='a'>Stevie Feliciano</List.Header>
        <List.Description>
          Last seen watching{' '}
          <div>
            <b>Bob's Burgers</b>
          </div>{' '}
          10 hours ago.
        </List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
      <List.Content>
        <List.Header as='a'>Elliot Fu</List.Header>
        <List.Description>
          Last seen watching{' '}
          <div>
            <b>The Godfather Part 2</b>
          </div>{' '}
          yesterday.
        </List.Description>
      </List.Content>
    </List.Item>
  </List>
)

const LeaderboardPage = () => (
  <div>
    <Advertisement unit='leaderboard' test='Leaderboard' />
    <Leaderboard />
  </div>
)

export default LeaderboardPage;