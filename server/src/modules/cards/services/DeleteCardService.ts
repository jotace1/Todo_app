import { getRepository } from 'typeorm';
import Cards from '../infra/typeorm/entities/Cards'

interface Request {
  title: string;
}

export default class DeleteCardService{
  public async execute({ title }: Request): Promise<any> {

    const cardsRepository = getRepository(Cards);

    const cards = cardsRepository.delete({title});

    return cards;
   }
}
