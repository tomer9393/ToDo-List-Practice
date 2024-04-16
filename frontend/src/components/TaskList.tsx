import React from 'react';
import axios from 'axios';
import { List } from '@material-ui/core';
import TaskItem from './TaskItem';

export interface Task {
    id: string;
    title: string;
    description: string;
    completed: boolean;
}

interface TaskListProps {
    tasks: Task[];
    onTaskUpdate: () => void;
    onDelete: () => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onTaskUpdate, onDelete }) => {
    
    return (
        <List>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} onTaskUpdate={onTaskUpdate} onDelete={onDelete}/>
            ))}
        </List>
    );
};

export default TaskList;
