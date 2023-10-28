import PainelGsap from 'src/screens/PainelGsap'

const PainelGsapPage = () => {
  return (
    <>
      <PainelGsap />
    </>
  )
}

PainelGsapPage.acl = {
  action: 'read',
  subject: 'painel-gsap'
}

export default PainelGsapPage
