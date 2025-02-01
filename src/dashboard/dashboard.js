import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const Dashboard = () => (
    <Card>
        <CardContent>
            <Typography variant="h5">Bienvenue sur l'Admin</Typography>
            <Typography variant="body2">Gérez vos posts et utilisateurs ici.</Typography>
        </CardContent>
    </Card>
);

export default Dashboard;
