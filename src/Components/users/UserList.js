import React from 'react';
import { List, Datagrid, TextField, EmailField, EditButton, ShowButton } from 'react-admin';

const UserList = (props) => (
    <List {...props} perPage={25} sort={{ field: 'name', order: 'ASC' }}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <ShowButton />
            <EditButton />
        </Datagrid>
    </List>
);

export default UserList;
