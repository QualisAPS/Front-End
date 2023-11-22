// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

import InstrumentoFilter from './components/InstrumentoFilter'

const InstrumentoGestaoPage = () => {
  return (
    <Grid container spacing={6} component='section'>
      <Grid item xs={12}>
        <Card component='article'>
          <CardHeader title='Instrumentos GSAP'></CardHeader>
          <CardContent>
            <InstrumentoFilter />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default InstrumentoGestaoPage
