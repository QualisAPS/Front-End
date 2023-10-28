import ResultadoPaq from 'src/screens/ResultadoPaq'

const ResultadoPaqPage = () => {
  return (
    <>
      <ResultadoPaq />
    </>
  )
}

ResultadoPaqPage.acl = {
  action: 'read',
  subject: 'resultado-paq'
}

export default ResultadoPaqPage
