// ** React Imports
import { useContext } from 'react'
import HomeGsap from 'src/screens/HomeGsap'
import HomeAdmin from 'src/screens/HomeAdmin'

// ** Context Imports
import { AbilityContext } from 'src/layouts/components/acl/Can'

const Home = () => {
  const ability = useContext(AbilityContext)
  console.log(ability.can)

  return <>{ability?.can('read', 'admin') ? <HomeAdmin /> : <HomeGsap />}</>
}

Home.acl = {
  action: 'read',
  subject: 'home'
}

export default Home
