import AvaliacaoInLoco from 'src/screens/AvaliacaoInLoco'

const AvaliacaoInLocoPage = () => {
  return (
    <>
      <AvaliacaoInLoco />
    </>
  )
}

AvaliacaoInLocoPage.acl = {
  action: 'read',
  subject: 'avaliacao-in-loco'
}

export default AvaliacaoInLocoPage
