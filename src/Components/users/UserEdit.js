import React from 'react';
import { Edit, SimpleForm, TextInput, EmailField } from 'react-admin';

const UserEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput label="Nom" source="name" />
            <EmailField label="Email" source="email" />
        </SimpleForm>
    </Edit>
);

export default UserEdit;
