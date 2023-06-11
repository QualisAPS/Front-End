import Image from 'next/image';
import Link from 'next/link';

export default function FormLogin() {
  return (
    <section className="mt-7 bg-white p-6 shadow-lg">
      <article className="flex flex-col gap-8">
        <header className="flex justify-center items-center gap-3">
          <Image src="/static/banner.png" width={80} height={80} alt="" />
          <h1 className="text-2xl font-medium text-[#1D7966] md:text-4xl text-center">
            QualisAPS
          </h1>
        </header>
        <form className="max-w-xl">
          <fieldset className="mb-6 flex flex-col gap-4">
            <div>
              <label
                htmlFor="email"
                className=" mb-2 block text-sm font-medium text-[#141414]"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder:text-gray-400 block w-full rounded-lg border p-2.5 text-sm text-[#141414] focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Digite seu Email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className=" mb-2 block text-sm font-medium text-[#141414]"
              >
                Senha
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder:text-gray-400 block w-full rounded-lg border p-2.5 text-sm text-[#141414] focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Digite sua senha"
                required
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
        <footer className="flex justify-center">
          <p className="text-paragraph">
            Novo na plataforma? <Link href="/">Crie uma conta</Link>
          </p>
        </footer>
      </article>
    </section>
  );
}
