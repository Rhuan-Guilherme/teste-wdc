import CardsSection from './CardSection';
import Image from 'next/image';

export default function MidSection() {
  return (
    <section
      className="relative md:h-screen border-y-5 border-yellow-primary 
        px-7 pb-20 md:px-10 lg:px-40 xl:px-50 2xl:px-105 
        bg-[url('/images/bg-mid-pillar.png')]"
    >
      <div className="relative">
        {/* Banner informativo */}
        <article className="space-y-3 bg-blue-900 border-3 border-yellow-primary p-9 relative -top-10 rounded-3xl bg-[url('/images/banner-popolimpiadas-blue.png')]">
          <h2 className="text-center text-3xl lg:text-4xl text-yellow-primary">
            O que você vai aprender nas Pompolimpíadas
          </h2>
          <p className="text-center text-base lg:text-2xl">
            Participe da superaula gratuita de Ginástica Íntima no dia 13 de
            agosto, às 20h, e tenha acesso a todo o conteúdo do curso. Aprenda a
            dominar a arte do aperta e solta e conquiste o ouro em saúde íntima,
            autoestima e prazer. Inscreva-se nas Pompolimpíadas 2024 para
            alcançar o topo em todas as suas relações.{' '}
            <span className="text-yellow-primary font-semibold">
              Veja abaixo o que você vai aprender:
            </span>
          </p>
        </article>

        {/* Seção de cards */}
        <CardsSection />
      </div>

      {/* Setas decorativas mobile */}
      <div
        className="mt-20 lg:hidden flex items-center justify-center"
        aria-hidden="true"
      >
        <Image
          src="/svg/arrows-left-rigth.svg"
          alt=""
          width={150}
          height={10}
        />
      </div>
    </section>
  );
}
