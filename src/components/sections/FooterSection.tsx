import Image from 'next/image';

export default function FooterSection() {
  return (
    <footer className="bg-yellow-primary p-14 xl:px-100 text-black flex flex-col gap-5 items-center md:flex-row md:justify-between lg:-mt-30 scale-z-100">
      <p className="max-w-90 text-center md:text-start">
        <a
          href="mailto:suporte@mulheresbemresolvidas.com.br"
          className="underline"
        >
          suporte@mulheresbemresolvidas.com.br
        </a>{' '}
        | CNPJ: 23.705.563.0001/80. SHTN Bloco D RUV, SHCS CLS 216 - Asa Sul,
        Brasília - DF, 70294-530
      </p>

      <Image
        src="/svg/logo-pompa-black.svg"
        alt="Logo pompa"
        className="fill-black"
        width={178}
        height={55}
      />

      <p className="max-w-90 text-center md:text-start">
        Política de privacidade | Termos de uso © 2022 Todos os direitos
        reservados
      </p>
    </footer>
  );
}
