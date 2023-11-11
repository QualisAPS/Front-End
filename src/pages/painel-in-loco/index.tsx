import PainelInLoco from 'src/screens/PainelInLoco'

const PainelInLocoPage = () => {
  return (
    <>
      <PainelInLoco />
    </>
  )
}

PainelInLocoPage.acl = {
  action: 'read',
  subject: 'painel-in-loco'
}

export default PainelInLocoPage
