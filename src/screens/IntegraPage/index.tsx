// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { SyntheticEvent, useState } from 'react'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'

// Tabs Imports
import AcordoTab from './components/AcordoTab'
import PlanificacaTab from './components/PlanificacaoTab'

const IntegraPage = () => {
  const [value, setValue] = useState<string>('1')

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Grid container spacing={6} component='section'>
      <Grid item xs={12}>
        <Card component='article'>
          <CardHeader title='Integra SES'></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}>
              A SES-DF desevolve uma série de programas e iniciativas que visam a melhoria da qualidade da Atenção
              Primária à Saúde.
            </Typography>
            <Typography sx={{ mb: 2 }}>
              Dentre estes, destacam-se o Acordo de Gestão Local (AGL) e a Planificação da Atenção à Saúde, que possuem
              ampla intersecção com o Programa QualisAPS.
            </Typography>
            <Typography sx={{ mb: 2 }}>
              Dessa forma, nesta sessão, apresentam-se mais detalhes dessas iniciativas de forma a elucidar as relações
              com o Programa e a integração entre eles.
            </Typography>
            <Typography sx={{ mb: 2 }}>
              Confira na tabela abaixo um resumo das relações entre os padrões de qualidade do instrumento de
              autoavaliação do QualisAPS, os indicadores do AGL e os macroprocessos da Planificação.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <TabContext value={value}>
          <TabList onChange={handleChange} aria-label='simple tabs example'>
            <Tab value='1' label='Acordo de Gestão Local (AGL)' />
            <Tab value='2' label='Planificação' />
          </TabList>
          <TabPanel value='1'>
            <AcordoTab />
          </TabPanel>
          <TabPanel value='2'>
            <PlanificacaTab />
          </TabPanel>
        </TabContext>
      </Grid>
    </Grid>
  )
}

export default IntegraPage
