import { Request, Response } from "express";
import { UserServices } from "./user.service";

const createStudent = async (req: Request, res: Response) => {
    try {
        const result = await UserServices.createStudentIntoDB(req.body);
        res.status(200).json({
            success: true,
            message: "Student created successfully",
            data: result
        })
    } catch (err) {
        res.status(400).json({
            success: false,
            message: "Failed to create student",
            data: err
        })
    }
}

const createTeacher = async (req: Request, res: Response) => {
    try {
        const result = await UserServices.createTeacherIntoDB(req.body);
        res.status(200).json({
            success: true,
            message: "Teacher created successfully",
            data: result
        })
    } catch (err) {
        res.status(400).json({
            success: false,
            message: "Failed to create teacher",
            data: err
        })
    }
}

export const UserControllers = {
    createStudent, createTeacher
}