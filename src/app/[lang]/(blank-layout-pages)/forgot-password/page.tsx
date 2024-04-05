// Next Imports
import type { Metadata } from 'next'

// Component Imports
import ForgotPassword from '@/views/ForgotPassword'

export const metadata: Metadata = {
  title: 'Forgot Password',
  description: 'Forgotten Password to your account'
}

const ForgotPasswordPage = () => {
  return (
    <div className='flex flex-col justify-center items-center min-bs-[100dvh] p-6'>
      <ForgotPassword />
    </div>
  )
}

export default ForgotPasswordPage
