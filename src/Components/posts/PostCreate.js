import React from 'react';
import { Create, SimpleForm, TextInput, DateInput, SelectInput, ReferenceInput } from 'react-admin';

const PostCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput label="Titre" source="title" />
            <DateInput label="Date de publication" source="publishedAt" />
            <SelectInput
                label="Statut"
                source="status"
                choices={[
                    { id: 'published', name: 'Publié' },
                    { id: 'draft', name: 'Brouillon' }
                ]}
            />
            <ReferenceInput label="Utilisateur" source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);

export default PostCreate;
