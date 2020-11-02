import { response, Response } from 'express';
import AppError from '../../../shared/errors/AppError';
import UsersRepository from '../infra/typeorm/repositories/UserRepository'
import { classToClass } from 'class-transformer';

interface Request {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: Request): Promise<any> {
    const usersRepository = new UsersRepository();


    const checkUserExists = await usersRepository.findByEmail(email);

    if (checkUserExists) {
      throw new AppError('Email address already used.');
    }

    const user = await usersRepository.create({
      name,
      email,
      password,
    });


    return user;
   }
}

export default CreateUserService;
