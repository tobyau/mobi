import React from 'react'
import { Switch, Route } from 'react-router-dom'
import GamePage from './GamesPage/GamePage'
import LoginPage from './LoginPage/LoginPage'
import Navbar from './Navbar'
import ProfilePage from './ProfilePage'
import FriendsPage from './FriendsPage/FriendsPage'
import LeaderboardPage from './LeaderboardPage/LeaderboardPage'


const RoutePages = () => (
  <div>
    <LoginPage />
    <Navbar />
    <Switch>
      <Route exact path='/Home' component={GamePage}/>
      <Route path='/Leaderboard' component={LeaderboardPage}/>
      <Route path='/Friends' component={FriendsPage}/>
      <Route path='/Profile' component={ProfilePage}/>
    </Switch>
  </div>
)

export default RoutePages;