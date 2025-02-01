import React from 'react';
import { List, Datagrid, TextField, EmailField, EditButton, ShowButton, BulkActionsToolbar, useNotify, useDataProvider, useRefresh, Button } from 'react-admin';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

const UserList = (props) => {
    const dataProvider = useDataProvider();
    const notify = useNotify();
    const refresh = useRefresh();
    
    const [openDialog, setOpenDialog] = React.useState(false); // État pour afficher la boîte de dialogue de confirmation
    const [selectedIds, setSelectedIds] = React.useState([]); // État pour les utilisateurs sélectionnés
    const [isProcessing, setIsProcessing] = React.useState(false); // Indicateur pour l'état de traitement

    // Fonction de désactivation des utilisateurs
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
            setOpenDialog(false); // Ferme la boîte de dialogue
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

                {/* Toolbar d'actions en bloc */}
                <BulkActionsToolbar
                    label="Actions"
                    selectedIds={selectedIds}
                    onSelectIds={setSelectedIds}
                >
                    {/* Bouton personnalisé pour désactiver */}
                    <Button
                        color="primary"
                        onClick={() => setOpenDialog(true)}  // Affiche la boîte de dialogue de confirmation
                        disabled={selectedIds.length === 0} // Désactive si aucun utilisateur n'est sélectionné
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
