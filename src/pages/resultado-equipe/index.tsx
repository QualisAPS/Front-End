import ResultadoEquipe from 'src/screens/ResultadoEquipe'

const ResultadoEquipePage = () => {
  return (
    <>
      <ResultadoEquipe />
    </>
  )
}

ResultadoEquipePage.acl = {
  action: 'read',
  subject: 'resultado-equipe'
}

export default ResultadoEquipePage
