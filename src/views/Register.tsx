'use client'

// React Imports
import { useState } from 'react'

// Next Imports
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'

import { toast } from 'react-toastify'

// Type Imports
import type { SubmitHandler } from 'react-hook-form'
import { Controller, useForm } from 'react-hook-form'

import { valibotResolver } from '@hookform/resolvers/valibot'

import type { Input } from 'valibot'
import { email, maxLength, minLength, object, string } from 'valibot'

import type { Locale } from '@configs/i18n'

// Component Imports
import Logo from '@components/layout/shared/Logo'
import CustomTextField from '@core/components/mui/TextField'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

// Styled Component Imports
import AuthIllustrationWrapper from '@views/pages/auth/AuthIllustrationWrapper'

type ErrorType = {
  message: string[]
}

type FormData = Input<typeof schema>

const schema = object({
  email: string([minLength(1, 'Este campo é obrigatório'), email('Email inválido')]),
  password: string([
    minLength(1, 'Este campo é obrigatório'),
    minLength(3, 'A senha deve ter pelo menos 5 caracteres')
  ]),
  nome: string([minLength(1, 'Este campo é obrigatório'), minLength(3, 'O nome deve ter pelo menos 3 caracteres')]),
  matricula: string([minLength(1, 'Este campo é obrigatório'), maxLength(8, 'matricula com no maximo 8 caracteres')]),
  cpf: string([minLength(1, 'Este campo é obrigatório'), maxLength(11, 'cpf com no maximo 11 caracteres')])
})

const Register = () => {
  // States
  const [isPasswordShown, setIsPasswordShown] = useState(false)

  // Hooks
  const { lang: locale } = useParams()

  const handleClickShowPassword = () => setIsPasswordShown(show => !show)
  const [errorState, setErrorState] = useState<ErrorType | null>(null)

  const router = useRouter()

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: valibotResolver(schema),
    defaultValues: {
      email: '',
      password: '',
      nome: '',
      matricula: '',
      cpf: ''
    }
  })

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    console.log(process.env)
    const email = data.email
    const password = data.password
    const nome = data.nome
    const matricula = data.matricula
    const cpf = data.cpf

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_V1}/usuarios`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password, nome, matricula, cpf })
      })

      const data = await res.json()

      if (res.status === 401) {
        toast.error('Erro ao cadastrar')
        throw new Error(JSON.stringify(data))
      }

      if (res.status === 200) {
        toast.success('Cadastro Realizado')

        router.push('/login')
      }

      return null
    } catch (e: any) {
      throw new Error(e.message)
    }
  }

  return (
    <AuthIllustrationWrapper>
      <Card className='flex flex-col sm:is-[450px]'>
        <CardContent className='sm:!p-12'>
          <div className='flex justify-center mbe-6'>
            <Logo />
          </div>
          <div className='flex flex-col gap-1 mbe-6'>
            <Typography variant='h4'>Faça seu cadastro</Typography>
          </div>
          <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6'>
            <Controller
              name='nome'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <CustomTextField
                  {...field}
                  autoFocus
                  fullWidth
                  label='Nome'
                  placeholder='Digite seu nome'
                  onChange={e => {
                    field.onChange(e.target.value)
                    errorState !== null && setErrorState(null)
                  }}
                  {...((errors.nome || errorState !== null) && {
                    error: true,
                    helperText: errors?.nome?.message || errorState?.message[0]
                  })}
                />
              )}
            />
            <Controller
              name='email'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <CustomTextField
                  {...field}
                  autoFocus
                  fullWidth
                  type='email'
                  label='Email'
                  placeholder='Digite seu email'
                  onChange={e => {
                    field.onChange(e.target.value)
                    errorState !== null && setErrorState(null)
                  }}
                  {...((errors.email || errorState !== null) && {
                    error: true,
                    helperText: errors?.email?.message || errorState?.message[0]
                  })}
                />
              )}
            />
            <Controller
              name='cpf'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <CustomTextField
                  {...field}
                  autoFocus
                  fullWidth
                  label='CPF'
                  placeholder='Digite seu CPF'
                  onChange={e => {
                    field.onChange(e.target.value)
                    errorState !== null && setErrorState(null)
                  }}
                  {...((errors.cpf || errorState !== null) && {
                    error: true,
                    helperText: errors?.cpf?.message || errorState?.message[0]
                  })}
                />
              )}
            />
            <Controller
              name='matricula'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <CustomTextField
                  {...field}
                  autoFocus
                  fullWidth
                  label='Matricula'
                  placeholder='Digite sua Matricula'
                  onChange={e => {
                    field.onChange(e.target.value)
                    errorState !== null && setErrorState(null)
                  }}
                  {...((errors.matricula || errorState !== null) && {
                    error: true,
                    helperText: errors?.matricula?.message || errorState?.message[0]
                  })}
                />
              )}
            />
            <Controller
              name='password'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <CustomTextField
                  {...field}
                  fullWidth
                  label='Senha'
                  placeholder='············'
                  id='login-password'
                  type={isPasswordShown ? 'text' : 'password'}
                  onChange={e => {
                    field.onChange(e.target.value)
                    errorState !== null && setErrorState(null)
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton edge='end' onClick={handleClickShowPassword} onMouseDown={e => e.preventDefault()}>
                          <i className={isPasswordShown ? 'tabler-eye' : 'tabler-eye-off'} />
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                  {...(errors.password && { error: true, helperText: errors.password.message })}
                />
              )}
            />
            <FormControlLabel
              control={<Checkbox />}
              label={
                <>
                  <span>Eu concordo </span>
                  <Link className='text-primary' href='/' onClick={e => e.preventDefault()}>
                    política de privacidade e termos
                  </Link>
                </>
              }
            />
            <Button fullWidth variant='contained' type='submit'>
              Inscrever-se
            </Button>
            <div className='flex justify-center items-center flex-wrap gap-2'>
              <Typography>Já tem uma conta?</Typography>
              <Typography
                component={Link}
                href={getLocalizedUrl('pages/auth/login-v1', locale as Locale)}
                color='primary'
              >
                Em vez disso, faça login
              </Typography>
            </div>
          </form>
        </CardContent>
      </Card>
    </AuthIllustrationWrapper>
  )
}

export default Register
