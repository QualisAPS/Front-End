const LoginPage = () => {
  return (
    <section>
      <article className="max-w-lg rounded overflow-hidden shadow-lg bg-slate-100">
        <header className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-3xl font-bold !leading-snug tracking-tight text-green md:text-2xl dark:text-white">
            QualisAPS - Login
          </h1>
          <p className="text-base font-bold leading-normal text-dark mt-1">
            Digite seu e-mail e senha para realizar o login
          </p>
        </header>
      </article>
    </section>
  );
};

export default LoginPage;
