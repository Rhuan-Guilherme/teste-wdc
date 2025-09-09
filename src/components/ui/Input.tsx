import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';

interface InputProps {
  bgcolor: string;
  arrowColor: string;
}

export default function Input({ bgcolor, arrowColor }: InputProps) {
  return (
    <div
      className={`before:absolute before:w-20 lg:before:w-50 before:h-19 before:content[''] before:right-0 ${
        bgcolor === 'yellow-primary'
          ? 'before:bg-yellow-primary'
          : 'before:bg-blue-primary'
      } before:rounded-l-full`}
    >
      <input
        type="email"
        placeholder="DIGITE AQUI SEU MELHOR E-MAIL"
        className="w-full h-19 p-2 text-sm lg:text-base px-10 border-2 border-yellow-primary bg-white outline-none text-blue-primary font-semibold placeholder:text-blue-primary "
      />
      <div className="absolute top-4 right-2 lg:top-6.5 lg:right-20 ">
        <Image
          src={`/svg/arrow-left-${arrowColor}.svg`}
          alt="Logo Pompa"
          width={70}
          height={10}
          className="hidden lg:block"
        />
        <ArrowLeft className="text-white w-10 h-10 lg:hidden" />
      </div>
    </div>
  );
}
