import RelatorioTematico from 'src/screens/RelatorioTematico'

const RelatoriosTematicosPage = () => {
  return (
    <>
      <RelatorioTematico />
    </>
  )
}

RelatoriosTematicosPage.acl = {
  action: 'read',
  subject: 'relatorios-tematicos'
}

export default RelatoriosTematicosPage
