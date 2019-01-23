import React from 'react';
import { Table , Header} from 'semantic-ui-react';
import './LeaderboardPage.css'

const BoardHeader = () => (
  <Header as='h2' block inverted color="blue" className="header">
    Leaderboard
  </Header>
)

const Leaderboard = () => (
  <Table fixed textAlign='center' className='leaderboard'>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Rank</Table.HeaderCell>
        <Table.HeaderCell>Players</Table.HeaderCell>
        <Table.HeaderCell>Points</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>1</Table.Cell>
        <Table.Cell>Naruto</Table.Cell>
        <Table.Cell>
          900
        </Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>2</Table.Cell>
        <Table.Cell>Sasuke</Table.Cell>
        <Table.Cell>
          900
        </Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>3</Table.Cell>
        <Table.Cell>Naruto Shadow Clone</Table.Cell>
        <Table.Cell>
          24
        </Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>3</Table.Cell>
        <Table.Cell>Naruto Shadow Clone</Table.Cell>
        <Table.Cell>
          24
        </Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>3</Table.Cell>
        <Table.Cell>Naruto Shadow Clone</Table.Cell>
        <Table.Cell>
          24
        </Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>3</Table.Cell>
        <Table.Cell>Naruto Shadow Clone</Table.Cell>
        <Table.Cell>
          24
        </Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>3</Table.Cell>
        <Table.Cell>Naruto Shadow Clone</Table.Cell>
        <Table.Cell>
          24
        </Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>3</Table.Cell>
        <Table.Cell>Naruto Shadow Clone</Table.Cell>
        <Table.Cell>
          24
        </Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>4</Table.Cell>
        <Table.Cell>Sakura</Table.Cell>
        <Table.Cell>
          1
        </Table.Cell>
      </Table.Row>

    </Table.Body>
  </Table>
)

const LeaderboardPage = () => (
  <div>
    <BoardHeader />
    <Leaderboard />
  </div>
)

export default LeaderboardPage;