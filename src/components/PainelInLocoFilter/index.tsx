// ** React Imports
import { useState, useEffect, forwardRef } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { SelectChangeEvent } from '@mui/material/Select'
import { DataGrid, GridColDef, GridRowId } from '@mui/x-data-grid'

// ** Icon Imports

// ** Third Party Imports
import format from 'date-fns/format'

// ** Store & Actions Imports
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from 'src/store/apps/invoice'

// ** Types Imports
import { RootState, AppDispatch } from 'src/store'
import { InvoiceType } from 'src/types/apps/invoiceTypes'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import TableHeader from '../TableHeader'
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Styled Components
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

interface CustomInputProps {
  dates: Date[]
  label: string
  end: number | Date
  start: number | Date
  setDates?: (value: Date[]) => void
}

interface CellType {
  row: InvoiceType
}

// ** Styled component for the link in the dataTable
const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  fontSize: theme.typography.body1.fontSize,
  color: `${theme.palette.primary.main} !important`
}))

const defaultColumns: GridColDef[] = [
  {
    flex: 0.1,
    field: 'id',
    minWidth: 50,
    headerName: 'ID',
    renderCell: ({ row }: CellType) => (
      <Typography component={LinkStyled} href={`/apps/invoice/preview/${row.id}`}>{`#${row.id}`}</Typography>
    )
  },
  {
    flex: 0.1,
    minWidth: 300,
    field: 'regiaoSaude',
    headerName: 'Região de Saúde',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{`$${row.total || 0}`}</Typography>
  },
  {
    flex: 0.1,
    minWidth: 300,
    field: 'regiaoAdministrativa',
    headerName: 'Região Administrativa',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.issuedDate}</Typography>
  },
  {
    flex: 0.1,
    minWidth: 100,
    field: 'gsap',
    headerName: 'GSAP',
    renderCell: ({ row }: CellType) => {
      return row.balance !== 0 ? (
        <Typography sx={{ color: 'text.secondary' }}>{row.balance}</Typography>
      ) : (
        <CustomChip rounded size='small' skin='light' color='success' label='Paid' />
      )
    }
  },
  {
    flex: 0.1,
    field: 'ubs',
    minWidth: 100,
    headerName: 'UBS'
  },
  {
    flex: 0.1,
    field: 'tipologia',
    minWidth: 50,
    headerName: 'Tipologia'
  }
]

/* eslint-disable */
const CustomInput = forwardRef((props: CustomInputProps, ref) => {
  const startDate = props.start !== null ? format(props.start, 'MM/dd/yyyy') : ''
  const endDate = props.end !== null ? ` - ${format(props.end, 'MM/dd/yyyy')}` : null

  const value = `${startDate}${endDate !== null ? endDate : ''}`
  props.start === null && props.dates.length && props.setDates ? props.setDates([]) : null
  const updatedProps = { ...props }
  delete updatedProps.setDates

  return <CustomTextField fullWidth inputRef={ref} {...updatedProps} label={props.label || ''} value={value} />
})
/* eslint-enable */

