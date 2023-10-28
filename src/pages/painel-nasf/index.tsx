import PainelNasf from 'src/screens/PainelNasf'

const PainelNasfPage = () => {
  return (
    <>
      <PainelNasf />
    </>
  )
}

PainelNasfPage.acl = {
  action: 'read',
  subject: 'painel-nasf'
}

export default PainelNasfPage
