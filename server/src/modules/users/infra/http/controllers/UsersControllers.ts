import CreateUserService from '../../../services/CreateUserService';
import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
    const { name, email, password } = request.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
     name,
     email,
     password,
   });


    return response.json(classToClass(user));

    } catch (err) {
      return response.json({message: err.message});
    }
  }
}
