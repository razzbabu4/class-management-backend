import { model, Schema } from "mongoose";
import { TTeacher, TTeacherUserName } from "./teacher.interface";
import { BloodGroup, Gender } from "./teacher.constant";

const userNameSchema = new Schema<TTeacherUserName>({
    firstName: {
        type: String,
        required: [true, 'First Name is required'],
        trim: true,
    },
    middleName: { type: String, trim: true },
    lastName: {
        type: String,
        required: [true, 'Last Name is required'],
        trim: true,
    },
});

const teacherSchema = new Schema<TTeacher>(
    {
        id: { type: String, unique: true, required: [true, 'Id is required'] },
        user: {
            type: Schema.Types.ObjectId,
            unique: true,
            required: [true, 'User id is required'],
            ref: 'User',
        },
        name: { type: userNameSchema, required: true },
        designation: { type: String, required: true },
        gender: {
            type: String,
            enum: {
                values: Gender,
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
                values: BloodGroup,
                message:
                    "{VALUE} is not valid. The bloodGroup field can only be the one of the following: 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'",
            },
        },
        permanentAddress: { type: String, required: true },
        presentAddress: { type: String, required: true },
        academicDepartment: {
            type: String,
            required: [true, 'Department id is required'],
        },
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

export const Teacher = model<TTeacher>("Teacher", teacherSchema)