'use client'

// ** MUI Imports
import type { SyntheticEvent } from 'react'
import { useState } from 'react'

import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'

const Structure = () => {
  const [value, setValue] = useState<string>('1')

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Grid container spacing={6} component='section'>
      <Grid item xs={12}>
        <Card component='article'>
          <CardHeader title='Resultados Estrutura'></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}>
              Dados coletados com os gerentes/supervisores das Unidades Básicas de Saúde entre agosto de 2020 e janeiro
              de 2021, via entrevista telefônica (apresentados no link telefone) e por questionário on line
              (apresentados no link autopreenchimento).
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <TabContext value={value}>
          <TabList onChange={handleChange} aria-label='simple tabs example'>
            <Tab value='1' label=' Autopreenchimento' />
            <Tab value='2' label='Telefone' />
          </TabList>
          <TabPanel value='1'>
            <iframe
              title='Autopreenchimento'
              id='myIframe'
              height='600px'
              width='100%'
              src='https://app.powerbi.com/view?r=eyJrIjoiYWI4NTM0MmQtMmMyNC00ZWYwLWIwZDQtNDg4MmZlYjc4YjY3IiwidCI6ImVjMzU5YmExLTYzMGItNGQyYi1iODMzLWM4ZTZkNDhmODA1OSJ9'
            ></iframe>
          </TabPanel>
          <TabPanel value='2'>
            <iframe
              title='Telefone'
              id='myIframe'
              height='600px'
              width='100%'
              src='https://app.powerbi.com/view?r=eyJrIjoiYjRmNGQ5ODYtOTk0MS00MmM2LTgxYjYtYzg0MDliOTlkMmE0IiwidCI6ImVjMzU5YmExLTYzMGItNGQyYi1iODMzLWM4ZTZkNDhmODA1OSJ9&amp;pageName=ReportSection'
            ></iframe>
          </TabPanel>
        </TabContext>
      </Grid>
    </Grid>
  )
}

export default Structure
