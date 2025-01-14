import { Request, Response } from "express"
import { AuthServices } from "./auth.service"

const loginUser = async (req: Request, res: Response) => {
    try {
        const result = await AuthServices.loginUser(req.body);
        res.status(200).json({
            success: true,
            message: "Login successfully",
            data: result
        })
    } catch (err) {
        res.status(400).json({
            success: false,
            message: "Failed to login",
            data: err
        })
    }

}

export const AuthControllers = {
    loginUser
}