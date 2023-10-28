import HomeGsap from 'src/screens/HomeGsap'

const Gsap = () => {
  return (
    <>
      <HomeGsap />
    </>
  )
}

Gsap.acl = {
  action: 'read',
  subject: 'home-gsap'
}

export default Gsap
