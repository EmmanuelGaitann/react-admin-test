import React from 'react';
import { ReferenceInput } from 'react-admin';
import { Admin, Resource, List, Datagrid, TextField, DateField, ReferenceField, EditButton, SelectInput, Filter } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

// Définir le filtre pour les posts
const PostFilter = (props) => (
    <Filter {...props}>
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
    <List {...props} filters={<PostFilter />} perPage={25}>
        <Datagrid>
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

const dataProvider = jsonServerProvider('http://localhost:5000');

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" />
    <Resource name="posts" list={PostList} />
  </Admin>
);

export default App;
