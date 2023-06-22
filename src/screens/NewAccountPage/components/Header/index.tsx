import Image from 'next/image';

const Header = () => {
  return (
    <header>
      <div className="flex justify-center items-center gap-3">
        <Image src="/static/banner.png" width={80} height={80} alt="" />
        <h1 className="text-2xl font-medium text-[#1D7966] md:text-4xl text-center">
          QualisAPS - Cadastro
        </h1>
      </div>
    </header>
  );
};

export default Header;
