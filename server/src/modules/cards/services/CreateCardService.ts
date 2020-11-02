import { getRepository } from 'typeorm';
import Cards from '../infra/typeorm/entities/Cards'

interface Request {
  title: string;
  message: string;
  priority: string;
  user_id: string;
}

export default class CreateCardService{
  public async execute({ user_id, title, message, priority }: Request): Promise<any> {
    const cardsRepository = getRepository(Cards);


    const card = cardsRepository.create({
      title,
      message,
      user_id,
    });

    await cardsRepository.save(card);

    return card;
   }
}
