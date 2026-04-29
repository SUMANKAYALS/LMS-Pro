import mongoose, { Schema, Document, Model } from "mongoose";
import bcrypt from "bcrypt";
import { ROLES, Role } from "../constants/roles.js";

/**
 * IUser Interface
 */
export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    role: Role;

    comparePassword(password: string): Promise<boolean>;
}

/**
 * Schema
 */
const userSchema = new Schema<IUser>(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            match: [/^\S+@\S+\.\S+$/, "Invalid email"],
        },

        password: {
            type: String,
            required: true,
            minlength: 6,
        },

        role: {
            type: String,
            enum: Object.values(ROLES),
            default: ROLES.BORROWER,
        },
    },
    {
        timestamps: true,
    }
);

/**
 * Hash password before saving
 */
userSchema.pre("save", async function (this: IUser) {
    if (!this.isModified("password")) return;

    this.password = await bcrypt.hash(this.password, 10);
});

/**
 * Compare password
 */
userSchema.methods.comparePassword = async function (password: string) {
    return bcrypt.compare(password, this.password);
};

/**
 * Model
 */
export const User: Model<IUser> = mongoose.model<IUser>(
    "User",
    userSchema
);