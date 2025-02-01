import React from 'react';
import { Admin, Resource, List, Datagrid, TextField, DateField, ReferenceField, EditButton, SelectInput, Filter, TextInput, ReferenceInput, Edit, SimpleForm, TextInput as RAInput, DateInput } from 'react-admin'; 
import jsonServerProvider from 'ra-data-json-server';

// Définir le filtre pour les posts
const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search by title" source="q" alwaysOn />
        <ReferenceInput label="Author" source="userId" reference="users">
            <SelectInput optionText="name" />
        </ReferenceInput>
        <SelectInput
            label="Status"
            source="status"
            choices={[
                { id: 'published', name: 'Published' },
                { id: 'draft', name: 'Draft' },
            ]}
        />
    </Filter>
);

// Définir la vue List pour les posts
const PostList = (props) => (
    <List {...props} filters={<PostFilter />} perPage={25} pagination={true} sort={{ field: 'publishedAt', order: 'DESC' }}>
        <Datagrid rowClick="edit">
            <TextField source="title" />
            <ReferenceField label="Author" source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <DateField source="publishedAt" />
            <TextField source="status" />
            <EditButton />
        </Datagrid>
    </List>
);

// Définir la vue Edit pour les posts
const PostEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <RAInput label="Title" source="title" />
            <SelectInput
                label="Status"
                source="status"
                choices={[
                    { id: 'published', name: 'Published' },
                    { id: 'draft', name: 'Draft' },
                ]}
            />
            <DateInput label="Published At" source="publishedAt" />
        </SimpleForm>
    </Edit>
);

const dataProvider = jsonServerProvider('http://localhost:5000');

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" />
    <Resource name="posts" list={PostList} edit={PostEdit} />
  </Admin>
);

export default App;

