const UserCard = () => {
  return (
    <article className="panel h-full sm:col-span-2 xl:col-span-1">
      <h2 className="mb-5 text-xl font-semibold dark:text-white-light">
        Identificação do Usuário
      </h2>
      <ul className="flex flex-col gap-4">
        <li className="flex items-center gap-2">
          <p className="text-[18px] font-bold text-[#3b3f5c] dark:text-white-light">
            Nome:
          </p>
          <span className="text-white-dark text-[16px]">
            Nome usuario
          </span>
        </li>
        <li className="flex items-center gap-2">
          <p className="text-[18px] font-bold text-[#3b3f5c] dark:text-white-light">
            E-mail:
          </p>
          <span className="text-white-dark text-[16px]">
            email
          </span>
        </li>
        <li className="flex items-center gap-2">
          <p className="text-[18px] font-bold text-[#3b3f5c] dark:text-white-light">
          Matrícula:
          </p>
          <span className="text-white-dark text-[16px]">
            matricula
          </span>
        </li>
        <li className="flex items-center gap-2">
          <p className="text-[18px] font-bold text-[#3b3f5c] dark:text-white-light">
         Perfil:
          </p>
          <span className="text-white-dark text-[16px]">
            perfil x
          </span>
        </li>
      </ul>
    </article>
  );
};

export default UserCard;
