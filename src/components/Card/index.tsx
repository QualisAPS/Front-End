// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Type Import
// import { CardStatsHorizontalProps } from 'src/@core/components/card-statistics/types'

// ** Custom Component Import
// import Icon from 'src/@core/components/icon'
// import CustomAvatar from 'src/@core/components/mui/avatar'

// const CardStatsHorizontal = (props: CardStatsHorizontalProps)

const CardStatsHorizontal = (props: any) => {
  // ** Props
  //const { sx, icon, stats, title, avatarSize = 42, iconSize = '1.625rem', avatarColor = 'primary' } = props

  return (
    <Card>
      <CardContent sx={{ gap: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
          <Typography variant='h5' sx={{ mb: 0.5 }}>
            {props.title}
          </Typography>
          <Typography variant='body2'>{props.number}</Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default CardStatsHorizontal
