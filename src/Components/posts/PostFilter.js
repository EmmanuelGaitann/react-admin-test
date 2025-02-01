import React from 'react';
import { Filter, TextInput, ReferenceInput, SelectInput } from 'react-admin';

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

export default PostFilter;
