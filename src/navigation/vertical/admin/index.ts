// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const adminNavigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Home',
      path: '/admin/home',
      icon: 'tabler:smart-home'
    },
    {
      title: 'Second Page',
      path: '/second-page',
      icon: 'tabler:mail'
    },
    {
      title: 'Pagina Admin',
      path: '/second-page',
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

export default adminNavigation
