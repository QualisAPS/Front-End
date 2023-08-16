

const TypologyCard = () => {
  return (
    <article className="panel h-full sm:col-span-2 xl:col-span-1">
      <h2 className="mb-5 text-xl font-semibold dark:text-white-light">
      Tipologia da ubs x
      </h2>
      <ul className="flex flex-col gap-4">
        <li className="flex items-center gap-2">
          <p className="text-[18px] font-bold text-[#3b3f5c] dark:text-white-light">
          Equipe:
          </p>
          <span className="text-white-dark text-[16px]">
            100%
          </span>
        </li>
        <li className="flex items-center gap-2">
          <p className="text-[18px] font-bold text-[#3b3f5c] dark:text-white-light">
            Profissional:
          </p>
          <span className="text-white-dark text-[16px]">
            100%
          </span>
        </li>
        <li className="flex items-center gap-2">
          <p className="text-[18px] font-bold text-[#3b3f5c] dark:text-white-light">
          Serviços:
          </p>
          <span className="text-white-dark text-[16px]">
            100%
          </span>
        </li>
        <li className="flex items-center gap-2">
          <p className="text-[18px] font-bold text-[#3b3f5c] dark:text-white-light">
          Estrutura:
          </p>
          <span className="text-white-dark text-[16px]">
            100%
          </span>
        </li>
        <li className="flex items-center gap-2">
          <p className="text-[18px] font-bold text-[#3b3f5c] dark:text-white-light">
          Insumos:
          </p>
          <span className="text-white-dark text-[16px]">
            100%
          </span>
        </li>
        <li className="flex items-center gap-2">
          <p className="text-[18px] font-bold text-[#3b3f5c] dark:text-white-light">
          Tic:
          </p>
          <span className="text-white-dark text-[16px]">
            100%
          </span>
        </li>
      </ul>
    </article>
  );
};

export default TypologyCard;
