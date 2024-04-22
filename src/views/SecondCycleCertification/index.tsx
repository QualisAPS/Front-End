'use client'

import { useState, useEffect } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

import CertificationTable from './components/CertificationTable'

const SecondCycleCertification = () => {
  const [equipes, setEquipes] = useState([])

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
    } catch (err) {
      console.error('Fetching error: ', err)
    }
  }

  useEffect(() => {
    fetchData('equipes', setEquipes as React.Dispatch<React.SetStateAction<any[]>>)

    // Dependências vazias indicam que esse efeito roda apenas uma vez
  }, [])

  return (
    <Grid container spacing={6} component='section'>
      <Grid item xs={12}>
        <Card component='article'>
          <CardHeader title='Certificação'></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}>Lista de Certificação das Equipes.</Typography>
          </CardContent>
        </Card>
      </Grid>
      {/*
      <Grid item xs={12}>
        <Grid item xs={6} component='article'>
          <Card>
            <CardHeader title='Avaliação'></CardHeader>
            <CardContent>
              <Typography sx={{ mb: 2 }}>
                Avaliação: <strong>3 Ipês</strong>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      */}
      <Grid item xs={12}>
        <Card component='article'>
          <CertificationTable tableData={equipes} />
        </Card>
      </Grid>
    </Grid>
  )
}

export default SecondCycleCertification
