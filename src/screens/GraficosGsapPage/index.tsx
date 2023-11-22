import { SyntheticEvent, useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardHeader from '@mui/material/CardHeader'
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'

import Filters from 'src/components/Filters'

const GraficosGsapPage = () => {
  const [value, setValue] = useState<string>('1')

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Grid container spacing={6} component='section'>
      <Grid item xs={12}>
        <Card component='article'>
          <CardHeader title='Gráfico Gsap'></CardHeader>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <TabContext value={value}>
          <TabList onChange={handleChange} aria-label='simple tabs example'>
            <Tab value='1' label='Por Dimensão' />
            <Tab value='2' label='Por Subdimensão' />
          </TabList>
          <TabPanel value='1'>
            <Filters />
          </TabPanel>
          <TabPanel value='2'>
            <Filters />
          </TabPanel>
        </TabContext>
      </Grid>
    </Grid>
  )
}

export default GraficosGsapPage
