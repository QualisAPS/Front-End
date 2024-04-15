// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

const Certification = () => {
  return (
    <Grid container spacing={6} component='section'>
      <Grid item xs={12}>
        <Card component='article'>
          <CardHeader title='Certificação'></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}>Certificação da Equipe.</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Grid item xs={6} component='article'>
          <Card>
            <CardHeader title='Avaliação'></CardHeader>
            <CardContent>
              <Typography sx={{ mb: 2 }}>
                Avaliação: <strong>3 Ipês</strong>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Certification
