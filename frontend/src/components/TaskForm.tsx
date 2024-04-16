import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Grid } from '@material-ui/core';
import styled from 'styled-components';

const StyledForm = styled.form`
    margin-bottom: 20px;
`;

interface TaskFormProps {
    onTaskAdd: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onTaskAdd }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     onTaskAdd(title, description);
    //     setTitle('');
    //     setDescription('');
    // };

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        axios.post('http://localhost:4000/api/tasks', { title, description })
            .then(response => {
                // Handle success (e.g., show notification, update task list)
                console.log('Task created:', response.data);
                onTaskAdd();
            })
            .catch(error => {
                // Handle error (e.g., show error message)
                console.error('Error creating task:', error);
            });
    };


    return (
        <StyledForm onSubmit={handleFormSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField
                        variant="outlined"
                        label="Task Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        variant="outlined"
                        label="Task Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                    >
                        Add Task
                    </Button>
                </Grid>
            </Grid>
        </StyledForm>
    );
};

export default TaskForm;
