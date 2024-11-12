import { Request, Response } from 'express';
import { hobbiesServices } from '../services/hobbiesServices';
import { HobbyInterface } from '../modelos/types_d_hobbies';

export async function findAllHobbies(_req:Request,res:Response):Promise<Response> {
    try{
        const hobbies:HobbyInterface[]|null = await hobbiesServices.getAll()
        return res.json(hobbies);
    } catch(e){
        return res.status(500).json({ e: 'Failed to find all experiencies' });
    }
}

export async function createHobby(req: Request, res: Response): Promise<Response> {
    try {
        const hobby = await hobbiesServices.createHobby(req.body);
        return res.status(201).json(hobby);
    } catch (e) {
        return res.status(500).json({ error: 'Failed to create hobby' });
    }
}

export async function getHobbyById(req: Request, res: Response): Promise<Response> {
    try {
        const hobby = await hobbiesServices.getHobbyById(req.params.hobbyId);
        if (hobby) {
            return res.status(200).json(hobby);
        } else {
            return res.status(404).json({ message: 'Hobby not found' });
        }
    } catch (e) {
        return res.status(500).json({ error: 'Failed to get hobby' });
    }
}

export async function updateHobby(req: Request, res: Response): Promise<Response> {
    try {
        const hobby = await hobbiesServices.updateHobby(req.params.hobbyId, req.body);
        if (hobby) {
            return res.status(200).json(hobby);
        } else {
            return res.status(404).json({ message: 'Hobby not found' });
        }
    } catch (e) {
        return res.status(500).json({ error: 'Failed to update hobby' });
    }
}

export async function deleteHobby(req: Request, res: Response): Promise<Response> {
    try {
        const hobby = await hobbiesServices.deleteHobby(req.params.hobbyId);
        if (hobby) {
            return res.status(200).json({ message: 'Hobby deleted successfully' });
        } else {
            return res.status(404).json({ message: 'Hobby not found' });
        }
    } catch (e) {
        return res.status(500).json({ error: 'Failed to delete hobby' });
    }
}

export async function getUsersByHobby(req: Request, res: Response): Promise<Response> {
    try {
        const users = await hobbiesServices.getUsersByHobby(req.params.hobbyId);
        return res.status(200).json(users);
    } catch (e) {
        return res.status(500).json({ error: 'Failed to get users by hobby' });
    }
}
