import React from 'react';
import { List, Datagrid, TextField, DateField, ReferenceField, EditButton, ShowButton } from 'react-admin';

const PostList = (props) => (
    <List {...props} perPage={25} sort={{ field: 'publishedAt', order: 'DESC' }}>
        <Datagrid rowClick="show">
            <TextField source="title" />
            <ReferenceField label="Author" source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <DateField source="publishedAt" />
            <TextField source="status" />
            <ShowButton />
            <EditButton />
        </Datagrid>
    </List>
);

export default PostList;
