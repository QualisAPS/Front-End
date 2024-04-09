'use client'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// Third-party Imports
import { useSession } from 'next-auth/react'

const Home = () => {
  const { data: session } = useSession()

  return (
    <Grid container spacing={6} component='section'>
      <Grid item xs={6} component='article'>
        <Card>
          <CardHeader title='Dados do(a) Usuário(a)'></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}>
              Nome: <strong> {session?.user?.nome || ''}</strong>
            </Typography>
            <Typography>
              Email: <strong> {session?.user?.email || ''}</strong>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Home
