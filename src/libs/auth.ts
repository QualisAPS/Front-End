// pages/api/auth/[...nextauth].js
import type { NextAuthOptions } from 'next-auth'
import CredentialProvider from 'next-auth/providers/credentials'

declare module 'next-auth' {
  interface User {
    token: {
      token: string
      type: string
    }
    user: [
      {
        id: number
        nome: string
        email: string
        matricula: string | null
        cpf: string
      }
    ]
  }

  interface Session {
    accessToken?: string
    user: {
      id: number
      nome: string
      email: string
      matricula: string | null
      cpf: string
    }
  }
}

export const authOptions: NextAuthOptions = {
  // Configuração dos provedores
  providers: [
    CredentialProvider({
      // ** The name to display on the sign in form (e.g. 'Sign in with...')
      // ** For more details on Credentials Provider, visit https://next-auth.js.org/providers/credentials
      name: 'Credentials',
      type: 'credentials',

      /*
       * As we are using our own Sign-in page, we do not need to change
       * username or password attributes manually in following credentials object.
       */
      credentials: {},
      async authorize(credentials) {
        /*
         * You need to provide your own logic here that takes the credentials submitted and returns either
         * an object representing a user or value that is false/null if the credentials are invalid.
         * For e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
         * You can also use the `req` object to obtain additional parameters (i.e., the request IP address)
         */
        const { email, password } = credentials as { email: string; password: string }

        try {
          // ** Login API Call to match the user credentials and receive user data in response along with his role
          // `${process.env.API_URL}/login`
          const res = await fetch(`${process.env.API_URL_V1}/auth/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
          })

          const data = await res.json()

          if (res.status === 401) {
            throw new Error(JSON.stringify(data))
          }

          if (res.status === 200) {
            /*
             * Please unset all the sensitive information of the user either from API response or before returning
             * user data below. Below return statement will set the user object in the token and the same is set in
             * the session which will be accessible all over the app.
             */
            return data
          }

          return null
        } catch (e: any) {
          throw new Error(e.message)
        }
      }
    })
  ],

  pages: {
    signIn: '/login'
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.token.token
        token.user = user.user[0]
      }

      return token
    },

    async session({ session, token }) {
      if (token.accessToken) {
        session.accessToken = token.accessToken as string
      }

      if (token.user) {
        session.user = token.user as {
          id: number
          nome: string
          email: string
          matricula: string | null
          cpf: string
        }
      }

      return session
    }
  }
}
