/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

// React Imports
import { useEffect, useState, useMemo } from 'react'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import type { ButtonProps } from '@mui/material/Button'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import TablePagination from '@mui/material/TablePagination'
import type { TextFieldProps } from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'

// Third-party Imports
import classnames from 'classnames'
import { rankItem } from '@tanstack/match-sorter-utils'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getPaginationRowModel,
  getSortedRowModel
} from '@tanstack/react-table'
import type { ColumnDef, FilterFn } from '@tanstack/react-table'
import type { RankingInfo } from '@tanstack/match-sorter-utils'

import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'

import TablePaginationComponent from '@/components/TablePaginationComponent'

import type { ThemeColor } from '@core/types'
import type { TypologyType } from '@/types/apps/typologyTypes'

// Component Imports

import TableFilters from '../TableFilters'

import DetailDialog from '../DetailDialog'

import CustomTextField from '@core/components/mui/TextField'

// Style Imports
import tableStyles from '@core/styles/table.module.css'
import OpenDialogOnElementClick from '@/components/dialogs/OpenDialogOnElementClick'

declare module '@tanstack/table-core' {
  interface FilterFns {
    fuzzy: FilterFn<unknown>
  }
  interface FilterMeta {
    itemRank: RankingInfo
  }
}

type UsersTypeWithAction = TypologyType & {
  action?: string
}

type UserRoleType = {
  [key: string]: { icon: string; color: string }
}

type UserStatusType = {
  [key: string]: ThemeColor
}

// Styled Components
const Icon = styled('i')({})

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value)

  // Store the itemRank info
  addMeta({
    itemRank
  })

  // Return if the item should be filtered in/out
  return itemRank.passed
}

const DebouncedInput = ({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}: {
  value: string | number
  onChange: (value: string | number) => void
  debounce?: number
} & Omit<TextFieldProps, 'onChange'>) => {
  // States
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value)
    }, debounce)

    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return <CustomTextField {...props} value={value} onChange={e => setValue(e.target.value)} />
}

// Vars
const userRoleObj: UserRoleType = {
  admin: { icon: 'tabler-crown', color: 'error' },
  author: { icon: 'tabler-device-desktop', color: 'warning' },
  editor: { icon: 'tabler-edit', color: 'info' },
  maintainer: { icon: 'tabler-chart-pie', color: 'success' },
  subscriber: { icon: 'tabler-user', color: 'primary' }
}

const userStatusObj: UserStatusType = {
  active: 'success',
  pending: 'warning',
  inactive: 'secondary'
}

// Column Definitions
const columnHelper = createColumnHelper<UsersTypeWithAction>()

