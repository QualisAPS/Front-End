// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import RelatorioTematicoFilter from 'src/components/RelatorioTematicoFilter'

const RelatorioTematico = () => {
  return (
    <Grid container spacing={6} component='section'>
      <Grid item xs={12}>
        <Card component='article'>
          <CardHeader title='Relatórios Temáticos'></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}>Os Relatórios Temáticos sao...</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card component='article'>
          <RelatorioTematicoFilter />{' '}
        </Card>
      </Grid>
    </Grid>
  )
}

export default RelatorioTematico
