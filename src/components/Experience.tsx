const Experience = () => {
  return (
    <section className="p-6 flex flex-col items-center justify-center gap-6 w-full lg:gap-12">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-white text-3xl font-light lg:text-5xl">
          Experiences
        </h1>
        <p className="text-indigo-600 ">Um pouco sobre minha experiências...</p>
      </div>
      <div>
        <ol className="relative border-s border-indigo-600">
          <li className="mb-10 ms-4 border-white border-1 p-3 rounded-3xl max-w-[800px]">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">
              ago de 2024 - o momento
            </time>
            <h3 className="text-lg font-semibold text-white">Freelancer</h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400  ">
              Sou desenvolvedor front-end especializado em criar interfaces web
              modernas, responsivas e funcionais. Com experiência em HTML, CSS,
              JavaScript , React.js , TypeScript , Node.js.
            </p>
          </li>
          <li className="mb-10 ms-4 border-white border-1 p-3 rounded-3xl max-w-[800px]">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Out de 2025 - o momento
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Graduando em Sistemas de informação
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              O curso foca na criação de soluções seguras, bem documentadas e de
              qualidade, visando atender às necessidades das organizações e do
              mercado de trabalho. Durante a formação, são abordadas tecnologias
              e metodologias que permitem o desenvolvimento de sistemas
              eficazes, otimizando processos e promovendo a inovação no ambiente
              corporativo.
            </p>
          </li>
          <li className="mb-10 ms-4 border-white border-1 p-3 rounded-3xl max-w-[800px] ">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border "></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">
              April 2022
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Formei em Técnico em Dev. Sistemas
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Desenvolvi habilidades sólidas em Desenvolvimento de Sistemas, com
              ênfase em Elaboração de Projetos, Modelagem de Bancos de Dados e
              Administração de Servidores. Aprenda Algoritmos, Linguagens
              Orientadas a Objetos e Práticas de UX/UI Design para criar
              aplicativos Desktop, Web e Mobile.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Experience;
