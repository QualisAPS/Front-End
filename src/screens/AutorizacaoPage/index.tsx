// ** React Imports
import { useState, useEffect, useCallback, FormEvent } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import AlertTitle from '@mui/material/AlertTitle'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import FormControlLabel from '@mui/material/FormControlLabel'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Store Imports
import { useDispatch, useSelector } from 'react-redux'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import PageHeader from 'src/@core/components/page-header'
import TableHeader from './components/TableHeader'
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Types Imports
import { RootState, AppDispatch } from 'src/store'
import { PermissionRowType } from 'src/types/apps/permissionTypes'

// ** Actions Imports
import { fetchData } from 'src/store/apps/permissions'

// ** Types
import { ThemeColor } from 'src/@core/layouts/types'

interface Colors {
  [key: string]: ThemeColor
}

interface CellType {
  row: PermissionRowType
}

const colors: Colors = {
  support: 'info',
  users: 'success',
  manager: 'warning',
  administrator: 'primary',
  'restricted-user': 'error'
}

const defaultColumns: GridColDef[] = [
  {
    flex: 0.25,
    field: 'name',
    minWidth: 200,
    headerName: 'Nome',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.name}</Typography>
  },
  {
    flex: 0.35,
    minWidth: 200,
    field: 'assignedTo',
    headerName: 'Email',
    renderCell: ({ row }: CellType) => {
      return row.assignedTo.map((assignee: string, index: number) => (
        <CustomChip
          rounded
          size='small'
          key={index}
          skin='light'
          color={colors[assignee]}
          label={assignee.replace('-', ' ')}
          sx={{ '& .MuiChip-label': { textTransform: 'capitalize' }, '&:not(:last-of-type)': { mr: 3 } }}
        />
      ))
    }
  },
  {
    flex: 0.25,
    minWidth: 200,
    field: 'createdDate',
    headerName: 'Local',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.createdDate}</Typography>
  },
  {
    flex: 0.25,
    minWidth: 100,
    field: 'perfil',
    headerName: 'Perfil',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.createdDate}</Typography>
  },
  {
    flex: 0.25,
    minWidth: 100,
    field: 'permissao',
    headerName: 'Permissão',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.createdDate}</Typography>
  }
]

const AutorizacaoPage = () => {
  // ** State
  const [value, setValue] = useState<string>('')
  const [editValue, setEditValue] = useState<string>('')
  const [editDialogOpen, setEditDialogOpen] = useState<boolean>(false)
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 10 })

  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()
  const store = useSelector((state: RootState) => state.permissions)

  useEffect(() => {
    dispatch(
      fetchData({
        q: value
      })
    )
  }, [dispatch, value])

  const handleFilter = useCallback((val: string) => {
    setValue(val)
  }, [])

  const handleEditPermission = (name: string) => {
    setEditValue(name)
    setEditDialogOpen(true)
  }

  const handleDialogToggle = () => setEditDialogOpen(!editDialogOpen)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    setEditDialogOpen(false)
    e.preventDefault()
  }

  const columns: GridColDef[] = [
    ...defaultColumns,
    {
      flex: 0.15,
      minWidth: 120,
      sortable: false,
      field: 'actions',
      headerName: 'Ações',
      renderCell: ({ row }: CellType) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton onClick={() => handleEditPermission(row.name)}>
            <Icon icon='tabler:edit' />
          </IconButton>
          <IconButton>
            <Icon icon='tabler:trash' />
          </IconButton>
        </Box>
      )
    }
  ]

  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <PageHeader
            title={
              <Typography variant='h4' sx={{ mb: 6 }}>
                Lista de permissões
              </Typography>
            }
            subtitle={
              <Typography sx={{ color: 'text.secondary' }}>
                Cada categoria (GSAP, NASF e Equipe) inclui as quatro funções predefinidas mostradas abaixo.
              </Typography>
            }
          />
        </Grid>
        <Grid item xs={12}>
          <Card>
            <TableHeader value={value} handleFilter={handleFilter} />
            <DataGrid
              autoHeight
              rows={store.data}
              columns={columns}
              disableRowSelectionOnClick
              pageSizeOptions={[10, 25, 50]}
              paginationModel={paginationModel}
              onPaginationModelChange={setPaginationModel}
            />
          </Card>
        </Grid>
      </Grid>
      <Dialog maxWidth='sm' fullWidth onClose={handleDialogToggle} open={editDialogOpen}>
        <DialogTitle
          sx={{
            textAlign: 'center',
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
            pt: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
          }}
        >
          <Typography variant='h5' component='span' sx={{ mb: 2 }}>
            Editar
          </Typography>
          <Typography variant='body2'>Edit permission as per your requirements.</Typography>
        </DialogTitle>
        <DialogContent
          sx={{
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
            pb: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
          }}
        >
          <Alert severity='warning' sx={{ maxWidth: '500px' }}>
            <AlertTitle>Warning!</AlertTitle>
            Ao editar o nome da permissão, você pode interromper a funcionalidade de permissões do sistema.
            Certifique-se de ter certeza absoluta antes de prosseguir.
          </Alert>

          <Box component='form' sx={{ mt: 8 }} onSubmit={onSubmit}>
            <FormGroup sx={{ mb: 2, alignItems: 'center', flexDirection: 'row', flexWrap: ['wrap', 'nowrap'] }}>
              <CustomTextField
                fullWidth
                value={editValue}
                label='Permission Name'
                sx={{ mr: [0, 4], mb: [3, 0] }}
                placeholder='Enter Permission Name'
                onChange={e => setEditValue(e.target.value)}
              />

              <Button type='submit' variant='contained' sx={{ mt: 4 }}>
                Atualizar
              </Button>
            </FormGroup>
            <FormControlLabel control={<Checkbox />} label='Set as core permission' />
          </Box>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default AutorizacaoPage
