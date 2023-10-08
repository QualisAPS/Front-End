/* eslint-disable @next/next/no-img-element */
import LoginPage from '@/screens/Auth/Login';

export default function Login() {
  return (
    <div>
      <div className="absolute inset-0">
        <img
          src="/assets/images/ubs.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <main className="relative flex min-h-screen items-center justify-center">
        <LoginPage />
      </main>
    </div>
  );
}
