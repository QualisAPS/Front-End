'use client';

import Header from '../Header';
import Link from 'next/link';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { IRegisterForm } from '@/interfaces/IRegisterForm';

import { MdKeyboardArrowLeft } from 'react-icons/md';

const RegisterForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<IRegisterForm>({
    defaultValues: {
      fullName: ''
    }
  });
  const onSubmit: SubmitHandler<IRegisterForm> = (data) => console.log(data);

  return (
    <section className="max-w-xl bg-white p-6 shadow-lg rounded-md flex flex-col gap-8">
      <Header />
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="mb-6 flex flex-col gap-5">
          <div>
            <label
              htmlFor="fullName"
              className=" mb-2 block text-sm font-medium text-[#141414]"
            >
              Nome Completo
            </label>
            <Controller
              name="fullName"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <input
                  type="text"
                  id="fullName"
                  className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder:text-gray-400 block w-full rounded-lg border p-2.5 text-sm text-[#141414] focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Digite seu nome"
                  required
                  {...field}
                  //aria-invalid={errors.email ? 'true' : 'false'}
                />
              )}
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
          >
            Enviar
          </button>
        </fieldset>
      </form>
      {/*
      <footer className="flex justify-center">
        <Link
          href="/"
          className="text-[#176152] font-medium flex items-center gap-1"
        >
          <MdKeyboardArrowLeft className="text-2xl" />
          Voltar para a tela de login
        </Link>
      </footer>
      */}
    </section>
  );
};

export default RegisterForm;
