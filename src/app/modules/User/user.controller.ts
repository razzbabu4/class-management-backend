import { Request, Response } from "express";
import { UserServices } from "./user.service";

const createStudent = async (req: Request, res: Response) => {
    const result = await UserServices.createStudentIntoDB(req.body);
    res.status(200).json({
        success: true,
        message: "Student create successfully",
        data: result
    })
}

export const UserControllers = {
    createStudent
}