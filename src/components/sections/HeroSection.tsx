import Image from 'next/image';

export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-start  
      bg-[url('/images/banner-espp-mobile.png')] 
      md:bg-[url('/images/banner-espp.png')] 
      bg-cover md:bg-center md:items-start h-screen pt-8
      px-7 md:px-10 md:py-32 lg:px-40 xl:px-105
    "
    >
      <div className="flex flex-col items-center justify-center">
        {/* Logo principal */}
        <Image
          src="/svg/logo-pompa.svg"
          alt="Logo Pompa"
          width={140}
          height={46}
          className="w-100 "
        />

        {/* Título principal (mobile) */}
        <h1 className="mt-4 px-5 text-center text-4xl md:hidden">
          Meu Curso de Ginástica Íntima gratuito dia 13/08
        </h1>

        {/* Texto descritivo (mobile) */}
        <p className="mt-4 text-center text-lg md:hidden">
          Entrando no ritmo das Olimpíadas, eu vou realizar uma superaula, onde
          eu vou ensinar todos os exercícios do meu curso de Ginástica Íntima.
          Dia 13 de agosto, às 20h, horário de Brasília. Cadastre-se
          gratuitamente e receba o link da live.
        </p>

        {/* Texto descritivo (desktop) */}
        <p className="hidden md:block mt-10 max-w-[500px] text-2xl font-nunito-sans">
          Entrando no ritmo das Olimpíadas, eu vou realizar uma superaula
          on-line e gratuita, onde eu vou ensinar todos os exercícios do meu
          curso de Ginástica Íntima para todas as mulheres que se preocupam em
          desenvolver a própria intimidade.
        </p>

        <p className="hidden md:block mt-6 max-w-[500px] text-2xl">
          <span className="text-yellow-primary">
            Ao vivo, dia 13 de agosto, às 20h, horário de Brasília.
          </span>
          Cadastre-se gratuitamente e receba o link da live.
        </p>

        {/* Campo de e-mail */}
        <form className="mt-9 w-full md:max-w-[500px]">
          <input
            type="email"
            placeholder="DIGITE AQUI SEU MELHOR E-MAIL"
            className="w-full h-19 p-2 px-10 border-2 border-yellow-primary bg-white outline-none text-blue-primary font-semibold placeholder:text-blue-primary"
          />
          <p className="hidden md:block text-xs mt-1">
            Não se preocupe, seus dados estão protegidos de acordo com a lei
            LGPD.
          </p>
        </form>
      </div>
    </section>
  );
}
