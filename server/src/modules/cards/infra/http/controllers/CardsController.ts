import CreateCardService from '../../../services/CreateCardService';
import ListCardsService from '../../../services/ListCardsService';
import { Request, Response } from 'express';
import ChangePriorityService from '../../../services/ChangePriorityService';
import DeleteCardService from '../../../services/DeleteCardService';

export default class CardsController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
    const { title, message, priority } = request.body;
    const { id } = request.user;

    const createCardService = new CreateCardService();

    const card = await createCardService.execute({
     title,
     priority,
     message,
     user_id: id,
   });


    return response.json(card);

    } catch (err) {
      return response.status(err.statusCode).json({message: err.message});
    }
  }

  public async index(request: Request, response: Response): Promise<Response> {
    try {
    const { id } = request.user;

    const listCardsService = new ListCardsService();

    const cards = await listCardsService.execute({
     user_id: id,
   });


    return response.json(cards);

    } catch (err) {
      return response.status(err.statusCode).json({message: err.message});
    }
  }

  public async changePriority(request: Request, response: Response): Promise<Response> {
    try {
    const { priority, title } = request.body;


    const changePriorityService = new ChangePriorityService();

    const cards = await changePriorityService.execute({
      priority,
      title,
   });


    return response.json(cards);

    } catch (err) {
      return response.status(err.statusCode).json({message: err.message});
    }
  }

  public async deleteCard(request: Request, response: Response): Promise<Response> {
    try {
    const { title } = request.body;


    const deleteCardService = new DeleteCardService();

    const cards = await deleteCardService.execute({
      title,
   });


    return response.json(cards);

    } catch (err) {
      return response.status(err.statusCode).json({message: err.message});
    }
  }

}
