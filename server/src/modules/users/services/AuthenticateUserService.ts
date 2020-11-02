import { sign } from 'jsonwebtoken';

import AppError from '../../../shared/errors/AppError';

import authConfig from '../../../config/auth';

import User from '../infra/typeorm/entities/User';
import UsersRepository from '../infra/typeorm/repositories/UserRepository';

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}

class AuthenticateUserService {


  public async execute({ email, password }: Request): Promise<Response> {
    const usersRepository = new UsersRepository();

    const user = await usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Incorrect email/password combination', 401);
    }

    if (password !== user.password){
      throw new AppError('Incorrect email/password combination', 401);
    }

    // Usuário autenticado!!

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return {
      user,
      token,
    };
  }
}

export default AuthenticateUserService;
