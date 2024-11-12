
import { model, Schema, ObjectId } from 'mongoose';
import { usersInterface } from './types_d_users';

export interface HobbyInterface {
    nombre: string;
    tipo: string;
    nivel_popularidad: number;
    usuarios: ObjectId[] | usersInterface[]; 
}

export const hobbySchema = new Schema<HobbyInterface>({
    nombre: { type: String, required: true },
    tipo: { type: String, required: true },
    nivel_popularidad: { type: Number, required: true },
    usuarios: [{ type: Schema.Types.ObjectId, ref: 'user' }]
});

export const HobbiesOfDB = model<HobbyInterface>('hobby', hobbySchema);