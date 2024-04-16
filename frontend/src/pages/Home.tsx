import React, { useEffect, useState  } from 'react';
import axios from 'axios';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import { Container, Typography } from '@material-ui/core';

const initialTasks = [
    { id: '1', title: 'Task 1', description: 'Description for Task 1', completed: false },
    { id: '2', title: 'Task 2', description: 'Description for Task 2', completed: true },
    // Add more tasks as needed
];

const backendUrl = 'http://localhost:4000';

const HomePage: React.FC = () => {
    const [tasks, setTasks] = useState(initialTasks);

    const getTasks = () =>{
        axios.get(`${backendUrl}/api/tasks`)
            .then(response => {
                console.log(response.data)
                const updatedTasks = [...response.data].map( item => {
                    const updateItem ={
                        id: item._id,
                        title: item.title,
                        description: item.description,
                        completed: item.completed,
                    }
                    return updateItem;
                })
                console.log(updatedTasks)
                setTasks(updatedTasks);
            })
            .catch(error => {
                console.error('Error fetching tasks:', error);
            });
    }

    const handleTaskAdd = () => {
        getTasks();
    };

    const handleTaskUpdate = () => {
        getTasks();
    };

    const handleTaskDelete = () => {
        getTasks();
    };

    useEffect(() => {
        getTasks();
    }, []); // Empty dependency array to run once on component mount


    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Todo List
            </Typography>
            <TaskForm onTaskAdd={handleTaskAdd} />
            <TaskList tasks={tasks} onTaskUpdate={handleTaskUpdate} onDelete={handleTaskDelete}/>
        </Container>
    );
};

export default HomePage;
