/* eslint-disable @typescript-eslint/no-unused-vars */
// React Imports
import { useState, useEffect } from 'react'

// MUI Imports
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem'

// Type Imports
import Button from '@mui/material/Button'

import CustomTextField from '@core/components/mui/TextField'

import type { UsersType } from '@/types/apps/userTypes'
import type { TypologyType } from '@/types/apps/typologyTypes'

// Component Imports

const TableFilters = ({ setData, tableData }: { setData: any; tableData?: TypologyType[] }) => {
  // States
  const [healthRegion, setHealthRegion] = useState<TypologyType['rs_nome']>('')
  const [administrativeRegion, setAdministrativeRegion] = useState<TypologyType['ra_nome']>('')
  const [status, setStatus] = useState<TypologyType['gsap_nome']>('')
  const [ubsName, setUbsName] = useState<TypologyType['nome']>('')
  const [regiaoSaude, setRegiaoSaude] = useState([])
  const [gsap, setGsap] = useState([])
  const [ubs, setUbs] = useState([])
  const [regiaoAdministrativa, setRegiaoAdministrativa] = useState([])
  const [error, setError] = useState(null)

  const fetchData = async (endpoint: string, setter: React.Dispatch<React.SetStateAction<any[]>>) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_V1}/${endpoint}`, {
        method: 'GET'
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()

      setter(data)
    } catch (err: any) {
      console.error('Fetching error: ', err)
      setError(err)
    }
  }

  useEffect(() => {
    // Chama a função fetchData para cada endpoint
    fetchData('regiao-saude', setRegiaoSaude as React.Dispatch<React.SetStateAction<any[]>>)
    fetchData('gsap', setGsap as React.Dispatch<React.SetStateAction<any[]>>)
    fetchData('ubs', setUbs as React.Dispatch<React.SetStateAction<any[]>>)
    fetchData('regiao-admin', setRegiaoAdministrativa as React.Dispatch<React.SetStateAction<any[]>>)

    // Dependências vazias indicam que esse efeito roda apenas uma vez
  }, [])

  useEffect(() => {
    const filteredData = tableData?.filter(user => {
      if (healthRegion && user.rs_nome !== healthRegion) return false
      if (administrativeRegion && user.ra_nome !== administrativeRegion) return false
      if (status && user.gsap_nome !== status) return false
      if (ubsName && user.nome !== ubsName) return false

      return true
    })

    setData(filteredData)
  }, [healthRegion, administrativeRegion, status, ubsName, tableData, setData])

  const clearFilters = () => {
    setHealthRegion('')
    setAdministrativeRegion('')
    setStatus('')
    setUbsName('')
    setData(tableData)
  }

  return (
    <CardContent>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={4}>
          <CustomTextField
            label='Região de Saúde'
            select
            fullWidth
            value={healthRegion} // Assegure-se que 'role' é o estado correto para este select
            onChange={e => setHealthRegion(e.target.value)} // Atualiza o estado 'role' com o valor selecionado
          >
            {(regiaoSaude as { id: string; nome: string }[]).map(item => (
              <MenuItem key={item.id} value={item.nome}>
                {' '}
                {item.nome}
              </MenuItem>
            ))}
          </CustomTextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <CustomTextField
            select
            label='Região Administrativa'
            fullWidth
            id='select-plan'
            value={administrativeRegion}
            onChange={e => setAdministrativeRegion(e.target.value)}
            SelectProps={{ displayEmpty: true }}
          >
            {(regiaoAdministrativa as { id: string; nome: string }[]).map(item => (
              <MenuItem key={item.id} value={item.nome}>
                {' '}
                {item.nome}
              </MenuItem>
            ))}
          </CustomTextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <CustomTextField
            select
            label='GSAP'
            fullWidth
            id='select-status'
            value={status}
            onChange={e => setStatus(e.target.value)}
            SelectProps={{ displayEmpty: true }}
          >
            {(gsap as { id: string; nome: string }[]).map(item => (
              <MenuItem key={item.id} value={item.nome}>
                {' '}
                {item.nome}
              </MenuItem>
            ))}
          </CustomTextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <CustomTextField
            select
            label='Unidade Básica de Saúde'
            fullWidth
            id='select-status'
            value={ubsName}
            onChange={e => setUbsName(e.target.value)}
            SelectProps={{ displayEmpty: true }}
          >
            {(ubs as { id: string; nome: string }[]).map(item => (
              <MenuItem key={item.id} value={item.nome}>
                {' '}
                {item.nome}
              </MenuItem>
            ))}
          </CustomTextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button variant='outlined' color='primary' onClick={clearFilters}>
            Limpar Filtros
          </Button>
        </Grid>
      </Grid>
    </CardContent>
  )
}

export default TableFilters
