// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

const HomeGsap = () => {
  return (
    <Grid container spacing={6} component='section'>
      <Grid item xs={6} component='article'>
        <Card>
          <CardHeader title='Identificação da Equipe'></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}>
              Nome: <strong>Nome da Equipe</strong>
            </Typography>
            <Typography sx={{ mb: 2 }}>
              Nome Gsap: <strong>Nome Gsap</strong>
            </Typography>
            <Typography sx={{ mb: 2 }}>
              Nome UBS: <strong>admin@qualis.com</strong>
            </Typography>
            <Typography sx={{ mb: 2 }}>
              Região Administrativa: <strong>regiao</strong>
            </Typography>
            <Typography sx={{ mb: 2 }}>
              Região Saúde: <strong>regiao</strong>
            </Typography>
            <Typography sx={{ mb: 2 }}>
              Responsável: <strong>Pessoa</strong>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6} component='article'>
        <Card>
          <CardHeader title='Identificação do Usuário'></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}>
              Nome: <strong>Gabriel Teixeira</strong>
            </Typography>
            <Typography sx={{ mb: 2 }}>
              Email: <strong>admin@qualis.com</strong>
            </Typography>
            <Typography sx={{ mb: 2 }}>
              Matrícula: <strong>matricula</strong>
            </Typography>
            <Typography sx={{ mb: 2 }}>
              Perfil: <strong>perfil x</strong>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6} component='article'>
        <Card>
          <CardHeader title=' Certificação da Equipe'></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}>
              Autoavaliação: <strong>100%</strong>
            </Typography>
            <Typography sx={{ mb: 2 }}>
              PAQ: <strong>100%</strong>
            </Typography>
            <Typography sx={{ mb: 2 }}>
              Matrícula: <strong>matricula</strong>
            </Typography>
            <Typography sx={{ mb: 2 }}>
              AGL: <strong>100%</strong>
            </Typography>
            <Typography sx={{ mb: 2 }}>
              Avaliação: <strong>100%</strong>
            </Typography>
            <Typography sx={{ mb: 2 }}>
              Usuário: <strong>100%</strong>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6} component='article'>
        <Card>
          <CardHeader title='Tipologia da ubs x'></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}>
              Equipe: <strong>100%</strong>
            </Typography>
            <Typography sx={{ mb: 2 }}>
              Profissional: <strong>100%</strong>
            </Typography>
            <Typography sx={{ mb: 2 }}>
              Serviços: <strong>matricula</strong>
            </Typography>
            <Typography sx={{ mb: 2 }}>
              Estrutura: <strong>100%</strong>
            </Typography>
            <Typography sx={{ mb: 2 }}>
              Insumos: <strong>100%</strong>
            </Typography>
            <Typography sx={{ mb: 2 }}>
              Tic: <strong>100%</strong>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6} component='article'>
        <Card>
          <CardHeader title='Autoavaliação'></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}>
              1º Ciclo: <strong>data</strong>
            </Typography>
            <Typography sx={{ mb: 2 }}>
              2º Ciclo: <strong>data</strong>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6} component='article'>
        <Card>
          <CardHeader title='PAQ'></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}>
              1º Ciclo: <strong>data</strong>
            </Typography>
            <Typography sx={{ mb: 2 }}>
              2º Ciclo: <strong>data</strong>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default HomeGsap
