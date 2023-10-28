import ResultadoGsap from 'src/screens/ResultadoGsap'

const ResultadoGsapPage = () => {
  return (
    <>
      <ResultadoGsap />
    </>
  )
}

ResultadoGsapPage.acl = {
  action: 'read',
  subject: 'resultado-gsap'
}

export default ResultadoGsapPage
