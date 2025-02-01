import React from 'react';
import { Create, SimpleForm, TextInput, EmailField } from 'react-admin';

const UserCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput label="Nom" source="name" />
            <EmailField label="Email" source="email" />
        </SimpleForm>
    </Create>
);

export default UserCreate;
