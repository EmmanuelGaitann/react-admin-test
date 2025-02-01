import React from 'react';
import { Edit, SimpleForm, TextInput, SelectInput, DateInput } from 'react-admin';

const PostEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput label="Title" source="title" />
            <SelectInput
                label="Status"
                source="UserId"
                choices={[
                    { id: 'published', name: 'Published' },
                    { id: 'draft', name: 'Draft' },
                ]}
            />
            <DateInput label="Published At" source="publishedAt" />
        </SimpleForm>
    </Edit>
);

export default PostEdit;
