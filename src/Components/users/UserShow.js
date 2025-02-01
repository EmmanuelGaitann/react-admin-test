import React from 'react';
import { Show, SimpleShowLayout, TextField, EmailField } from 'react-admin';

const UserShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField label="Nom" source="name" />
            <EmailField label="Email" source="email" />
        </SimpleShowLayout>
    </Show>
);

export default UserShow;
