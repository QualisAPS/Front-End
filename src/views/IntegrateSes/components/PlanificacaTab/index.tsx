// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { Box } from '@mui/material'

const PlanificacaTab = () => {
  return (
    <Grid container spacing={6} component='section'>
      <Grid item xs={12}>
        <Card component='article'>
          <CardHeader title='Acordo de Gestão Local (AGL)'></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}>
              A proposta do Projeto de Planificação da Atenção à Saúde - PAS tem como objetivo apoiar o corpo
              técnico-gerencial das Secretarias de Estado da Saúde – SES e as Secretarias Municipais de Saúde - SMS, na
              organização dos macroprocessos da Atenção Primária à Saúde – APS e da Atenção Ambulatorial Especializada –
              AAE, na lógica das Redes de Atenção à Saúde.
            </Typography>
            <Typography sx={{ mb: 2 }}>
              Atualmente, no Distrito Federal, as Regiões de Saúde: Leste, Centro-Oeste, Sul e Central estão
              participando da PAS, trabalhando a Linha de Cuidado das Condições Crônicas - Hipertensos e Diabéticos.
            </Typography>
            <Typography sx={{ mb: 2 }}>
              A fundamentação teórica da PAS está ancorada no modelo técnico-operacional da Construção Social da APS e
              no Modelo de Atenção às Condições Crônicas para o SUS – MACC, ambos propostos por Eugênio Vilaça Mendes
              para o fortalecimento das Redes de Atenção à Saúde no SUS (Figura 1).
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <img src='/images/construcao-aps.png' alt='' />
            </Box>
            <Typography sx={{ mb: 2 }}>
              O projeto reúne um conjunto de ações educacionais, baseadas em metodologias ativas para a aquisição de
              competências e conhecimentos necessários para a organização e a qualificação dos processos assistenciais.
            </Typography>
            <Typography sx={{ mb: 2 }}>
              Desta forma, apoiam as equipes na discussão e organização de processos de trabalho que podem fazer parte
              de seus Planos de Ação para a Qualidade (PAQ) do Programa QualisAPS.
            </Typography>
            <Typography sx={{ mb: 2 }}>
              Caso sua Região de Saúde esteja participando da Planificação, fiquem atentos às discussões realizadas e
              ações propostas para que estas possam compor o PAQ da equipe. Os tutores regionais podem auxiliá-los neste
              processo.
            </Typography>
            <Typography sx={{ mb: 2 }}>Fonte: Guia orientador Planificação Leste - DF, 2022.</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default PlanificacaTab
