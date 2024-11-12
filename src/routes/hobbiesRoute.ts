// routes/hobbyRoutes.ts
import express from 'express';
import { createHobby, getHobbyById, updateHobby, deleteHobby, getUsersByHobby, findAllHobbies } from '../controllers/hobbiesControllers';

const router = express.Router();

router.route('/')
    .get(findAllHobbies)
    .post(createHobby); 

router.route('/:hobbyId')
    .get(getHobbyById)     
    .put(updateHobby)     
    .delete(deleteHobby);   

router.route('/:hobbyId/users')
    .get(getUsersByHobby); 

export default router;
