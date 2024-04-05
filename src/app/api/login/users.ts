// ** Fake user data and data type

// ** Please remove below user data and data type in production and verify user with Real Database
export type UserTable = {
  id: number
  name: string
  email: string
  image: string
  password: string
}

// =============== Fake Data ============================

export const users: UserTable[] = [
  {
    id: 1,
    name: 'Admin Qualis',
    password: 'admin',
    email: 'admin@qualis.com',
    image: '/images/avatars/1.png'
  }
]