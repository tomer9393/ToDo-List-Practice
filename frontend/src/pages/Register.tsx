import React from 'react';
import { Container, Typography, TextField, Button } from '@material-ui/core';
import styled from 'styled-components';

const StyledForm = styled.form`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const RegisterPage: React.FC = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle registration logic
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Register
            </Typography>
            <StyledForm onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    label="Username"
                    fullWidth
                />
                <TextField
                    variant="outlined"
                    label="Email"
                    type="email"
                    fullWidth
                />
                <TextField
                    variant="outlined"
                    label="Password"
                    type="password"
                    fullWidth
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                >
                    Register
                </Button>
            </StyledForm>
        </Container>
    );
};

export default RegisterPage;
