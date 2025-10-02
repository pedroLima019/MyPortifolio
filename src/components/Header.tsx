const Header = () => {
  return (
    <header className="w-full flex flex-col p-5 items-center justify-center gap-6 sm:flex-row sm:p-8 lg:p-10">
      <div className="flex justify-center items-center w-full ">
        <img
          className="bg-indigo-600 rounded-full"
          src="/PedroFoto.png"
          alt="Foto de Pedro Lima"
        />
      </div>
      <div
        className="w-full flex justify-center items-center text-center
       text-white text-2xl sm:text-3xl sm:leading-10  lg:text-5xl lg:leading-14 xl:text-6xl xl:leading-16"
      >
        <h1>
          Olá, eu sou o <strong className="text-indigo-600">Pedro Lima</strong>.
          Desenvolvedor de Software.
        </h1>
      </div>
    </header>
  );
};

export default Header;
