import { SyntheticEvent, useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardHeader from '@mui/material/CardHeader'
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'

const ResultadoGsap = () => {
  const [value, setValue] = useState<string>('1')

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Grid container spacing={6} component='section'>
      <Grid item xs={12}>
        <Card component='article'>
          <CardHeader
            title='Resultado
           GSAP'
          ></CardHeader>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <TabContext value={value}>
          <TabList onChange={handleChange} aria-label='simple tabs example'>
            <Tab value='1' label='Por Dimensão' />
            <Tab value='2' label='Por Subdimensão' />
            <Tab value='3' label='Por Padrão' />
          </TabList>
          <TabPanel value='1'>a</TabPanel>
          <TabPanel value='2'>b</TabPanel>
          <TabPanel value='3'>b</TabPanel>
        </TabContext>
      </Grid>
    </Grid>
  )
}

export default ResultadoGsap
