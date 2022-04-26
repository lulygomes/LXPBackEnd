import express, { NextFunction, Request, response, Response } from 'express';
import cors from 'cors'
import { Router } from 'express';
import AppError from './errors/AppError';

import Routes from './routes';

const app = express();

const route = Router()

app.use(cors())
app.use(express.json())

route.use('/', Routes);

app.use(route)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if(err instanceof AppError)
    return res.status(err.statusCode).json({error: err.message})

  return response.status(500).json({
    error: `Internal server error - ${err.message}`
  })
})

app.listen(3333, () => 'server running on port 3333')

