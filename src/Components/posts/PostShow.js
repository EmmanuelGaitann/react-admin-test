import React from 'react';
import { Show, SimpleShowLayout, TextField, DateField, ReferenceField } from 'react-admin';

const PostShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="title" />
            <ReferenceField label="Author" source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <DateField source="publishedAt" />
            <TextField source="status" />
        </SimpleShowLayout>
    </Show>
);

export default PostShow;
