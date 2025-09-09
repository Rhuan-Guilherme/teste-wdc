import Image from 'next/image';

export default function FinalSection() {
  return (
    <section className="bg-blue-primary pt-16 px-7 md:px-10 lg:px-40 xl:px-50 2xl:px-105 flex flex-col lg:flex-row gap-5">
      {/* Conteúdo textual */}
      <div>
        <h2 className="text-4xl text-yellow-secondary">Quem vai te ensinar</h2>

        <article className="space-y-5 mt-11 relative max-w-220">
          {/* Separador decorativo */}
          <Image
            alt=""
            src="/svg/separetor-arrow.svg"
            width={10}
            height={755}
            className="absolute -left-10 top-30"
            aria-hidden="true"
          />

          <p className="text-xl">
            Cátia Damasceno é fisioterapeuta especializada em uroginecologia, e
            iniciou seu trabalho ensinando exercícios de Ginástica Íntima para o
            fortalecimento da musculatura de mulheres com problema de flacidez
            íntima após o parto.
          </p>
          <p className="text-xl">
            Desde então, se especializou em Ginástica Íntima feminina e, ao
            longo de mais de 15 anos de carreira, seus cursos e palestras já
            ajudaram milhares de mulheres pelo Brasil. Ao todo, são mais de 150
            mil alunas participando ativamente das suas metodologias.
          </p>
          <p className="text-xl">
            Atualmente, Cátia é bastante reconhecida por esse trabalho e se
            tornou a precursora da Ginástica Íntima no Brasil, tornando-se a
            maior referência nacional no assunto. Já participou de vários
            programas influentes na mídia, como o “Programa do Jô”, “Tonight
            Show” na CNN, “Se Joga”, também da Rede Globo, e vários outros.
          </p>
        </article>
      </div>

      {/* Imagem decorativa / ilustração */}
      <div className="relative lg:-top-30 flex justify-center lg:justify-end">
        <Image
          src="/images/mulher.png"
          alt="Retrato de Cátia Damasceno"
          width={700}
          height={700}
        />
      </div>
    </section>
  );
}
