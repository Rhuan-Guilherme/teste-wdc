import Input from '../ui/Input';

export default function ContactSection() {
  return (
    <div className="md:hidden flex flex-col items-center justify-center gap-5 py-11 px-6 bg-[url('/images/banner-popolimpiadas.png')]">
      <p className="text-center text-lg text-blue-primary font-bold">
        Para aprender tudo isso e treinar comigo, ao vivo, todos os exercícios
        do meu curso de Ginástica Íntima, basta cadastrar o seu e-mail
        gratuitamente.
      </p>
      <div className="relative w-full">
        <Input bgcolor="bg-blue-primary" arrowColor="white" />
      </div>
    </div>
  );
}
