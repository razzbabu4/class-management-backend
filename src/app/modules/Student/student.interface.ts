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

export type TUserName = {
    firstName: string;
    middleName?: string;
    lastName: string;
};

export type TStudent = {
    id: string;
    user: Types.ObjectId;
    name: TUserName;
    email: string;
    gender: TGender;
    dateOfBirth?: string;
    contactNumber: string; // we want to access 0
    bloodGroup: TBloodGroup;
    presentAddress: string;
    permanentAddress: string;
    isDeleted: boolean;
};


