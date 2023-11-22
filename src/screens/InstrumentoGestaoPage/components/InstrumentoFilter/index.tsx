import { useState } from 'react'

import { SelectChangeEvent } from '@mui/material/Select'
import Grid from '@mui/material/Grid'
import CustomTextField from 'src/@core/components/mui/text-field'
import { MenuItem } from '@mui/material'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      width: 250,
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP
    }
  }
}

const names = ['UNIDADE BÁSICA DE SAÚDE Nº 01 - VARJÃO']

const InstrumentoFilter = () => {
  const [personName, setPersonName] = useState<string[]>([])

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setPersonName(event.target.value as string[])
  }

  return (
    <Grid container spacing={4} className='match-height'>
      <Grid item xs={12} md={6}>
        <CustomTextField
          select
          fullWidth
          label='Unidade Básica de Saúde'
          id='select-multiple-default'
          SelectProps={{ MenuProps, multiple: true, value: personName, onChange: e => handleChange(e) }}
        >
          {names.map(name => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </CustomTextField>
      </Grid>
      <Grid item xs={12} md={6}>
        <CustomTextField
          select
          fullWidth
          label='Equipe'
          id='select-multiple-default'
          SelectProps={{ MenuProps, multiple: true, value: personName, onChange: e => handleChange(e) }}
        >
          {names.map(name => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </CustomTextField>
      </Grid>
    </Grid>
  )
}

export default InstrumentoFilter