const TypologyTable = ({ tableData }: { tableData?: TypologyType[] }) => {
  // States

  const [rowSelection, setRowSelection] = useState({})
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState(...[tableData])
  const [globalFilter, setGlobalFilter] = useState('')
  const [open, setOpen] = useState(false)

  const [dataDetail, setDataDetail] = useState({
    nome: '',
    nota_equipe_ponderada: 0,
    nota_profissional_ponderada: 0,
    nota_servicos_ponderada: 0,
    nota_estrutura_ponderada: 0,
    nota_insumos_ponderada: 0,
    nota_tic_ponderada: 0,
    total_esf: 0
  })

  const columns = useMemo<ColumnDef<UsersTypeWithAction, any>[]>(
    () => [
      /*
      {
        id: 'select',
        header: ({ table }) => (
          <Checkbox
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler()
            }}
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            {...{
              checked: row.getIsSelected(),
              disabled: !row.getCanSelect(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler()
            }}
          />
        )
      },
      */
      columnHelper.accessor('id', {
        header: 'ID',
        cell: ({ row }) => (
          <div className='flex items-center gap-4'>
            {/*  {getAvatar({ avatar: row.original.avatar, fullName: row.original.fullName })} */}
            <div className='flex flex-col'>
              <Typography color='text.primary' className='font-medium'>
                {row.original.id}
              </Typography>
            </div>
          </div>
        )
      }),
      columnHelper.accessor('rs_nome', {
        header: 'Região de Saúde',
        cell: ({ row }) => (
          <div className='flex items-center gap-4'>
            {/*  {getAvatar({ avatar: row.original.avatar, fullName: row.original.fullName })} */}
            <div className='flex flex-col'>
              <Typography color='text.primary' className='font-medium'>
                {row.original.rs_nome}
              </Typography>
            </div>
          </div>
        )
      }),
      columnHelper.accessor('ra_nome', {
        header: 'Região Administrativa',
        cell: ({ row }) => (
          <div className='flex items-center gap-4'>
            {/*  {getAvatar({ avatar: row.original.avatar, fullName: row.original.fullName })} */}
            <div className='flex flex-col'>
              <Typography color='text.primary' className='font-medium'>
                {row.original.ra_nome}
              </Typography>
            </div>
          </div>
        )
      }),
      columnHelper.accessor('gsap_nome', {
        header: 'GSAP',
        cell: ({ row }) => (
          <Typography className='capitalize' color='text.primary'>
            {row.original.gsap_nome}
          </Typography>
        )
      }),
      columnHelper.accessor('nome', {
        header: 'UBS',
        cell: ({ row }) => <Typography>{row.original.nome}</Typography>
      }),
      columnHelper.accessor('tipologia_2020', {
        header: 'Tipologia - 2020',
        cell: ({ row }) => (
          <div className='flex items-center gap-3'>
            <Chip
              variant='tonal'
              className='capitalize'
              label={row.original.tipologia_2020}
              color={userStatusObj[row.original.tipologia_2020]}
              size='small'
            />
          </div>
        )
      }),
      columnHelper.accessor('tipologia_2022', {
        header: 'Tipologia - 2022',
        cell: ({ row }) => (
          <div className='flex items-center gap-3'>
            <Chip
              variant='tonal'
              className='capitalize'
              label={row.original.tipologia_2022}
              color={userStatusObj[row.original.tipologia_2022]}
              size='small'
            />
          </div>
        )
      }),
      columnHelper.accessor('action', {
        header: 'Ação',
        cell: ({ row }) => (
          <div className='flex items-center'>
            <IconButton onClick={() => handleTypologyDetail(row.original)}>
              <i className='tabler-eye text-[22px] text-textSecondary' />
            </IconButton>
          </div>
        ),
        enableSorting: false
      })
    ],

    // eslint-disable-next-line react-hooks/exhaustive-deps

    []
  )

  const table = useReactTable({
    data: data as TypologyType[],
    columns,
    filterFns: {
      fuzzy: fuzzyFilter
    },
    state: {
      rowSelection,
      globalFilter
    },
    initialState: {
      pagination: {
        pageSize: 10
      }
    },
    enableRowSelection: true, //enable row selection for all rows
    // enableRowSelection: row => row.original.age > 18, // or enable row selection conditionally per row
    globalFilterFn: fuzzyFilter,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues()
  })

  const handleTypologyDetail = (data?: any) => {
    setOpen(true)
    setDataDetail(data)
  }

  const handleClose = () => {
    setOpen(false)
    setDataDetail({
      nome: '',
      nota_equipe_ponderada: 0,
      nota_profissional_ponderada: 0,
      nota_servicos_ponderada: 0,
      nota_estrutura_ponderada: 0,
      nota_insumos_ponderada: 0,
      nota_tic_ponderada: 0,
      total_esf: 0
    })
  }

  return (
    <>
      <Card>
        <CardHeader title='Filtros' className='pbe-4' />
        <TableFilters setData={setData} tableData={tableData} />
        <div className='flex justify-between flex-col items-start md:flex-row md:items-center p-6 border-bs gap-4'>
          <CustomTextField
            select
            value={table.getState().pagination.pageSize}
            onChange={e => table.setPageSize(Number(e.target.value))}
            className='is-[70px]'
          >
            <MenuItem value='10'>10</MenuItem>
            <MenuItem value='25'>25</MenuItem>
            <MenuItem value='50'>50</MenuItem>
          </CustomTextField>
          <div className='flex flex-col sm:flex-row is-full sm:is-auto items-start sm:items-center gap-4'>
            <DebouncedInput
              value={globalFilter ?? ''}
              onChange={value => setGlobalFilter(String(value))}
              placeholder='Buscar'
              className='is-full sm:is-auto'
            />
            {/*
            <Button
              color='secondary'
              variant='tonal'
              startIcon={<i className='tabler-upload' />}
              className='is-full sm:is-auto'
            >
              Exportar
            </Button>
            */}
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby='alert-dialog-title'
              aria-describedby='alert-dialog-description'
            >
              <DialogTitle id='alert-dialog-title' sx={{ textAlign: 'center' }}>
                {'Detalhes da Tipologia'}
              </DialogTitle>
              <DialogContent>
                <div className='flex gap-3'>
                  <Typography sx={{ mb: 2 }}>Nome da UBS:</Typography>
                  <p>
                    {' '}
                    <strong> {dataDetail.nome}</strong>
                  </p>
                </div>
                <div className='flex gap-3'>
                  <Typography sx={{ mb: 2 }}>Nota Equipe Ponderada:</Typography>
                  <p>
                    {' '}
                    <strong> {dataDetail.nota_equipe_ponderada}</strong>
                  </p>
                </div>
                <div className='flex gap-3'>
                  <Typography sx={{ mb: 2 }}>Nota Profissional Ponderada:</Typography>
                  <p>
                    {' '}
                    <strong> {dataDetail.nota_profissional_ponderada}</strong>
                  </p>
                </div>
                <div className='flex gap-3'>
                  <Typography sx={{ mb: 2 }}>Nota Serviços Ponderada:</Typography>
                  <p>
                    {' '}
                    <strong> {dataDetail.nota_servicos_ponderada}</strong>
                  </p>
                </div>
                <div className='flex gap-3'>
                  <Typography sx={{ mb: 2 }}>Nota Estrutura Ponderada:</Typography>
                  <p>
                    {' '}
                    <strong> {dataDetail.nota_estrutura_ponderada}</strong>
                  </p>
                </div>
                <div className='flex gap-3'>
                  <Typography sx={{ mb: 2 }}>Nota Insumos Ponderada:</Typography>
                  <p>
                    {' '}
                    <strong> {dataDetail.nota_insumos_ponderada}</strong>
                  </p>
                </div>
                <div className='flex gap-3'>
                  <Typography sx={{ mb: 2 }}>Nota Tic Ponderada:</Typography>
                  <p>
                    {' '}
                    <strong> {dataDetail.nota_tic_ponderada}</strong>
                  </p>
                </div>
                <div className='flex gap-3'>
                  <Typography sx={{ mb: 2 }}>Nota Total ESF:</Typography>
                  <p>
                    {' '}
                    <strong> {dataDetail.total_esf}</strong>
                  </p>
                </div>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Fechar</Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
        <div className='overflow-x-auto'>
          <table className={tableStyles.table}>
            <thead>
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map(header => (
                    <th key={header.id}>
                      {header.isPlaceholder ? null : (
                        <>
                          <div
                            className={classnames({
                              'flex items-center': header.column.getIsSorted(),
                              'cursor-pointer select-none': header.column.getCanSort()
                            })}
                            onClick={header.column.getToggleSortingHandler()}
                          >
                            {flexRender(header.column.columnDef.header, header.getContext())}
                            {{
                              asc: <i className='tabler-chevron-up text-xl' />,
                              desc: <i className='tabler-chevron-down text-xl' />
                            }[header.column.getIsSorted() as 'asc' | 'desc'] ?? null}
                          </div>
                        </>
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            {table.getFilteredRowModel().rows.length === 0 ? (
              <tbody>
                <tr>
                  <td colSpan={table.getVisibleFlatColumns().length} className='text-center'>
                    Nenhum dado disponível
                  </td>
                </tr>
              </tbody>
            ) : (
              <tbody>
                {table
                  .getRowModel()
                  .rows.slice(0, table.getState().pagination.pageSize)
                  .map(row => {
                    return (
                      <tr key={row.id} className={classnames({ selected: row.getIsSelected() })}>
                        {row.getVisibleCells().map(cell => (
                          <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                        ))}
                      </tr>
                    )
                  })}
              </tbody>
            )}
          </table>
        </div>
        <TablePagination
          lang='pt-br'
          component={() => <TablePaginationComponent table={table} />}
          count={table.getFilteredRowModel().rows.length}
          rowsPerPage={table.getState().pagination.pageSize}
          page={table.getState().pagination.pageIndex}
          onPageChange={(_, page) => {
            table.setPageIndex(page)
          }}
        />
      </Card>
    </>
  )
}

export default TypologyTable
