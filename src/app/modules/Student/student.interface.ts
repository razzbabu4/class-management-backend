import { Types } from 'mongoose';

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
    gender: 'male' | 'female' | 'other';
    dateOfBirth?: string;
    contactNumber: string; // we want to access 0
    bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
    presentAddress: string;
    permanentAddress: string;
    isDeleted: boolean;
};


