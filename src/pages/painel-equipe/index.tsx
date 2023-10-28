import PainelEquipe from 'src/screens/PainelEquipe'

const PainelEquipePage = () => {
  return (
    <>
      <PainelEquipe />
    </>
  )
}

PainelEquipePage.acl = {
  action: 'read',
  subject: 'painel-equipe'
}

export default PainelEquipePage
