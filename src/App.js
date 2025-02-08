import React, { useState, useEffect } from 'react';  // Importation des hooks useState et useEffect
import { Admin, Resource } from 'react-admin';
import dataProvider from './config/dataProvider';
import authProvider from './config/authProvider';
import { lightTheme, darkTheme } from './config/theme';
import PostList from './Components/posts/PostList';
import PostEdit from './Components/posts/PostEdit';
import PostCreate from './Components/posts/PostCreate';
import PostShow from './Components/posts/PostShow';

import UserList from './Components/users/UserList';
import UserEdit from './Components/users/UserEdit';
import UserCreate from './Components/users/UserCreate';
import UserShow from './Components/users/UserShow';

import Dashboard from './dashboard/dashboard';
import { Button } from '@mui/material'; // Ajout de MUI pour un meilleur design

const App = () => {
  // Déclaration de l'état pour le mode sombre
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  // Effet pour sauvegarder le thème dans localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div>
      {/* ✅ Bouton bien positionné en haut à droite */}
      <Button 
        variant="contained" 
        onClick={() => setDarkMode(!darkMode)} 
        sx={{ position: 'absolute', top: 10, right: 10 }}
      >
        {darkMode ? '🌞 Mode Clair' : '🌙 Mode Sombre'}
      </Button>

      <Admin theme={darkMode ? darkTheme : lightTheme} dataProvider={dataProvider} authProvider={authProvider} dashboard={Dashboard}>
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
    </div>
  );
};

export default App;
