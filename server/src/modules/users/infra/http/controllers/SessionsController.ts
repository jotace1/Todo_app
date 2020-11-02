import { Request, Response } from 'express';
import AuthenticateUserService from '../../../services/AuthenticateUserService';
import { classToClass } from 'class-transformer'

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
    const { email, password } = request.body;

    const authenticateUserService = new AuthenticateUserService();

    const {user, token} = await authenticateUserService.execute({
     email,
     password,
   });

   const updatedUser = classToClass(user);

    return response.json({token,updatedUser});

    } catch (err) {
      return response.status(err.statusCode).json({message: err.message});
    }
  }
}
