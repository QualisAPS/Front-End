import InstrumentoGestaoPage from 'src/screens/InstrumentoGestaoPage'

const InstrumentoGestao = () => {
  return (
    <>
      <InstrumentoGestaoPage />
    </>
  )
}

InstrumentoGestao.acl = {
  action: 'read',
  subject: 'instrumento-aa-gsap'
}

export default InstrumentoGestao
