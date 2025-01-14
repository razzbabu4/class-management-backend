import config from "../../config";
import { User } from "../User/user.model";
import { TLoginUser } from "./auth.interface";
import jwt from "jsonwebtoken";

const loginUser = async (payload: TLoginUser) => {
    const { id } = payload;
    const user = await User.findOne({ id });

    // create token and send to the client
    const jwtPayload = {
        userId: user?.id,
        role: user?.role,
    }

    const secret = config.jwt_access_secret as string;
    const expiresIn = config.jwt_access_expireIn;

    const accessToken = jwt.sign(jwtPayload, secret, { expiresIn });

    return {
        accessToken
    }

}

export const AuthServices = {
    loginUser
}