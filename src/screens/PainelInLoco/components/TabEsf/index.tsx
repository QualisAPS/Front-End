// ** React Imports
import { SyntheticEvent, useState } from 'react'
import Link from 'next/link'

// ** MUI Imports
import Accordion from '@mui/material/Accordion'
import Typography from '@mui/material/Typography'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import { Stack } from '@mui/system'

import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'

const DemoPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center'
}))

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const TabEsf = () => {
  // ** State
  const [expanded, setExpanded] = useState<string | false>(false)

  const handleChange = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <DemoPaper variant='outlined'>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          id='controlled-panel-header-1'
          aria-controls='controlled-panel-content-1'
          expandIcon={<Icon fontSize='1.25rem' icon='tabler:chevron-down' />}
        >
          <Typography>I. CADASTRAMENTO DE USUÁRIOS E DOMICÍLIOS</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ textAlign: 'start' }}>
          <Stack spacing={2}>
            <Typography
              sx={{ color: 'text.secondary', textDecoration: 'none' }}
              component={Link}
              href='/painel-esf-teste'
            >
              1. A sua equipe realiza cadastro individual e/ou rápido:
            </Typography>
            <Typography
              sx={{ color: 'text.secondary', textDecoration: 'none' }}
              component={Link}
              href='/painel-esf-teste'
            >
              2. Considerando o horário de funcionamento da Unidade, em geral, quantas horas em cada dia, sua equipe
              dedica à realização de cadastros individual, domiciliar e territorial nos domicílios?
            </Typography>
          </Stack>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          id='controlled-panel-header-2'
          aria-controls='controlled-panel-content-2'
          expandIcon={<Icon fontSize='1.25rem' icon='tabler:chevron-down' />}
        >
          <Typography>II. ANÁLISE SITUACIONAL</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: 'text.secondary' }}>
            Sugar plum sesame snaps caramels. Cake pie tart fruitcake sesame snaps donut cupcake macaroon. Gingerbread
            pudding cheesecake pie ice cream.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          id='controlled-panel-header-3'
          aria-controls='controlled-panel-content-3'
          expandIcon={<Icon fontSize='1.25rem' icon='tabler:chevron-down' />}
        >
          <Typography>III. AÇÕES E SERVIÇOS OFERTADOS PELA EQUIPE</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: 'text.secondary' }}>
            Gingerbread lemon drops bear claw gummi bears bonbon wafer jujubes tiramisu. Jelly pie cake. Sweet roll
            dessert sweet pastry powder.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </DemoPaper>
  )
}

export default TabEsf
