import { Request, Response } from 'express';
import Task from '../models/Task';
import { clearScreenDown } from 'readline';

// Controller functions
export const getTasks = async (req: Request, res: Response) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching tasks' });
    }
};

export const createTask = async (req: Request, res: Response) => {
    const { title, description } = req.body;
    try {
        const newTask = new Task({ title, description });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(400).json({ message: 'Error creating task' });
    }
};

export const getTaskById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const task = await Task.findById(id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching task by ID' });
    }
};

export const updateTaskById = async (req: Request, res: Response) => {
    const { id } = req.params;
    console.log(id)
    const { title, description, completed } = req.body;
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            id,
            { title, description, completed },
            { new: true }
        );
        if (!updatedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: 'Error updating task by ID' });
    }
};

export const deleteTaskById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deletedTask = await Task.findByIdAndDelete(id);
        if (!deletedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting task by ID' });
    }
};
