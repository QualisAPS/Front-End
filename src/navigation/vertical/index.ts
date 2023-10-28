// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    /* links comuns */
    {
      title: 'Home',
      path: '/home',
      icon: 'tabler:smart-home',
      action: 'read',
      subject: 'home'
    },

    {
      title: 'Diagnóstico Inicial',
      icon: 'tabler:align-box-bottom-left',
      children: [
        {
          title: 'Estrutura',
          path: '/estrutura',
          action: 'read',
          subject: 'estrutura'
        },
        {
          title: 'Tipologia',
          path: '/tipologia',
          action: 'read',
          subject: 'tipologia'
        }
      ]
    },
    {
      title: 'Integra SES',
      path: '/integra',
      icon: 'tabler:mail',
      action: 'read',
      subject: 'integra'
    },
    {
      title: 'Painel Autoavaliação',
      icon: 'tabler:align-box-bottom-left',
      children: [
        {
          title: 'Painel Gsap',
          path: '/painel-gsap',
          action: 'read',
          subject: 'painel-gsap'
        },
        {
          title: 'Painel Nasf',
          path: '/painel-nasf',
          action: 'read',
          subject: 'painel-nasf'
        },
        {
          title: 'Painel Equipe',
          path: '/painel-equipe',
          action: 'read',
          subject: 'painel-equipe'
        },
        {
          title: 'Painel PAQ',
          path: '/painel paq',
          action: 'read',
          subject: 'painel-paq'
        }
      ]
    },
    {
      title: 'Gráficos Autoavaliação',
      icon: 'tabler:align-box-bottom-left',
      children: [
        {
          title: 'Resultados Gsap',
          path: '/estrutura'
        },
        {
          title: 'Resultado Equipe',
          path: '/tipologia'
        }
      ]
    },
    {
      title: 'Mapa',
      path: '/teste',
      icon: 'tabler:smart-home'
    },
    {
      title: 'Resultados PAQ',
      path: '/teste',
      icon: 'tabler:smart-home'
    },
    {
      sectionTitle: 'Exportar Dados'
    },
    {
      title: 'Exportar PAQ',
      icon: 'ph:download',
      children: [
        {
          title: 'Exportar PAQ Equipe',
          path: '/estrutura'
        },
        {
          title: 'Exportar PAQ GSAP',
          path: '/tipologia'
        },
        {
          title: 'Exportar PAQ NASF',
          path: '/tipologia'
        }
      ]
    },
    {
      title: 'Exportar Autoavaliação',
      icon: 'ph:download',
      children: [
        {
          title: 'Exportar Base Equipe',
          path: '/estrutura'
        },
        {
          title: 'Exportar Base GSAP',
          path: '/tipologia'
        }
      ]
    },
    {
      title: 'Exportar In Loco',
      icon: 'ph:download',
      children: [
        {
          title: 'Exportar Base Equipe',
          path: '/estrutura'
        },
        {
          title: 'Exportar Base GSAP',
          path: '/tipologia'
        }
      ]
    },
    {
      sectionTitle: 'Controles de Acesso'
    },
    {
      path: '/acl',
      title: 'Profissionais',
      icon: 'tabler:shield'
    },
    {
      path: '/acl',
      title: 'Autorização',
      icon: 'tabler:shield'
    },
    {
      path: '/acl',
      title: 'Email',
      icon: 'tabler:shield'
    },
    {
      sectionTitle: 'Ajuda'
    },
    {
      path: '/acl',
      title: 'Documentação',
      icon: 'tabler:shield'
    }

    /* SIDEBAR GSAP */
  ]
}

export default navigation
