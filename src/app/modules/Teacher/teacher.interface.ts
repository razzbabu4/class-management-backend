import { Types } from 'mongoose';

export type TGender = 'male' | 'female' | 'other';
export type TBloodGroup =
    | 'A+'
    | 'A-'
    | 'B+'
    | 'B-'
    | 'AB+'
    | 'AB-'
    | 'O+'
    | 'O-';

export type TTeacherUserName = {
    firstName: string;
    middleName?: string;
    lastName: string;
};

export type TTeacher = {
    id: string;
    user: Types.ObjectId;
    designation: string;
    name: TTeacherUserName;
    gender: TGender;
    dateOfBirth?: string;
    email: string;
    contactNumber: string;
    bloodGroup: TBloodGroup;
    presentAddress: string;
    permanentAddress: string;
    academicDepartment: string;
    isDeleted: boolean;
};