const PainelInLocoFilter = () => {
  // ** State
  const [value, setValue] = useState<string>('')
  const [statusValue, setStatusValue] = useState<string>('')
  const [selectedRows, setSelectedRows] = useState<GridRowId[]>([])
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 10 })

  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()
  const store = useSelector((state: RootState) => state.invoice)

  useEffect(() => {
    dispatch(
      fetchData({
        q: value,
        status: statusValue
      })
    )
  }, [dispatch, statusValue, value])

  const handleFilter = (val: string) => {
    setValue(val)
  }

  const handleStatusValue = (e: SelectChangeEvent<unknown>) => {
    setStatusValue(e.target.value as string)
  }

  const columns: GridColDef[] = [
    ...defaultColumns

    /*
    {
      flex: 0.1,
      minWidth: 140,
      sortable: false,
      field: 'actions',
      headerName: 'Actions',
      renderCell: ({ row }: CellType) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Tooltip title='Delete Invoice'>
            <IconButton size='small' sx={{ color: 'text.secondary' }} onClick={() => dispatch(deleteInvoice(row.id))}>
              <Icon icon='tabler:trash' />
            </IconButton>
          </Tooltip>
          <Tooltip title='View'>
            <IconButton
              size='small'
              component={Link}
              sx={{ color: 'text.secondary' }}
              href={`/apps/invoice/preview/${row.id}`}
            >
              <Icon icon='tabler:eye' />
            </IconButton>
          </Tooltip>
          <OptionsMenu
            menuProps={{ sx: { '& .MuiMenuItem-root svg': { mr: 2 } } }}
            iconButtonProps={{ size: 'small', sx: { color: 'text.secondary' } }}
            options={[
              {
                text: 'Download',
                icon: <Icon icon='tabler:download' fontSize={20} />
              },
              {
                text: 'Edit',
                href: `/apps/invoice/edit/${row.id}`,
                icon: <Icon icon='tabler:edit' fontSize={20} />
              },
              {
                text: 'Duplicate',
                icon: <Icon icon='tabler:copy' fontSize={20} />
              }
            ]}
          />
        </Box>
      )
    }
    */
  ]

  return (
    <DatePickerWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card>
            <CardHeader title='Filtros' />
            <CardContent>
              <Grid container spacing={6}>
                <Grid item xs={12} sm={4}>
                  <CustomTextField
                    select
                    fullWidth
                    defaultValue='Todos'
                    label='Região de Saúde'
                    SelectProps={{ value: statusValue, onChange: e => handleStatusValue(e) }}
                  >
                    <MenuItem value=''>Todos</MenuItem>
                    <MenuItem value='central'>Central</MenuItem>
                    <MenuItem value='centro-sul'>Centro-Sul</MenuItem>
                    <MenuItem value='leste'>Leste</MenuItem>
                    <MenuItem value='norte'>Norte</MenuItem>
                    <MenuItem value='oeste'>Oeste</MenuItem>
                    <MenuItem value='sudoeste'>Sudoeste</MenuItem>
                    <MenuItem value='sul'>Sul</MenuItem>
                  </CustomTextField>
                </Grid>
                <Grid item sm={4} xs={12}>
                  <CustomTextField
                    select
                    fullWidth
                    defaultValue='Todos'
                    label='Região Administrativa'
                    SelectProps={{
                      value: statusValue,
                      displayEmpty: true,
                      onChange: e => handleStatusValue(e)
                    }}
                  >
                    <MenuItem value=''>Todos</MenuItem>
                    <MenuItem value='basic'>Basic</MenuItem>
                    <MenuItem value='company'>Company</MenuItem>
                    <MenuItem value='enterprise'>Enterprise</MenuItem>
                    <MenuItem value='team'>Team</MenuItem>
                  </CustomTextField>
                </Grid>
                <Grid item sm={4} xs={12}>
                  <CustomTextField
                    select
                    fullWidth
                    defaultValue='Todos'
                    label='Unidade Básica de Saúde'
                    SelectProps={{
                      value: statusValue,
                      displayEmpty: true,
                      onChange: e => handleStatusValue(e)
                    }}
                  >
                    <MenuItem value=''>Todos</MenuItem>
                    <MenuItem value='basic'>Basic</MenuItem>
                    <MenuItem value='company'>Company</MenuItem>
                    <MenuItem value='enterprise'>Enterprise</MenuItem>
                    <MenuItem value='team'>Team</MenuItem>
                  </CustomTextField>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <TableHeader value={value} selectedRows={selectedRows} handleFilter={handleFilter} />
            <DataGrid
              autoHeight
              pagination
              rowHeight={62}
              rows={store.data}
              columns={columns}
              checkboxSelection
              disableRowSelectionOnClick
              pageSizeOptions={[10, 25, 50]}
              paginationModel={paginationModel}
              onPaginationModelChange={setPaginationModel}
              onRowSelectionModelChange={rows => setSelectedRows(rows)}
            />
          </Card>
        </Grid>
      </Grid>
    </DatePickerWrapper>
  )
}

export default PainelInLocoFilter
