// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

import Filters from 'src/components/Filters'

const ResultadoEquipe = () => {
  return (
    <Grid container spacing={6} component='section'>
      <Grid item xs={12}>
        <Card component='article'>
          <CardHeader
            title='Resultado
           por Equipe'
          ></CardHeader>
          <CardContent>
            <Filters />
            <Typography sx={{ mb: 2 }}>EM DESENVOLVIMENTO</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default ResultadoEquipe
