
import { HobbyInterface, HobbiesOfDB } from '../modelos/types_d_hobbies';
import { usersofDB } from '../modelos/types_d_users';
import { usersInterface } from '../modelos/types_d_users';

export const hobbiesServices = {
    
    getAll: async()=>{
        return await HobbiesOfDB.find();
    },

    createHobby: async (hobbyData: HobbyInterface): Promise<HobbyInterface> => {
        return await HobbiesOfDB.create(hobbyData);
    },

    getHobbyById: async (hobbyId: string): Promise<HobbyInterface | null> => {
        return await HobbiesOfDB.findById(hobbyId);
    },

    updateHobby: async (hobbyId: string, hobbyData: Partial<HobbyInterface>): Promise<HobbyInterface | null> => {
        return await HobbiesOfDB.findByIdAndUpdate(hobbyId, hobbyData, { new: true });
    },

    deleteHobby: async (hobbyId: string): Promise<HobbyInterface | null> => {
        await usersofDB.updateMany({ hobbies: hobbyId }, { $pull: { hobbies: hobbyId } });
        return await HobbiesOfDB.findByIdAndDelete(hobbyId);
    },

    assignHobbyToUser: async (userId: string, hobbyId: string): Promise<void> => {
        await usersofDB.findByIdAndUpdate(userId, { $addToSet: { hobbies: hobbyId } });
        await HobbiesOfDB.findByIdAndUpdate(hobbyId, { $addToSet: { usuariosRelacionados: userId } });
    },

    getUserHobbies: async (userId: string): Promise<HobbyInterface[] | null> => {
        const user = await usersofDB.findById(userId).populate('hobbies');
        return user ? (user.hobbies as HobbyInterface[]) : null;
    },

    getUsersByHobby: async (hobbyId: string): Promise<usersInterface[] | null> => {
        const hobby = await HobbiesOfDB.findById(hobbyId).populate('usuarios');
        return hobby ? (hobby.usuarios as usersInterface[]) : null;
    }
};
