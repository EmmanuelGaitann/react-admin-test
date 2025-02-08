import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

const UserEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput label="Nom" source="name" />
        </SimpleForm>
    </Edit>
);

export default UserEdit;
