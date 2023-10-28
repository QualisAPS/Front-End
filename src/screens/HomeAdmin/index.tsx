// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

const HomeAdmin = () => {
  return (
    <Grid container spacing={6} component='section'>
      <Grid item xs={12}>
        <Card component='article'>
          <CardHeader title='Dados do(a) Usuário(a)'></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}>
              Nome: <strong>Gabriel Teixeira</strong>
            </Typography>
            <Typography>
              Email: <strong>admin@qualis.com</strong>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default HomeAdmin
