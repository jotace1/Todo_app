import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import ensureAuthenticated from './shared/middlewares/ensureAuthenticated';
import SessionsController from './modules/users/infra/http/controllers/SessionsController';
import UsersController from './modules/users/infra/http/controllers/UsersControllers';
import CardsController from './modules/cards/infra/http/controllers/CardsController';
import './shared/infra/typeorm';
import AppError from './shared/errors/AppError';

const usersController = new UsersController();
const sessionsController = new SessionsController();
const cardsController = new CardsController();

const app = express();

app.use(cors());


app.use(express.json());


app.post('/sessions', sessionsController.create);
app.post('/users', usersController.create);

app.post('/cards', ensureAuthenticated, cardsController.create);
app.get('/cards', ensureAuthenticated, cardsController.index);
app.put('/cards', ensureAuthenticated, cardsController.changePriority);
app.post('/cards/delete', ensureAuthenticated, cardsController.deleteCard);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error.',
  });
});

app.listen(3333, () => {
  console.log('Server started on port 3333!');
});
