import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    DateField,
    SelectInput,
    Edit,
    SimpleForm,
    TextInput,
    ReferenceInput,
    EditButton
} from 'react-admin';
import { Typography } from '@mui/material';

const statusChoices = [
    { id: 'Published', name: 'Published' },
    { id: 'Draft', name: 'Draft' },
];

const StatusField = ({ record }) => {
    if (!record) return null;
    
    return (
        <Typography 
            variant="body2" 
            sx={{
                fontWeight: 'bold',
                color: record.status === 'Published' ? 'green' : 'gray',
            }}
        >
            {record.status}
        </Typography>
    );
};

export const PostList = () => {
    return (
        <List perPage={5} sort={{ field: 'publishedAt', order: 'DESC' }}>
            <Datagrid rowClick="edit">
                <TextField source="title" label="Titre" />
                <ReferenceField source="userId" reference="users" label="Auteur">
                    <TextField source="name" />
                </ReferenceField>
                <DateField source="publishedAt" label="Date de publication" />
                
                {/* ✅ Correction ici : Utilisation d'un composant StatusField */}
                <StatusField source="status" label="Statut" />
                
                <EditButton />
            </Datagrid>
        </List>
    );
};

// Formulaire d'édition pour le statut
export const PostEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="title" label="Titre" />
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <SelectInput source="status" choices={statusChoices} label="Statut" />
        </SimpleForm>
    </Edit>
);

export default PostList;
