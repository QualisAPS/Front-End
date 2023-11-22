import { AbilityBuilder, Ability } from '@casl/ability'

export type Subjects = string
export type Actions = 'manage' | 'create' | 'read' | 'update' | 'delete'

export type AppAbility = Ability<[Actions, Subjects]> | undefined

export const AppAbility = Ability as any
export type ACLObj = {
  action: Actions
  subject: string
}

/**
 * Please define your own Ability rules according to your app requirements.
 * We have just shown Admin and Client rules for demo purpose where
 * admin can manage everything and client can just visit ACL page
 */
const defineRulesFor = (role: string, subject: string) => {
  const { can, rules } = new AbilityBuilder(AppAbility)

  if (role === 'admin') {
    can('read', [
      'home',
      'integra',
      'tipologia',
      'estrutura',
      'painel-gsap',
      'painel-nasf',
      'painel-equipe',
      'painel-paq',
      'resultado-gsap',
      'resultado-equipe',
      'avaliacao-in-loco',
      'painel-in-loco',
      'relatorios-tematicos',
      'painel-esf',
      'esf',
      'mapa',
      'resultado-paq',
      'dado-equipe',
      'dado-gsap',
      'dado-nasf',
      'dado-autoavaliacao-equipe',
      'dado-autoavaliacao-gsap',
      'ajuda',
      'profissional',
      'email',
      'autorizacao',
      'profile',
      'profissionais'
    ])
  } else if (role === 'gsap') {
    can('read', [
      'home',
      'integra',
      'tipologia',
      'estrutura',
      'ajuda',
      '1-ciclo',
      'instrumento-aa-gsap',
      'graficos-aa-gsap',
      'padroes-paq',
      'editar-paq-gsap',
      'matriz-paq-gsap',
      'avaliacao-in-loco',
      'painel-in-loco',
      'relatorios-tematicos',
      'certificacao',
      'relatorio-tematico',
      '2-ciclo',
      '2-ciclo-instrumento-aa-gsap',
      '2-ciclo-graficos-aa-gsap',
      '2-ciclo-padroes-paq',
      '2-ciclo-editar-paq-gsap',
      '2-ciclo-matriz-paq-gsap',
      '2-ciclo-avaliacao-in-loco',
      '2-ciclo-certificacao',
      '2-ciclo-relatorio-tematico',
      'profile'
    ])
  } else if (role === 'equipe') {
    can('read', ['home', 'integra', 'tipologia', 'estrutura'])
  } else if (role === 'diraps') {
    can('read', ['home'])
  } else {
    can(['read', 'create', 'update', 'delete'], subject)
  }

  return rules
}

export const buildAbilityFor = (role: string, subject: string): AppAbility => {
  return new AppAbility(defineRulesFor(role, subject), {
    // https://casl.js.org/v5/en/guide/subject-type-detection
    // @ts-ignore
    detectSubjectType: object => object!.type
  })
}

export const defaultACLObj: ACLObj = {
  action: 'manage',
  subject: 'all'
}

export default defineRulesFor
