import mongoose from "mongoose";
import { TStudent } from "../Student/student.interface"
import { Student } from "../Student/student.model"
import { TUser } from "./user.interface"
import { User } from "./user.model";
import { generateStudentId } from "./user.utils";

const createStudentIntoDB = async (payload: TStudent) => {
    const userData: Partial<TUser> = {};

    // use default password
    userData.password = "student123";

    // set student role
    userData.role = 'student';

    // set student id
    userData.id = await generateStudentId();

    // create session
    const session = await mongoose.startSession();

    try {
        session.startTransaction();

        const newUser = await User.create([userData], { session });

        if (!newUser.length) {
            throw new Error("Failed to create user")
        }

        payload.id = newUser[0].id;
        payload.user = newUser[0]._id;

        const newStudent = await Student.create([payload], { session });
        if (!newStudent.length) {
            throw new Error("Failed to create user")
        }


        await session.commitTransaction();
        await session.endSession();
        return { newUser, newStudent }
    } catch (error) {
        await session.abortTransaction();
        await session.endSession();
        throw error;
    }

}

export const UserServices = {
    createStudentIntoDB
}