import Image from 'next/image';

export default function Separator() {
  return (
    <div className={`flex items-center justify-center space-x-2 mt-5 px-18`}>
      <div className="flex-1 h-px bg-white"></div>
      <Image
        src="/svg/arrows.svg"
        alt="Seta"
        width={10}
        height={10}
        className="mx-2"
      />
      <div className="flex-1 h-px bg-white"></div>
    </div>
  );
}
