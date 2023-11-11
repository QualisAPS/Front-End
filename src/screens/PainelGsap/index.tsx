// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

import Filters from 'src/components/Filters'

const PainelGsap = () => {
  return (
    <Grid container spacing={6} component='section'>
      <Grid item xs={12}>
        <Card component='article'>
          <CardHeader title='Painel GSAP'></CardHeader>
          <CardContent>
            <Filters />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default PainelGsap
