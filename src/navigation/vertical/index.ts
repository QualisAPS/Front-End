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

    /* 1 ciclo */
    {
      sectionTitle: '1° Ciclo',
      action: 'read',
      subject: '1-ciclo'
    },
    {
      title: 'Autoavaliação',
      icon: 'tabler:align-box-bottom-left',
      children: [
        {
          title: 'Instrumento AA.GSAP',
          path: '/painel-gsap',
          action: 'read',
          subject: 'instrumento-aa-gsap'
        },
        {
          title: 'Gráficos AA GSAP',
          path: '/painel-nasf',
          action: 'read',
          subject: 'graficos-aa-gsap'
        }
      ]
    },
    {
      title: 'Paq Gsap',
      icon: 'tabler:align-box-bottom-left',
      children: [
        {
          title: 'Selecionar Padrões PAQ GSA',
          path: '/painel-gsap',
          action: 'read',
          subject: 'padroes-paq'
        },
        {
          title: 'Editar PAQ Gsap',
          path: '/painel-nasf',
          action: 'read',
          subject: 'editar-paq-gsap'
        },
        {
          title: 'Matriz PAQ GSAP',
          path: '/painel-nasf',
          action: 'read',
          subject: 'matriz-paq-gsap'
        }
      ]
    },
    {
      title: 'Avaliação in Loco',
      path: '/avaliacao-in-loco',
      icon: 'tabler:smart-home',
      action: 'read',
      subject: 'avaliacao-in-loco'
    },
    {
      title: 'Painel in Loco',
      path: '/painel-in-loco',
      icon: 'tabler:smart-home',
      action: 'read',
      subject: 'painel-in-loco'
    },
    {
      title: 'Certificação',
      path: '/mapa',
      icon: 'tabler:smart-home',
      action: 'read',
      subject: 'certificacao'
    },
    {
      title: 'Relatorios Temáticos',
      path: '/mapa',
      icon: 'tabler:smart-home',
      action: 'read',
      subject: 'relatorio-tematico'
    },

    /* 2 ciclo */
    {
      sectionTitle: '2° Ciclo',
      action: 'read',
      subject: '2-ciclo'
    },
    {
      title: 'Autoavaliação ',
      icon: 'tabler:align-box-bottom-left',
      children: [
        {
          title: 'Instrumento AA.GSAP',
          path: '/painel-gsap',
          action: 'read',
          subject: '2-ciclo-instrumento-aa-gsap'
        },
        {
          title: 'Gráficos AA GSAP',
          path: '/painel-nasf',
          action: 'read',
          subject: '2-ciclo-graficos-aa-gsap'
        }
      ]
    },
    {
      title: 'Paq Gsap ',
      icon: 'tabler:align-box-bottom-left',
      children: [
        {
          title: 'Selecionar Padrões PAQ GSA',
          path: '/painel-gsap',
          action: 'read',
          subject: '2-ciclo-padroes-paq'
        },
        {
          title: 'Editar PAQ Gsap',
          path: '/painel-nasf',
          action: 'read',
          subject: '2-ciclo-editar-paq-gsap'
        },
        {
          title: 'Matriz PAQ GSAP',
          path: '/painel-nasf',
          action: 'read',
          subject: '2-ciclo-matriz-paq-gsap'
        }
      ]
    },
    {
      title: 'Avaliação in Loco ',
      path: '/mapa',
      icon: 'tabler:smart-home',
      action: 'read',
      subject: '2-ciclo-avaliacao-in-loco'
    },
    {
      title: 'Certificação ',
      path: '/mapa',
      icon: 'tabler:smart-home',
      action: 'read',
      subject: '2-ciclo-certificacao'
    },
    {
      title: 'Relatorios Temáticos ',
      path: '/mapa',
      icon: 'tabler:smart-home',
      action: 'read',
      subject: '2-ciclo-relatorio-tematico'
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
          path: '/painel-paq',
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
          path: '/resultado-gsap',
          action: 'read',
          subject: 'resultado-gsap'
        },
        {
          title: 'Resultado Equipe',
          path: '/resultado-equipe',
          action: 'read',
          subject: 'resultado-equipe'
        }
      ]
    },
    {
      title: 'Mapa',
      path: '/mapa',
      icon: 'tabler:smart-home',
      action: 'read',
      subject: 'mapa'
    },
    {
      title: 'Resultados PAQ',
      path: '/resultado-paq',
      icon: 'tabler:smart-home',
      action: 'read',
      subject: 'resultado-paq'
    },
    {
      sectionTitle: 'Exportar Dados',
      action: 'read',
      subject: 'dado-equipe'
    },
    {
      title: 'Exportar PAQ',
      icon: 'ph:download',
      children: [
        {
          title: 'Exportar PAQ Equipe',
          path: '/estrutura',
          action: 'read',
          subject: 'dado-equipe'
        },
        {
          title: 'Exportar PAQ GSAP',
          path: '/tipologia',
          action: 'read',
          subject: 'dado-gsap'
        },
        {
          title: 'Exportar PAQ NASF',
          path: '/tipologia',
          action: 'read',
          subject: 'dado-nasf'
        }
      ]
    },
    {
      title: 'Exportar Autoavaliação',
      icon: 'ph:download',
      children: [
        {
          title: 'Exportar Base Equipe',
          path: '/estrutura',
          action: 'read',
          subject: 'dado-autoavaliacao-equipe'
        },
        {
          title: 'Exportar Base GSAP',
          path: '/tipologia',
          action: 'read',
          subject: 'dado-autoavaliacao-gsap'
        }
      ]
    },
    {
      title: 'Exportar In Loco',
      icon: 'ph:download',
      children: [
        {
          title: 'Exportar Base Equipe',
          path: '/estrutura',
          action: 'read',
          subject: 'dado-autoavaliacao-gsap'
        },
        {
          title: 'Exportar Base GSAP',
          path: '/tipologia'
        }
      ]
    },
    {
      sectionTitle: 'Controles de Acesso',
      action: 'read',
      subject: 'profissional'
    },
    {
      path: '/acl',
      title: 'Profissionais',
      icon: 'tabler:shield',
      action: 'read',
      subject: 'profissional'
    },
    {
      path: '/acl',
      title: 'Autorização',
      icon: 'tabler:shield',
      action: 'read',
      subject: 'autorizacao'
    },
    {
      path: '/acl',
      title: 'Email',
      icon: 'tabler:shield',
      action: 'read',
      subject: 'email'
    },
    {
      sectionTitle: 'Ajuda',
      action: 'read',
      subject: 'ajuda'
    },
    {
      path: '/acl',
      title: 'Documentação',
      icon: 'tabler:shield',
      action: 'read',
      subject: 'ajuda'
    }

    /* SIDEBAR GSAP */
  ]
}

export default navigation
