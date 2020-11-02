import { getRepository } from 'typeorm';
import Cards from '../infra/typeorm/entities/Cards'

interface Request {
  user_id: string;
}

export default class ListCardService{
  public async execute({ user_id,}: Request): Promise<any> {

    const cardsRepository = getRepository(Cards);

    const cards = cardsRepository.find();

    return cards;
   }
}
