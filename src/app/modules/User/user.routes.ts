import { Router } from "express";
import { UserControllers } from "./user.controller";

const router = Router();

router.post('/create-student', UserControllers.createStudent);
router.post('/create-teacher', UserControllers.createTeacher);

export const UserRoute = router;