import CertificacaoPage from 'src/screens/CertificacaoPage'

const Certificacao = () => {
  return (
    <>
      <CertificacaoPage />
    </>
  )
}

Certificacao.acl = {
  action: 'read',
  subject: 'certificacao'
}

export default Certificacao
