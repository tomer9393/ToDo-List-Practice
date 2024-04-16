import React, { useState } from 'react';
import axios from 'axios';
import { ListItem, ListItemText, ListItemIcon, Checkbox, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { Task } from './TaskList';

interface TaskItemProps {
    task: Task;
    onTaskUpdate: () => void;
    onDelete: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onTaskUpdate, onDelete }) => {
    const [completed, setCompleted] = useState(task.completed);

    // const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     onTaskUpdate(task.id, event.target.checked);
    // };

    const handleCheckboxChange = () => {
        console.log(task)
        // const taskId = task['_id'];
        axios.put(`http://localhost:4000/api/tasks/${task.id}`, { completed: !completed })
            .then(() => {
                setCompleted(!completed);
                onTaskUpdate(); // Notify parent component to update task list
            })
            .catch(error => {
                console.error('Error updating task:', error);
            });
    };

    const handleDeleteClick = () => {
        axios.delete(`http://localhost:4000/api/tasks/${task.id}`)
            .then(() => {
                onDelete(); // Notify parent component to update task list
            })
            .catch(error => {
                console.error('Error deleting task:', error);
            });
    };
    
    return (
        <ListItem>
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={task.completed}
                    onChange={handleCheckboxChange}
                />
            </ListItemIcon>
            <ListItemText
                primary={task.title}
                secondary={task.description}
                style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            />
            <IconButton edge="end" aria-label="delete" onClick={handleDeleteClick}>
                <DeleteIcon />
            </IconButton>
        </ListItem>
    );
};

export default TaskItem;
