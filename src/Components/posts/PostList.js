// src/Components/posts/PostList.js
import React from 'react';
import { List, Datagrid, TextField, ReferenceField, DateField, EditButton } from 'react-admin';

const PostList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <ReferenceField source="userId" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <DateField source="published_at" />
      <TextField source="status" sx={(record) => ({
        color: record.status === "Published" ? "green" : "gray",
        fontWeight: "bold"
      })}/>
      <EditButton />
    </Datagrid>
  </List>
);

export default PostList; // ✅ Assure-toi d'avoir cet export
