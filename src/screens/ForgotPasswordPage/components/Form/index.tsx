'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { IForgotPasswordForm } from '@/interfaces/IForgotPasswordForm';

import { MdKeyboardArrowLeft } from 'react-icons/md';

export default function ForgotPasswordForm() {
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<IForgotPasswordForm>({
    defaultValues: {
      email: ''
    }
  });
  const onSubmit: SubmitHandler<IForgotPasswordForm> = (data) =>
    console.log(data);

  return (
    <section className="mt-7 bg-white p-6 shadow-lg w-96">
      <article className="flex flex-col gap-8">
        <header className="flex justify-center items-center gap-6 flex-col">
          <div className="flex justify-center items-center gap-3">
            <Image src="/static/banner.png" width={80} height={80} alt="" />
            <h1 className="text-2xl font-medium text-[#1D7966] md:text-4xl text-center">
              QualisAPS
            </h1>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <p className="text-[#141414]">Esqueceu sua senha? 🔒</p>
            <p className="text-sm text-[#141414]">
              Digite seu e-mail e enviaremos instruções para redefinir sua senha
            </p>
          </div>
        </header>
        <form className="max-w-xl" onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="mb-6 flex flex-col gap-5">
            <div>
              <label
                htmlFor="email"
                className=" mb-2 block text-sm font-medium text-[#141414]"
              >
                E-mail
              </label>
              <Controller
                name="email"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder:text-gray-400 block w-full rounded-lg border p-2.5 text-sm text-[#141414] focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Digite seu Email"
                    required
                    {...field}
                    aria-invalid={errors.email ? 'true' : 'false'}
                  />
                )}
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
            >
              Enviar link de redefinição
            </button>
          </fieldset>
        </form>
        <footer className="flex justify-center">
          <Link
            href="/"
            className="text-[#176152] font-medium flex items-center gap-1"
          >
            <MdKeyboardArrowLeft className="text-2xl" />
            Voltar para a tela de login
          </Link>
        </footer>
      </article>
    </section>
  );
}
