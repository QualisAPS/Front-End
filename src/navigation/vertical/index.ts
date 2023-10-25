// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Home',
      path: '/home',
      icon: 'tabler:smart-home'
    },
    {
      title: 'Diagnóstico Inicial',
      icon: 'tabler:align-box-bottom-left',
      children: [
        {
          title: 'Estrutura',
          path: '/estrutura'
        },
        {
          title: 'Tipologia',
          path: '/tipologia'
        }
      ]
    },
    {
      title: 'Integra SES',
      path: '/integra',
      icon: 'tabler:mail'
    },
    {
      path: '/acl',
      action: 'read',
      subject: 'acl-page',
      title: 'Access Control',
      icon: 'tabler:shield'
    }
  ]
}

export default navigation
