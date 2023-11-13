import AutorizacaoPage from 'src/screens/AutorizacaoPage'

const Autorizacao = () => {
  return (
    <>
      <AutorizacaoPage />
    </>
  )
}

Autorizacao.acl = {
  action: 'read',
  subject: 'autorizacao'
}

export default Autorizacao
