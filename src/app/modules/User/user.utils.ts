import { User } from "./user.model";

const findLastStudentId = async () => {
    const lastStudent = await User.findOne(
        {
            role: 'student',
        },
        {
            id: 1,
            _id: 0,
        },
    )
        .sort({
            createdAt: -1,
        })
        .lean();

    return lastStudent?.id ? lastStudent.id : undefined;
};

export const generateStudentId = async () => {
    let currentId = (0).toString();
    const lastStudentId = await findLastStudentId();
    if (lastStudentId) {
        currentId = lastStudentId.substring(2);
    }
    let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');
    incrementId = `S-${incrementId}`;
    return incrementId;
};