// ** MUI Imports
import Box from '@mui/material/Box'
import { GridRowId } from '@mui/x-data-grid'
import MenuItem from '@mui/material/MenuItem'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

interface TableHeaderProps {
  value: string
  selectedRows: GridRowId[]
  handleFilter: (val: string) => void
}

const TableHeader = (props: TableHeaderProps) => {
  // ** Props
  const { value, selectedRows, handleFilter } = props

  return (
    <Box
      sx={{
        p: 5,
        pb: 3,
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <CustomTextField
        select
        defaultValue='Exportar'
        sx={{ mr: 4, mb: 2 }}
        SelectProps={{
          displayEmpty: true,
          disabled: selectedRows && selectedRows.length === 0,
          renderValue: selected => ((selected as string)?.length === 0 ? 'Actions' : (selected as string))
        }}
      >
        <MenuItem disabled value='Actions'>
          Exportar
        </MenuItem>
        <MenuItem value='Delete'>Delete</MenuItem>
        <MenuItem value='Edit'>Edit</MenuItem>
        <MenuItem value='Send'>Send</MenuItem>
      </CustomTextField>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
        <CustomTextField
          value={value}
          sx={{ mr: 4, mb: 2 }}
          placeholder='Pesquisar'
          onChange={e => handleFilter(e.target.value)}
        />
      </Box>
    </Box>
  )
}

export default TableHeader
