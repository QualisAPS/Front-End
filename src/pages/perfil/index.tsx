import ProfilePage from 'src/screens/Profile'

const Profile = () => {
  return (
    <>
      <ProfilePage />
    </>
  )
}

Profile.acl = {
  action: 'read',
  subject: 'profile'
}

export default Profile
