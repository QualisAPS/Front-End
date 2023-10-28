// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { Box } from '@mui/material'

const AcordoTab = () => {
  return (
    <Grid container spacing={6} component='section'>
      <Grid item xs={12}>
        <Card component='article'>
          <CardHeader title='Acordo de Gestão Local (AGL)'></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}>
              O Acordo de Gestão Local (AGL) é um instrumento celebrado entre as Superintendências das Regiões e as
              Unidades de Saúde de seus territórios bem como entre o Diretor-Geral da URD e suas unidades internas
              (inciso IV do parágrafo 2º do Decreto nº 37515 de 26 de julho de 2016)
            </Typography>
            <Typography sx={{ mb: 2 }}>
              Esse acordo é composto por indicadores e metas que direcionam as equipes para as atividades que devem ser
              priorizadas visando a melhoria da assistência.
            </Typography>
            <Typography sx={{ mb: 2 }}>
              Atualmente, uma parcela considerável do acordo está intimamente relacionada aos indicadores do Programa
              Previne Brasil, que prevê o repasse Federal de verba para o financiamento da APS mediante o cumprimento de
              metas pré-estabelecidas.
            </Typography>

            <Typography sx={{ mb: 2 }}>
              Para o ano de 2023 o Acordo de Gestão Local engloba os seguintes indicadores e metas:
            </Typography>
            <Box>
              <ul>
                <li>Número de atendimentos por equipe da APS</li>
                <li>
                  Número mensal de atividades coletivas realizadas pelas equipes da APS, com ênfase na promoção da saúde
                  e prevenção de agravos
                </li>
                <li>Cobertura de acompanhamento das condicionalidades de saúde do Bolsa Família</li>
                <li>Percentual de pessoas cadastradas pelas equipe da APS</li>
                <li>
                  Proporção de gestantes com pelo menos 6 consultas de pré-natal realizadas, sendo a 1ª até a 12ª semana
                  de gestação
                </li>
                <li>Proporção de gestantes com solicitação/realização de exames para sífilis e HIV</li>
                <li>Proporção de gestantes com atendimento odontológico realizado</li>
                <li>
                  Cobertura de mulheres entre 25 e 64 anos com exame citopatológico de colo uterino solicitado/realizado
                  nos últimos 3 anos
                </li>
                <li>Proporção de pessoas com hipertensão com consulta e pressão arterial aferida no semestre</li>
                <li>Proporção de pessoas com diabetes com consulta e hemoglobina glicada solicitada no semestre</li>
                <li>
                  Proporção de crianças de 1 (um) ano de idade vacinadas na APS contra Difteria, Tétano, Coqueluche,
                  Hepatite B, infecções causadas por haemophilus influenzae tipo b e Poliomielite inativada
                </li>
              </ul>
            </Box>
            <Typography sx={{ mb: 2 }}>
              Durante a etapa de autoavaliação e elaboração do Plano de Ação para a Qualidade (PAQ) do QualisAPS são
              sinalizadas as relações dos padrões de qualidade com os indicadores do AGL. Fiquem atentos!
            </Typography>
            <Typography sx={{ mb: 2 }}>
              É muito importante que cada equipe conheça seu desempenho nos indicadores do AGL/Previne Brasil para que,
              então, possa realizar uma autoavaliação mais informada e direcionar o PAQ para melhorias que possam
              impactar positivamente no alcance das metas estabelecidas.
            </Typography>
            <Typography sx={{ mb: 2 }}>
              Lembrem-se: as GPMA são as gerências regionais resopnsáveis pelo monitoramento destes indicadores e podem
              auxiliá-los a ter acesso a estes dados.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default AcordoTab
