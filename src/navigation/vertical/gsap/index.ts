// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const gsapNavigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Início',
      path: '/home',
      icon: 'tabler:smart-home'
    },
    {
      title: 'Second Page',
      path: '/second-page',
      icon: 'tabler:mail'
    },
    {
      title: 'Pagina Gsap',
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

export default gsapNavigation
