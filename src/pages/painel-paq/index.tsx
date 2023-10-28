import PainelPaq from 'src/screens/PainelPaq'

const PainelPaqPage = () => {
  return (
    <>
      <PainelPaq />
    </>
  )
}

PainelPaqPage.acl = {
  action: 'read',
  subject: 'painel-paq'
}

export default PainelPaqPage
