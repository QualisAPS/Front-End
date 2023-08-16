const TeamCard = () => {
  return (
    <article className="panel h-full sm:col-span-2 xl:col-span-1">
      <h2 className="mb-5 text-xl font-semibold dark:text-white-light">
        Identificação da Equipe
      </h2>
      <ul className="flex flex-col gap-4">
        <li className="flex items-center gap-2">
          <p className="text-[18px] font-bold text-[#3b3f5c] dark:text-white-light">
            Nome:
          </p>
          <span className="text-white-dark text-[16px]">
            Nome Equipe
          </span>
        </li>
        <li className="flex items-center gap-2">
          <p className="text-[18px] font-bold text-[#3b3f5c] dark:text-white-light">
            GSAP:
          </p>
          <span className="text-white-dark text-[16px]">
            Nome GSAP
          </span>
        </li>
        <li className="flex items-center gap-2">
          <p className="text-[18px] font-bold text-[#3b3f5c] dark:text-white-light">
            UBS:
          </p>
          <span className="text-white-dark text-[16px]">
            Nome ubs
          </span>
        </li>
        <li className="flex items-center gap-2">
          <p className="text-[18px] font-bold text-[#3b3f5c] dark:text-white-light">
          Região Administrativa:
          </p>
          <span className="text-white-dark text-[16px]">
            regiao
          </span>
        </li>
        <li className="flex items-center gap-2">
          <p className="text-[18px] font-bold text-[#3b3f5c] dark:text-white-light">
          Região Saúde:
          </p>
          <span className="text-white-dark text-[16px]">
            regiao saude
          </span>
        </li>
        <li className="flex items-center gap-2">
          <p className="text-[18px] font-bold text-[#3b3f5c] dark:text-white-light">
          Responsável:
          </p>
          <span className="text-white-dark text-[16px]">
            Freddie Mercury
          </span>
        </li>
      </ul>
    </article>
  );
};

export default TeamCard;
