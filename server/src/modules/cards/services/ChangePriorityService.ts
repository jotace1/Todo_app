import { getRepository } from 'typeorm';
import AppError from '../../../shared/errors/AppError';
import Cards from '../infra/typeorm/entities/Cards'

interface Request {
  title: string;
  priority: string;
}

export default class ChangePriorityService{
  public async execute({ priority, title }: Request): Promise<any> {

    const cardsRepository = getRepository(Cards);

    const card = await cardsRepository.findOne({ title });

    if (!card) {
      throw new AppError('Card should exist to change priority');
    }



    await cardsRepository.update({id: card.id}, {priority});


   }
}
