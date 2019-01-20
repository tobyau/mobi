import React from 'react';
import { Table, Image , Header} from 'semantic-ui-react';

const BoardHeader = () => (
  <Header as='h2' block textAlign="center" inverted color="blue">
    Leaderboard
  </Header>
)

const Leaderboard = () => (
  <Table basic='very' celled collapsing>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Rank</Table.HeaderCell>
        <Table.HeaderCell>Players</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>22</Table.Cell>
        <Table.Cell>
          <Header as='h4' image>
            <Image src='https://react.semantic-ui.com/images/avatar/small/lena.png' rounded size='mini' />
            <Header.Content>
              Lena
              <Header.Subheader>Human Resources</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>11</Table.Cell>
        <Table.Cell>
          <Header as='h4' image>
            <Image src='https://react.semantic-ui.com/images/avatar/small/mark.png' rounded size='mini' />
            <Header.Content>
              Mark
              <Header.Subheader>Executive</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>11</Table.Cell>
        <Table.Cell>
          <Header as='h4' image>
            <Image src='https://react.semantic-ui.com/images/avatar/small/mark.png' rounded size='mini' />
            <Header.Content>
              Mark
              <Header.Subheader>Executive</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>11</Table.Cell>
        <Table.Cell>
          <Header as='h4' image>
            <Image src='https://react.semantic-ui.com/images/avatar/small/mark.png' rounded size='mini' />
            <Header.Content>
              Mark
              <Header.Subheader>Executive</Header.Subheader>
            </Header.Content>
          </Header>
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