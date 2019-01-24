import React from 'react'
import { Image, Header } from 'semantic-ui-react'

const ProfilePage = () => (
  <div>
    <Image centered src='/GamePictures/profile.png' size='medium' circular />
    <Header size='huge' textAlign='center' color='grey'>Toby Au</Header>
  </div>
)

export default ProfilePage;