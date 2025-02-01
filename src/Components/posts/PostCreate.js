import React from 'react';
import { Create, SimpleForm, TextInput, SelectInput, DateInput } from 'react-admin';

const PostCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput label="Title" source="title" />
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
    </Create>
);

export default PostCreate;
