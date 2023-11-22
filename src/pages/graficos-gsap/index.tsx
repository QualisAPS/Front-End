import GraficosGsapPage from 'src/screens/GraficosGsapPage'

const GraficosGsap = () => {
  return (
    <>
      <GraficosGsapPage />
    </>
  )
}

GraficosGsap.acl = {
  action: 'read',
  subject: 'graficos-aa-gsap'
}

export default GraficosGsap
