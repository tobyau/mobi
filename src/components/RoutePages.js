import React from 'react'
import { Switch, Route } from 'react-router-dom'
import GamePage from './GamesPage/GamePage'
import LoginPage from './LoginPage/LoginPage'
import Navbar from './Navbar'
import ProfilePage from './ProfilePage'
import FriendsPage from './FriendsPage/FriendsPage'
import LeaderboardPage from './LeaderboardPage/LeaderboardPage'
import TetrisGamePage from './GamesPage/TetrisGame/TetrisGamePage';

/*
If login or signup is true, 
*/

const RoutePages = () => (
  <div>
    <Switch>
      <Route exact path='/' component={LoginPage}/>
    </Switch>

    <Switch>
      <Route path='/(Home|Leaderboard|Friends|Profile)/' component={Navbar}/>
    </Switch>
    
    <Switch>
      <Route exact path='/Home' component={GamePage}/>
      <Route exact path='/Leaderboard' component={LeaderboardPage}/>
      <Route exact path='/Friends' component={FriendsPage}/>
      <Route exact path='/Profile' component={ProfilePage}/>
      <Route exact path='/Tetris' component={TetrisGamePage}/>
    </Switch>
  </div>
)

export default RoutePages;