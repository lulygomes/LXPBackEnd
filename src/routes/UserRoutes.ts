import { Router } from "express";
import UserController from "../controllers/UserController";
import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const userRoutes = Router();

const userController = new UserController();

userRoutes.post('/',userController.create);

userRoutes.use(ensureAuthenticated);
userRoutes.get('/',userController.list);
userRoutes.put('/:id',userController.update);
userRoutes.delete('/:id',userController.delete);

export default userRoutes;