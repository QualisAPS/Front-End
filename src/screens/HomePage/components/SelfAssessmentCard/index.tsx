const SelfAssessmentCard = () => {
  return (
    <article className="panel h-full sm:col-span-2 xl:col-span-1">
      <h2 className="mb-5 text-xl font-semibold dark:text-white-light">
        Autoavaliação
      </h2>
      <ul className="flex flex-col gap-4">
        <li className="flex items-center gap-2">
          <p className="text-[18px] font-bold text-[#3b3f5c] dark:text-white-light">
            1º Ciclo:
          </p>
          <span className="text-[16px] text-white-dark">data</span>
        </li>
        <li className="flex items-center gap-2">
          <p className="text-[18px] font-bold text-[#3b3f5c] dark:text-white-light">
            2º Ciclo:
          </p>
          <span className="text-[16px] text-white-dark">data</span>
        </li>
      </ul>
    </article>
  );
};

export default SelfAssessmentCard;
