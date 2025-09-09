import { benefitsCards, problemsCards } from '@/data/cardInfos';
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';

export default function MidCenterSection() {
  return (
    <section
      className="relative bg-cover bg-center border-b-5 border-yellow-primary
       py-20 xl:px-50 2xl:px-105
       bg-[url('/images/bg-medalhas.png')]"
    >
      {/* Imagem decorativa */}
      <div
        className="hidden xl:block absolute -top-0 -left-80"
        aria-hidden="true"
      >
        <Image
          alt="Medalhas"
          src="/images/medalhas.png"
          width={630}
          height={755}
        />
      </div>

      {/* Separador mobile */}
      <div className="md:hidden w-10 h-1 bg-yellow-primary rounded-full mx-auto mb-5" />

      {/* Título principal */}
      <h2 className="text-center font-extrabold text-2xl">
        Existem dois tipos de ppka, aquelas que dominam a modalidade do aperta e
        solta e as que não praticam nenhum exercício, ou seja, as sedentárias.
      </h2>

      {/* Separador desktop */}
      <div className="hidden md:block w-10 h-1 bg-yellow-primary rounded-full mx-auto mt-5" />

      <div className="mt-16">
        {/* Sessão PPKA Sedentária */}
        <h3 className="bg-gray-200 w-56 text-center border-1 border-yellow-secondary text-blue-primary rounded-3xl font-bold px-6 py-3 m-auto">
          PPKA SEDENTÁRIA
        </h3>
        <ul className="mt-10 grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-x-12 gap-y-6 px-5">
          {problemsCards.map((text, i) => (
            <li
              key={i}
              className="bg-white text-blue-primary border-2 border-blue-primary py-4 px-10 rounded-lg relative flex items-center justify-center text-center"
            >
              <span className="absolute bottom-0 left-0 w-11 h-full bg-cover bg-no-repeat rounded-l-xl bg-[url('/images/ondas.png')]" />
              <p className="text-lg font-semibold">{text}</p>
            </li>
          ))}
        </ul>

        {/* Sessão PPKA Atleta */}
        <h3 className="mt-16 w-56 text-center border-1 border-yellow-secondary text-white rounded-3xl font-bold px-6 py-3 m-auto">
          PPKA ATLETA
        </h3>
        <ul className="mt-10 grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-x-12 gap-y-6 px-5">
          {benefitsCards.map((text, i) => (
            <li
              key={i}
              className="bg-yellow-primary text-blue-primary py-4 px-10 rounded-lg relative flex items-center justify-center text-center"
            >
              <span className="absolute bottom-0 left-0 w-11 h-full bg-cover bg-no-repeat rounded-l-xl bg-[url('/images/ondas.png')]" />
              <p className="text-lg font-semibold">{text}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Setinha indicando scroll */}
      <div
        className="w-10 h-10 mt-10 bg-blue-primary text-white border-2 border-yellow-primary rounded-full flex items-center justify-center m-auto"
        aria-hidden="true"
      >
        <ArrowDown />
      </div>
    </section>
  );
}
