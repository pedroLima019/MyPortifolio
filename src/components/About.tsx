import { BsGithub, BsWhatsapp } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { MdEmail } from "react-icons/md";

const About = () => {
  return (
    <main className="flex flex-col items-center justify-center p-6 w-full gap-1 sm:gap-10 ">
      <div className="flex flex-col justify-center items-center gap-2">
        <h2 className="text-white text-3xl font-light lg:text-5xl 2xl:text-6xl">
          About
        </h2>
        <p className="text-indigo-600 2xl:text-2xl">Um pouco sobre mim...</p>
      </div>
      <section className="flex flex-col w-full items-center justify-center gap-10 p-2 sm:flex-row lg:gap-2 lg:p-5 2xl:gap-0 2xl:p-10">
        <div className="flex flex-col justify-center items-center gap-5 w-full lg:gap-5 xl:gap-10 ">
          <p className="text-justify text-white font-light text-sm lg:text-lg xl:text-2xl 2xl:text-3xl 2xl:leading-10">
            Formado em Técnico em Desenvolvimento de Sistemas e atualmente
            cursando Sistemas da Informação. Meu objetivo é me tornar um
            Desenvolvedor de Software Full Stack, com foco em criar soluções
            eficazes e inovadoras. Destaco-me pela proatividade, trabalho em
            equipe e capacidade de solucionar problemas, sempre buscando o
            aprimoramento de habilidades em tecnologias modernas e no
            desenvolvimento de software de qualidade.
          </p>
          <div className="flex justify-center text-white gap-5 2xl:gap-10 lg:gap-8">
            <MdEmail className="w-[25px] h-[25px] 2xl:w-[45px] 2xl:h-[45px] lg:w-[35px] lg:h-[35px]" />
            <BsWhatsapp className="w-[25px] h-[25px] 2xl:w-[45px] 2xl:h-[45px] lg:w-[35px] lg:h-[35px]" />
            <CiLinkedin className="w-[27px] h-[27px] 2xl:w-[47px] 2xl:h-[47px] lg:w-[35px] lg:h-[35px]" />
            <BsGithub className="w-[25px] h-[25px] 2xl:w-[45px] 2xl:h-[45px] lg:w-[35px] lg:h-[35px]" />
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <img
            src="/PedroFoto.png"
            alt="Foto Pedro Lima "
            className="bg-indigo-600 rounded-full w-[250px] lg:w-[400px] xl:w-[500px] 2xl:w-[550px]"
          />
        </div>
      </section>
    </main>
  );
};

export default About;
