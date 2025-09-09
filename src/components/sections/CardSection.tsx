import { cardsData } from '@/data/cardData';
import CardPompolimpiadas from '../ui/CardPompolimpiadas';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';

export default function CardsSection() {
  return (
    <Carousel className="pt-10  flex gap-5 justify-center ">
      <CarouselContent>
        {cardsData.map((card, index) => (
          <CarouselItem key={index} className="basis-1/1.5">
            <CardPompolimpiadas
              key={index}
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-blue-500 w-10 h-10" />
      <CarouselNext className="text-blue-500 w-10 h-10" />
    </Carousel>
  );
}
