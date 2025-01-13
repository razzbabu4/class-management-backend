import mongoose from "mongoose";
import { TStudent } from "../Student/student.interface"
import { Student } from "../Student/student.model"
import { TUser } from "./user.interface"
import { User } from "./user.model";
import { generateStudentId, generateTeacherId } from "./user.utils";
import { TTeacher } from "../Teacher/teacher.interface";
import { Teacher } from "../Teacher/teacher.model";

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
            throw new Error("Failed to create student")
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

const createTeacherIntoDB = async (payload: TTeacher) => {
    const userData: Partial<TUser> = {};

    // use default password
    userData.password = "teacher123";

    // set Teacher role
    userData.role = 'teacher';

    // set Teacher id
    userData.id = await generateTeacherId();

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

        const newTeacher = await Teacher.create([payload], { session });
        if (!newTeacher.length) {
            throw new Error("Failed to create teacher")
        }


        await session.commitTransaction();
        await session.endSession();
        return { newUser, newTeacher }
    } catch (error) {
        await session.abortTransaction();
        await session.endSession();
        throw error;
    }

}

export const UserServices = {
    createStudentIntoDB,
    createTeacherIntoDB,
}