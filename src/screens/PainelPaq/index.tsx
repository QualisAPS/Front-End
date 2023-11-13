// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

import Filters from 'src/components/Filters'
import CardStatsHorizontal from 'src/components/Card'

const PainelPaq = () => {
  return (
    <Grid container spacing={6} component='section'>
      <Grid item xs={12}>
        <Card component='article'>
          <CardHeader title='Painel PAQ'></CardHeader>
          <CardContent>
            <Filters />
          </CardContent>
        </Card>
        <Grid container spacing={6}>
          <Grid item xs={12} md={4} lg={3} sx={{ mt: 4 }}>
            <CardStatsHorizontal title='Total de Instrumentos Iniciados' number='100' />
          </Grid>
          <Grid item xs={12} md={4} lg={3} sx={{ mt: 4 }}>
            <CardStatsHorizontal title='Instrumentos Incompletos' number='0' />
          </Grid>
          <Grid item xs={12} md={4} lg={3} sx={{ mt: 4 }}>
            <CardStatsHorizontal title='Instrumentos Completos' number='100' />
          </Grid>
          <Grid item xs={12} md={4} lg={3} sx={{ mt: 4 }}>
            <CardStatsHorizontal title='Total GSAPs' number='101' />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default PainelPaq
