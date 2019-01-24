import React from 'react'
import { Image, Header } from 'semantic-ui-react'

/*
The user's profile page 
contains a picture of the user and his name
*/

const ProfilePage = () => (
  <div>
    <Image centered src='/GamePictures/profile.png' size='medium' circular />
    <Header size='huge' textAlign='center' color='grey'>Toby Au</Header>
  </div>
)

export default ProfilePage;