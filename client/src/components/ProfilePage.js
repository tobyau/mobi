import React from 'react'
import { Image, Header } from 'semantic-ui-react'

const ProfilePage = () => (
  <div>
    <Image centered src='https://react.semantic-ui.com/images/avatar/large/matthew.png' size='medium' circular />
    <Header size='huge' textAlign='center' color='grey'>Toby Au</Header>
  </div>
)

export default ProfilePage;