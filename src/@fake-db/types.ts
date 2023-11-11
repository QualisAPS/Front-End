export type DataGridRowType = {
  id: number
  age: string
  post: string
  city: string
  email: string
  salary: number
  status: number
  avatar: string
  full_name: string
  start_date: string
  experience: string
}

export type FaqQAndAType = {
  id: string
  answer: string
  question: string
}

export type FaqType = {
  [key: string]: {
    id: string
    icon: string
    title: string
    subtitle: string
    qandA: FaqQAndAType[]
  }
}
