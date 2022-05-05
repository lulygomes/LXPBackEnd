import express, { NextFunction, Request, response, Response } from 'express';
import cors from 'cors'
import { Router } from 'express';
import { Server } from 'socket.io'
import mongoose from 'mongoose';

import AppError from './errors/AppError';

import Routes from './routes';
import { createServer } from 'http';

mongoose.connect("mongodb://localhost/lxp-chat")

const app = express();
const route = Router()

app.use(cors())
app.use(express.json())

const server = createServer(app)

const io = new Server(server, {
  cors: {
    origin: '*'
  }
})

route.use('/', Routes);

app.use(route)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError)
    return res.status(err.statusCode).json({ error: err.message })

  return response.status(500).json({
    error: `Internal server error - ${err.message}`
  })
})



export { io, server }