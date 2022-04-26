import { Router } from 'express';
import AuthenticateController from '../controllers/AuthenticateControllers';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const authenticateRoutes = Router();

const authenticateController = new AuthenticateController();

authenticateRoutes.post("/",authenticateController.create);

authenticateRoutes.use(ensureAuthenticated)
authenticateRoutes.get("/",authenticateController.refresh);

export default authenticateRoutes; 