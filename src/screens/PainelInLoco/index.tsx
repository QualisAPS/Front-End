// ** React Imports
import { SyntheticEvent, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import MuiTabList, { TabListProps } from '@mui/lab/TabList'

import TabEsf from './components/TabEsf'

// Styled TabList component
const TabList = styled(MuiTabList)<TabListProps>(({ theme }) => ({
  borderRight: 0,
  '&, & .MuiTabs-scroller': {
    boxSizing: 'content-box',
    padding: theme.spacing(1.25, 1.25, 2)
  },
  '& .MuiTabs-indicator': {
    display: 'none'
  },
  '& .Mui-selected': {
    boxShadow: theme.shadows[2],
    backgroundColor: theme.palette.primary.main,
    color: '#fff !important'
  },
  '& .MuiTab-root': {
    lineHeight: 1,
    borderRadius: theme.shape.borderRadius,
    '&:hover': {
      color: '#fff'
    }
  }
}))

const PainelInLoco = () => {
  // ** State
  const [value, setValue] = useState<string>('1')

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <TabContext value={value}>
      <Box sx={{ display: 'flex' }}>
        <TabList orientation='vertical' onChange={handleChange} aria-label='customized vertical tabs example'>
          <Tab value='1' label='ESF' />
          <Tab value='2' label='ESB' />
          <Tab value='3' label='GSAP' />
        </TabList>
        <TabPanel value='1'>
          <TabEsf />
        </TabPanel>
        <TabPanel value='2'>
          <Typography>ESB</Typography>
        </TabPanel>
        <TabPanel value='3'>
          <Typography>GSAP</Typography>
        </TabPanel>
      </Box>
    </TabContext>
  )
}

export default PainelInLoco
