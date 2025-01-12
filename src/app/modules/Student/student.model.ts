import { model, Schema } from "mongoose";
import { TStudent, TUserName } from "./student.interface";

const userNameSchema = new Schema<TUserName>({
    firstName: {
        type: String,
        required: [true, 'First Name is required'],
        trim: true,
        maxlength: [20, 'First name can not be more than 20 character'],
    },
    middleName: { type: String, trim: true },
    lastName: {
        type: String,
        required: [true, 'Last Name is required'],
        trim: true,
    },
});

// create schema for student
const studentSchema = new Schema<TStudent>(
    {
        id: { type: String, unique: true, required: [true, 'Id is required'] },
        user: {
            type: Schema.Types.ObjectId,
            unique: true,
            required: [true, 'User id is required'],
            ref: 'User',
        },
        name: { type: userNameSchema, required: true },
        gender: {
            type: String,
            enum: {
                values: ['male', 'female', 'other'],
                message:
                    "The gender field can only be the one of the following: 'male', 'female', or 'other'",
            },
            required: true,
        },
        dateOfBirth: { type: String },
        email: {
            type: String,
            unique: true,
            required: [true, 'Email should be unique'],
        },
        contactNumber: { type: String, required: true },
        bloodGroup: {
            type: String,
            enum: {
                values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
                message:
                    "{VALUE} is not valid. The bloodGroup field can only be the one of the following: 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'",
            },
            required: true,
        },
        permanentAddress: { type: String, required: true },
        presentAddress: { type: String, required: true },
        isDeleted: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
        },
    },
);

export const Student = model<TStudent>("Student", studentSchema)