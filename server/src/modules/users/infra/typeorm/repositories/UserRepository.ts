import { getRepository, Repository } from 'typeorm';

import ICreateUserDTO from '../../../dtos/ICreateUserDTO';

import User from '../entities/User';


class UsersRepository {


  public async findByEmail(email: string): Promise<User | undefined> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({
      where: { email },
    });

    return user;
  }

  public async create({ name, email, password }: ICreateUserDTO): Promise<User>{
    const usersRepository = getRepository(User);

    const user = usersRepository.create({
      name,
      email,
      password,
    });


    await usersRepository.save(user);


    return user;
  }
}

export default UsersRepository;
