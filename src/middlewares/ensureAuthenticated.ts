import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { userInfo } from 'os';
import authConfig from '../config/auth';
import AppError from '../errors/AppError';
import { UserTypes } from '../models/enums/UserTypes';

interface TokenPayload {
  user: {
    id: string,
    name: string,
    email: string,
    userType: UserTypes
  }
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) throw new AppError('JWT token is missing', 401);

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.jwt.secret);

    const { user } = decoded as TokenPayload;

    request.user = user
    request.token = token

    return next();
  } catch {
    throw new AppError('Invalid JWT token', 401);
  }
}