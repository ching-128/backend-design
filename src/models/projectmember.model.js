import mongoose, { Schema } from "mongoose";
import {AvailableUserRoles, UserRolesEnum} from "../utils/constants.js"

const projectMemberSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        project: {
            type: Schema.Types.ObjectId,
            ref: "Porject",
            required: true,
        },
        role: {
            type: String,
            enum: UserRolesEnum,
            default: UserRolesEnum.MEMBER,
        }
    },
    {
        timestamps: true,
    },
);

export const ProjectMember = mongoose.model(
    "ProjectMember",
    projectMemberSchema,
);
