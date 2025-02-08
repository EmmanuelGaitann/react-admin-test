import React from 'react';
import { Show, SimpleShowLayout, TextField } from 'react-admin';

const UserShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField label="Nom" source="name" />
        </SimpleShowLayout>
    </Show>
);

export default UserShow;
