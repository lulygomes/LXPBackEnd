import { Router } from 'express';
import AuthenticateController from '../controllers/AuthenticateControllers';

const authenticateRoutes = Router();

const authenticateController = new AuthenticateController();

authenticateRoutes.post("/",authenticateController.create);

export default authenticateRoutes; 