import { model, ObjectId, Schema } from "mongoose";
import { HobbyInterface } from "./types_d_hobbies";

export interface usersInterface{
    name: string,
    mail: string,
    password: string,
    comment: string,
    tipo: string,
    habilitado: boolean,
    hobbies:ObjectId[] | HobbyInterface[];
}
export type UsersInterfacePublicInfo = Pick<usersInterface,  'name' | 'comment'>
export type UsersInterfacePrivateInfo = Pick<usersInterface, 'name' | 'password'>
export type newUserInfo = Omit<usersInterface,'id'>

export const usersSchema = new Schema<usersInterface>({
    name: String,
    mail: String,
    password: String,
    comment: String,
    tipo: String,
    habilitado: Boolean,
    hobbies:[{ type: Schema.Types.ObjectId, ref: 'hobby' }]
})

export const usersofDB = model<usersInterface>('user',usersSchema)

