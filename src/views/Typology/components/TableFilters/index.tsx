// React Imports
import { useState, useEffect } from 'react'

// MUI Imports
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem'

// Type Imports
import type { UsersType } from '@/types/apps/userTypes'

// Component Imports
import CustomTextField from '@core/components/mui/TextField'

const TableFilters = ({ setData, tableData }: { setData: any; tableData?: UsersType[] }) => {
  // States
  const [role, setRole] = useState<UsersType['role']>('')
  const [plan, setPlan] = useState<UsersType['currentPlan']>('')
  const [status, setStatus] = useState<UsersType['status']>('')
  const [regiaoSaude, setRegiaoSaude] = useState([])
  const [gsap, setGsap] = useState([])
  const [ubs, setUbs] = useState([])
  const [regiaoAdministrativa, setRegiaoAdministrativa] = useState([])
  const [error, setError] = useState(null)

  const fetchData = async (endpoint: string, setter: React.Dispatch<React.SetStateAction<any[]>>) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_V1}/${endpoint}`, {
        method: 'GET',
        headers: { 'User-Agent': 'insomnia/2023.5.8' }
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()

      setter(data)
    } catch (err) {
      console.error('Fetching error: ', err)
      setError(err.message)
    }
  }

  useEffect(() => {
    // Chama a função fetchData para cada endpoint
    fetchData('regiao-saude', setRegiaoSaude)
    fetchData('gsap', setGsap)
    fetchData('ubs', setUbs)
    fetchData('regiao-admin', setRegiaoAdministrativa)

    // Dependências vazias indicam que esse efeito roda apenas uma vez
  }, [])

  useEffect(() => {
    const filteredData = tableData?.filter(user => {
      if (role && user.role !== role) return false
      if (plan && user.currentPlan !== plan) return false
      if (status && user.status !== status) return false

      return true
    })

    setData(filteredData)
  }, [role, plan, status, tableData, setData])

  console.log(regiaoSaude)

  return (
    <CardContent>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={4}>
          <CustomTextField
            label='Região de Saúde'
            select
            fullWidth
            value={role} // Assegure-se que 'role' é o estado correto para este select
            onChange={e => setRole(e.target.value)} // Atualiza o estado 'role' com o valor selecionado
          >
            {regiaoSaude.map(item => (
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
            value={plan}
            onChange={e => setPlan(e.target.value)}
            SelectProps={{ displayEmpty: true }}
          >
            {regiaoAdministrativa.map(item => (
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
            {gsap.map(item => (
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
            value={status}
            onChange={e => setStatus(e.target.value)}
            SelectProps={{ displayEmpty: true }}
          >
            {ubs.map(item => (
              <MenuItem key={item.id} value={item.nome}>
                {' '}
                {item.nome}
              </MenuItem>
            ))}
          </CustomTextField>
        </Grid>
      </Grid>
    </CardContent>
  )
}

export default TableFilters
