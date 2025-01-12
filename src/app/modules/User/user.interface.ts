export type TUser = {
    id: string;
    password: string;
    role: "admin" | "teacher" | "student";
    status: 'in-progress' | 'blocked';
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
}