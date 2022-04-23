import { Router } from "express";
import CourseController from "../controllers/CourseController";

const courseRoutes = Router();

const courseController = new CourseController();

courseRoutes.post('/', courseController.crate);
courseRoutes.put('/:id',courseController.update);
courseRoutes.get('/', courseController.list);
courseRoutes.delete('/:id',courseController.delete);

export default courseRoutes;