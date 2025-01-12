import { TStudent } from "../Student/student.interface"
import { Student } from "../Student/student.model"
import { TUser } from "./user.interface"
import { User } from "./user.model";

const createStudentIntoDB = async (payload: TStudent) => {
    const userData: Partial<TUser> = {};

    // if password is not given, use default password
    userData.password = "student123";

    // set student role
    userData.role = 'student';

    // set student id
    userData.id = "S-0001"

    // const newUser = await User.create([userData]);
    const newUser = await User.create(userData);


    payload.id = newUser.id;
    payload.user = newUser._id;

    // payload.id = newUser[0].id;
    // payload.user = newUser[0]._id;

    const newStudent = await Student.create(payload);
    return { newUser, newStudent }
}

export const UserServices = {
    createStudentIntoDB
}