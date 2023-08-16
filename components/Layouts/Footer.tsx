const Footer = () => {
  return (
    <footer className="mt-auto p-6 text-center dark:text-white-dark ltr:sm:text-left rtl:sm:text-right">
      © {new Date().getFullYear()}. Desenvolvido pela equipe do QualisAPS.
    </footer>
  );
};

export default Footer;
