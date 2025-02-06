import React from 'react';
import { List, Datagrid, TextField, EmailField, EditButton, ShowButton, BulkActionsToolbar, useNotify, useDataProvider, useRefresh, Button } from 'react-admin';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

const UserList = (props) => {
    const dataProvider = useDataProvider();
    const notify = useNotify();
    const refresh = useRefresh();
    
    const [openDialog, setOpenDialog] = React.useState(false);
    const [selectedIds, setSelectedIds] = React.useState([]); 
    const [isProcessing, setIsProcessing] = React.useState(false); 

    
    const disableUsers = async () => {
        setIsProcessing(true);
        try {
            await Promise.all(
                selectedIds.map(id =>
                    dataProvider.update('users', { id, data: { status: 'disabled' } })
                )
            );
            notify('Les utilisateurs ont été désactivés avec succès', 'success');
            refresh();
            setOpenDialog(false); 
        } catch (error) {
            notify('Erreur lors de la désactivation des utilisateurs', 'error');
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <>
            <List {...props} perPage={25} sort={{ field: 'name', order: 'ASC' }}>
                <Datagrid rowClick="show">
                    <TextField source="id" />
                    <TextField source="name" />
                    <EmailField source="email" />
                    <ShowButton />
                    <EditButton />
                </Datagrid>

                <BulkActionsToolbar
                    label="Actions"
                    selectedIds={selectedIds}
                    onSelectIds={setSelectedIds}
                >

                    <Button
                        color="primary"
                        onClick={() => setOpenDialog(true)} 
                        disabled={selectedIds.length === 0} 
                    >
                        Désactiver les utilisateurs
                    </Button>
                </BulkActionsToolbar>
            </List>

            {/* Boîte de dialogue de confirmation */}
            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                <DialogTitle>Confirmer la désactivation</DialogTitle>
                <DialogContent>
                    Êtes-vous sûr de vouloir désactiver ces utilisateurs ?
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenDialog(false)} color="secondary">
                        Annuler
                    </Button>
                    <Button
                        onClick={disableUsers}
                        color="primary"
                        disabled={isProcessing} // Désactive le bouton pendant le traitement
                    >
                        {isProcessing ? 'Désactivation en cours...' : 'Confirmer'}
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default UserList;
