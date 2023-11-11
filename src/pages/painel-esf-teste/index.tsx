// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import PainelInLocoFilter from 'src/components/PainelInLocoFilter'

const PainelEsfPage = () => {
  return (
    <Grid container spacing={6} component='section'>
      <Grid item xs={12}>
        <Card component='article'>
          <CardHeader title='Cadastramento de usuários e Domicílios'></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}>Aqui pode ser algumas informaçoes adicionais</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card component='article'>
          <PainelInLocoFilter />{' '}
        </Card>
      </Grid>
    </Grid>
  )
}

PainelEsfPage.acl = {
  action: 'read',
  subject: 'painel-esf'
}

export default PainelEsfPage
