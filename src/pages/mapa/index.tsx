import Mapa from 'src/screens/Mapa'

const MapaPage = () => {
  return (
    <>
      <Mapa />
    </>
  )
}

MapaPage.acl = {
  action: 'read',
  subject: 'mapa'
}

export default MapaPage
