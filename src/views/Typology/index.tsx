'use client'

import { useState, useEffect } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

import TypologyTable from './components/TypologyTable'

const Typology = () => {
  const [ubs, setUbs] = useState([])

  const fetchData = async (endpoint: string, setter: React.Dispatch<React.SetStateAction<any[]>>) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_V1}/${endpoint}`, {
        method: 'GET',
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
    fetchData('ubs', setUbs as React.Dispatch<React.SetStateAction<any[]>>)

    // Dependências vazias indicam que esse efeito roda apenas uma vez
  }, [])

  return (
    <Grid container spacing={6} component='section'>
      <Grid item xs={12}>
        <Card component='article'>
          <CardHeader title='Tipologia da Estrutura'></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}>
              Uma estrutura apropriada das Unidades Básicas de Saúde (UBS) contribui para o desenvolvimento dos
              processos de cuidado, melhora o acesso da população e desempenha um papel central para a melhoria e
              qualidade da prestação de serviços.
            </Typography>
            <Typography sx={{ mb: 2 }}>
              A Tipologia de Estrutura das UBS do DF tem como objetivo categorizar as UBS de acordo com uma visão ampla
              de estrutura, que inclui os tipos de equipes e força de trabalho, serviços ofertados, disponibilidade de
              insumos e equipamentos, ambiência e qualidade das tecnologias de comunicação.
            </Typography>
            <Typography>São cinco os Tipos de UBS segundo a Tipologia: A, B, C, D e E</Typography>
            <Typography sx={{ mb: 2 }}>
              Sendo que as UBS do Tipo A são as que possuem as melhores condições de estrutura e as do Tipo E as com a
              estrutura mais precária.
            </Typography>
            <Typography sx={{ mb: 2 }}>
              Essa categorização pode servir de subsídio para a priorização de melhorias estruturais e aponta as equipes
              que podem apresentar maior dificuldade de implementar ações de melhoria da qualidade devido restrições
              estruturais. Contudo, mesmo em condições adversas, há sempre uma margem de governabilidade das equipes
              que, quando unidas e ativando a criatividade, conseguem alcançar ótimos desempenhos!
            </Typography>
            <Typography sx={{ mb: 2 }}>
              Essa categorização pode servir de subsídio para a priorização de melhorias estruturais e aponta as equipes
              que podem apresentar maior dificuldade de implementar ações de melhoria da qualidade devido restrições
              estruturais. Contudo, mesmo em condições adversas, há sempre uma margem de governabilidade das equipes
              que, quando unidas e ativando a criatividade, conseguem alcançar ótimos desempenhos!
            </Typography>
            <Typography>
              Para mais detalhes sobre a Tipologia de Estrutura das UBS do DF acesse o Relatório completo em
              &quot;Documentação&quot; no menu.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card component='article'>
          <TypologyTable tableData={ubs} />
        </Card>
      </Grid>
    </Grid>
  )
}

export default Typology
