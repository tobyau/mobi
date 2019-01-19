import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Game from './GamePage'
import Navbar from './Navbar'
import ProfilePage from './ProfilePage'
import FriendsPage from './FriendsPage'
import LeaderboardPage from './LeaderboardPage'


const RoutePages = () => (
  <div>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Game}/>
      <Route path='/Leaderboard' component={LeaderboardPage}/>
      <Route path='/Friends' component={FriendsPage}/>
      <Route path='/Profile' component={ProfilePage}/>
    </Switch>
  </div>
)

export default RoutePages;
