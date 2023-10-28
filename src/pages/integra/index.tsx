import IntegraPage from 'src/screens/IntegraPage'

const Integra = () => {
  return (
    <>
      <IntegraPage />
    </>
  )
}

Integra.acl = {
  action: 'read',
  subject: 'integra'
}

export default Integra
