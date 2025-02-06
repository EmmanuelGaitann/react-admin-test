import React from 'react';
import { Admin, Resource } from 'react-admin';
import dataProvider from './config/dataProvider';

// Importer les composants pour Posts
import PostList from './Components/posts/PostList';
import PostEdit from './Components/posts/PostEdit';
import PostCreate from './Components/posts/PostCreate';
import PostShow from './Components/posts/PostShow';

// Importer les composants pour Users
import UserList from './Components/users/UserList';
import UserEdit from './Components/users/UserEdit';
import UserCreate from './Components/users/UserCreate';
import UserShow from './Components/users/UserShow';

// Importer le tableau de bord
import Dashboard from './dashboard/dashboard';

const App = () => (
  <Admin dataProvider={dataProvider} dashboard={Dashboard}>
    <Resource 
      name="posts" 
      list={PostList} 
      edit={PostEdit} 
      create={PostCreate} 
      show={PostShow} 
    />
    <Resource 
      name="users" 
      list={UserList} 
      edit={UserEdit} 
      create={UserCreate} 
      show={UserShow} 
    />
  </Admin>
);

export default App;
