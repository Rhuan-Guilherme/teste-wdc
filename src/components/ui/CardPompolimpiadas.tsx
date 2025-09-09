import Image from 'next/image';
import Separator from './Separetor';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function CardPompolimpiadas({
  title,
  description,
  imageUrl,
}: CardProps) {
  return (
    <div className="w-70 rounded-2xl overflow-hidden border-4  border-yellow-primary shadow-lg bg-blue-primary">
      {/* Imagem principal */}
      <div
        className="w-full h-55 bg-cover bg-center border-2 border-yellow-primary rounded-xl"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      ></div>

      {/* Linha com seta */}
      <Separator />

      {/* Conteúdo */}
      <div className="bg-blue-primary text-center p-4 relative">
        <h3 className="text-yellow-primary text-xl font-semibold mb-2">
          {title}
        </h3>
        <p className="text-white text-sm mb-10">{description}</p>

        {/* Onda */}
        <div
          className="absolute bottom-0 left-0 w-full h-10 bg-cover bg-no-repeat rounded-xl"
          style={{ backgroundImage: "url('/images/ondas.png')" }}
        ></div>
      </div>
    </div>
  );
}
