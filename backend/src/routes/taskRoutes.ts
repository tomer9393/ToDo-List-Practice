import express from 'express';
import { getTasks, createTask, getTaskById, updateTaskById, deleteTaskById } from '../controllers/taskController';

const router = express.Router();

router.get('/tasks', getTasks);
router.post('/tasks', createTask);
router.get('/tasks/:id', getTaskById);
router.put('/tasks/:id', updateTaskById);
router.delete('/tasks/:id', deleteTaskById);

export default router;
